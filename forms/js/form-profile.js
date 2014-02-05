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

var email1 = document.getElementById("email1");
var email2 = document.getElementById("email2");

var checkEmailValidity = function() {

    if(email1.value !== email2.value) {
        email2.setCustomValidity("The confirmation email must be identical to the original email"); //also sets the field validity to false
    } else {
        email2.setCustomValidity(""); //also sets the field validity to true
    }
}

email1.addEventListener('change', checkEmailValidity);
email2.addEventListener('change', checkEmailValidity);

