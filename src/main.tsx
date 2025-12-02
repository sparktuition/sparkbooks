import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// AOS is loaded via CDN in index.html; initialize it here when available
// Using window as any because AOS is injected globally by the CDN script
function initAOS() {
  try {
    // @ts-ignore
    const AOS = (window as any).AOS
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      console.info('[aos] user prefers reduced motion — skipping animations')
      return
    }

    if (AOS && typeof AOS.init === 'function') {
      AOS.init({ once: true, duration: 800, offset: 120, easing: 'ease-out-cubic' })
      console.info('[aos] initialized')
    } else {
      // If AOS isn't available yet, try again after a short delay
      setTimeout(initAOS, 250)
    }
  } catch (e) {
    console.warn('[aos] failed to initialize', e)
  }
}
initAOS()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
