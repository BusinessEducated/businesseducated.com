const express = require('express')
const { sendGmail } = require('../util/gmail')
const { addToSpreadsheet } = require('../util/google-spreadsheets')
const { addToGoogleCalendar } = require('../util/google-calender')
const router = express.Router()
const LOOM_API_URL = 'https://api.loom.com/api'
const { check, validationResult } = require('express-validator/check')

const validate = () => {
  //prettier-ignore
  return [
    //details
    check('firstName').isString().isLength({ min: 1 }).withMessage('please enter your first name'),
    check('lastName').isString().isLength({ min: 1 }).withMessage('please enter your last name'),
    check('email').isString().isEmail().isLength({ min: 1 }).withMessage('invalid email address'),
    check('phone').isString().matches(/^\d{10,15}$/, 'invalid phone number').withMessage('phone is required to contact you'),
    //company
    check('companyName').isString().isLength({ min: 1 }).withMessage('company name is required to investigate your issue further'),
    check('companySize').isString().isIn(['0-10', '10-300', '300-1000', '1000-10000', '10000-100000']).withMessage('please select the company size'),
    check('companyType').isString().isIn(['LLC', 'Cooperative', 'Nonprofit', 'Government Agency', 'Partnership', 'Sole proprietorship']).withMessage('company type is required to investigate your issue further'),
    check('abn').isString().matches(/^(\d *?){11}$/).withMessage('abn needed to identify your business'),
    check('role').isString().isLength({ min: 1 }).withMessage('role required for context around your issue'),
    check('companyServices').isString().isIn(['Information Services', 'Manufacturing Services', 'Hospitality Services', 'Transportation Services', 'Education Services', 'Marketting Services', 'Graphic Design Services', 'Software Services', 'Professional Services', 'Labor Services', 'Customer Service', 'Commerce Services', 'Retail Services', 'Product Services', 'Consultation Services', 'Other']).withMessage('please select the company services'),
    //problem
    check('problemDescription').isString().isLength({ min: 200 }).withMessage('Use a minimum of 200 words to describe your problem').not().isEmpty().withMessage('We need to understand the issue you are seeking assistance with').trim(),
    check('serviceType').isString().isIn(['Marketing & branding', 'Business Planning & strategy', 'Financial planning & analysis', 'Human resources & organizational development', 'Operations & process improvement', 'Business growth & expansion', 'Legal & compliance', 'Information technology & digital transformation', 'Sustainability & corporate social responsibility', 'Leadership & management development']).withMessage('please select the service type'),
    check('attachments').isArray().custom(attachments => {
      return attachments.every(attachment => {
        return attachment.mimetype.match(/^application\/(pdf|msword|png|jpeg|jpg|txt)$/) && attachment.size <= 1000000;
      });
    }).withMessage('Invalid file type or file is too large'),
    //consultation
    check('duration').isInt().withMessage('you must give a duration for the consultation session'),
    check('consultant').isString().isIn(['Aiden Faulconer', 'James Boon', 'Emily Williams', 'Thomas Rice', 'Olivia Smith', 'Lydia Kim', 'Samuel Johnson']).withMessage('please select a consultant for your session'),
    check('date').isDate().matches(/^\d{4}-\d{2}-\d{2}$/).withMessage('invalid date format'),
    // check('time').isString().matches(/^\d{2}:\d{2}$/).withMessage('invalid time format').required('please select a time for the consultation session'),
  ];
}

