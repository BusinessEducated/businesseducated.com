const baseUrl = `http://${process.env.SERVER_URL}${process.env.API_ENDPOINT}zoom`

const getDurationInMinutes = (start, end) =>
  Math.abs(new Date(end) - new Date(start)) / 60000

export const createMeeting = async (start, end, topic) => {
  const payload = {
    meetingStart: start,
    meetingDuration: getDurationInMinutes(start, end),
    meetingTopic: topic,
  }
  const {
    success,
    message,
    data: { meetingInformation },
  } = await API.post(process.env.MEETING_ENDPOINT, payload)

  return { success, message, meetingInformation }
}
