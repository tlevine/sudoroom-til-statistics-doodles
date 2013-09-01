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
  var offsets = {
    'back':  79.520136,
    'above':  6.999342
  }
  var range = [19, (3746.000512 - offsets.back)]

  // Video elements
  var back  = document.querySelector('#videos .back')
  var above = document.querySelector('#videos .above')
  var seek  = document.querySelector('#seek')

  // Synchronize videos
  back.volume  = 0
  above.volume = 1
  back.currentTime  = offsets.back  + range[0]
  above.currentTime = offsets.above + range[0]

  // Seek bar
  seek.min = range[0]
  seek.max = range[1]
  seek.value = range[0]

  seek.addEventListener('blur', pause)
  seek.addEventListener('mousedown', pause)
  seek.addEventListener('mouseup', seekFunc)
  seek.addEventListener('keyup', seekFunc)
  above.addEventListener('timeupdate', function() {
    if (above.playing) {
      seek.value = above.currentTime
    }
  })
  
  function seekFunc() {
    above.currentTime = seek.value
    back.currentTime  = seek.value < back.duration ? seek.value : back.duration
  }
}
