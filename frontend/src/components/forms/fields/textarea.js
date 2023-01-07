import React from 'react'
import { Tab } from '@headlessui/react'
import {
  AtSymbolIcon,
  CodeBracketIcon,
  LinkIcon,
} from '@heroicons/react/20/solid'
import { addSpace } from '../../util/customHooks'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const TextArea = ({
  name,
  value,
  type,
  icon,
  placeholder,
  required,
  onChange,
  ...props
}) => {
  const Icon = icon
  return (
    <div action="#" className="w-full relative">
      <Tab.Group>
        {/* {({ selectedIndex }) => ( */}
        <>
          <Tab.List className="flex items-center">
            <Tab
              className={({ selected }) =>
                classNames(
                  selected
                    ? 'text-gray-900 bg-gray-100 hover:bg-gray-200'
                    : 'text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100',
                  'rounded-md border border-transparent px-3 py-1.5 text-sm font-medium',
                )
              }
            >
              Write
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  selected
                    ? 'text-gray-900 bg-gray-100 hover:bg-gray-200'
                    : 'text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100',
                  'ml-2 rounded-md border border-transparent px-3 py-1.5 text-sm font-medium',
                )
              }
            >
              Preview
            </Tab>

            {/* These buttons are here simply as examples and don't actually do anything. */}
            {/* {selectedIndex === 0 ? (
                <div className="ml-auto flex items-center space-x-5">
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Insert link</span>
                      <LinkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Insert code</span>
                      <CodeBracketIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Mention someone</span>
                      <AtSymbolIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              ) : null} */}
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
              <label htmlFor="comment" className="sr-only">
                {addSpace(name)}
              </label>
              <div>
                <textarea
                  inlist={true}
                  wrap={true}
                  onChange={onChange}
                  value={value}
                  rows={5}
                  name={name}
                  id={name}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm min-h-[200px] h-fit max-h-[400px]"
                  placeholder="Add your comment..."
                  // defaultValue={''}
                />
              </div>
            </Tab.Panel>
            <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
              <div className="border-b">
                <div className="mx-px mt-px px-3 pt-2 pb-12 text-sm leading-5 text-gray-800">
                  {value}
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </>
        {/* )} */}
      </Tab.Group>
    </div>
  )
}

export default TextArea
