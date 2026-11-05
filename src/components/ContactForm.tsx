import React, { useState } from 'react';
import { ContactFormData } from '../types/portfolio';
import { validateContactForm } from '../utils/validation';

interface ContactFormProps {
  onOpenPrivacy?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onOpenPrivacy }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
    privacyConsent: false
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [formStatus, setFormStatus] = useState<{ message: string; type: 'success' | 'error' | '' }>({
    message: '',
    type: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ message: '', type: '' });

    // Validate fields according to user template specification
    const nameValid = !!formData.fullName.trim();
    const emailValid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email.trim());
    const messageValid = formData.message.trim().length >= 10;
    const consentValid = formData.privacyConsent;

    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!nameValid) newErrors.fullName = 'Enter your name.';
    if (!emailValid) newErrors.email = 'Enter a valid email address, like name@example.com.';
    if (!messageValid) newErrors.message = 'Write at least 10 characters.';
    if (!consentValid) newErrors.privacyConsent = 'Tick the box to agree before sending.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Focus first invalid element
      const firstInvalidId = !nameValid ? 'name' : !emailValid ? 'email' : !messageValid ? 'message' : 'consent';
      const el = document.getElementById(firstInvalidId);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ message: 'Sending…', type: '' });

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        fullName: '',
        email: '',
        organization: '',
        subject: '',
        message: '',
        privacyConsent: false
      });
      setFormStatus({
        message: 'Thanks. Your message was sent.',
        type: 'success'
      });
    }, 600);
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-14 border-t border-stone-800 transition-colors">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Contact</h2>
      <p className="mb-6 text-stone-300">Tell me about your project. I reply within two working days.</p>

      <form 
        id="contact-form" 
        className="ui max-w-xl space-y-5" 
        noValidate 
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={!!errors.fullName}
            aria-describedby="name-err"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full rounded-md bg-stone-900 border px-3 py-2 text-white focus:outline-none transition-colors ${
              errors.fullName ? 'border-red-400' : 'border-stone-500 focus:border-amber-300'
            }`}
          />
          {errors.fullName && (
            <p id="name-err" className="text-sm text-red-300 mt-1" role="alert">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby="email-err"
            value={formData.email}
            onChange={handleChange}
            className={`w-full rounded-md bg-stone-900 border px-3 py-2 text-white focus:outline-none transition-colors ${
              errors.email ? 'border-red-400' : 'border-stone-500 focus:border-amber-300'
            }`}
          />
          {errors.email && (
            <p id="email-err" className="text-sm text-red-300 mt-1" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
            Message <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby="message-err"
            value={formData.message}
            onChange={handleChange}
            className={`w-full rounded-md bg-stone-900 border px-3 py-2 text-white focus:outline-none transition-colors ${
              errors.message ? 'border-red-400' : 'border-stone-500 focus:border-amber-300'
            }`}
          />
          {errors.message && (
            <p id="message-err" className="text-sm text-red-300 mt-1" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {/* Consent Checkbox */}
        <div>
          <div className="flex items-start gap-3">
            <input
              id="consent"
              name="privacyConsent"
              type="checkbox"
              required
              aria-required="true"
              aria-invalid={!!errors.privacyConsent}
              aria-describedby="consent-err"
              checked={formData.privacyConsent}
              onChange={handleChange}
              className="mt-1 h-5 w-5 accent-amber-300 cursor-pointer"
            />
            <label htmlFor="consent" className="text-sm text-stone-300 cursor-pointer select-none">
              I agree that my name, email and message are used to reply to me, as described in the{' '}
              <a 
                className="text-amber-300 underline hover:text-amber-200" 
                href="#privacy"
                onClick={(e) => {
                  if (onOpenPrivacy) {
                    onOpenPrivacy();
                  }
                }}
              >
                Privacy Policy
              </a>
              . <span aria-hidden="true">*</span>
            </label>
          </div>
          {errors.privacyConsent && (
            <p id="consent-err" className="text-sm text-red-300 mt-1" role="alert">
              {errors.privacyConsent}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-amber-300 text-stone-950 font-semibold px-6 py-3 rounded-md hover:bg-amber-200 transition-colors cursor-pointer disabled:opacity-60 shadow-sm"
        >
          {isSubmitting ? 'Sending…' : 'Send message'}
        </button>

        {formStatus.message && (
          <p 
            id="form-status" 
            className={`text-sm mt-2 ${formStatus.type === 'success' ? 'text-amber-300 font-medium' : 'text-stone-300'}`} 
            role="status" 
            aria-live="polite"
          >
            {formStatus.message}
          </p>
        )}
      </form>
    </section>
  );
};
