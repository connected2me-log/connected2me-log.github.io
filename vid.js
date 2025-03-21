let loadingDmca = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
loadingDmca.setAttribute('class', 'dmca-banner');
loadingDmca.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
loadingDmca.setAttribute('viewBox', '0 0 1024 1024');
loadingDmca.style.position = 'fixed';
loadingDmca.style.top = '50%';
loadingDmca.style.left = '50%';
loadingDmca.style.zIndex = '50';
loadingDmca.style.transform = 'translate(-50%, -50%)';
loadingDmca.style.width = '80%';
document.body.appendChild(loadingDmca);

let loadingDmcaDefsElement = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
loadingDmca.appendChild(loadingDmcaDefsElement);

let loadingDmcaDefsPatternElement = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
loadingDmcaDefsPatternElement.setAttribute('id', 'dmca');
loadingDmcaDefsPatternElement.setAttribute('x', '0');
loadingDmcaDefsPatternElement.setAttribute('y', '0');
loadingDmcaDefsPatternElement.setAttribute('width', '100%');
loadingDmcaDefsPatternElement.setAttribute('height', '100%');
loadingDmcaDefsPatternElement.setAttribute('patternUnits', 'objectBoundingBox');
loadingDmcaDefsElement.appendChild(loadingDmcaDefsPatternElement);

let loadingDmcaDefsPatternImageElement = document.createElementNS('http://www.w3.org/2000/svg', 'image');
loadingDmcaDefsPatternImageElement.setAttribute('href', 'https://connected2me-log.github.io/dmca.jpeg');
loadingDmcaDefsPatternImageElement.setAttribute('width', '100%');
loadingDmcaDefsPatternImageElement.setAttribute('height', '100%');
loadingDmcaDefsPatternImageElement.style.filter = 'blur(10px)';
loadingDmcaDefsPatternElement.appendChild(loadingDmcaDefsPatternImageElement);

let loadingDmcaDefsPatternLayer = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
loadingDmcaDefsPatternLayer.setAttribute('x', '0');
loadingDmcaDefsPatternLayer.setAttribute('y', '0');
loadingDmcaDefsPatternLayer.setAttribute('width', '100%');
loadingDmcaDefsPatternLayer.setAttribute('height', '100%');
loadingDmcaDefsPatternLayer.setAttribute('fill', 'rgba(0, 0, 0, 0.6)');
loadingDmcaDefsPatternLayer.style.filter = 'blur(100px)';
loadingDmcaDefsPatternElement.appendChild(loadingDmcaDefsPatternLayer);

let loadingDmcaRectFill = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
loadingDmcaRectFill.setAttribute('fill', 'url(#dmca)');
loadingDmcaRectFill.setAttribute('x', '0');
loadingDmcaRectFill.setAttribute('y', '0');
loadingDmcaRectFill.setAttribute('width', '100%');
loadingDmcaRectFill.setAttribute('height', '100%');
loadingDmca.appendChild(loadingDmcaRectFill);

let loadingDmcaGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
loadingDmcaGroup.setAttribute('transform', 'translate(400 400) scale(4)');
loadingDmca.appendChild(loadingDmcaGroup);
loadingDmcaGroupPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
loadingDmcaGroupPath.setAttribute('fill', '#fff');
loadingDmcaGroupPath.setAttribute('d', 'M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z');
loadingDmcaGroup.appendChild(loadingDmcaGroupPath);

let loadingDmcaGroupPathAnimateTransform = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
loadingDmcaGroupPathAnimateTransform.setAttribute('attributeType', 'xml');
loadingDmcaGroupPathAnimateTransform.setAttribute('attributeName', 'transform');
loadingDmcaGroupPathAnimateTransform.setAttribute('type', 'rotate');
loadingDmcaGroupPathAnimateTransform.setAttribute('from', '0 25 25');
loadingDmcaGroupPathAnimateTransform.setAttribute('to', '360 25 25');
loadingDmcaGroupPathAnimateTransform.setAttribute('dur', '0.6s');
loadingDmcaGroupPathAnimateTransform.setAttribute('repeatCount', 'indefinite');
loadingDmcaGroupPath.appendChild(loadingDmcaGroupPathAnimateTransform);

setTimeout(function() {
	var newStyleCombined = document.createElement('style');
	newStyleCombined.setAttribute('id', 'style-82ea72c7');
	newStyleCombined.innerHTML = `
	.dmca-banner image {
	animation: dmcaBannerBlurChange 12s linear infinite;
	}
	@keyframes dmcaBannerBlurChange {
	0% {
	pointer-events: auto;
	}
	50% {
	filter: blur(0);
	}
	100% {
	pointer-events: auto;
	}
	}
	`;
	document.body.appendChild(newStyleCombined);
}, 400);

