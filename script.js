function play() {
  var back  = document.querySelector('#videos .back')
  var above = document.querySelector('#videos .above')
  above.play()
  if ((back.currentTime + 1) < back.duration) {
    back.play()
  }
}

function pause() {
  var videos = document.querySelectorAll('#videos video')
  for (var i = 0; i < videos.length; i++) {
    videos[i].pause()
  }
}

window.onload = function() {
  // Seek to the appropriate places
  var length = 3746.000512 - 79
  var _set = function(element, offset) {
    return function(x) {
      if (x > 1 || x < 0) {
        throw 'x must be between 0 and 1'
      }
      element.currentTime = offset + x * length
    }
  }

  var back = document.querySelector('#videos .back')
  var above = document.querySelector('#videos .above')
    
  // Seek functions
  var setBack = _set(back, 79.520136)
  var setAbove= _set(above, 6.999342)

  // Volume
  back.volume = 0
  above.volume = 1

  // Synchronize videos
  setBack(0)
  setAbove(0)

  // Seek bar
  var seek  = document.querySelector('#seek')
  seek.addEventListener('blur', pause)
  seek.addEventListener('mousedown', pause)
  seek.addEventListener('mouseup', seekFunc)
  seek.addEventListener('keyup', seekFunc)
  above.addEventListener('timeupdate', function() {
    if (above.playing) {
      seek.value = (above.currentTime - offsets.above) / length
    }
  })
  
  function seekFunc() {
    setAbove(seek.value)
    setBack(Math.min(seek.value, 1))
  }
}
