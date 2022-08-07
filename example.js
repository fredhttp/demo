/*
 * 
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.

xyx sssssssssssssssssssssssssssssssssssssssssss
new addition...

update from remote
 *
 update 2
now from local update
 *
 
*/

var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
   
context.font = '38pt Arial';
context.fillStyle = 'cornflowerblue';
context.strokeStyle = 'blue';

context.fillText("Hello Canvas", canvas.width/2 - 150,
                                 canvas.height/2 + 15);

context.strokeText("Hello Canvas", canvas.width/2 - 150,
                                   canvas.height/2 + 15 );
