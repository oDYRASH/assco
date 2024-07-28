if(document.fullscreenEnabled || document.webkitFullscreenEnabled) {
	const toggleBtn = document.querySelector('.js-toggle-fullscreen-btn');

	const styleEl = document.createElement('link');
	styleEl.setAttribute('rel', 'stylesheet');
	styleEl.setAttribute('href', 'https://codepen.io/tiggr/pen/poJoLyW.css');
	styleEl.addEventListener('load', function() {
		toggleBtn.hidden = false;
	});
	document.head.appendChild(styleEl);
	
	toggleBtn.addEventListener('click', function() {
		if(document.fullscreen) {
			document.exitFullscreen();
		} else if(document.webkitFullscreenElement) {
			document.webkitCancelFullScreen()
		} else if(document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen();
		} else {
			document.documentElement.webkitRequestFullScreen();
		}
	});
	
	document.addEventListener('fullscreenchange', handleFullscreen);
	document.addEventListener('webkitfullscreenchange', handleFullscreen);
	
	
	function handleFullscreen() {
		if(document.fullscreen || document.webkitFullscreenElement) {
			toggleBtn.classList.add('on');
			toggleBtn.setAttribute('aria-label', 'Exit fullscreen mode');
		} else {
			toggleBtn.classList.remove('on');
			toggleBtn.setAttribute('aria-label', 'Enter fullscreen mode');
		}
	}
}


//Responsive handler 'rotateScreen' for mobile devices
function hideOverlay() {
    document.getElementById('rotate-overlay').style.display = 'none';
}

// Optional: Detect orientation change and show overlay on portrait
window.addEventListener('orientationchange', function() {
    if (window.innerHeight > window.innerWidth) {
        document.getElementById('rotate-overlay').style.display = 'flex';
        document.getElementById('content').style.display = 'none';
    } else {
        document.getElementById('rotate-overlay').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }
});

// Initial check
if (window.innerHeight > window.innerWidth) {
    document.getElementById('rotate-overlay').style.display = 'flex';
} else {
    document.getElementById('rotate-overlay').style.display = 'none';
    document.getElementById('content').style.display = 'block';
}