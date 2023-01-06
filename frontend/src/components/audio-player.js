import React, { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import marked from 'marked'

const ContentAudioPlayer = ({ content }) => {
  // Parse the content field using marked
  const parsedContent = marked(content)

  // Extract the words from the parsed content
  const words = parsedContent.split(' ')

  // Create a state variable to store the current audio file
  const [currentAudio, setCurrentAudio] = useState(null)

  // Function to play the audio file for a given word
  const playAudio = (word) => {
    // Find the audio file for the given word
    const audioFile = findAudioFile(word)

    // Set the current audio file
    setCurrentAudio(audioFile)
  }

  // Function to find the audio file for a given word
  const findAudioFile = (word) => {
    // Replace the word with an underscore and add the .mp3 extension
    // to get the audio file name
    const audioFile = `${word.replace(/\W/g, '_')}.mp3`

    // Return the audio file
    return audioFile
  }

  // Render the audio player and the parsed content with clickable words
  return (
    <>
      {currentAudio && (
        <AudioPlayer
          src={currentAudio}
          onPlay={() => {
            console.log('Audio playing')
          }}
          onPause={() => console.log('Audio paused')}
          onEnded={() => setCurrentAudio(null)}
        />
      )}
    </>
  )
}

export default ContentAudioPlayer
