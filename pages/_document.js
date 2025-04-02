import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        {/* Подключение шрифтов */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
        {/* Другие глобальные стили */}
        <style jsx global>{`
          body {
            font-family: 'Inter', sans-serif;
          }
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}