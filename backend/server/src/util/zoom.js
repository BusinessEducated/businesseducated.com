const axios = require('axios')

// Get the date and time for the meeting
const createZoomMeeting = async (date, topic, timezone = 'AEDT') => {
  try {
    // Set the start time for the meeting in the ISO 8601 format
    const startTime = new Date(date).toISOString()
    const duration = 60
    const password = bcrypt.hashSync(
      process.env.SALT,
      'businessEducatedZoomPassword007169',
    )

    // Set the request body for the API call
    const data = {
      topic,
      start_time: startTime,
      duration,
      timezone,
      password,
    }

    const payload = {
      iss: process.env.ZOOM_API_KEY,
      exp: Date.now() + 5000,
    }

    const token = jwt.sign(payload, process.env.ZOOM_CLIENT_SECRET)
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }

    // Make the API call
    const {
      data: {
        join_url,
        uuid,
        id,
        host_id,
        host_email,
        type,
        status,
        start_time,
        created_at,
        start_url,
        encrypted_password,
      },
    } = await axios.post(endpoint, data, { headers })

    return {
      status: 200,
      data: { host_email, join_url, start_time, created_at, password },
    }
  } catch (error) {
    return {
      status: 500,
      error: error.message,
    }
  }
}

module.exports = { createZoomMeeting }
