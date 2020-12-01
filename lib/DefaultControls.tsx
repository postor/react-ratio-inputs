import React from 'react'
import RatioItem from './RatioItem'
import ControlComponent from './DefaultControl'

interface ControlData {
  offset: number
  width: number
  min: number
  max: number
  minValue: number
  maxValue: number
  minEx: number
  minValueEx: number
}

const DefaultControls = (props: any) => {
  const { max, min, ratios, width, toFixed, onChange } = props
  if (!width) return null
  let controls = getControls(width, max, ratios, min), tmax = max
  
  return (<div style={{ position: 'relative', height: 10 }}>
    {controls.map((x: ControlData, i: number) => {
      let { offset } = x
      if (ratios[i].value === 0 && ratios[i + 1].value === 0) return null
      return (<ControlComponent
        key={i}
        offset={offset}
        goUp={i !== 0 && ratios[i].value === 0}
        onChange={(newOffset, flush) => {
          let { min, max, minValue, maxValue } = x
          let newRatios = [...ratios]
          let sum = ratios[i].value + ratios[i + 1].value
          if (newOffset < min) {
            newRatios[i] = {
              ...ratios[i],
              value: minValue
            }

          } else if (newOffset > max) {
            newRatios[i] = {
              ...ratios[i],
              value: maxValue
            }
          } else {
            newRatios[i] = {
              ...ratios[i],
              value: Number.parseFloat(((newOffset - min) / width * tmax).toFixed(toFixed || 0))
            }
          }
          newRatios[i + 1] = {
            ...ratios[i + 1],
            value: sum - newRatios[i].value
          }
          return onChange(newRatios, flush)
        }}
        meta={x}
      />)
    })}
  </div>)
}

const MemDefaultControls = React.memo(DefaultControls, (prevProps: any, nextProps: any) => {
  let rtn = [`ratios`, `width`].every(k => prevProps[k] === nextProps[k])
  return rtn
})
export default MemDefaultControls


function getControls(
  width: number, tmax: number,
  ratios: RatioItem[],
  tmin?: number,
): ControlData[] {
  let metas = new Array(ratios.length - 1), left = 0, sum = 0

  for (let i = 0; i < metas.length; i++) {
    let { value } = ratios[i]
    let twidth = width * value / tmax
    metas[i] = {
      min: left,
      max: width,
      minValue: sum,
      maxValue: tmax,
      offset: left + twidth,
      minEx: left,
      minValueEx: sum,
    }
    left += twidth
    sum += value
    if (metas[i - 1]) {
      metas[i - 1].max = left
      metas[i - 1].maxValue = sum
    }
    if (i === metas.length - 1) {
      if (tmin !== undefined) {
        metas[i].minValueEx = tmin
        metas[i].minEx = tmin / tmax * width
      }
    }
  }
  return metas
}
