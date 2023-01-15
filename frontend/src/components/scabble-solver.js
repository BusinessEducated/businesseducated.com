import React, { useCallback, useEffect, useMemo, useState } from 'react'

// function flattenArray(arr) {
//   let flat = [].concat(...arr)
//   return flat.some(Array.isArray) ? flattenArray(flat) : flat
// }

function WordFinder() {
  const [result, setResult] = useState('')
  const [letters, setLetters] = useState('scrabble'.split(''))
  const [maxSize, setMaxSize] = useState(7)
  const [words, setWords] = useState(['', ''])

  async function getDictionaryWords() {
    // URL for a public dictionary of words
    const dictionaryUrl =
      'https://raw.githubusercontent.com/dwyl/english-words/master/words.txt'
    try {
      const response = await fetch(dictionaryUrl)
      const data = await response.text()
      // split the text by newline characters to get an array of words
      const words = data.split('\n', 5000000)
      return words
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(async () => {
    // list of words that can be made from the given letters
    const requestedWords = await getDictionaryWords()
    setWords(requestedWords)
  }, [])

  const longestWordNoMax = async (letters) => {
    // variable to store the longest word
    let longest = ''
    // loop through the list of words
    for (let i = 0; i < words.length; i++) {
      // variable to store the current word
      let word = words[i]
      // variable to store whether the word can be made from the given letters
      let canMakeWord = true
      // loop through the letters in the current word
      for (let j = 0; j < word.length; j++) {
        // check if the letter exists in the given letters
        if (!letters.includes(word[j])) {
          canMakeWord = false
          break
        }
      }
      // check if the current word is longer than the previous longest word
      if (canMakeWord && word.length > longest.length) {
        longest = word
      }
    }
    return longest
  }

  const longestWord = useMemo(() => {
    if (words) {
      let memo = {}
      let longest = ''
      for (let i = 0; i < words.length; i++) {
        let word = words[i]
        if (word.length > maxSize) {
          continue
        }
        if (word in memo) {
          let canMakeWord = memo[word]
          if (canMakeWord && word.length > longest.length) {
            longest = word
          }
          continue
        }
        let canMakeWord = true
        let lettersCopy = [...letters]
        for (let j = 0; j < word.length; j++) {
          if (!lettersCopy.includes(word[j])) {
            canMakeWord = false
            break
          }
          const letterIndex = lettersCopy.indexOf(word[j])
          lettersCopy.splice(letterIndex, 1)
        }
        memo[word] = canMakeWord
        if (canMakeWord && word.length > longest.length) {
          longest = word
        }
      }
      return longest || 'no word found'
    } else return 'none'
  }, [letters])

  const longestWords = useMemo(() => {
    if (words) {
      let memo = {}
      let longestWords = []
      for (let i = 0; i < words.length; i++) {
        let word = words[i]
        if (word.length > maxSize) {
          continue
        }
        if (word in memo) {
          let canMakeWord = memo[word]
          if (canMakeWord) {
            longestWords.push(word)
          }
          continue
        }
        let canMakeWord = true
        let lettersCopy = [...letters]
        for (let j = 0; j < word.length; j++) {
          if (!lettersCopy.includes(word[j])) {
            canMakeWord = false
            break
          }
          const letterIndex = lettersCopy.indexOf(word[j])
          lettersCopy.splice(letterIndex, 1)
        }
        memo[word] = canMakeWord
        if (canMakeWord) {
          longestWords.push(word)
        }
      }
      const res = longestWords.sort((a, b) => b.length - a.length)
      return res.length > 0 ? res : 'no words found'
    } else return 'none'
  }, [letters])

  return (
    <div className="min-h-[600px] max-w-4xl mx-auto w-full flex flex-col justify-center items-center gap-5 p-12">
      <div className="w-full relative shadow-md rounded-2xl p-6 bg-gray-50 flex flex-col gap-4 items-center justify-center">
        <div className="w-full relative shadow-md rounded-2xl p-6 bg-gray-50 flex flex-row gap-4 items-center justify-center">
          <label className="flex text-sm font-medium text-gray-700 gap-1 mb-2">
            Letters
          </label>
          <input
            className="flex text-sm font-medium text-gray-700 gap-1 mb-2 rounded-md"
            type="text"
            value={letters}
            placeholder="scrabble"
            onChange={(e) => setLetters(e.target.value)?.split('')}
          />
          <label className="flex text-sm font-medium text-gray-700 gap-1 mb-2">
            Max Length
          </label>
          <input
            className="flex text-sm font-medium text-gray-700 gap-1 mb-2 rounded-md"
            type="number"
            value={maxSize}
            onChange={(e) => setMaxSize(e.target.value)}
          />
        </div>
        <div className="w-full text-base text-bold grid grid-cols-12 border border-gray-300 divide-x divide-y rounded-md divide-gray-300 text-center items-center">
          {longestWords.map((word) => (
            <div className="block col-span-4">{word}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WordFinder
