import React, { FunctionComponent, forwardRef } from 'react'

const DefaultContainer: FunctionComponent<{
  items: [], labels: any, controls: any, style?: any
}> = forwardRef((props, ref) => {
  let { style, items, labels, controls } = props
  // @ts-ignore
  return <div ref={ref} style={{
    position: 'relative',
    userSelect: 'none',
    ...style,
  }}
    onSelect={() => false}
  >
    <div style={{ position: 'relative', height: 32 }}>
      {items}
    </div>
    {controls}
    <div>
      {labels}
    </div>
  </div>
})

export default DefaultContainer