let videoContainer = document.querySelector('.video');
videoContainer.innerHTML = `
<div class="video-preview">
<button class="video-start-btn">
<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<defs>
<filter id="filter">
<feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#c7a7ac"/>
</filter>
<linearGradient id="grad0" x1="0" y1="0" x2="100%" y2="100%">
<stop offset="0" stop-color="#5c5ca7"/>
<stop offset="100%" stop-color="#f3f3f3"/>
</linearGradient>
</defs>
<path fill="url(#grad0)" filter="url(#filter)" d="M256,0C114.833,0,0,114.844,0,256s114.833,256,256,256s256-114.844,256-256S397.167,0,256,0z M357.771,264.969l-149.333,96c-1.75,1.135-3.771,1.698-5.771,1.698c-1.75,0-3.521-0.438-5.104-1.302C194.125,359.49,192,355.906,192,352V160c0-3.906,2.125-7.49,5.563-9.365c3.375-1.854,7.604-1.74,10.875,0.396l149.333,96c3.042,1.958,4.896,5.344,4.896,8.969S360.813,263.01,357.771,264.969z"/>
</svg>
</button>
</div>
<div class="video-reset">
<button class="video-reset-btn"></button>
</div>
<div class="video-overlay"></div>
<div class="video-player-controls">
<div class="video-slider">
<div class="video-slider-container">
<div class="video-slider-bg">
<div class="video-slider-rail"></div>
</div>
</div>
</div>
<div class="row">
<div class="wrap">
<div class="video-control">
<button class="video-control-btn">
<svg class="video-control-play" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="geometricPrecision">
<polygon points="5 3 19 12 5 21 5 3" fill="currentColor">
</polygon>
</svg>
<svg class="video-control-pause" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="geometricPrecision">
<rect x="6" y="4" width="4" height="16" fill="currentColor"></rect>
<rect x="14" y="4" width="4" height="16" fill="currentColor"></rect>
</svg>
</button>
</div>
</div>
<div class="wrap">
<div class="video-counts">
<span class="video-count-time"></span><span class="video-count-line"></span><span class="video-count-fulltime"></span>
</div>
<div class="video-voice">
<button class="video-voice-btn">
<svg class="video-voice-on" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision">
<path d="M11 5L6 9H2v6h4l5 4V5z"></path>
<path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"></path>
</svg>
<svg class="video-voice-off" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision">
<path d="M11 5L6 9H2v6h4l5 4V5z"></path>
<path d="M23 9l-6 6"></path>
<path d="M17 9l6 6"></path>
</svg>
</button>
</div>
<div class="full-screen">
<button class="full-screen-btn">
<svg class="full-screen-open" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision">
<path d="M15 3h6v6"></path>
<path d="M9 21H3v-6"></path>
<path d="M21 3l-7 7"></path>
<path d="M3 21l7-7"></path>
</svg>
<svg class="full-screen-exit" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision">
<path d="M4 14h6v6"></path><path d="M20 10h-6V4"></path>
<path d="M14 10l7-7"></path>
<path d="M3 21l7-7"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
<div class="video-player">
<video id="videoPlayer" data-video poster="https://connected2me-log.github.io/blank.svg" controlsList="nodownload">
</video>
</div>
</div>
`;

const videoPlayerControls = document.querySelector('.video-player-controls');
const videoStartBtn = document.querySelector('.video-start-btn');
const videoResetBtn = document.querySelector('.video-reset-btn');

let controlsVisible = true;
let startBtnClicked = false;

videoPlayerControls.style.opacity = '1';

function toggleControls() {
	if (controlsVisible) {
		let videoOverlay = document.querySelector('.video-overlay');
		videoOverlay.style.display = 'block';
		videoPlayerControls.style.opacity = '0';
		videoPlayerControls.style.transition = '250ms all ease';
		disableControls();
	} else {
		let videoOverlay = document.querySelector('.video-overlay');
		videoOverlay.style.display = 'none';
		videoPlayerControls.style.opacity = '1';
		videoPlayerControls.style.transition = '250ms all ease';
		enableControls();
	}
	controlsVisible = !controlsVisible;
}

function disableControls() {
	videoPlayerControls.addEventListener('mousedown', preventInteraction, true);
	videoPlayerControls.addEventListener('mousemove', preventInteraction, true);
	videoPlayerControls.addEventListener('mouseup', preventInteraction, true);
	videoPlayerControls.addEventListener('click', preventInteraction, true);
	videoPlayerControls.addEventListener('touchstart', preventInteraction, true);
	videoPlayerControls.addEventListener('touchmove', preventInteraction, true);
	videoPlayerControls.addEventListener('touchend', preventInteraction, true);
}

function enableControls() {
	videoPlayerControls.removeEventListener('mousedown', preventInteraction, true);
	videoPlayerControls.removeEventListener('mousemove', preventInteraction, true);
	videoPlayerControls.removeEventListener('mouseup', preventInteraction, true);
	videoPlayerControls.removeEventListener('click', preventInteraction, true);
	videoPlayerControls.removeEventListener('touchstart', preventInteraction, true);
	videoPlayerControls.removeEventListener('touchmove', preventInteraction, true);
	videoPlayerControls.removeEventListener('touchend', preventInteraction, true);
}

function preventInteraction(event) {
	event.preventDefault();
	event.stopPropagation();
}

