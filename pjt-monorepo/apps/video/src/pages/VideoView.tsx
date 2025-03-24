import { useEffect, useState } from 'react'
import { dummyVideos, VideoFile } from '../data/dummyVideos';
import VideoTable from "../components/VideoTable";
import VideoPlayer from '../components/VideoPlayer';

export default function VideoView() {
  const [videos, setVideos] = useState<VideoFile[]> ([]);
  const  [selectedPath, setSelectedPath] = useState<string| null> (null);
  useEffect(() => {
    setVideos(dummyVideos)
  }, [])
  return (
    <div>
      <div>
        <h2>Video List</h2>
        <VideoTable videos={videos} onSelect={setSelectedPath}/>
      </div>
      <div>
        <h2>Video Player</h2>
        <VideoPlayer path={selectedPath}/>
      </div>
    </div>
  )
}
