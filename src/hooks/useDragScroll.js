import { useRef } from 'react'

export function useDragScroll() {
  const ref = useRef(null)
  const state = useRef({ isDown: false, startX: 0, scrollLeft: 0 })

  const onMouseDown = (e) => {
    state.current.isDown = true
    state.current.startX = e.pageX - ref.current.offsetLeft
    state.current.scrollLeft = ref.current.scrollLeft
  }
  const stop = () => { state.current.isDown = false }
  const onMouseMove = (e) => {
    if (!state.current.isDown) return
    e.preventDefault()
    const x = e.pageX - ref.current.offsetLeft
    const walk = (x - state.current.startX) * 1.2
    ref.current.scrollLeft = state.current.scrollLeft - walk
  }

  return { ref, onMouseDown, onMouseMove, onMouseUp: stop, onMouseLeave: stop }
}