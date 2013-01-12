BROWSER PAGE IDLE DETECTOR
==========================

This javascript library is useful to detect whenever a browser page is idle:
 that means if user does not move mouse or click anything or is on another tab\page of browser


USAGE: 
------

	IDLE_DETECTOR.init(timeout, callback);
	IDLE_DETECTOR.startCountdown();
 
 if not specified, default timeout is 30 minutes.
 callback may be any custom function defined by user, for instance: page reload, ajax page blocks refresh, etc.
 
 For a detailed example, see the example attached.

author:
Nico Giangregorio, nicogorio@gmail.com or nicogiangregorio.wordpress.com