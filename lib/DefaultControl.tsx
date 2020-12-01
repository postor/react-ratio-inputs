import React, { FunctionComponent, useEffect, useRef, useState } from 'react'

const width = 14, unit = 'px', defaultColor = 'gray', hoverColor = 'red', height = 10

const DefaultControl: FunctionComponent<{
  offset: number, goUp: boolean,
  onChange: (offset: number, flush: boolean) => any,
  meta: any
}> = ({
  offset, onChange, goUp, meta
}) => {
    let [dragging, setDragging] = useState(false)
    let [dragOffset, setDragOffset] = useState(-1)
    let refEl = useRef(), refOffset = useRef(offset)
    useEffect(() => {
      refOffset.current = offset
    }, [offset])
    useEffect(() => {
      return registerDrag(refEl, refOffset, (rawOffset: number, flush: boolean) => {
        let { minEx: min, max } = meta
        // console.log({ min, max })
        let newOffset =
          rawOffset < min
            ? min
            : rawOffset > max
              ? max
              : rawOffset
        if (flush) {
          setDragOffset(-1)
          return onChange(newOffset, true)
        }
        setDragOffset(newOffset)
        onChange(newOffset, false)
      }, setDragging)
    }, [meta])
    return (<div
      draggable={"false"}
      onDragStart={() => false}
      style={{
        position: 'absolute',
        width: 0,
        height: 0,
        borderBottom: `${height}${unit} solid ${dragging ? hoverColor : defaultColor}`,
        borderLeft: `${width / 2}${unit} solid transparent`,
        borderRight: `${width / 2}${unit} solid transparent`,
        top: 0,
        left: dragOffset < 0
          ? offset - (width / 2)
          : dragOffset - (width / 2),
        transform: goUp
          ? `translate(0,-42px) rotate(180deg)`
          : ''
      }}
      // @ts-ignore
      ref={refEl}
    />)
  }


export default DefaultControl

function registerDrag(refEl: any, offsetRef: any,
  onChange: (offset: number, flush: boolean) => any,
  setDragging: (dragging: boolean) => any,
  // updateMetas: (ratios:RatioItem[],from: string) => any
) {
  let dragging = false, curX = 0, curOffset = 0, newOffset = 0

  let mouseDown = function (e: MouseEvent | TouchEvent) {
    if (e.target !== refEl.current) return
    dragging = true
    setDragging(true)
    curX = getPageX(e)
    curOffset = offsetRef.current
    newOffset = curOffset
  }
  let mouseMove = function (e: MouseEvent | TouchEvent) {
    if (!dragging) return
    let diff = getPageX(e) - curX
    if (!diff) return
    newOffset = diff + curOffset
    onChange(newOffset, false)
  }
  let mouseUp = function () {
    if (!dragging) return
    dragging = false
    setDragging(false)
    if (newOffset === curOffset) return
    // updateMetas('mouseUp')
    onChange(newOffset, true)
  }

  document.addEventListener('mousedown', mouseDown)
  document.addEventListener('mousemove', mouseMove)
  document.addEventListener('mouseup', mouseUp)
  document.addEventListener('touchstart', mouseDown)
  document.addEventListener('touchmove', mouseMove)
  document.addEventListener('touchcancle', mouseUp)
  document.addEventListener('touchend', mouseUp)
  return () => {
    document.removeEventListener('mousedown', mouseDown)
    document.removeEventListener('mousemove', mouseMove)
    document.removeEventListener('mouseup', mouseUp)
    document.removeEventListener('touchstart', mouseDown)
    document.removeEventListener('touchmove', mouseMove)
    document.removeEventListener('touchcancle', mouseUp)
  }
}

function getPageX(e: MouseEvent | TouchEvent | any) {
  if (e.touches && e.touches.length) {
    return e.touches[0].pageX
  }
  return e.pageX
}