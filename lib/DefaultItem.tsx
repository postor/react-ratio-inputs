import React, { FunctionComponent } from 'react'

interface ColorScheme {
  color: string
  backgroundColor: string
}
interface Props {
  name: string
  value: number
  offset: number
  length: number
  colorScheme?: ColorScheme
  [key: string]: any
}

export const DefaultItem: FunctionComponent<Props> = (props) => {
  let {
    offset, length, value,
    name, colorScheme = {}
  } = props
  // @ts-ignore
  const { backgroundColor = 'transparent', color = '#000' } = colorScheme

  return <div style={{
    position: 'absolute',
    bottom: 0,
    left: offset,
    width: length,
    backgroundColor,
    lineHeight: '32px',
    color,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  }} title={`${name}(${value})`} >{`${name}(${value})`}</div>
}
