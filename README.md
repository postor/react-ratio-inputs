# react-ratio-inputs
用来分配百分比/比例的 react 组件 | react componet for assigning percentages/ratios

## 使用 | usage

```


import { useState } from 'react'
import RatioInputs from 'react-ratio-inputs'


const Index = () => {
  let [ratios, setRatios] = useState([
    { name: '自己', value: 98 },
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
    />
    <pre>{JSON.stringify(ratios, null, 2)}</pre>
  </div>)
}

export default Index
```
