import { getRequestConfig } from 'next-intl/server';

// Can be anything a user provides
const locales = ['en', 'es', 'pt', 'fr'];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  // If invalid, default to 'en'
  const validLocale = locales.includes(locale as any) ? locale : 'en';

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});
