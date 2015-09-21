// ==UserScript==
// @name        Echo Chambered
// @description Replace comment sections with echo chamber
// @author      Mattie
// @namespace   #echo.chamber.comments.ffs
// @include     *youtube.com/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @version     0.420
// ==/UserScript==
	
var echoC = "<script id=\"echochamber\"> var EchoChamber = window.EchoChamber || {}; (function() { EchoChamber.discussionURL = window.location; var script = document.createElement('script'); script.src = 'https://s3.amazonaws.com/echochamberjs/dist/main.js'; script.async = true; var entry = document.getElementById('echochamber'); entry.parentNode.insertBefore(script, entry); })(); </script>";

var hostname = window.location.hostname.toString();

if (hostname.match(/youtube.com/g)) {
	$( "#watch-discussion" ).replaceWith( echoC );
	$( "#echochamber" ).addClass( "branded-page-box yt-card" );
}
