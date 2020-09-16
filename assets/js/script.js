/*
This file is used for the stock bot embedded webchat interaction
 - script call is found at the bottom of markPage.html <body>
*/

$(function (){

    var yourFade = 1,
    yourDelay = 1,
    fadeTime = yourFade * 1000,
    delayTime = yourDelay * 2000,
    totalTime = fadeTime + delayTime, allElems, elemNoFade, i, fadingElem;
    
    for (i = 0, allElems = $('.toBeFaded').length, elemNoFade = allElems - 1; i < allElems; i+=1) {
    fadingElem = "#elem" + i;
    if (i === 0) {
    $(fadingElem).fadeIn(fadeTime).delay(delayTime).fadeOut(fadeTime);
    } else if (i === elemNoFade) {
    $(fadingElem).delay(totalTime * i).fadeIn(fadeTime);
    } else {
    $(fadingElem).delay(totalTime * i).fadeIn(fadeTime).delay(delayTime).fadeOut(fadeTime);
    }
    }
    });
    