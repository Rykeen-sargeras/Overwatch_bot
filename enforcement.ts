import crypto from 'node:crypto';
import type { NextFunction, Request, Response } from 'express';
import { config } from './config.js';

export function safeCompare(input: string, expected: string): boolean {
  const a = crypto.createHash('sha256').update(input).digest();
  const b = crypto.createHash('sha256').update(expected).digest();
  return crypto.timingSafeEqual(a, b);
}

export function ensureCsrf(req: Request): string {
  if (!req.session.csrfToken) {
    req.session.csrfToken = crypto.randomBytes(24).toString('hex');
  }
  return req.session.csrfToken;
}

export function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (!req.session.authenticated) {
    res.redirect('/login');
    return;
  }
  next();
}

export function verifyCsrf(req: Request, res: Response, next: NextFunction): void {
  const provided = String(req.body?.csrfToken ?? req.get('x-csrf-token') ?? '');
  const expected = req.session.csrfToken ?? '';
  if (!provided || !expected || !safeCompare(provided, expected)) {
    res.status(403).send('Invalid or expired form token. Refresh the page and try again.');
    return;
  }
  next();
}

export function sessionCookieOptions() {
  return {
    httpOnly: true,
    secure: config.production,
    sameSite: 'lax' as const,
    maxAge: 12 * 60 * 60 * 1000,
  };
}
