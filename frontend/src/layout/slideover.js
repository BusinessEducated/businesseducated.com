import React, { Fragment, useState } from 'react';

import { Dialog, Transition, Menu } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { LinkIcon, PlusIcon, QuestionMarkCircleIcon , EllipsisVerticalIcon } from '@heroicons/react/20/solid' 


//#region create 
const team = [
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Whitney Francis',
    email: 'whitney.francis@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leonard Krasner',
    email: 'leonard.krasner@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Floyd Miles',
    email: 'floy.dmiles@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Emily Selman',
    email: 'emily.selman@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export const SlideOverCreate = () => {
  const [open, setOpen] = useState(true)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                  <form className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1">
                      {/* Header */}
                      <div className="bg-gray-50 px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between space-x-3">
                          <div className="space-y-1">
                            <Dialog.Title className="text-lg font-medium text-gray-900">New project</Dialog.Title>
                            <p className="text-sm text-gray-500">
                              Get started by filling in the information below to create your new project.
                            </p>
                          </div>
                          <div className="flex h-7 items-center">
                            <button
                              type="button"
                              className="text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Divider container */}
                      <div className="space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0">
                        {/* Project name */}
                        <div className="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <div>
                            <label
                              htmlFor="project-name"
                              className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >
                              Project name
                            </label>
                          </div>
                          <div className="sm:col-span-2">
                            <input
                              type="text"
                              name="project-name"
                              id="project-name"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        {/* Project description */}
                        <div className="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <div>
                            <label
                              htmlFor="project-description"
                              className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >
                              Description
                            </label>
                          </div>
                          <div className="sm:col-span-2">
                            <textarea
                              id="project-description"
                              name="project-description"
                              rows={3}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                              defaultValue={''}
                            />
                          </div>
                        </div>

                        {/* Team members */}
                        <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <div>
                            <h3 className="text-sm font-medium text-gray-900">Team Members</h3>
                          </div>
                          <div className="sm:col-span-2">
                            <div className="flex space-x-2">
                              {team.map((person) => (
                                <a
                                  key={person.email}
                                  href={person.href}
                                  className="flex-shrink-0 rounded-full hover:opacity-75"
                                >
                                  <img
                                    className="inline-block h-8 w-8 rounded-full"
                                    src={person.imageUrl}
                                    alt={person.name}
                                  />
                                </a>
                              ))}

                              <button
                                type="button"
                                className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-dashed border-gray-200 bg-white text-gray-400 hover:border-gray-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                              >
                                <span className="sr-only">Add team member</span>
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Privacy */}
                        <fieldset className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <legend className="sr-only">Privacy</legend>
                          <div className="text-sm font-medium text-gray-900" aria-hidden="true">
                            Privacy
                          </div>
                          <div className="space-y-5 sm:col-span-2">
                            <div className="space-y-5 sm:mt-0">
                              <div className="relative flex items-start">
                                <div className="absolute flex h-5 items-center">
                                  <input
                                    id="public-access"
                                    name="privacy"
                                    aria-describedby="public-access-description"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                                    defaultChecked
                                  />
                                </div>
                                <div className="pl-7 text-sm">
                                  <label htmlFor="public-access" className="font-medium text-gray-900">
                                    Public access
                                  </label>
                                  <p id="public-access-description" className="text-gray-500">
                                    Everyone with the link will see this project
                                  </p>
                                </div>
                              </div>
                              <div className="relative flex items-start">
                                <div className="absolute flex h-5 items-center">
                                  <input
                                    id="restricted-access"
                                    name="privacy"
                                    aria-describedby="restricted-access-description"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                                  />
                                </div>
                                <div className="pl-7 text-sm">
                                  <label htmlFor="restricted-access" className="font-medium text-gray-900">
                                    Private to Project Members
                                  </label>
                                  <p id="restricted-access-description" className="text-gray-500">
                                    Only members of this project would be able to access
                                  </p>
                                </div>
                              </div>
                              <div className="relative flex items-start">
                                <div className="absolute flex h-5 items-center">
                                  <input
                                    id="private-access"
                                    name="privacy"
                                    aria-describedby="private-access-description"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                                  />
                                </div>
                                <div className="pl-7 text-sm">
                                  <label htmlFor="private-access" className="font-medium text-gray-900">
                                    Private to you
                                  </label>
                                  <p id="private-access-description" className="text-gray-500">
                                    You are the only one able to access this project
                                  </p>
                                </div>
                              </div>
                            </div>
                            <hr className="border-gray-200" />
                            <div className="space-between sm:space-between flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0">
                              <div className="flex-1">
                                <a
                                  href="#"
                                  className="group flex items-center space-x-2.5 text-sm font-medium text-red-600 hover:text-red-900"
                                >
                                  <LinkIcon
                                    className="h-5 w-5 text-red-500 group-hover:text-red-900"
                                    aria-hidden="true"
                                  />
                                  <span>Copy link</span>
                                </a>
                              </div>
                              <div>
                                <a
                                  href="#"
                                  className="group flex items-center space-x-2.5 text-sm text-gray-500 hover:text-gray-900"
                                >
                                  <QuestionMarkCircleIcon
                                    className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  />
                                  <span>Learn more about sharing</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
                      <div className="flex justify-end space-x-3">
                        <button
                          type="button"
                          className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                          Create
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

