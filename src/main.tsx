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

    // guard against an infinite retry loop — try a limited number of times
    const maxAttempts = 20
    let attempts = 0

    const tryInit = () => {
      attempts += 1
      // @ts-ignore
      const A = (window as any).AOS
      if (A && typeof A.init === 'function') {
        A.init({ once: true, duration: 800, offset: 120, easing: 'ease-out-cubic' })
        console.info('[aos] initialized')
      } else if (attempts < maxAttempts) {
        setTimeout(tryInit, 250)
      } else {
        console.warn(`[aos] not available after ${maxAttempts} attempts — skipping AOS init`)
      }
    }

    tryInit()
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
