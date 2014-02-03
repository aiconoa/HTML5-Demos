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

var canvas5 = document.getElementById("canvas-5");
canvas5.width=150;
canvas5.height=150;

var ctx = canvas5.getContext("2d");

var gradient = ctx.createRadialGradient(0,0,0,0,0,75);
gradient.addColorStop(0, "#FFF");
gradient.addColorStop(1, "#0F0");

function draw(ctx, angle) {
    ctx.save();
    ctx.clearRect(0,0,150, 150);
    ctx.translate(75,75);
    ctx.fillStyle = gradient;
    ctx.rotate((Math.PI / 180) * angle);
    ctx.fillRect(-25, -25, 50, 50);
    ctx.restore();
    angle += 2;
    if(angle >= 360) {
        angle = 0;
    }

    requestAnimationFrame(function() {draw(ctx, angle)});
}

draw(ctx, 0);
