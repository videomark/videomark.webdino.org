// https://github.com/markedjs/marked/issues/655#issuecomment-712380889

import { marked } from 'marked';

const renderer = new marked.Renderer();
const linkRenderer = renderer.link;

renderer.link = (href, title, text) => {
  const html = linkRenderer.call(renderer, href, title, text);

  return href.startsWith('/')
    ? html
    : html.replace(/^<a /, `<a target="_blank" rel="noreferrer noopener nofollow" `);
};

export const parse = (markdown) => marked(markdown, { renderer });
