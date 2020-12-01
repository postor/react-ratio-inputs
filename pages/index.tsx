

import { useState } from 'react'
import RatioInputs from '../lib/RatioInputs'


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
      }}
      // max={200}
      min={80}
    />
    <pre>{JSON.stringify(ratios, null, 2)}</pre>
  </div>)
}

export default Index