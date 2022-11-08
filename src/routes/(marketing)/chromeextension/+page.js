import { redirect } from '@sveltejs/kit';

export function load() {
  throw redirect(
    302,
    'https://chrome.google.com/webstore/detail/web-videomark/lapldfdplijeiifekbgipcfjnklaahbd',
  );
}
