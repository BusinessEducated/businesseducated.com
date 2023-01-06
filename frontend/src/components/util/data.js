import _ from 'lodash'
//for pulling from strapi api
export const reShapeData = (data) =>
  data.map(({ node }) => ({
    // id: node.id,
    //prettier-ignore
    href: `/blog/${node?.post?.category}/${_.kebabCase(node?.seo[0]?.metaTitle,)}/`,
    date: node?.post?.date || Date.now(),
    tags: node?.post?.tags || [],
    category: node?.post?.category || 'other',
    name: node?.seo[0]?.metaTitle || '',
    description: node?.post?.excerpt || '',
    imageSrc: '',
    imageAlt: '',
    // metaRobots: node?.seo[0]?.metaRobots,
    keywords: node?.seo[0]?.keywords || [],
  }))

//for pulling from youtube api
export const extractVideos = (json) => {
  const items = json.items
  const videos = []
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const video = {
      // id: item.id.videoId,
      href: `youtube.com/watch?=${item.id.videoId}`,
      date: item.snippet.publishedAt,
      name: item.snippet.title,
      description: item.snippet.description,
      imageSrc: item.snippet.thumbnails.default.url,
      imageAlt: '',
      // channelId: item.snippet.channelId,
      // channelTitle: item.snippet.channelTitle,
    }
    videos.push(video)
  }
  return videos
}
