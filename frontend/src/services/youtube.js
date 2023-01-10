import axios from 'axios'

const baseUrl = `http://${process.env.SERVER_URL}${process.env.API_ENDPOINT}youtube`

export const getVideosFromChannelByCategory = async (
  channelId,
  playlistId,
  maxResults,
) => {
  // Set up the headers for the API request
  const headers = {
    // 'Access-Control-Allow-Origin': `http://${process.env.SERVER_URL}, *`,
    'Access-Control-Allow-Methods': null, //important, only the server has the privaledge of using these headers
    'Access-Control-Allow-Origin': null, //important, only the server has the privaledge of using these headers
    'Content-Type': 'application/json',
  }

  // Set up the API key and other parameters for the API request
  const params = {
    maxResults: maxResults,
    channelId: channelId,
    playlistId: playlistId,
  }

  // Make the API request using Axios
  try {
    const response = await axios.get(
      `${baseUrl}/getVideosFromChannelByCategory`,
      { params, headers },
    )
    const videos = response.data.items
    return videos
  } catch (error) {
    console.error(error)
  }
}

export const getVideosFromChannel = async (channelId, maxResults) => {
  // Set up the axios request
  const params = {
    channelId: channelId,
    maxResults: maxResults,
    order: 'date',
  }

  // Set up the headers for the API request
  const headers = {
    'sec-fetch-mode': null,
    'sec-fetch-site': null,
    // referrerPolicy: null,
    'Access-Control-Allow-Origin': `http://${process.env.SERVER_URL}, *`,
    'Access-Control-Allow-Methods': null, //important, only the server has the privaledge of using these headers
    'Access-Control-Allow-Origin': null, //important, only the server has the privaledge of using these headers
    'Content-Type': 'application/json',
  }

  // Make the request and get the response data
  try {
    const response = await axios.get(`${baseUrl}/getVideosFromChannel`, {
      params,
      headers,
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const subscribeToChannel = async (
  channelId,
  accessToken,
  maxResults,
) => {
  // Set up the parameters for the API request
  const params = {
    part: 'snippet',
    maxResults: maxResults,
  }

  // Set up the request body
  const data = {
    snippet: {
      resourceId: {
        channelId: channelId,
      },
    },
  }

  // Set up the headers for the API request
  const headers = {
    'Access-Control-Allow-Origin': `http://${process.env.SERVER_URL}, *`,
    'Access-Control-Allow-Methods': null, //important, only the server has the privaledge of using these headers
    'Access-Control-Allow-Origin': null, //important, only the server has the privaledge of using these headers
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  }

  // Make the API request using Axios
  try {
    const response = await axios.post(`${baseUrl}/subscribeToChannel`, data, {
      params,
      headers,
    })
    console.log('Subscribed to channel:', response.data)
  } catch (error) {
    console.error(error)
  }
}

export const likeVideo = async (videoId, accessToken) => {
  // Set up the request body
  const data = {
    id: videoId,
  }

  // Set up the headers for the API request
  const headers = {
    'Access-Control-Allow-Origin': `http://${process.env.SERVER_URL}, *`,
    'Access-Control-Allow-Methods': null, //important, only the server has the privaledge of using these headers
    'Access-Control-Allow-Origin': null, //important, only the server has the privaledge of using these headers
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  }

  // Make the API request using Axios
  try {
    const response = await axios.post(`${baseUrl}/likeVideo`, data, { headers })
    console.log('Liked video:', response.data)
  } catch (error) {
    console.error(error)
  }
}
