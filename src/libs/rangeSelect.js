const obj = {
  el: null,
  start: false,
  startPoint: {
    x: null,
    y: null
  },
  lastPoint: {
    x: null,
    y: null
  }
}

document.body.addEventListener('mousedown', (e) => {
  obj.startPoint.x = e.pageX
  obj.startPoint.y = e.pageY
  obj.el = document.createElement('div')
  obj.el.style.position = 'fixed'
  obj.el.style.zIndex = 999999
  obj.el.style.background = '#aabbff'
  obj.el.style.border = '1px solid blue'
  obj.el.style.opacity = 0.4
  obj.el.style.left = `${obj.startPoint.x}px`
  obj.el.style.top = `${obj.startPoint.y}px`
  document.body.append(obj.el)
  obj.start = true
})

document.body.addEventListener('mousemove', (e) => {
  if (!obj.start) return
  e.stopPropagation()
  obj.lastPoint.x = e.pageX
  obj.lastPoint.y = e.pageY
  let xPositive = obj.startPoint.x < obj.lastPoint.x
  let yPositive = obj.startPoint.y < obj.lastPoint.y
  if (xPositive) {
    obj.el.style.left = `${obj.startPoint.x}px`
    obj.el.style.right = `${window.innerWidth - obj.lastPoint.x}px`
  } else {
    obj.el.style.left = `${obj.lastPoint.x}px`
    obj.el.style.right = `${window.innerWidth - obj.startPoint.x}px`
  }
  if (yPositive) {
    obj.el.style.top = `${obj.startPoint.y}px`
    obj.el.style.bottom = `${window.innerHeight - obj.lastPoint.y}px`
  } else {
    obj.el.style.top = `${obj.lastPoint.y}px`
    obj.el.style.bottom = `${window.innerHeight - obj.startPoint.y}px`
  }
})

document.body.addEventListener('mouseup', () => {
  if (!obj.start) return
  obj.start = false
  obj.el.remove()
})
