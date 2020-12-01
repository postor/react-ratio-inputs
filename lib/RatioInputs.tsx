import React, { FunctionComponent, ReactElement, useEffect, useRef, useState } from 'react'
import useMeasure from 'react-use/lib/useMeasure'

import DefaultContainer from './DefaultContainer'
import DefaultControls from './DefaultControls'
import { DefaultItem } from './DefaultItem'
import RatioItem from './RatioItem'
const shuffle = require('fast-shuffle').default

interface Props {
  ratios: RatioItem[] | any[]
  max?: number
  min?: number
  onChange?: (ratios: RatioItem[]) => any
  ItemComponent?: ReactElement | any
  ControlsComponent?: ReactElement | any
  ContainerComponent?: ReactElement | any
  propForUnused?: any
  containerProps?: any
  toFixed?: number
  nameForUnused?: string
  toText?: (item: RatioItem) => string
  toTitle?: (item: RatioItem) => string
}


const RatioInputs: FunctionComponent<Props> = ({
  ratios, max, min, onChange,
  propForUnused, ControlsComponent = DefaultControls, toFixed = 0,
  ItemComponent = DefaultItem, ContainerComponent = DefaultContainer,
  nameForUnused = '未使用',
  toText = ({ name, value }) => `${name}(${value})`,
  toTitle = ({ name, value }) => `${name}(${value})`,
}) => {
  const [ref, { width }] = useMeasure()
  const [tmax, setTmax] = useState(0)
  const [colors] = useState(getColors(ratios.length + 1))
  const [hasUnused, setHasUnused] = useState(false)
  const [tmpRatios, setTmpRatios] = useState<any[]>([])
  const [tratios, setTratios] = useState<any[]>([])
  useEffect(() => {
    let ratios1: RatioItem[] = ratios
    let sum = ratios1.reduce((cur, { value }) => cur + value, 0)
    let tmax = max ? max : sum
    if (tmax < sum) throw 'max less than sum of ratios'
    setTmax(tmax)
    if (min !== undefined && min >= tmax) throw 'min larger than max or sum'

    let minCauseUnused = min !== undefined
      ? min > 0
      : false
    let maxCauseUsed = tmax > sum
    let hasUnused = minCauseUnused || maxCauseUsed

    setHasUnused(hasUnused)
  }, [])

  let widthRef = useRef(width)

  useEffect(() => {
    widthRef.current = width
  }, [width])

  useEffect(() => {
    let ratios1: RatioItem[] = ratios
    let unUsedRatioItem = {
      name: nameForUnused,
      value: tmax - ratios1.reduce((cur, { value }) => cur + value, 0),
      props: propForUnused
    }
    let tratios: RatioItem[] = hasUnused
      ? [...ratios, unUsedRatioItem]
      : ratios
    setTratios(tratios)
  }, [ratios, hasUnused])

  let left = 0, items = tmpRatios.length
    ? tmpRatios
    : tratios

  return (<ContainerComponent ref={ref}
    items={items.map((item, i) => {
      const { value, name, props } = item
      if (!width) return null
      let tleft = left, twidth = width * value / tmax
      left += twidth
      return (<ItemComponent {...props}
        name={name}
        key={i}
        value={value}
        text={toText(item)}
        title={toTitle(item)}
        offset={tleft}
        length={twidth}
        colorScheme={colors[i]}
      />)
    })}
    controls={(!onChange || !width) ? null : (<ControlsComponent
      width={width}
      max={tmax}
      min={min}
      toFixed={toFixed}
      ratios={tratios}
      onChange={(ratios: RatioItem[], flush: boolean) => {
        if (!flush) {
          return setTmpRatios(ratios)
        }
        setTmpRatios([])
        if (hasUnused) {
          ratios.pop()
        }
        onChange(ratios)
      }}
    />)}
  />)
}

export default RatioInputs

function getColors(num: number) {
  let arr = new Array(num), curHue = 0, hueOffset = Math.floor(360 / num) || 1;
  for (let i = 0; i < num; i++) {
    curHue = (curHue + hueOffset) % 360
    arr[i] = {
      color: `hsl(${curHue}, 30%, 50%)`,
      backgroundColor: `hsl(${curHue}, 70%, 50%)`
    }
  }
  return shuffle(1)(arr)
}

