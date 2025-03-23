import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import VideoView from './pages/VideoView'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <VideoView />
  </StrictMode>,
)
