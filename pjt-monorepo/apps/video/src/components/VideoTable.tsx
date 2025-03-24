/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import { VideoFile } from '../data/dummyVideos';

type Props = {
  videos: VideoFile[]
  onSelect: (path:string) => void
}
export default function VideoTable({videos, onSelect}:Props) {

  const selectedPathClick = (video: VideoFile) => {
    onSelect(video.path)
    console.log(`${video.path} 클릭중`)
  }
  return (
    <table>
      <thead>
        <tr>
          <th>파일 경로</th>
          </tr>
      </thead>
      <tbody>
        {videos.map((video, idx) => (
          <tr key={`${video.path}-${idx}`} onClick={() => selectedPathClick(video)}>
            <td>{video.path}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
