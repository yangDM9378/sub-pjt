import React from 'react'

type Props = {
  path:string | null;
}
export default function VideoPlayer({ path }: Props) {
  return (
    <video controls>
      <source src={`/video-files/${path}`} type="video/mp4" />
    </video>
  )
}
