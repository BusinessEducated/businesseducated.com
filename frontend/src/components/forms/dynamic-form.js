/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useState, useEffect } from 'react'

import { Switch } from '@headlessui/react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import DynamicField from './fields/dynamic-field'
import { Link } from 'gatsby'
import { useStore } from '../../store/store'
import Button from '../button'
import axios from 'axios'
import { useLocalStorage } from '../util/customHooks'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const DynamicForm = ({
  method = 'POST',
  action = '/api/',
  headline = {
    title: 'Join the podcast 🎙️',
    description: '',
  },
  formName = 'defaultForm',
  fields = [
    {
      name: 'firstName',
      cols: 3,
      validation: Yup.string().required('please enter your first name'),
      type: 'text',
      icon: () => <></>,
      placeholder: '',
      required: true,
    },
    {
      name: 'lastName',
      cols: 3,
      validation: Yup.string().required('please enter your last name'),
      type: 'text',
      icon: () => <></>,
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
      icon: () => <></>,
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
      icon: () => <></>,
      placeholder: '',
      required: false,
    },
    {
      name: 'message',
      cols: 6,
      validation: Yup.string()
        .matches(/a/, 'invalid message')
        .required(
          'please write a message to us to help us cater the podcast to your needs',
        ),
      type: 'textarea',
      icon: () => <></>,
      placeholder: 'write you message here',
      required: false,
    },
  ],
}) => {
  //ensure we check if the user agrees to the T&C's
  const [agreed, setAgreed] = useState(false)

  // Initialize the formDisabled state variable to the value stored in local storage, or false if the value does not exist
  const [formDisabled, setFormDisabled] = useLocalStorage(
    `${formName}-disabled`,
    false,
  )
  const [formExpiry, setFormExpiry] = useLocalStorage(
    `${formName}-expiry`,
    null,
  )

  //generate form data for formik
  const createFormData = (_fields) => {
    let initialValues = {}
    let validationSchema = {}

    _fields.forEach((field) => {
      initialValues[field.name] = ''
      validationSchema[field.name] = field.validation
    })
    return [initialValues, Yup.object().shape(validationSchema)]
  }
  const [initialValues, validationSchema] = createFormData(fields)

  const handleForm = async (e, values, validate) => {
    if (agreed && !formDisabled) {
      const headers = {
        // 'sec-fetch-mode': null,
        // 'sec-fetch-site': null,
        // 'referrerPolicy': null,
        // 'Access-Control-Allow-Origin': `http://${process.env.DOMAIN_NAME}:${process.env.SERVER_PORT}, *`,
        'Access-Control-Allow-Methods': null, //important, only the server has the privaledge of using these headers
        'Access-Control-Allow-Origin': null, //important, only the server has the privaledge of using these headers
        'Content-Type': 'application/json',
      }

      const body = JSON.stringify({ ...values })

      axios
        .post(action, body, { headers })
        .then((d) => {
          console.log(d)
          // Set the formDisabled state variable to true for the next 24 hours
          // Save the current time in local storage as the expiration time for the form
          setFormExpiry(Date.now())
          setFormDisabled(true)
        })
        .catch((err) => console.error(err))
    }
  }

  // Use an effect hook to check if the form is currently disabled based on the expiration time stored in local storage
  useEffect(() => {
    const renewalTime = 1
    const expirationTime = formExpiry

    //has 24 hours passed?
    if (
      expirationTime &&
      Date.now() > expirationTime + renewalTime * 60 * 60 * 1000
    ) {
      // If the current time is past the expiration time, set the formDisabled state variable to false
      setFormDisabled(false)

      // Remove the formExpiration item from local storage
      setFormExpiry(false)
    }
    //they are locked
    else if (expirationTime !== null && expirationTime) {
      setFormDisabled(true) //ensure the form stays disabled until the time is up
    }
    //first time, not locked
    else {
      setFormDisabled(false) //ensure the form stays disabled until the time is up
      setFormExpiry(false)
    }
  }, [])

  return (
    <div
      className={`overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24 rounded-lg ${
        formDisabled && 'opacity-6 bg-red-200 border-3 border border-red-600'
      }`}
    >
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
        <div className={`mt-12`}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            //       onSubmit={(values, { setSubmitting }) => {
            //   setTimeout(() => {
            //     alert(JSON.stringify(values, null, 2));
            //     setSubmitting(false);
            //   }, 400);
            // }}
          >
            {({
              errors,
              handleReset,
              isValid,
              values,
              handleChange,
              isValidating,
              handleSubmit,
              status,
              validateForm,
            }) => {
              return (
                <Form action={action} method={method}>
                  <div className="grid grid-cols-6 gap-6">
                    {/* generate fields from field schema defined */}
                    {fields.map((fieldSchema) => (
                      <DynamicField
                        fieldSchema={fieldSchema}
                        value={values[fieldSchema.name]}
                        errors={errors[fieldSchema.name]}
                        onChange={handleChange}
                        // Disable the field if the form is disabled
                        disabled={formDisabled}
                      />
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
                            target="_blank"
                            rel="noopener noreferrer"
                            to="/privacy-policy"
                            className="font-medium text-gray-700 underline"
                          >
                            Privacy Policy
                          </Link>{' '}
                          and{' '}
                          <Link
                            target="_blank"
                            rel="noopener noreferrer"
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
                  <small className="text-gray-400 text-sm italic my-6">
                    *You can only submit this form once every 24 hours
                  </small>
                  <div className="sm:col-span-2">
                    <Button
                      onClick={(e) => handleForm(e, values)}
                      disabled={!agreed || !isValid || formDisabled}
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Let's talk
                    </Button>
                  </div>
                </Form>
              )
            }}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default DynamicForm
