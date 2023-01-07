import React from 'react'
import { useScrollProgress } from './util/customHooks'

export default () => {
  const scrollProgress = useScrollProgress()

  return (
    <div className="bg-gray-100 h-1 w-full relative">
      <div className="bg-BEred h-1" style={{ width: `${scrollProgress}%` }} />
    </div>
  )
}
