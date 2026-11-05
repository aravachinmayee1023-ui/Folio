import React from 'react';
import { TestimonialItem, BusinessEntityDetails } from '../types/portfolio';

interface TestimonialsAndBusinessProps {
  testimonials: TestimonialItem[];
  businessDetails: BusinessEntityDetails;
}

export const TestimonialsAndBusiness: React.FC<TestimonialsAndBusinessProps> = ({
  testimonials,
  businessDetails
}) => {
  return (
    <section id="reviews" className="mx-auto max-w-5xl px-5 py-14 border-t border-stone-800 transition-colors">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Client feedback and business details</h2>
      <p className="max-w-prose text-stone-300 text-sm leading-relaxed">
        Add only real testimonials from real clients who gave written permission, with their name, role and the date. Do not invent, buy or edit reviews: doing so is illegal in many places, including under India’s Consumer Protection Act, 2019 and the UK and EU rules on fake reviews.
      </p>

      <div className="space-y-5 mt-6">
        {testimonials.map(item => (
          <blockquote key={item.id} className="border-l-4 border-amber-300 pl-4 max-w-prose text-stone-300">
            “{item.quote}”
            <footer className="ui text-sm text-stone-400 mt-1">
              {item.clientName}, {item.clientRole}, {item.clientCompany} (shared with permission, {item.verifiedDate})
            </footer>
          </blockquote>
        ))}
      </div>

      <dl className="ui mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
        <div>
          <dt className="text-stone-400">Trading name</dt>
          <dd className="text-white font-medium">{businessDetails.tradeName || businessDetails.legalName}</dd>
        </div>
        <div>
          <dt className="text-stone-400">Registered address</dt>
          <dd className="text-white font-medium">{businessDetails.registeredAddress}</dd>
        </div>
        <div>
          <dt className="text-stone-400">Email</dt>
          <dd>
            <a className="text-amber-300 underline hover:text-amber-200" href={`mailto:${businessDetails.dpoEmail}`}>
              {businessDetails.dpoEmail}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-stone-400">GSTIN / registration no. (if applicable)</dt>
          <dd className="text-white font-mono">{businessDetails.registrationNumber}</dd>
        </div>
      </dl>
    </section>
  );
};
