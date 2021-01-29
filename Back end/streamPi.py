import subprocess
import os
import flask
import socket
from flask import request, jsonify, render_template


app = flask.Flask(__name__)
curr_process = None

@app.route('/')
def index():
	return render_template('index.html', ip=socket.gethostbyname(socket.gethostname()))

@app.route('/video', methods=['POST'])
def stream_video():

	# Not the best practice
	global curr_process

	# Get the data
	data = request.get_json()
	url = data.get('url')
	pause = data.get('pause', None)
	resume = data.get('resume', None)

	# Check if the player wants to pause
	if pause:
		os.system('dbus-send --type=method_call --dest=org.mpris.MediaPlayer2.vlc /org/mpris/MediaPlayer2   org.mpris.MediaPlayer2.Player.PlayPause')

	# Check if player wants to resume
	elif resume:
		os.system('dbus-send --type=method_call --dest=org.mpris.MediaPlayer2.vlc /org/mpris/MediaPlayer2   org.mpris.MediaPlayer2.Player.Play')

	# Check the url
	else:

		if len(url.strip()) == 0:
			curr_process.terminate()
			curr_process = None
			return jsonify(data)

		# Close the current subprocess if there is one running
		if curr_process:
			curr_process.terminate()

		# Reopen Vlc in full screen
		curr_process = subprocess.Popen(["cvlc", "--fullscreen", url])

	# Send the json data
	return jsonify(data)


def test():
	app.run('localhost', 8080)

if __name__ == "__main__":
	app.run("0.0.0.0", 8080)