# Streaming project

This project has 2 parts
Front end: An application to send links to the rasppi to play the video from your mobile phone
Back end: On the rasp pi to play the video based on the link that is sent

## Requirements for rasp pi:
1. Requires VLC to be downloaded and updated.
1. Flask to be installed
    - Can be done by running `python -m pip install flask` on the raspberry pi terminal


## How to use
1. Download the .apk file to your android device [here](https://github.com/Jh123x/rasp-pi-streaming/releases)
1. Clone the backend files to your raspberry pi
1. Run the `streamPi.py` with python 3.
1. Visit [raspberrypi.local:8080](http://raspberrypi.local:8080) to see the ip address of the rasp pi
1. Control the device using the application on your phone after keying in the ip address seen from above
1. Links can be retrieved using the share -> copy link function from youtube


## Know Issues so far:
1. Does not work with music videos
