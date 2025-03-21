(function() {
	let lastExecutionTime = Date.now();
	const checkInterval = 100;
	const threshold = 500;
	let isHidden = false;

	function checkDebugger() {
		const currentTime = Date.now();
		const timeDiff = currentTime - lastExecutionTime;

		if (timeDiff > threshold) {
			if (!isHidden) {
				document.documentElement.innerHTML = '';
				window.location.replace('https://protectdebugging.github.io/harika-icerik');
				isHidden = true;
			}
		} else {

			if (isHidden) {
				//NOT REFERRER 403
				isHidden = false;
			}
		}

		lastExecutionTime = currentTime;
	}

	setInterval(checkDebugger, checkInterval);
})();

document.addEventListener('visibilitychange', () => {
	document.documentElement.innerHTML = '';
	window.location.replace('https://protectdebugging.github.io/harika-icerik');
});
