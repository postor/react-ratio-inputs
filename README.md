# react-ratio-inputs
用来分配百分比/比例的 react 组件 | react componet for assigning percentages/ratios

## 使用 | usage

```


import { useState } from 'react'
import RatioInputs from 'react-ratio-inputs'


const Index = () => {
  let [ratios, setRatios] = useState([
    { 
      name: '自己', // 名称 | name
      value: 98, // 值 | value
      props: { style: { fontWeight: 'bold' } } // 额外的属性 | extra props
    },
    { name: '海盗2', value: 0 },
    { name: '海盗3', value: 1 },
    { name: '海盗4', value: 0 },
    { name: '海盗5', value: 1 },
  ])
  return (<div>
    <p>海盗分金</p>
    <RatioInputs
      ratios={ratios}
      onChange={(ratios: any) => {
        setRatios(ratios)
      }} // 如不提供 onChange 则不会显示控制杆 | if no onChange provided, controls will not show
      // max={200} // 如指定最大总和 | maximum sum
      // min={80}  // 如指定最小总和 | minimum sum
      // toText={({name,value})=>`${name}:${value}`}    // 显示文本 | text
      // toTitle={({ name, value }) => `${name} got ${value} coins`}   // 悬停提示 | title
      // hue2color={hue => `hsl(${hue}, 80%, 90%)`}  // 文字颜色 | color
      // hue2backgroundColor={hue => `hsl(${(hue + 180) % 360}, 30%, 50%)`} // 背景色 | backgroud color
    />
    <pre>{JSON.stringify(ratios, null, 2)}</pre>
  </div>)
}

export default Index
```

使用示例 | example

code: [examples\basic\pages\index.js](./examples/basic/pages/index.js)
demo online: https://postor.github.io/react-ratio-inputs/