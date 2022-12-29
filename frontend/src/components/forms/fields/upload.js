import React, { useEffect, useState } from 'react'
import Button from '../../button'
import { LargeBadge, SmallBadge } from '../../badge'

export const UploadInput = ({
  name,
  value,
  type,
  icon,
  placeholder,
  required,
  max,
  allow,
  onChange,
  ...props
}) => {
  // hooks
  const ref = React.useRef(null)
  const [files, setFiles] = useState([])
  const getFileName = /[^/]*$/

  // methods
  const handleInput = React.useCallback(
    (files) => {
      console.log(files)
      // go through all the files and check the type of file, and file size is under 3mb and there is no more than 3 files
      if (files.length > 0) {
        //prettier-ignore
        const fileTypes = [
          'image/png',
          'image/jpeg',
          'image/jpg',
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'application/vnd.ms-excel',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          'text/csv',
        ]
        const fileSize = 5242880
        const maxFiles = 3
        const fileCount = files.length

        if (fileCount > maxFiles || files.length > maxFiles) {
          alert('You can only upload a maximum of 3 files')
          return
        }

        for (let i = 0; i < files.length; i += 1) {
          debugger
          if (fileTypes.indexOf(files[i].type) === -1) {
            alert(
              `File type not supported for ${
                files[i].name
              }, use ${fileTypes.map((type) => type).join(', ')}`,
            )
            return
          }
          if (files[i].size > fileSize) {
            alert(
              `File size for ${files[i].name} is too large (Maximum file size is 5MB)`,
            )
            return
          }
        }

        setFiles(files)
        // onChange(files)
      }
    },
    [, ref],
  )

  const generateFileTags = React.useCallback(() => {
    if (files.length > 0) {
      return files.map((file) => (
        <LargeBadge key={file.name}>
          {/* <AFIcon type="close" onClick={() => setFiles(files.filter((item) => item !== file))} /> */}
          {`${file.name}`}
        </LargeBadge>
      ))
    }
  }, [, files])

  return (
    <>
      <label htmlFor={name}>{name}</label>
      <button
        // allow users to drag and drop files on this button
        {...props}
        // className="w-full flex-nowrap flex-row h-28 mb-8"
        className="relative bg-white block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        draggable="true"
        onDragStart={(e) => e.dataTransfer.setData('text/plain', 'anything')}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault()
          const { files } = e.dataTransfer
          handleInput(files)
        }}
        // call file dialog in input
        onClick={() => {
          ref.current.click()
        }}
      >
        <span className="mt-2 block text-sm font-medium text-gray-900">
          Upload files here
        </span>
        <input
          onChange={(e) => handleInput(e.target.files || null)}
          ref={ref}
          type="file"
          id={name}
          name={name}
          hidden
          multiple
        />
        {generateFileTags()}
        {/* {files.length === 0 && label} */}
      </button>
    </>
  )
}

export default UploadInput
