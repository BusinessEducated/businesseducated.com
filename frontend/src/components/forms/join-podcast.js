/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useState } from 'react'
import DynamicForm from './dynamic-form'
import * as Yup from 'yup'

export const JoinPodcast = () => {
  return (
    <div className="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
      {/* form */}
      <DynamicForm
        method="POST"
        action={`http://${process.env.SERVER_URL}${process.env.API_ENDPOINT}podcast`}
        formName={'podcastForm'}
        headline={{
          title: `Join the podcast`,
          description: `We will get back to you within 7days, and look forward to speaking 🎙️`,
        }}
        fields={[
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
              .matches(/^\d{10,15}$/, 'invalid phone number')
              .required('phone is required to contact you'),
            type: 'tel',
            icon: () => <></>,
            placeholder: '',
            required: false,
          },
          // {
          //   name: 'availability',
          //   cols: 6,
          //   validation: Yup.string()
          //     .matches(/^\d{10,15}$/, 'invalid phone number')
          //     .required('phone is required to contact you'),
          //   type: 'date',
          //   icon: () => <></>,
          //   placeholder: '',
          //   required: false,
          // },
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
        ]}
      />
    </div>
  )
}

export default JoinPodcast
