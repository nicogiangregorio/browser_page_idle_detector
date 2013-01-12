/**
* This javascript library is useful to detect whenever a browser page is idle:
* that means if user does not move mouse or click anything or is on another tab\page of browser
*
*
* USAGE: IDLE_DETECTOR.init(timeout, callback);
*		 IDLE_DETECTOR.startCountdown();
* if not specified, default timeout is 30 minutes.
* callback may be any custom function defined by user.
* 
* For a detailed example, see the example attached.
*
* @author Nico Giangregorio, nicogorio@gmail.com or nicogiangregorio.wordpress.com
**/
var IDLE_DETECTOR = function() {
	var _counter = 0;
	var _timeout = 1800000;
	var _callback = function(){};
	
	return {
		init: function(timeout, callback) {
							_timeout = timeout;
							_callback = callback;
							
							document.onmousemove = function() {
								IDLE_DETECTOR.checkCountdown();
							}
							document.onclick = function() {
								IDLE_DETECTOR.checkCountdown();
							}
							document.onkeypress = function() {
								IDLE_DETECTOR.checkCountdown();
							}
						},
		startCountdown: function() {
							_counter++;
							setTimeout(function() {IDLE_DETECTOR.startCountdown()}, 1000);
						},
		checkCountdown: function() {
			
			if (_counter > _timeout) {
				_callback();
			}
			_counter = 0;
		}
	};
}();