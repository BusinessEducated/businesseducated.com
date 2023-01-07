import React from 'react'
import Layout from '../../layout/layout'
import SEO from '../../layout/seo'
import { ArrowStepper } from '../../components/forms/stepper'
import * as Yup from 'yup'

import {
  CalendarDaysIcon,
  ChatBubbleOvalLeftIcon,
  CheckIcon,
  MapIcon,
} from '@heroicons/react/20/solid'
import {
  Bars3CenterLeftIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  ClockIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  HandRaisedIcon,
  PhoneIcon,
  UserGroupIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import BOOKING from '../../../static/assets/booking.png'
import ASSISTANCE from '../../../static/assets/assistance.png'
import COMPANY from '../../../static/assets/company.png'
import TAKEOFF from '../../../static/assets/takeoff.png'
import AIDEN_FAULCONER from '../../../static/assets/aiden.png'
import JAMES_BOON from '../../../static/assets/james.png'

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="mt-24">
        <ArrowStepper
          formName={'bookingForm'}
          schema={[
            {
              step: '1',
              image: BOOKING,
              name: 'Details',
              status: 'current',
              fields: [
                {
                  name: 'firstName',
                  cols: 3,
                  validation: Yup.string().required(
                    'please enter your first name',
                  ),
                  type: 'text',
                  icon: UserIcon,
                  placeholder: '',
                  required: true,
                },
                {
                  name: 'lastName',
                  cols: 3,
                  validation: Yup.string().required(
                    'please enter your last name',
                  ),
                  type: 'text',
                  icon: UserIcon,
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
                  icon: EnvelopeIcon,
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
                  icon: PhoneIcon,
                  placeholder: '',
                  required: false,
                },
              ],
            },
            {
              step: '2',
              image: COMPANY,
              name: 'Company',
              status: 'upcoming',
              fields: [
                {
                  name: 'companyName',
                  cols: 3,
                  validation: Yup.string().required(
                    'company name is required to investigate your issue further',
                  ),
                  type: 'text',
                  icon: BuildingLibraryIcon,
                  placeholder: '',
                  required: true,
                },
                {
                  name: 'companySize',
                  cols: 3,
                  validation: Yup.string(),
                  type: 'select',
                  icon: UserGroupIcon,
                  placeholder: '',
                  required: true,
                  options: [
                    { name: '0-10' },
                    { name: '10-300' },
                    { name: '300-1000' },
                    { name: '1000-10000' },
                    { name: '10000-100000' },
                  ],
                },
                {
                  name: 'companyType',
                  cols: 6,
                  validation: Yup.string(),
                  type: 'select',
                  icon: BuildingOffice2Icon,
                  placeholder: '',
                  required: true,
                  options: [
                    {
                      name: 'LLC',
                      description:
                        'This is a type of business that combines elements of a partnership and a corporation. LLC owners, known as members, have limited liability for the debts and obligations of the business and can choose to be taxed as a partnership or a corporation.',
                    },
                    {
                      name: 'Cooperative',
                      description:
                        'This is a type of business owned and operated by a group of individuals who work together to achieve a common goal, such as providing goods or services to its members.',
                    },
                    {
                      name: 'Nonprofit',
                      description:
                        'This is a type of business that is organized for charitable, educational, or other public-benefit purposes and is exempt from paying taxes on income derived from its operations.',
                    },
                    {
                      name: 'Government Agency',
                      description:
                        'This is a type of business that is owned and operated by a government entity and is responsible for carrying out specific public functions or providing services to the community.',
                    },
                    {
                      name: 'Partnership',
                      description:
                        'This is a type of business owned and operated by two or more individuals, who share the profits and losses of the business. Partnerships can be further classified into different types, such as general partnerships, limited partnerships, and limited liability partnerships.',
                    },
                    {
                      name: 'Sole proprietorship',
                      description:
                        'This is a type of business owned and operated by a single individual. The owner is responsible for all aspects of the business and is personally liable for its debts and obligations.',
                    },
                  ],
                },
                {
                  name: 'abn',
                  cols: 6,
                  validation: Yup.string()
                    .matches(/^(\d *?){11}$/)
                    .required('abn needed to identify your business'),
                  type: 'number',
                  icon: BuildingOfficeIcon,
                  placeholder: '',
                  required: true,
                },
                {
                  name: 'role',
                  cols: 3,
                  validation: Yup.string().required(
                    'role required for context around your issue',
                  ),
                  type: 'text',
                  icon: HandRaisedIcon,
                  placeholder: '',
                  required: true,
                },
                {
                  name: 'companyServices',
                  cols: 3,
                  validation: Yup.string(),
                  type: 'select',
                  icon: BriefcaseIcon,
                  placeholder: '',
                  required: true,
                  options: [
                    { name: 'Information Services' },
                    { name: 'Manufacturing Services' },
                    { name: 'Hospitality Services' },
                    { name: 'Transportation Services' },
                    { name: 'Education Services' },
                    { name: 'Marketting Services' },
                    { name: 'Graphic Design Services' },
                    { name: 'Software Services' },
                    { name: 'Professional Services' },
                    { name: 'Labor Services' },
                    { name: 'Customer Service' },
                    { name: 'Commerce Services' },
                    { name: 'Retail Services' },
                    { name: 'Product Services' },
                    { name: 'Consultation Services' },
                    { name: 'Legal Services' },
                    { name: 'Financial Services' },
                    { name: 'Logistics Services' },
                    { name: 'Real Estate Services' },
                    { name: 'Landscaping Services' },
                    { name: 'Event Planning Services' },
                    { name: 'Environmental Services' },
                    { name: 'Security Services' },
                    { name: 'Printing Services' },
                    { name: 'Recruitment Services' },
                    { name: 'Translation Services' },
                    { name: 'Data Services' },
                    { name: 'Public Relations Services' },
                    { name: 'Virtual Services' },
                    { name: 'Vetinary Services' },
                    { name: 'Mental Health Services' },
                    { name: 'Medical Services' },
                    { name: 'Coaching Services' },
                  ],
                },
              ],
            },
            {
              step: '3',
              image: ASSISTANCE,
              name: 'What you need assistance with',
              status: 'upcoming',
              fields: [
                {
                  name: 'problemDescription',
                  cols: 6,
                  validation: Yup.string()
                    .min(
                      200,
                      'use a minimum of 200 words to describe your problem',
                    )
                    .required(
                      'we need to understand the issue your seeking assistance with',
                    ),
                  type: 'textarea',
                  icon: Bars3CenterLeftIcon,
                  placeholder: '',
                  required: true,
                },
                {
                  name: 'serviceType',
                  cols: 6,
                  validation: Yup.string(),
                  type: 'select',
                  icon: BuildingStorefrontIcon,
                  placeholder: 'Business Planning & strategy',
                  required: true,
                  options: [
                    {
                      name: 'Marketing & branding',
                      description:
                        'This type of consultation service helps businesses develop and implement effective marketing and branding strategies to reach their target audience and differentiate themselves from competitors.',
                    },
                    {
                      name: 'Business Planning & strategy',
                      description:
                        ' This service involves helping businesses develop and execute a plan for achieving their long-term goals and objectives.',
                    },
                    {
                      name: 'Financial planning & analysis',
                      description:
                        'This service involves helping businesses develop and manage their financial plans, including budgeting, forecasting, and analyzing financial performance.',
                    },
                    {
                      name: 'Human resources & organizational development',
                      description:
                        'This service involves helping businesses develop and implement effective HR policies and practices, as well as optimize organizational structure and processes.',
                    },
                    {
                      name: 'Operations & process improvement',
                      description:
                        'This service involves helping businesses optimize their operations and processes to increase efficiency and productivity.',
                    },
                    {
                      name: 'Business growth & expansion',
                      description:
                        'This service involves helping businesses identify and pursue opportunities for growth and expansion, such as entering new markets or launching new products or services.',
                    },
                    {
                      name: 'Legal & compliance',
                      description:
                        'This service involves helping businesses understand and comply with legal requirements and regulations applicable to their business.',
                    },
                    {
                      name: 'Information technology & digital transformation',
                      description:
                        'This service involves helping businesses leverage technology and digital tools to drive business growth and efficiency.',
                    },
                    {
                      name: 'Sustainability & corporate social responsibility',
                      description:
                        'This service involves helping businesses develop and implement strategies for operating in a socially and environmentally responsible manner.',
                    },
                    {
                      name: 'Leadership & management development',
                      description:
                        'This service involves helping businesses develop the leadership and management skills of their team members to support business growth and success.',
                    },
                  ],
                },
                {
                  name: 'attachments',
                  cols: 6,
                  validation: Yup.array()
                    .of(
                      Yup.mixed().test(
                        'file-type',
                        'Invalid file type',
                        (value) => value && value.type === 'image/jpeg',
                      ),
                    )
                    .test(
                      'file-size',
                      'File is too large',
                      (value) =>
                        !value || value.every((file) => file.size <= 1000000),
                    ),
                  type: 'upload',
                  icon: DocumentTextIcon,
                  placeholder: '',
                  required: false,
                  max: 4,
                  allow: ['pdf', 'docx', 'url', 'png', 'jpg', 'jpeg', 'txt'],
                },
              ],
            },
            {
              step: '4',
              image: TAKEOFF,
              name: 'Consultation details',
              status: 'upcoming',
              fields: [
                {
                  name: 'duration',
                  cols: 6,
                  validation: Yup.number().required(
                    'you must give a duration for the consultation session',
                  ),
                  type: 'number',
                  icon: ClockIcon,
                  placeholder: 1,
                  required: true,
                  max: 3,
                },
                {
                  name: 'consultant',
                  cols: 6,
                  validation: Yup.string(),
                  type: 'multiselect',
                  icon: UserIcon,
                  placeholder: 'Aiden Faulconer',
                  required: true,
                  options: [
                    {
                      name: 'Aiden Faulconer',
                      email: 'aidenf09@yahoo.com',
                      imageSrc: AIDEN_FAULCONER,
                      role: 'Senior digital business consultant',
                      specialties: [
                        'software',
                        'digital',
                        'business',
                        'graphic design',
                        'marketing',
                        'management',
                      ],
                      rate: 150,
                      availability: [new Date(), new Date()],
                    },
                    {
                      name: 'James Boon',
                      email: 'boongardenscapes@gmail.com',
                      imageSrc: JAMES_BOON,
                      role: 'Senior services business consultant',
                      specialties: [
                        'landscaping',
                        'contracting',
                        'business',
                        'marketing',
                        'management',
                      ],
                      rate: 150,
                      availability: [new Date(), new Date()],
                    },
                  ],
                },
                {
                  name: 'date',
                  cols: 6,
                  validation: '',
                  type: 'date',
                  icon: CalendarDaysIcon,
                  placeholder: '',
                  required: true,
                },
                // { name: 'address',  cols: 6, validation: '', type: 'address', icon: MapIcon, placeholder: '', required: false },
                {
                  name: 'messageToConsultant',
                  cols: 6,
                  validation: '',

                  type: 'textarea',
                  icon: ChatBubbleOvalLeftIcon,
                  placeholder: '',
                  required: false,
                },
              ],
            },
          ]}
        />
      </section>
    </Layout>
  )
}

export default IndexPage
