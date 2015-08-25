# Synopsis

Most cable broadband and DSL based providers require an extra step to log the user in and access the internet. Usually user is redirected to a web page and asked to enter username and password. That can be problematic if you are doing over night downloads and your session gets expired at the middle of the night or your ISP decides to log you out automatically. 

This script takes care of the extra step required to log you in. Just provide the username and password, it will automatically detect a log out and log you in automatically, while you sleep comfortably knowing your downloads will be done :-)

## ISPs supported

Currently only the following ISPs are supported 

* Wishnet Broadband Kolkata

Porting to other ISPs will be fairly easy. The script is just a few lines of code. If you happen to port and support your ISP too, just send a pull request so that other users can benefit from your work

## Installing

Node.js and npm needs to be installed. The script uses phantomjs to emulate a browser environment and automatically log you in. You can install that using:

`sudo npm install phantomjs -g`

Run `phantomjs` in some terminal to see if the binary is in path. Then go inside this script's folder and install all the dependencies.

`npm install`

Then start the script

`node wishnet.js`

If you would like to run the script in background, use forever

`sudo npm install forever -g`

then

`forever start wishnet.js`

## Changing variables

Your username and password needs to be provided in `phantomjs.js` file. 

The script uses cron to check if you are logged in at regular intervals of time. You can change the interval by changing `checkTime` variable. 

## Licence

Public domain, do whatever you want