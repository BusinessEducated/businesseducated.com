/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useState } from 'react'
import DynamicForm from './dynamic-form'

export const JoinPodcast = () => { 
  return (
    <div className="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
        {/* form */}
        <DynamicForm headline={{
          title: `Join the podcast`,
          description:`We will get back to you within 7days, and look forward to speaking 🎙️`,
        }}/>
    </div>
  )
}

export default JoinPodcast