const internalMessage = (
  {
    consultantName,
    date,
    duration,
    time,
    topic,
    abn,
    companyServices,
    companyName,
    companySize,
    firstName,
    lastName,
    problemDescription,
  },
  { joinUrl, id, startTime, encPassword, startUrl, password },
) => `
      _______________________________________________________________________________________
      
      You have an appointment with ${firstName} ${lastName} for ${companyName}!
      
      _______________________________________________________________________________________
      
      Date: ${date}
      Duration: ${duration}
      Time: ${time}
      Topic: ${topic}
      _______________________________________________________________________________________

      Zoom Meeting Information

      join: ${join_url}
      meeting id: ${id}
      start time: ${startTime}
      start url: ${startUrl}
      password: ${password}
      password alternative: ${encPassword}
      _______________________________________________________________________________________

      Business Information


      company name: ${companyName}
      abn: ${abn}
      services: ${companyServices}
      company size: ${companySize}

      _______________________________________________________________________________________

      For assistance


      Client name: ${firstName} ${lastName}
      Their problem: ${problemDescription}

      1. Agenda **Automated**
      2. Minutes **Automated** (current WIP)
      3. Presentation **Automated**
      4. Solution **Ask the following**
      5. Plan ahead **create during consultation if applicable**
      6. Always present each of the following
        * a solutions
        * a set of tools
        * a set of advice 
        * a plan ahead 

      _______________________________________________________________________________________

      ask the following...


      1. How could we solve the following? Iterate until all criteria is met

        ${problemDescription} 

        Ensure the following is addressed in the problem
        1. What is the problem you are trying to solve?
        2. What have you tried so far to solve the problem?
        3. What is the expected outcome?
        4. What are the constraints or limitations you are dealing with?
        5. Is there any additional context or background information that might be relevant to solving the problem?
        

        Given the problem is for a business that does ${1} with abn ${1} and company size ${1}
        write 4 things...
        
        1. business consultation assessment about ${problemDescription}
        2. a detailed list of 30 recommendations for ${problemDescription} that either solve the problem completely, or advise on how to avoid further problems
        3. a detailed list of 30 tools that may assist ${problemDescription} that help solve the problem
        4. a detailed plan/roadmap ahead that may assist ${problemDescription} over a period of 1week to 6months


      2. How would this problem fit into an agenda based around this template?

        Introduction:
          Introduce yourself and your company, highlighting any relevant experience or qualifications.
          Explain the purpose of the consultation and how you plan to approach it.
        
        Assessment:
          Gather information about the client's business, including their goals, challenges, and current operations.
          Conduct a thorough analysis of the client's needs and identify potential areas for improvement.
        
        Recommendations:
          Present your findings and recommendations to the client, explaining the potential benefits and drawbacks of each option.
          Discuss a plan of action and timeline for implementing the recommendations.
        
        Follow-up:
          Offer to provide ongoing support and assistance as the client implements your recommendations.
          Schedule follow-up meetings to assess the progress and success of the implementation.

      _______________________________________________________________________________________
      `

const externalMessage = (
  {
    consultantName,
    date,
    duration,
    time,
    topic,
    abn,
    companyServices,
    companyName,
    companySize,
    firstName,
    lastName,
    problemDescription,
  },
  { joinUrl, id, startTime, encPassword, startUrl, password },
) => `
      _______________________________________________________________________________________
      
      You have an appointment with ${consultantName} at Business Educated!
      
      _______________________________________________________________________________________
      
      Date: ${date}
      Duration: ${duration}
      Time: ${time}
      Topic: ${topic}
      _______________________________________________________________________________________

      Zoom Meeting Information

      join: ${join_url}
      meeting id: ${id}
      start time: ${startTime}
      start url: ${startUrl}
      password: ${password}
      password alternative: ${encPassword}
      
      _______________________________________________________________________________________

      Your business information

      company name: ${companyName}
      abn: ${abn}
      services: ${companyServices}
      company size: ${companySize}

      _______________________________________________________________________________________

      Your consultation


      your name: ${firstName} ${lastName}
      your problem: ${problemDescription}

      You will be presented the following for your consultation

      1. Agenda 
      2. Minutes
      3. Presentation
      4. Solution 
      6. Each of the following
        * a set of solutions
        * a set of tools
        * a set of advice 
        * a plan ahead 

      _______________________________________________________________________________________

      you will be answered with the following...


      1. How we could solve the following problem? ( We iterate until all criteria is met)

        ${problemDescription} 

        We ensure the following is addressed in the problem
        1. What is the problem you are trying to solve?
        2. What have you tried so far to solve the problem?
        3. What is the expected outcome?
        4. What are the constraints or limitations you are dealing with?
        5. Is there any additional context or background information that might be relevant to solving the problem?
        

      2. We present 4 key points
        
        1. business consultation assessment
        2. a detailed list of recommendations
        3. a detailed list of tools that may assist the problem
        4. a detailed plan/roadmap ahead that may assist the problem over a period of 1week to 6months


      2. How we structure our consultations

        Introduction:
          Introduce yourself and your company, highlighting any relevant experience or qualifications.
          Explain the purpose of the consultation and how you plan to approach it.
        
        Assessment:
          Gather information about your business, including your goals, challenges, and current operations.
          Conduct a thorough analysis of your needs and identify potential areas for improvement.
        
        Recommendations:
          Present findings and recommendations to you, explaining the potential benefits and drawbacks of each option.
          Discuss a plan of action and timeline for implementing the recommendations.
        
        Follow-up:
          We offer ongoing support and assistance as you implement your recommendations.
          Schedule follow-up meetings to assess the progress and success of the implementation.

      _______________________________________________________________________________________
      `

