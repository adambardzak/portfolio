"use client";

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            function getTheme() {
              const theme = window.localStorage.getItem('theme')
              if (theme) return theme
              return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
            }
            document.documentElement.classList.toggle('dark', getTheme() === 'dark')
          })()
        `,
      }}
    />
  );
}
