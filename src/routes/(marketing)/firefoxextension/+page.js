import { redirect } from '@sveltejs/kit';

export function load() {
  throw redirect(302, 'https://addons.mozilla.org/firefox/addon/videomark/');
}
