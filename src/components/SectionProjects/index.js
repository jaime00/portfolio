import { EASE_OUT_EXPO, VIEWPORT_ONCE } from '@/animations'
import { motion } from 'motion/react'

import ListOfProjects from '@/components/ListOfProjects'

import { useTranslation } from '@/i18n'

const quantityOfProjectsInHome = 3

export default function SectionProjects() {
  const { t } = useTranslation()
  return (
    <div>
      <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-4 font-sans dark:text-white">
        <motion.h2
          className="my-8 text-4xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        >
          {t('home.iLoveSharing')}
        </motion.h2>
        <motion.p
          className="text-gray-700 dark:text-gray-300 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT_EXPO }}
        >
          {t('home.checkProjects')}
        </motion.p>
        <ListOfProjects limit={quantityOfProjectsInHome} />
      </div>
    </div>
  )
}
