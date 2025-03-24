import { useEffect, useRef } from "react";

type Props = {
  path:string | null;
}
export default function VideoPlayer({ path }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current && path) {
      const video = videoRef.current;

      video.pause();
      video.load();
      video.play().catch((err) => {
        console.warn('재생 실패', err);
      })
    }
  }, [path])

  if (!path) return <div>👈 영상을 선택해주세요.</div>;
  return (
    <video
      ref={videoRef}
      controls
      muted
      autoPlay
    >
      <source src={`/video/${path}`} type="video/webm" />
      브라우저가 video 태그를 지원하지 않습니다.
    </video>
  );
}
