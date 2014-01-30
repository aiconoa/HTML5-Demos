/**
 The MIT License (MIT)

 Copyright (c) 2014 AICONOA

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

/**
 * For cross browser compatibility, consider using {@link http://jquery.com/|JQuery} for adding listeners (or use attachEvent for IE support)
 * @see {@link https://developer.mozilla.org/fr/docs/DOM/element.addEventListener } for further information on adding event Listeners
 */

var video = document.getElementsByTagName("video")[0];

var fullScreenButton = document.getElementById("fsb");
fullScreenButton.addEventListener('click', function(event){
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    }
});

var playButton = document.getElementById("play");
playButton.addEventListener('click', function(event){
    video.play();
});

var pauseButton = document.getElementById("pause");
pauseButton.addEventListener('click', function(event){
    video.pause();
});

var volumeUpButton = document.getElementById("volumeUp");
volumeUpButton.addEventListener('click', function(event){
    video.volume += 0.1;
});

var volumeDownButton = document.getElementById("volumeDown");
volumeDownButton.addEventListener('click', function(event){
    video.volume -= 0.1;
});

var timeLabel = document.getElementById("time");
video.addEventListener("timeupdate", function(event) {
    var target = event.target || event.srcElement;
    timeLabel.innerHTML = secondsToHms(target.currentTime);
});


/** from http://stackoverflow.com/a/5539081 **/
function secondsToHms(seconds) {
      var d = Number(seconds);
      var h = Math.floor(d / 3600);
      var m = Math.floor(d % 3600 / 60);
      var s = Math.floor(d % 3600 % 60);
    return ((h > 0 ? h + ":" : "") + (m > 0 ? (h > 0 && m < 10 ? "0" : "") + m + ":" : "0:") + (s < 10 ? "0" : "") + s);
}
