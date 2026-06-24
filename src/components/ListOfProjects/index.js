import { motion } from 'motion/react'
import { getProjects } from '@/services'
import Project from '@/components/Project'
import { useTranslation } from '@/i18n'

const ease = [0.16, 1, 0.3, 1]

export default function ListOfProjects({ limit }) {
  const { language } = useTranslation()
  const projects = getProjects({ limit, lang: language })
  return (
    <div className="mt-6 flex list-none flex-wrap justify-center gap-5 py-8">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: i * 0.1, ease }}
        >
          <Project {...project} />
        </motion.div>
      ))}
    </div>
  )
}