/**
 * This function comment is parsed by doctrine
 * @route GET /api
 * @group foo - Operations about user
 * @param {string} email.query.required - username or email - eg: user@domain
 * @param {string} password.query.required - user's password.
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.get('/', validate(), async (req, res) => {
  //prettier-ignore
  const {date,phone,firstName,lastName,companyName,abn,consultant,companyServices,problemDescription,serviceType,attatchments: attachments,...contactFormData} = req.body

  try {
    // Validate request body
    const errors = validationResult(req.body)
    if (!errors.isEmpty()) {
      throw new Error('Invalid request body')
    }

    //create a response object to collect errors/successes for reference
    const responses = []

    // Set the date and time for the booking
    const minuteMultiplier = duration * 60
    const startDate = new Date(date)
    const endDate = new Date(startDate.getTime() + minuteMultiplier * 60 * 1000) // x minutes

    //verify payment

    //create the zoom meeting
    const zoomBooking = await createZoomMeeting(
      startDate,
      `Business Educated Consultation with ${consultant.name}`,
      'AEDT',
    )
    //get zoom meeting details
    const {
      join_url,
      id,
      start_time,
      encrypted_password,
      start_url,
      password,
    } = zoomBooking?.data
    responses.push(zoomBooking)

    //book appointment on google calender
    const calenderDate = await addToGoogleCalendar({
      summary: `Consultation with ${consultant.name} for: ${firstName} ${lastName} topic: ${serviceType} `,
      location: 'Virtual',
      description: `
      _______________________________________________________________________________________

      Consultation with: ${consultant.name} 
      regarding: ${problemDescription} 
      in the context of: ${serviceType} 
      _______________________________________________________________________________________

      zoom link: ${join_url}
      start link: ${start_url}
      password: ${password}
      password alternative: ${encrypted_password}
      _______________________________________________________________________________________
      `,
      start: {
        dateTime: startDate,
        timezone,
      },
      end: {
        dateTime: endDate,
        timezone,
      },
      // reminders: {}
      // recurrance: [],
    })
    responses.push(calenderDate)

    // Send email to client
    await sendGmail(
      // loadEmailTemplate('booking-template-client', {
      //   name: `${firstName} ${lastName}`,
      // }),
      externalMessage(req.body, {
        joinUrl: join_url,
        id,
        startTime: start_time,
        encPassword: encrypted_password,
        startUrl: start_url,
        password,
      }),
      `🛩️ Your booking with Business Educated 🛩️`,
      email,
      process.env.GMAIL_ADDRESS,
      null,
      attachments,
    )

    // Send email to Business Educated
    //TODO: add automated minutes, presentations, and agenda
    await sendGmail(
      // loadEmailTemplate('booking-template-vendor', {
      //   name: `${firstName} ${lastName}`,
      // }),
      internalMessage(req.body),
      `⚠️ BOOKING from ${firstName} ${lastName} at ${companyName} from: ${startDate}-${endDate} ⚠️`,
      process.env.GMAIL_ADDRESS,
      process.env.GMAIL_ADDRESS,
      null,
      attachments,
    )

    // Send email to the consultant
    await sendGmail(
      // loadEmailTemplate('booking-template-vendor', {
      //   name: `${firstName} ${lastName}`,
      // }),
      internalMessage(req.body),
      `⚠️ BOOKING from ${firstName} ${lastName} ${getDate()} ⚠️`,
      consultant.email,
      process.env.GMAIL_ADDRESS,
      null,
      attachments,
    )

    //send sms's (WIP)
    //recipient
    //await sendSms(phone,message)
    //business educated
    //await sendSms(0475565709,message)
    //consultant
    //await sendSms(consultant.phone,message)

    // Add booking to spreadsheet
    await addToSpreadsheet(
      {
        ...req.body,
        ...{
          join_url,
          id,
          start_time,
          encrypted_password,
          start_url,
          password,
        },
      },
      process.env.BOOKING_SPREADSHEET_ID,
      'booking',
    )

    if (process.env.NODE_ENV === 'development')
      console.log(JSON.stringify(responses, null, 2))

    res.send({
      statusCode: 200,
      body: JSON.stringify(
        '🛩️ Thank you for booking with Business Educated, check your email for an invoice and the next steps forward 🛩️',
      ),
      isBase64Encoded: false,
      multiValueHeaders: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error(error)
    res.send({
      statusCode: 500,
      body: `⚠️ We encountered an issue: ${JSON.stringify(error)} ⚠️
      if you've made a payment...
      call us at 0475565709 or...
      email us at businesseducatedofficial@gmail.com 
      let us know, we will get back to you immediately`,
      isBase64Encoded: false,
      multiValueHeaders: {
        'Content-Type': 'application/json',
      },
    })
  }
})

module.exports = router

// // Set the booking data
//   const bookingData = {
//     start_time: startDate.toISOString(),
//     end_time: endDate.toISOString(),
//     duration: 30,
//     title: 'My Booking',
//     description: 'This is a test booking',
//     attendees: [
//       {
//         email: 'attendee1@example.com',
//         first_name: 'Attendee',
//         last_name: 'One',
//       },
//       {
//         email: 'attendee2@example.com',
//         first_name: 'Attendee',
//         last_name: 'Two',
//       },
//     ],
//   }

//   // Make the API request to create the booking
//   const response = await axios.post(
//     `${process.env.LOOM_API_URL}/bookings`,
//     bookingData,
//   )
