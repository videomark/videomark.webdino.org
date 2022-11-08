import { redirect } from '@sveltejs/kit';

export function load() {
  throw redirect(302, 'https://play.google.com/store/apps/details?id=org.webdino.videomarkbrowser');
}
