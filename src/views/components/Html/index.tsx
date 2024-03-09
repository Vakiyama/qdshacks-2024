export function Html({ children }: JSXTE.ElementProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/output.css" />
        <script type="module" src="http://localhost:5173/@vite/client"></script>
        <script type="module" src="http://localhost:5173/main.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
