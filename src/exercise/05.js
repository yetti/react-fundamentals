// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({style, size="", ...otherProps}) {
  const boxSize = size ? `box--${size}` : ''
  return (
    <div className={`box ${boxSize}`} style={{fontStyle: 'italic', ...style}} {...otherProps} />
  )
}

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

function App() {
  return (
    <div>
      <Box size="small" style={{ backgroundColor: 'lightBlue' }}>
        small lightblue box
      </Box>
      <Box size="medium" style={{ backgroundColor: 'pink' }}>
        medium pink box
      </Box>
      <Box size="large" style={{ backgroundColor: 'orange' }}>
        large orange box
      </Box>
      <Box>unstyled box</Box>
    </div>
  )
}

export default App