//#endregion

//#region view 
const tabs = [
  { name: 'All', href: '#', current: true },
  { name: 'Online', href: '#', current: false },
  { name: 'Offline', href: '#', current: false },
]
const team2 = [
  {
    name: 'Leslie Alexander',
    handle: 'lesliealexander',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'online',
  },
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const SlideOverView = () => {
  const [open, setOpen] = useState(true)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Team2</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-red-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-gray-200">
                      <div className="px-6">
                        <nav className="-mb-px flex space-x-6" x-descriptions="Tab component">
                          {tabs.map((tab) => (
                            <a
                              key={tab.name}
                              href={tab.href}
                              className={classNames(
                                tab.current
                                  ? 'border-red-500 text-red-600'
                                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
                              )}
                            >
                              {tab.name}
                            </a>
                          ))}
                        </nav>
                      </div>
                    </div>
                    <ul role="list" className="flex-1 divide-y divide-gray-200 overflow-y-auto">
                      {team2.map((person) => (
                        <li key={person.handle}>
                          <div className="group relative flex items-center py-6 px-5">
                            <a href={person.href} className="-m-1 block flex-1 p-1">
                              <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true" />
                              <div className="relative flex min-w-0 flex-1 items-center">
                                <span className="relative inline-block flex-shrink-0">
                                  <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                                  <span
                                    className={classNames(
                                      person.status === 'online' ? 'bg-green-400' : 'bg-gray-300',
                                      'absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white'
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                                <div className="ml-4 truncate">
                                  <p className="truncate text-sm font-medium text-gray-900">{person.name}</p>
                                  <p className="truncate text-sm text-gray-500">{'@' + person.handle}</p>
                                </div>
                              </div>
                            </a>
                            <Menu as="div" className="relative ml-2 inline-block flex-shrink-0 text-left">
                              <Menu.Button className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                                <span className="sr-only">Open options menu</span>
                                <span className="flex h-full w-full items-center justify-center rounded-full">
                                  <EllipsisVerticalIcon
                                    className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  />
                                </span>
                              </Menu.Button>
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items className="absolute top-0 right-9 z-10 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                  <div className="py-1">
                                    <Menu.Item>
                                      {({ active }) => (
                                        <a
                                          href="#"
                                          className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                          )}
                                        >
                                          View profile
                                        </a>
                                      )}
                                    </Menu.Item>
                                    <Menu.Item>
                                      {({ active }) => (
                                        <a
                                          href="#"
                                          className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                          )}
                                        >
                                          Send message
                                        </a>
                                      )}
                                    </Menu.Item>
                                  </div>
                                </Menu.Items>
                              </Transition>
                            </Menu>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

//#endregion