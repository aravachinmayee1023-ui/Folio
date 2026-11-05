import test from 'node:test';
import assert from 'node:assert/strict';
import { validateContactForm, sanitizeText } from './validation';
import { generateProductionHtml } from './html-exporter';
import { INITIAL_PORTFOLIO_DATA } from './portfolio-data';

test('validateContactForm rejects empty submissions', () => {
  const result = validateContactForm({
    fullName: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
    privacyConsent: false
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName, 'Should require fullName');
  assert.ok(result.errors.email, 'Should require email');
  assert.ok(result.errors.subject, 'Should require subject');
  assert.ok(result.errors.message, 'Should require message');
  assert.ok(result.errors.privacyConsent, 'Should require explicit privacy consent');
});

test('validateContactForm accepts valid submission with consent', () => {
  const result = validateContactForm({
    fullName: 'Dr. Sarah Connor',
    email: 'sarah@skynet-defense.org',
    organization: 'Defense Systems Lab',
    subject: 'Autonomous Agent Architecture Feasibility',
    message: 'We are seeking an architectural audit for our distributed multi-agent telemetry pipeline.',
    privacyConsent: true
  });

  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('sanitizeText safely escapes HTML characters', () => {
  const unsafe = '<script>alert("XSS")</script>&"\'';
  const safe = sanitizeText(unsafe);
  assert.ok(!safe.includes('<script>'));
  assert.ok(safe.includes('&lt;script&gt;'));
});

test('generateProductionHtml produces complete valid HTML based on user template design system', () => {
  const html = generateProductionHtml(INITIAL_PORTFOLIO_DATA);

  // 1. Valid HTML structure & styling
  assert.ok(html.startsWith('<!DOCTYPE html>'));
  assert.ok(html.includes('<html lang="en" class="scroll-smooth">'));
  assert.ok(html.includes('cdn.tailwindcss.com'));
  assert.ok(html.includes('schema.org'));
  assert.ok(html.includes('focus-visible'));

  // 2. Core sections
  assert.ok(html.includes('id="top"'));
  assert.ok(html.includes('id="about"'));
  assert.ok(html.includes('id="projects"'));
  assert.ok(html.includes('id="skills"'));
  assert.ok(html.includes('id="embeds"'));
  assert.ok(html.includes('id="reviews"'));
  assert.ok(html.includes('id="news"'));
  assert.ok(html.includes('id="contact"'));
  assert.ok(html.includes('id="legal"'));

  // 3. Skills semantic table
  assert.ok(html.includes('<table class="w-full text-left text-sm min-w-[480px]">'));
  assert.ok(html.includes('Frontend'));
  assert.ok(html.includes('Backend'));
  assert.ok(html.includes('Advanced'));

  // 4. Legal accordions (<details>)
  assert.ok(html.includes('id="privacy"'));
  assert.ok(html.includes('id="data"'));
  assert.ok(html.includes('id="terms"'));
  assert.ok(html.includes('id="cookies"'));
  assert.ok(html.includes('id="refunds"'));
  assert.ok(html.includes('id="access"'));
  assert.ok(html.includes('id="credits"'));

  // 5. Cookie banner & form validation
  assert.ok(html.includes('id="cookie-banner"'));
  assert.ok(html.includes('id="contact-form"'));
  assert.ok(html.includes('id="consent"'));

  // 6. Business details & consumer protection notice
  assert.ok(html.includes('Consumer Protection Act, 2019'));
  assert.ok(html.includes('Hyderabad'));
});
