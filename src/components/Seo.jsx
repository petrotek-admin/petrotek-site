import { useEffect } from 'react';

const SITE_URL = 'https://www.petrotek.com';

const upsert = (tag, matchAttr, matchValue, attrs) => {
  let el = document.head.querySelector(`${tag}[${matchAttr}="${matchValue}"]`);
  if (!el) {
    el = document.createElement(tag);
    el.setAttribute(matchAttr, matchValue);
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
};

const Seo = ({ title, description, path = '/', noindex = false }) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    document.title = title;
    upsert('meta', 'name', 'description', { content: description });
    upsert('link', 'rel', 'canonical', { href: url });
    upsert('meta', 'property', 'og:title', { content: title });
    upsert('meta', 'property', 'og:description', { content: description });
    upsert('meta', 'property', 'og:url', { content: url });
    upsert('meta', 'name', 'twitter:title', { content: title });
    upsert('meta', 'name', 'twitter:description', { content: description });
    upsert('meta', 'name', 'robots', { content: noindex ? 'noindex, follow' : 'index, follow' });
  }, [title, description, path, noindex]);

  return null;
};

export default Seo;