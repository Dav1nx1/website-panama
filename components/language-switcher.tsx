"use client"

import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'
import { useState } from 'react'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
]

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = languages.find(lang => lang.code === locale)

  const handleLanguageChange = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    // Navigate to the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:bg-white/10 tracking-[0.1em] text-xs font-light px-2 py-2 h-auto md:px-3"
      >
        <Globe className="h-4 w-4 mr-1 md:mr-2" />
        <span className="hidden sm:inline">{currentLanguage?.flag} {currentLanguage?.name}</span>
        <span className="sm:hidden">{currentLanguage?.flag}</span>
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-black/95 backdrop-blur-sm rounded-md shadow-lg border border-white/20 z-50 min-w-[160px]">
          <div className="py-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full px-3 py-2 text-left text-sm hover:bg-white/10 transition-colors flex items-center gap-2 ${
                  locale === language.code ? 'text-cyan-400' : 'text-white'
                }`}
              >
                <span>{language.flag}</span>
                <span className="text-xs md:text-sm">{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
