function playVideo(video) {
  video.removeAttribute('controls');

  if (
    !document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
    if (video.requestFullscreen) {
      video.requestFullscreen().then(function () {
        video.play();
      });
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen().then(function () {
        video.play();
      });
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen().then(function () {
        video.play();
      });
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen().then(function () {
        video.play();
      });
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().then(function () {
        video.pause();
      });
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen().then(function () {
        video.pause();
      });
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen().then(function () {
        video.pause();
      });
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen().then(function () {
        video.pause();
      });
    }
  }
}
