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
							console.log(_counter);
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