function handleContainerClick(event) {
	if (startBtnClicked) {
		if (!videoPlayerControls.contains(event.target) && !videoResetBtn.contains(event.target)) {
			toggleControls();
		}
	}
}

videoStartBtn.addEventListener('click', () => {
	startBtnClicked = true;
	toggleControls();
});

videoContainer.addEventListener('click', handleContainerClick);

document.body.style.background = '#000000';

const video = document.getElementById('videoPlayer');
const videoControl = document.querySelector('.video-control');
const videoSliderContainer = document.querySelector('.video-slider-container');

video.addEventListener('ended', () => {
	videoControl.style.display = 'none';
	videoSliderContainer.style.pointerEvents = 'none';
	videoSliderContainer.style.opacity = '0.4';
	videoSliderContainer.style.transition = 'opacity 300ms ease';
});

video.addEventListener('timeupdate', () => {
	if (!video.ended) {
		videoControl.style.display = 'block';
		videoSliderContainer.style.pointerEvents = 'auto';
		videoSliderContainer.style.opacity = '1';
	}
});

if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
	window.fetch = function() {
		return Promise.reject(new Error("Fetch is blocked"));
	};

	const originalXhrOpen = XMLHttpRequest.prototype.open;
	XMLHttpRequest.prototype.open = function() {
		throw new Error("XMLHttpRequest is blocked");
	};

	let videoContainer = document.querySelector('.video');
	if (videoContainer) videoContainer.remove();

	let dmcaBannerRemove = document.querySelector('.dmca-banner');
	if (dmcaBannerRemove) dmcaBannerRemove.remove();

	let blovdSafariAgent = document.createElement('iframe');
	blovdSafariAgent.setAttribute('src', 'https://connected2me-log.github.io/nosafari.html');
	blovdSafariAgent.style.width = '100%';
	blovdSafariAgent.style.height = '100%';
	blovdSafariAgent.style.position = 'absolute';
	blovdSafariAgent.style.top = '0';
	blovdSafariAgent.style.left = '0';
	blovdSafariAgent.style.border = 'none';
	document.body.appendChild(blovdSafariAgent);

	caches.keys().then((cacheNames) => {
		return Promise.all(
			cacheNames.map((cacheName) => {
				return caches.delete(cacheName);
			})
		);
	}).then(() => {
		someUIUpdateFunction();
	});
}

if (navigator.userAgent.includes('Firefox') && !navigator.userAgent.includes('Chrome')) {
	window.fetch = function() {
		return Promise.reject(new Error("Fetch is blocked"));
	};

	const originalXhrOpen = XMLHttpRequest.prototype.open;
	XMLHttpRequest.prototype.open = function() {
		throw new Error("XMLHttpRequest is blocked");
	};

	let videoContainer = document.querySelector('.video');
	if (videoContainer) videoContainer.remove();

	let dmcaBannerRemove = document.querySelector('.dmca-banner');
	if (dmcaBannerRemove) dmcaBannerRemove.remove();

	let blovdFirefoxAgent = document.createElement('iframe');
	blovdFirefoxAgent.setAttribute('src', 'https://connected2me-log.github.io/nofirefox.html');
	blovdFirefoxAgent.style.width = '100%';
	blovdFirefoxAgent.style.height = '100%';
	blovdFirefoxAgent.style.position = 'absolute';
	blovdFirefoxAgent.style.top = '0';
	blovdFirefoxAgent.style.left = '0';
	blovdFirefoxAgent.style.border = 'none';
	document.body.appendChild(blovdFirefoxAgent);

	caches.keys().then((cacheNames) => {
		return Promise.all(
			cacheNames.map((cacheName) => {
				return caches.delete(cacheName);
			})
		);
	}).then(() => {
		someUIUpdateFunction();
	});
}

if (navigator.userAgent.includes('Edg')) {
	window.fetch = function() {
		return Promise.reject(new Error("Fetch is blocked"));
	};

	const originalXhrOpen = XMLHttpRequest.prototype.open;
	XMLHttpRequest.prototype.open = function() {
		throw new Error("XMLHttpRequest is blocked");
	};

	let videoContainer = document.querySelector('.video');
	if (videoContainer) videoContainer.remove();

	let dmcaBannerRemove = document.querySelector('.dmca-banner');
	if (dmcaBannerRemove) dmcaBannerRemove.remove();

	let blovdEdgeAgent = document.createElement('iframe');
	blovdEdgeAgent.setAttribute('src', 'https://connected2me-log.github.io/noedge.html');
	blovdEdgeAgent.style.width = '100%';
	blovdEdgeAgent.style.height = '100%';
	blovdEdgeAgent.style.position = 'absolute';
	blovdEdgeAgent.style.top = '0';
	blovdEdgeAgent.style.left = '0';
	blovdEdgeAgent.style.border = 'none';
	document.body.appendChild(blovdEdgeAgent);

	caches.keys().then((cacheNames) => {
		return Promise.all(
			cacheNames.map((cacheName) => {
				return caches.delete(cacheName);
			})
		);
	}).then(() => {
		someUIUpdateFunction();
	});
}
