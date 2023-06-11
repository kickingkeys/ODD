imagesLoaded(document.querySelector(".carousel"), () => {
  var carousel = document.querySelector('.carousel')

  var listA = document.querySelector('.carousel-list')
  var listB = listA.cloneNode(true)

  var width = listA.scrollWidth

  var xA = 0
  var xB = width

  carousel.appendChild(listB)
  listB.style.left = width + 'px'

  var speed = 1
  function move() {
    xA -= speed
    
    if (Math.abs(xA) <= width) {
      listA.style.left = `${xA}px`
    } else {
      xA = width
    }
    
    xB -= speed
    
    if (Math.abs(xB) <= width) {
      listB.style.left = `${xB}px`
    } else {
      xB = width
    }

    if (isActive) {
      window.requestAnimationFrame(move)
    }
  }

  var isActive = true

  carousel.addEventListener("mouseenter", () => {
    isActive = false
  })

  carousel.addEventListener("mouseleave", () => {
    isActive = true
    window.requestAnimationFrame(move)
  })

  window.requestAnimationFrame(move)
})
