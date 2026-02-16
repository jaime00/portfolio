import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { PlayIcon } from '../../assets/animatedIcons/PlayIcon'
import { PauseIcon } from '../../assets/animatedIcons/PauseIcon'

const playlist = [
  {
    title: "I'm in Love",
    artist: 'Tomoko Aran',
    file: "I'm in Love.mp3",
    cover: '/covers/cover-im-in-love.jpg'
  },
  {
    title: 'Last Summer Whisper',
    artist: 'Anri',
    file: 'Last Summer Whisper.mp3',
    cover: '/covers/cover-last-summer-whisper.jpg'
  },
  {
    title: 'Mayonaka no Door / Stay With Me',
    artist: 'Miki Matsubara',
    file: 'Mayonaka no Door _ Stay With Me.mp3',
    cover: '/covers/cover-mayonaka-no-door.jpg'
  },
  {
    title: 'Midnight Pretenders',
    artist: 'Tomoko Aran',
    file: 'Midnight Pretenders.mp3',
    cover: '/covers/cover-midnight-pretenders.jpg'
  },
  {
    title: 'Resort For Blue',
    artist: 'Makoto Matsushita',
    file: 'Resort For Blue - 2018 Remaster.mp3',
    cover: '/covers/cover-resort-for-blue.jpg'
  },
  {
    title: "メカファイター '87",
    artist: 'EVADE FROM 宇宙',
    file: "メカファイター '87.mp3",
    cover: '/covers/cover-mecha-fighter.jpg'
  },
  {
    title: 'High Heel (Non Stop Mix)',
    artist: 'Kaoru Akimoto',
    file: '我がままなハイヒール - Non Stop Mix ver..mp3',
    cover: '/covers/cover-high-heel.jpg'
  },
  {
    title: 'Midnight Joke',
    artist: 'Takako Mamiya',
    file: '真夜中のジョーク.mp3',
    cover: '/covers/cover-midnight-joke.jpg'
  },
  {
    title: 'Twilight BAY CITY',
    artist: 'Junko Yagami',
    file: '黄昏のBAY CITY.mp3',
    cover: '/covers/cover-twilight-bay-city.jpg'
  }
]

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(() => {
    const saved = localStorage.getItem('music-index')
    return saved !== null
      ? Number(saved)
      : Math.floor(Math.random() * playlist.length)
  })
  const [progress, setProgress] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [direction, setDirection] = useState(1)
  const progressRef = useRef(null)
  const savedTimeRef = useRef(Number(localStorage.getItem('music-time')) || 0)

  const currentSong = playlist[currentIndex]

  const wasPlayingRef = useRef(localStorage.getItem('music-playing') === 'true')

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      localStorage.setItem('music-playing', 'false')
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true)
          localStorage.setItem('music-playing', 'true')
        })
        .catch(() => {})
    }
  }, [isPlaying])

  const nextTrack = useCallback(() => {
    wasPlayingRef.current = isPlaying || wasPlayingRef.current
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % playlist.length)
  }, [isPlaying])

  const prevTrack = useCallback(() => {
    wasPlayingRef.current = isPlaying || wasPlayingRef.current
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length)
  }, [isPlaying])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.src = `/songs/${currentSong.file}`
    audio.load()
    localStorage.setItem('music-index', currentIndex)

    const onCanPlay = () => {
      if (savedTimeRef.current > 0) {
        audio.currentTime = savedTimeRef.current
        savedTimeRef.current = 0
      }
      if (wasPlayingRef.current) {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {})
      }
      audio.removeEventListener('canplay', onCanPlay)
    }
    audio.addEventListener('canplay', onCanPlay)
    return () => audio.removeEventListener('canplay', onCanPlay)
  }, [currentIndex, currentSong.file])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100)
        localStorage.setItem('music-time', Math.floor(audio.currentTime))
      }
    }

    const handleEnded = () => nextTrack()

    audio.addEventListener('timeupdate', updateProgress)
    audio.addEventListener('ended', handleEnded)
    return () => {
      audio.removeEventListener('timeupdate', updateProgress)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [nextTrack])

  const seekToPosition = useCallback((clientX) => {
    const audio = audioRef.current
    const bar = progressRef.current
    if (!audio || !audio.duration || !bar) return
    const rect = bar.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = x / rect.width
    audio.currentTime = percent * audio.duration
    setProgress(percent * 100)
  }, [])

  const handleProgressDown = useCallback(
    (e) => {
      setIsDragging(true)
      seekToPosition(e.clientX)
    },
    [seekToPosition]
  )

  useEffect(() => {
    if (!isDragging) return
    const handleMove = (e) => seekToPosition(e.clientX)
    const handleUp = () => setIsDragging(false)
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseup', handleUp)
    window.addEventListener('touchmove', (e) =>
      seekToPosition(e.touches[0].clientX)
    )
    window.addEventListener('touchend', handleUp)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseup', handleUp)
      window.removeEventListener('touchmove', handleMove)
      window.removeEventListener('touchend', handleUp)
    }
  }, [isDragging, seekToPosition])

  return (
    <div className="[&_button]:outline-none [&_*]:[-webkit-tap-highlight-color:transparent] fixed left-6 bottom-6 z-[999998] flex items-end gap-3">
      <audio ref={audioRef} preload="auto" />

      <div className="relative">
        <AnimatePresence>
          {isPlaying && (
            <>
              {['♪', '♫', '♩', '♬', '♪'].map((note, i) => (
                <motion.span
                  key={`note-${i}`}
                  initial={{ opacity: 0, y: 0, x: 0, scale: 0.5 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    y: [0, -20, -50, -80],
                    x: [
                      0,
                      (i % 2 === 0 ? 1 : -1) * (8 + i * 4),
                      (i % 2 === 0 ? -1 : 1) * 6,
                      (i % 2 === 0 ? 1 : -1) * 12
                    ],
                    scale: [0.5, 1, 0.9, 0.6],
                    rotate: [
                      0,
                      i % 2 === 0 ? 15 : -15,
                      i % 2 === 0 ? -10 : 10,
                      0
                    ]
                  }}
                  transition={{
                    duration: 2.5 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: 'easeOut'
                  }}
                  className="pointer-events-none absolute -top-2 left-1/2 select-none text-sm text-teal-500 dark:text-teal-400"
                >
                  {note}
                </motion.span>
              ))}
            </>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={
            isPlaying
              ? { rotate: { duration: 3, ease: 'linear', repeat: Infinity } }
              : { rotate: { duration: 0.4, ease: 'easeOut' } }
          }
          className={`relative h-14 w-14 overflow-hidden rounded-full outline-none transition-shadow duration-500 [-webkit-tap-highlight-color:transparent] ${isPlaying ? 'shadow-[0_0_20px_rgba(20,184,166,0.4),0_0_40px_rgba(20,184,166,0.15)]' : 'shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_15px_rgba(20,184,166,0.3)]'}`}
          aria-label="Toggle Music Player"
        >
          <img
            src="/vinyl.png"
            alt="Vinyl disc"
            draggable={false}
            className="pointer-events-none h-full w-full select-none rounded-full"
          />
        </motion.button>
      </div>

      <motion.div
        animate={
          isOpen
            ? { opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' }
            : { opacity: 0, scale: 0.5, x: -40, filter: 'blur(8px)' }
        }
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className={`origin-bottom-left ${!isOpen ? 'pointer-events-none' : ''}`}
      >
        <div className="flex w-[280px] gap-3 rounded-2xl border border-teal-500/10 bg-white/80 p-3 shadow-xl shadow-teal-500/5 backdrop-blur-md dark:border-teal-400/10 dark:bg-gray-800/80">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentIndex}
                src={currentSong.cover}
                alt={currentSong.title}
                initial={{ x: 30 * direction, opacity: 0, filter: 'blur(6px)' }}
                animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
                exit={{ x: -30 * direction, opacity: 0, filter: 'blur(6px)' }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                draggable={false}
                className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
              />
            </AnimatePresence>
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-1 overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.p
                key={`title-${currentIndex}`}
                initial={{ x: 20 * direction, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20 * direction, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="truncate text-xs font-semibold text-gray-800 dark:text-white"
              >
                {currentSong.title}
              </motion.p>
            </AnimatePresence>
            <AnimatePresence mode="popLayout">
              <motion.p
                key={`artist-${currentIndex}`}
                initial={{ x: 20 * direction, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20 * direction, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.06,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="truncate text-[10px] text-gray-400 dark:text-gray-500"
              >
                {currentSong.artist}
              </motion.p>
            </AnimatePresence>

            <div
              ref={progressRef}
              className="group relative h-1.5 w-full cursor-pointer rounded-full bg-gray-200 dark:bg-gray-700"
              onMouseDown={handleProgressDown}
              onTouchStart={(e) => {
                setIsDragging(true)
                seekToPosition(e.touches[0].clientX)
              }}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-400"
                style={{
                  width: `${progress}%`,
                  transition: isDragging ? 'none' : 'width 0.15s'
                }}
              />
              <div
                className={`absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-teal-500 shadow-md transition-transform ${isDragging ? 'scale-125' : 'scale-0 group-hover:scale-100'}`}
                style={{ left: `calc(${progress}% - 6px)` }}
              />
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevTrack}
                className="text-gray-400 outline-none transition-colors hover:text-teal-500 focus:outline-none dark:text-gray-500 dark:hover:text-teal-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
                </svg>
              </button>
              <motion.button
                onClick={togglePlay}
                whileTap={{ scale: 0.8, rotate: 15 }}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-400 text-white outline-none focus:outline-none"
              >
                <AnimatePresence mode="wait">
                  {isPlaying ? (
                    <motion.div
                      key="pause"
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 90 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <PauseIcon size={14} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="play"
                      initial={{ scale: 0, rotate: 90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: -90 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <PlayIcon size={14} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
              <button
                onClick={nextTrack}
                className="text-gray-400 outline-none transition-colors hover:text-teal-500 focus:outline-none dark:text-gray-500 dark:hover:text-teal-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
