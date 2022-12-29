import React from 'react'
import ReactConfetti from 'react-confetti'

const Confetti = ({
  colors = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
  ],
  ...props
}) => {
  return (
    <ReactConfetti
      friction={.75}
      gravity={1}
      {...props}
      numberOfPieces={200}
      recyclePiece={(piece, key) => {
        piece.key = key
        piece.setAttribute(
          'style',
          `left: ${Math.random() * 100}%; animation: confetti-animation ${Math.random() * 5 + 5}s linear infinite;`,
        ) 
      }}
    />
  )
}

export default Confetti
