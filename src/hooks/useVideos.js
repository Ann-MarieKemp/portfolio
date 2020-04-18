import { graphql, useStaticQuery } from "gatsby"

const useVideos = () => {
  const data = useStaticQuery(graphql`
    query Videos {
      allYoutubeVideo {
        nodes {
          title
          id
        }
      }
    }
  `)
  return data.nodes.map(video => {
    return {
      videoId: video.id,
      title: video.title,
    }
  })
}
console.log(useVideos())
export default useVideos
