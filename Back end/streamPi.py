import subprocess
import os
import flask
from flask import request, jsonify


app = flask.Flask(__name__)
curr_process = None


@app.route('/')
def index():
	return "<h1>It is working</h1>"

@app.route('/video', methods=['POST'])
def stream_video():
	global curr_process
	data = request.get_json()
	print(data)
	url = data.get('url')
	if curr_process:
		curr_process.terminate()
	curr_process = subprocess.Popen(["cvlc", "--fullscreen", url])
	return jsonify(data)


if __name__ == "__main__":
	app.run("0.0.0.0", 8080)