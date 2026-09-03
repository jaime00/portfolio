import useDarkMode from '@/contexts/useDarkMode'
import { useRef } from 'react'
import { BundlephobiaWidget } from 'smooth-components'

import { BoxIcon } from '@/assets/animatedIcons/BoxIcon'
import { CartIcon } from '@/assets/animatedIcons/CartIcon'
import { ClapIcon } from '@/assets/animatedIcons/ClapIcon'
import { ExternalLinkIcon } from '@/assets/animatedIcons/ExternalLinkIcon'
import { FolderCodeIcon } from '@/assets/animatedIcons/FolderCodeIcon'
import { GitMergeIcon } from '@/assets/animatedIcons/GitMergeIcon'

import { useTranslation } from '@/i18n'

const SLUG_ICONS = {
  'cinepolis-web': ClapIcon,
  'smooth-components': BoxIcon,
  negos: CartIcon,
  'eazy-git': GitMergeIcon
}

export default function HeroSidebar({ project }) {
  const { t } = useTranslation()
  const { isDark } = useDarkMode()
  const viewCodeRef = useRef(null)
  const viewNpmRef = useRef(null)

  const { description, stack, caseStudy, urlCode, urlNpm } = project
  const SlugIcon = SLUG_ICONS[project.slug]
  const lastHighlights =
    caseStudy.sections[caseStudy.sections.length - 1]?.highlights

  return (
    <div className="flex flex-col gap-4">
      <div className="relative rounded-3xl bg-gray-100 p-6 shadow-lg dark:bg-gray-900 min-445:p-8">
        {SlugIcon && (
          <SlugIcon
            size={80}
            autoAnimate
            className="absolute -right-5 -top-10 z-10 text-gray-400 dark:text-gray-500"
            style={
              project.slug === 'smooth-components'
                ? { color: 'hsl(167 80% 52%)' }
                : undefined
            }
          />
        )}
        <p className="min-h-[6rem] text-sm leading-relaxed text-gray-600 dark:text-gray-300 min-1045:min-h-[120px] md:text-base">
          {description}
        </p>

        {stack?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="inline-block rounded-full bg-gradient-to-r from-teal-500 to-teal-400 px-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md shadow-teal-500/20 dark:from-teal-400 dark:to-emerald-400 dark:text-gray-900 dark:shadow-teal-400/10"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <dl className="mt-6 space-y-3 border-t border-gray-200 pt-5 dark:border-gray-800">
          {caseStudy.role && (
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500">
                {t('projectDetail.role')}
              </dt>
              <dd className="text-right text-sm font-semibold text-gray-800 dark:text-gray-100">
                {caseStudy.role}
              </dd>
            </div>
          )}
          {caseStudy.duration && (
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500">
                {t('projectDetail.duration')}
              </dt>
              <dd className="text-right text-sm font-semibold text-gray-800 dark:text-gray-100">
                {caseStudy.duration}
              </dd>
            </div>
          )}
          {caseStudy.team && (
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500">
                {t('projectDetail.team')}
              </dt>
              <dd className="text-right text-sm font-semibold text-gray-800 dark:text-gray-100">
                {caseStudy.team}
              </dd>
            </div>
          )}
        </dl>

        {(urlCode || urlNpm) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {urlCode && (
              <a
                href={urlCode}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gray-200 px-5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                onMouseEnter={() => viewCodeRef.current?.startAnimation()}
                onMouseLeave={() => viewCodeRef.current?.stopAnimation()}
              >
                <FolderCodeIcon ref={viewCodeRef} size={16} />
                {t('projectDetail.viewCode')}
              </a>
            )}
            {urlNpm && (
              <a
                href={urlNpm}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gray-200 px-5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                onMouseEnter={() => viewNpmRef.current?.startAnimation()}
                onMouseLeave={() => viewNpmRef.current?.stopAnimation()}
              >
                <ExternalLinkIcon ref={viewNpmRef} size={16} />
                {t('projectDetail.viewNpm')}
              </a>
            )}
          </div>
        )}
      </div>

      {project.slug === 'smooth-components' ? (
        <BundlephobiaWidget
          pkg="smooth-components@1.1.18"
          isDarkMode={isDark}
          hasHoverEffect={false}
          size="sm"
          repository="https://github.com/jaime00/smooth-components"
        />
      ) : project.slug === 'eazy-git' ? (
        <BundlephobiaWidget
          pkg="eazy-git@0.2.3"
          isDarkMode={isDark}
          size="sm"
          hasHoverEffect={false}
        />
      ) : (
        lastHighlights && (
          <div className="flex flex-1 flex-col justify-center rounded-3xl bg-gradient-to-br from-teal-500/10 to-emerald-500/10 p-6 shadow-lg dark:from-teal-400/10 dark:to-emerald-400/10">
            <div className="grid grid-cols-2 gap-4 min-1045:grid-cols-1">
              {lastHighlights.map((h) => (
                <div key={h.label} className="min-1045:text-center">
                  <span className="text-gradient-teal text-3xl font-bold">
                    {h.value}
                  </span>
                  <span className="mt-1 block text-xs text-gray-500 dark:text-gray-400">
                    {h.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  )
}
