import React, { useState, useEffect } from 'react';

interface CookieBannerProps {
  forceOpen?: boolean;
  onCloseBanner?: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ forceOpen, onCloseBanner }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('cookie-consent');
      if (!consent) {
        setIsVisible(true);
      }
    } catch (e) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (forceOpen) {
      setIsVisible(true);
    }
  }, [forceOpen]);

  const handleConsent = (choice: 'all' | 'necessary') => {
    try {
      localStorage.setItem('cookie-consent', choice);
    } catch (e) {}
    setIsVisible(false);
    if (onCloseBanner) onCloseBanner();
  };

  if (!isVisible) return null;

  return (
    <div 
      id="cookie-banner" 
      role="dialog" 
      aria-modal="false" 
      aria-labelledby="cb-title" 
      className="ui fixed bottom-0 inset-x-0 z-50 bg-stone-900 border-t border-stone-600 p-5 shadow-2xl"
    >
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row md:items-center gap-4">
        <div className="text-sm md:flex-1">
          <h2 id="cb-title" className="font-semibold text-white">Your cookie choices</h2>
          <p className="text-stone-300 mt-0.5">
            I use one necessary storage item to remember this choice. Optional analytics load only if you accept. See the{' '}
            <a className="text-amber-300 underline hover:text-amber-200" href="#cookies">
              Cookie Policy
            </a>
            .
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button 
            type="button" 
            id="reject" 
            onClick={() => handleConsent('necessary')}
            className="border border-stone-400 px-5 py-2 rounded-md hover:border-amber-300 text-stone-200 transition-colors cursor-pointer text-sm"
          >
            Reject optional
          </button>
          <button 
            type="button" 
            id="accept" 
            onClick={() => handleConsent('all')}
            className="bg-amber-300 text-stone-950 font-semibold px-5 py-2 rounded-md hover:bg-amber-200 transition-colors cursor-pointer text-sm shadow-sm"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
};
