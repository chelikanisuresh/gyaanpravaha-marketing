// Security utilities — gyaanpravaha.com
// Lightweight sanitization without external dependencies

/**
 * HTML-escape user input before embedding in HTML templates.
 * Prevents HTML injection in email templates and other HTML strings.
 */
export function escapeHtml(str: unknown): string {
  if (typeof str !== 'string') return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

/**
 * Sanitize markdown-rendered HTML before dangerouslySetInnerHTML.
 * Strips script tags, event handlers, javascript: hrefs, and iframes.
 * Safe for server-side use (no DOM dependency).
 */
export function sanitizeHtml(html: string): string {
  return html
    // Remove script tags and content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    // Remove iframe tags
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    // Remove object/embed tags
    .replace(/<(object|embed|form)[^>]*>.*?<\/\1>/gi, '')
    // Remove on* event handlers from any tag
    .replace(/\s+on\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/\s+on\w+\s*=\s*[^\s>]+/gi, '')
    // Remove javascript: and data: hrefs/srcs
    .replace(/(href|src|action)\s*=\s*["']\s*(javascript|data|vbscript):[^"']*/gi, '$1="#"')
    // Remove style attributes with expressions
    .replace(/style\s*=\s*["'][^"']*expression\s*\([^"']*/gi, '')
    // Remove base tags (prevent base URL hijacking)
    .replace(/<base\b[^>]*>/gi, '')
    // Remove meta refresh
    .replace(/<meta\b[^>]*http-equiv\s*=\s*["']refresh["'][^>]*>/gi, '')
}

/**
 * Validate email format server-side.
 */
export function isValidEmail(email: unknown): boolean {
  if (typeof email !== 'string') return false
  return /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/.test(email.trim())
}

/**
 * Validate phone — allows Indian and international formats.
 */
export function isValidPhone(phone: unknown): boolean {
  if (typeof phone !== 'string') return false
  const digits = phone.replace(/[\s\-\+\(\)]/g, '')
  return /^\d{7,15}$/.test(digits)
}

/**
 * Truncate string to max length to prevent payload abuse.
 */
export function truncate(str: unknown, max: number): string {
  if (typeof str !== 'string') return ''
  return str.slice(0, max)
}

/**
 * Simple in-memory rate limiter (resets on cold start — good enough for Vercel serverless).
 * For production scale use Upstash Redis.
 */
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

export function checkRateLimit(ip: string, maxRequests = 3, windowMs = 3600000): boolean {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + windowMs })
    return true // allowed
  }

  if (entry.count >= maxRequests) {
    return false // blocked
  }

  entry.count++
  return true // allowed
}
