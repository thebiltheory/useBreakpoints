import React from 'react'
import useBreakpoints from 'usebreakpoints'

const App = () => {
  const breakpoints = [576, 768, 992, 1200]

  const [value, breakpoint] = useBreakpoints([1, 2, 3, 4], breakpoints)

  const [componentId] = useBreakpoints(
    ['sad', 'neutral', 'happy', 'rocket'],
    breakpoints
  )

  const list = {
    sad: (
      <span role='img' aria-label='sad'>
        😢
      </span>
    ),
    neutral: (
      <span role='img' aria-label='neutral'>
        😐
      </span>
    ),
    happy: (
      <span role='img' aria-label='happy'>
        😆
      </span>
    ),
    rocket: (
      <span role='img' aria-label='rocket'>
        🚀
      </span>
    )
  }

  const Components = ({ current }) => {
    return list[current] ? list[current] : <div>nothing</div>
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <h1
          style={{
            fontWeight: 'bold',
            fontSize: 'clamp(1em, 1em + 10vw, 3em)'
          }}
        >
          useBreakpoints
        </h1>
        <h3>{breakpoint}px</h3>
        <div
          style={{
            fontSize: 'clamp(5em, 5em + 8vw, 10em)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Components current={componentId} />
        </div>
      </div>
    </div>
  )
}

export default App
