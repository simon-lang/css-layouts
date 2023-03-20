// @ts-ignore
if (!window.initialised) {
  // @ts-ignore
  window.initialised = true
  const slides = ['', 'outline', 'intro', 'position', 'floats', 'flex', 'grid', 'demo', 'dm']
  window.addEventListener('keyup', (e) => {
    console.log( e )
    const hash = window.location.hash.slice(1)
    let index = slides.indexOf(hash)
    if (e.key === 'ArrowLeft' && index > 0) {
      index--
    } else if ((e.key === 'ArrowRight' || e.code === 'Space') && index < slides.length - 1) {
      index++
    } else {
      return
    }
    window.location.hash = slides[index]
  })
}

