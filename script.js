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
    'back':  79.520136 + 19,
    'above':  6.999342 + 19
  }
  var length = 3746.000512 - offsets.back + 19

  // Video elements
  var back  = document.querySelector('#videos .back')
  var above = document.querySelector('#videos .above')
  var seek  = document.querySelector('#seek')

  // Synchronize videos
  back.volume  = 0
  above.volume = 1
  back.currentTime  = offsets.back
  above.currentTime = offsets.above

  // Seek bar
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
    above.currentTime = length * seek.value + offsets.above
    back.currentTime  = seek.value < ((back.duration - offsets.back)/ above.duration) ? length * seek.value + offsets.back: back.duration
  }
}
