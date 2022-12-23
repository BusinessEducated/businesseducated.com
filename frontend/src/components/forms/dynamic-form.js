/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useState } from 'react'

import { Switch } from '@headlessui/react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import DynamicField from './fields/dynamic-field'
import { Link } from 'gatsby'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const JoinPodcast = ({
  headline={
    title: "Join the podcast 🎙️",
    description: '',
  },
  fields = [
    {
      name: 'firstName',
      cols: 3,
      validation: Yup.string().required('please enter your first name'),
      type: 'text',
      icon: ()=><></>,
      placeholder: '',
      required: true,
    },
    {
      name: 'lastName',
      cols: 3,
      validation: Yup.string().required('please enter your last name'),
      type: 'text',
      icon: ()=><></>,
      placeholder: '',
      required: true,
    },
    {
      name: 'email',
      cols: 6,
      validation: Yup.string()
        .email('invalid email address')
        .required('email is required to contact you'),
      type: 'email',
      icon: ()=><></>,
      placeholder: '',
      required: true,
    },
    {
      name: 'phone',
      cols: 6,
      validation: Yup.string()
        .matches(/a/, 'invalid phone number')
        .required('phone is required to contact you'),
      type: 'tel',
      icon: ()=><></>,
      placeholder: '',
      required: false,
    },
    {
      name: 'message',
      cols: 6,
      validation: Yup.string()
        .matches(/a/, 'invalid message')
        .required('please write a message to us to help us cater the podcast to your needs'),
      type: 'textarea',
      icon: ()=><></>,
      placeholder: 'write you message here',
      required: false,
    },
  ],
}) => {
  
  const [agreed, setAgreed] = useState(false)

  //generate form data for formik
  const createFormData = useCallback(
    (fields) => {
      let initialValues = {}
      let validationSchema = {}

      fields.forEach((field) => {
        initialValues[field?.name] = ''
        validationSchema[field?.name] = field.validation
      })

      return [initialValues, Yup.object().shape(validationSchema)]
    },
    [fields],
  )

  const {initialValues, validationSchema} = createFormData(fields);

  const handleSubmit = (e,validate) => {
    if(agreed){

    }
  }

  return (
    <div className="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-xl">

        {/* pattern */}
        <svg
          className="absolute left-full translate-x-1/2 transform"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        
        {/* pattern */}
        <svg
          className="absolute right-full bottom-0 -translate-x-1/2 transform"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>

        {/* headline */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {headline.title}
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            {headline.description}
          </p>
        </div>

        {/* form */}
        <div className="mt-12">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {({
              errors,
              handleReset,
              isValid,
              isValidating,
              status,
              validateForm,
            }) => {
              return (
                <>
                  <div className="grid grid-cols-6 gap-6"> 

                    {/* generate fields from field schema defined */}
                    {fields.map((fieldSchema) => (
                      <DynamicField fieldSchema={fieldSchema} errors={errors} />
                    ))}
                  </div>

                  <div className="sm:col-span-2 my-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <Switch
                          checked={agreed}
                          onChange={setAgreed}
                          className={classNames(
                            agreed ? 'bg-red-600' : 'bg-gray-200',
                            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2',
                          )}
                        >
                          <span className="sr-only">Agree to policies</span>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              agreed ? 'translate-x-5' : 'translate-x-0',
                              'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                            )}
                          />
                        </Switch>
                      </div>
                      <div className="ml-3">
                        <p className="text-base text-gray-500">
                          By selecting this, you agree to the{' '}
                          <Link
                            to="/privacy-policy"
                            className="font-medium text-gray-700 underline"
                          >
                            Privacy Policy
                          </Link>
                          {' '}and{' '}
                          <Link
                            to="/cookie-policy"
                            className="font-medium text-gray-700 underline"
                          >
                            Cookie Policy
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      onClick={handleSubmit}
                      disabled={agreed}
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Let's talk
                    </button>
                  </div>
                </>
              )
            }}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default JoinPodcast
