//  import { graphql, useStaticQuery } from "gatsby"

// const useVideos = () => {
//   const data = useStaticQuery(graphql`
//     query Videos {
//       allYoutubeVideo {
//         nodes {
//           videoId
//           title
//         }
//       }
//     }
//   `)
//   return data.allYoutubeVideo.nodes.map(video => {
//     return {
//       videoId: video.videoId,
//       title: video.title,
//     }
//   })
// }

// export default useVideos
