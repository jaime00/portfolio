import { useState } from 'react'
import { motion } from 'motion/react'

const SPOTIFY_PLAYLIST_URI =
  'https://open.spotify.com/embed/playlist/3zFTTlJFNEZ1pMxq58KuUa?utm_source=generator&theme=0&autoplay=1'

export default function SpotifyBubble() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed left-6 bottom-6 z-[999998] flex items-end gap-3">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 0 : 360 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1DB954] shadow-lg transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(29,185,84,0.5)]"
        aria-label="Toggle Spotify Player"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="h-6 w-6"
        >
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
      </motion.button>

      <motion.div
        animate={
          isOpen
            ? { opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' }
            : { opacity: 0, scale: 0.5, x: -40, filter: 'blur(8px)' }
        }
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className={`origin-bottom-left ${!isOpen ? 'pointer-events-none' : ''}`}
      >
        <iframe
          title="Spotify Player"
          src={SPOTIFY_PLAYLIST_URI}
          width="300"
          height="380"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-xl shadow-2xl"
          style={{ border: 'none' }}
        />
      </motion.div>
    </div>
  )
}
