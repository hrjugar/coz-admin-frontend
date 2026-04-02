import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import appCss from '../styles.css?url'

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Co-Z Admin Portal',
      },
    ],
    links: [
      {
        rel: 'preload',
        href: '/fonts/Satoshi-Variable.ttf',
        as: 'font',
        type: 'font/ttf',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'preload',
        href: '/fonts/Satoshi-VariableItalic.ttf',
        as: 'font',
        type: 'font/ttf',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg',
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicon.svg',
      },
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  notFoundComponent: RootNotFound,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body
        suppressHydrationWarning
        className="font-sans antialiased wrap-anywhere selection:bg-[rgba(213,84,45,0.24)]"
      >
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function RootNotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-10">
      <section className="w-full max-w-xl rounded-[28px] border border-(--color-border) bg-[linear-gradient(165deg,var(--color-surface-strong),var(--color-surface))] p-8 text-center shadow-[0_1px_0_var(--color-highlight)_inset,0_28px_60px_rgba(17,17,17,0.12),0_12px_24px_rgba(77,103,177,0.08)] backdrop-blur-[6px]">
        <p className="mb-3 text-xs font-bold tracking-[0.18em] text-(--color-primary) uppercase">
          Co-Z Admin Portal
        </p>
        <h1 className="m-0 text-[clamp(2rem,4vw,2.75rem)] leading-[0.98] font-semibold tracking-[-0.04em] text-(--color-text)">
          Page not found
        </h1>
        <p className="mt-3 text-(--color-text-muted)">
          The page you requested does not exist or is no longer available.
        </p>
      </section>
    </main>
  )
}
