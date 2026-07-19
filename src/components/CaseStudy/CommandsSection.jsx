import { EASE_OUT_EXPO as ease } from '@/animations'
import { motion } from 'motion/react'

export default function CommandsSection({ section }) {
  return (
    <section className="mb-16">
      <motion.h2
        className="mb-6 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease }}
      >
        {section.title} <span className="inline-block scale-x-150 ml-2">—</span>
      </motion.h2>

      {section.text && (
        <motion.p
          className="mb-8 text-base leading-relaxed text-gray-700 dark:text-gray-300 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
        >
          {section.text}
        </motion.p>
      )}

      {section.install && (
        <motion.div
          className="mb-8 overflow-x-auto rounded-xl border border-gray-800 bg-gray-900 p-4 font-mono text-sm shadow-lg dark:shadow-teal-500/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease }}
        >
          <code className="whitespace-nowrap text-gray-100">
            <span className="select-none text-teal-400">$ </span>
            {section.install}
          </code>
        </motion.div>
      )}

      <div className="space-y-3">
        {section.commands.map((cmd, i) => (
          <motion.div
            key={i}
            className="rounded-xl border border-gray-200/80 bg-white/70 p-4 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04, ease }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <code className="rounded-md bg-teal-500/10 px-2 py-1 font-mono text-sm font-semibold text-teal-600 dark:bg-teal-400/10 dark:text-teal-300">
                {cmd.name}
              </code>
              {cmd.command && (
                <code className="font-mono text-xs text-gray-400 dark:text-gray-500">
                  {cmd.command}
                </code>
              )}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {cmd.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
