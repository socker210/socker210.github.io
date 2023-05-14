import React, { CSSProperties } from 'react'

// TODO: fancy bg 만들기

type LineProps = {
  top: CSSProperties['top']
  height: CSSProperties['height']
}

const lines: LineProps[] = [
  { top: '40%', height: 10 },
  { top: '50%', height: 10 },
  { top: '65%', height: 10 },
  { top: '75%', height: 10 },
  { top: '85%', height: 10 },
  { top: '90%', height: 6 },
  { top: '95%', height: 3 },
]

const Line: React.FC<LineProps> = ({ top, height }) => {
  return (
    <div
      className='absolute left-0 right-0 bg-background'
      style={{ top, height }}
    />
  )
}

const Moon: React.FC = () => {
  return (
    <div className='relative w-80 h-80 overflow-hidden border-0 rounded-full bg-gradient-to-b from-primary to-secondary shadow-secondary-lg'>
      {lines.map((line, i) => (
        <Line key={i} {...line} />
      ))}
    </div>
  )
}

export default Moon
