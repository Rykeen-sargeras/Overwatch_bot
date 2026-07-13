export function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export function page(options: {
  title: string;
  body: string;
  authenticated?: boolean;
  csrfToken?: string;
  message?: string;
}): string {
  const nav = options.authenticated
    ? `<nav>
        <a href="/">Dashboard</a>
        <a href="/blacklist">Blacklist</a>
        <a href="/servers">Servers</a>
        <a href="/logs">Logs</a>
        <form action="/logout" method="post" class="inline-form">
          <input type="hidden" name="csrfToken" value="${escapeHtml(options.csrfToken)}">
          <button class="link-button" type="submit">Log out</button>
        </form>
      </nav>`
    : '';

  const message = options.message
    ? `<div class="notice">${escapeHtml(options.message)}</div>`
    : '';

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(options.title)} · Discord Blacklist</title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <header>
    <div class="brand">Discord Blacklist</div>
    ${nav}
  </header>
  <main>
    ${message}
    ${options.body}
  </main>
</body>
</html>`;
}

export function formatDate(value: Date | string | null | undefined): string {
  if (!value) return '—';
  return new Date(value).toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}
