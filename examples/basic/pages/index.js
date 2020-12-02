import React, { useState } from 'react'
import RatioInputs from 'react-ratio-inputs'

const Section = ({ children, title }) => (<details>
  <summary>{title}</summary>
  <div style={{ padding: '10px 5px' }}>{children}</div>
</details>)

const defaultRatios = [
  { name: '自己', value: 98 },
  { name: '海盗2', value: 0 },
  { name: '海盗3', value: 1 },
  { name: '海盗4', value: 0 },
  { name: '海盗5', value: 1 },
]

const Index = () => {
  let [ratios, setRatios] = useState(defaultRatios)
  let [ratios2, setRatios2] = useState(defaultRatios)
  let [ratios3, setRatios3] = useState(defaultRatios.map(x => ({
    ...x,
    props: { style: { fontWeight: 'bold' } }
  })))

  return (<div>
    <h1>react-ratio-inputs</h1>
    <p>示例 | demos</p>
    <Section title="仅显示 | show only">
      <RatioInputs ratios={ratios} />
    </Section>
    <Section title="更新 | update">
      <RatioInputs ratios={ratios} onChange={ratios => setRatios(ratios)} />
    </Section>
    <Section title="最大最小值 | max and/or min">
      <RatioInputs
        ratios={ratios2}
        onChange={ratios => setRatios2(ratios)}
        min={80}
        max={120}
      />
    </Section>
    <Section title="文本颜色 | texts and colors">
      <RatioInputs
        ratios={ratios3}
        onChange={ratios => setRatios3(ratios)}
        toText={({ name, value }) => `${name}:${value} `}
        toTitle={({ name, value }) => `${name} got ${value} coins`}
        hue2color={hue => `hsl(${hue}, 80%, 90%)`}
        hue2backgroundColor={hue => `hsl(${(hue + 180) % 360}, 30%, 50%)`}
      />
    </Section>
    <Section title="未使用项 | unused item">
      <RatioInputs
        ratios={ratios2}
        onChange={ratios => setRatios2(ratios)}
        min={80}
        max={120}
        nameForUnused='none'
        propForUnused={{
          style: {
            color: '#fff',
            background: `repeating-linear-gradient(
          45deg,
          #606dbc,
          #606dbc 10px,
          #465298 10px,
          #465298 20px
        )`}
        }}
      />
    </Section>
  </div>)
}


export default Index