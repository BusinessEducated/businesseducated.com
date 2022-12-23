import axios from 'axios';

//
export const getVideosFromChannelByCategory = async (channelId, playlistId) => {
  // Set up the base URL for the YouTube API
  const baseUrl = 'https://www.googleapis.com/youtube/v3/platlistItems';

  // Set up the API key and other parameters for the API request
  const params = {
    part: 'snippet',
    type: 'video',
    maxResults: 50,
    key: process.env.YOUTUBE_API_KEY,
    channelId: channelId,
    playlistId: playlistId
  };

  // Make the API request using Axios
  try {
    const response = await axios.get(`${baseUrl}/search`, { params });
    const videos = response.data.items;
    return videos;
  } catch (error) {
    console.error(error);
  }
}


async function subscribeToChannel(channelId, accessToken) {
  // Set up the base URL for the YouTube API
  const baseUrl = 'https://www.googleapis.com/youtube/v3';

  // Set up the parameters for the API request
  const params = {
    part: 'snippet',
    key: process.env.YOUR_API_KEY,
    maxResults: 20,
  };

  // Set up the request body
  const data = {
    snippet: {
      resourceId: {
        channelId: channelId
      }
    }
  };

  // Set up the headers for the API request
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`
  };

  // Make the API request using Axios
  try {
    const response = await axios.post(
      `${baseUrl}/subscriptions`,
      data,
      { params, headers }
    );
    console.log('Subscribed to channel:', response.data);
  } catch (error) {
    console.error(error);
  }
}

async function likeVideo(videoId, accessToken) {
  // Set up the base URL for the YouTube API
  const baseUrl = 'https://www.googleapis.com/youtube/v3';

  // Set up the parameters for the API request
  const params = {
    key: YOUR_API_KEY
  };

  // Set up the request body
  const data = {
    id: videoId
  };

  // Set up the headers for the API request
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`
  };

  // Make the API request using Axios
  try {
    const response = await axios.post(
      `${baseUrl}/videos/rate`,
      data,
      { params, headers }
    );
    console.log('Liked video:', response.data);
  } catch (error) {
    console.error(error);
  }
}
