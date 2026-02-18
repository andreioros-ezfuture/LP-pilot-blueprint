const ALLOWED_TAGS = ['strong', 'em', 'a', 'b', 'i'];

const TAG_REGEX = /<\/?([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>/g;

export function sanitizeHtml(html: string): string {
  return html.replace(TAG_REGEX, (match, tagName: string) => {
    return ALLOWED_TAGS.includes(tagName.toLowerCase()) ? match : '';
  });
}
