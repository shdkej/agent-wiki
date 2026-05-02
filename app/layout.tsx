import { Inter } from 'next/font/google';
import { Provider } from '@/components/provider';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
});

const legacyHashRedirect = `(function(){
  try {
    var h = window.location.hash || '';
    if (!h.startsWith('#/')) return;
    var raw = h.slice(2).split('?')[0];
    if (!raw) return;
    var parts = raw.split('/').map(function(p){
      try { return encodeURIComponent(decodeURIComponent(p)); } catch(e) { return encodeURIComponent(p); }
    });
    var aliases = { 'README': '', 'index': '', 'log': 'log' };
    var last = parts[parts.length - 1];
    if (aliases[last] !== undefined) parts[parts.length - 1] = aliases[last];
    var path = parts.filter(Boolean).join('/');
    var prefix = window.location.pathname.replace(/\\/$/, '');
    var target = prefix + '/docs' + (path ? '/' + path : '') + '/';
    window.location.replace(target);
  } catch(e) {}
})();`;

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: legacyHashRedirect }} />
      </head>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
