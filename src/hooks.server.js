import { redirect } from '@sveltejs/kit';
import { supportedLocales } from '$lib/services/util/i18n';

/**
 * Define some local redirect routes for convenience. Complete server-side redirect definitions are
 * written in `/static/_redirects`.
 */
const redirectMap = {
  '/': '/ja',
  '/androidnightly': 'https://addons.mozilla.org/firefox/addon/videomark/',
  '/chromeextension':
    'https://chrome.google.com/webstore/detail/web-videomark/lapldfdplijeiifekbgipcfjnklaahbd',
  '/firefoxextension': 'https://addons.mozilla.org/firefox/addon/videomark/',
};

export function handle({ event, resolve }) {
  const { pathname } = event.url;

  // Redirect some routes
  if (pathname in redirectMap) {
    redirect(302, redirectMap[pathname]);
  }

  const [, lang = 'en'] =
    pathname.match(new RegExp(`^\\/(${Object.keys(supportedLocales).join('|')})\\b`)) || [];

  // Set the `lang` attribute on `<html>`
  // https://github.com/sveltejs/kit/issues/3091
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%lang%', lang),
  });
}
