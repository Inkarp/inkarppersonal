import React, { useEffect, useRef } from 'react';

const NewCareers = () => {
  const containerRef = useRef(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Clear previous content
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }

    // Set global config for Keka
    window.khConfig = {
      identifier: '357ac919-3c5b-4878-922a-e01bc5fd29cd',
      domain: 'https://inkarpinstrument.keka.com/careers/',
      targetContainer: '#khembedjobs',
    };

    // Inject script
    const loadJobs = () => {
      const existingScript = document.querySelector(
        'script[src="https://inkarpinstrument.keka.com/careers/api/embedjobs/js/357ac919-3c5b-4878-922a-e01bc5fd29cd"]'
      );

      if (existingScript) existingScript.remove();

      const script = document.createElement('script');
      script.src = 'https://inkarpinstrument.keka.com/careers/api/embedjobs/js/357ac919-3c5b-4878-922a-e01bc5fd29cd';
      script.defer = true;

      script.onload = () => {
        console.log('✅ Keka jobs script loaded');
        scriptLoadedRef.current = true;
      };

      script.onerror = () => {
        console.error('❌ Failed to load Keka jobs script');
        if (containerRef.current) {
          containerRef.current.innerHTML = '<p class="text-center text-red-500">Failed to load job listings. Please try again later.</p>';
        }
      };

      document.head.appendChild(script);
    };

    loadJobs();

    // Monitor for content changes using MutationObserver
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          // Log job card content once it's injected
          const jobs = containerRef.current.querySelectorAll('div'); // You can narrow this down by inspecting exact class names

          console.log('📦 Injected job cards:');
          jobs.forEach((job, i) => {
            console.log(`Job ${i + 1}:`, job.innerText || job.textContent);
          });
        }
      });
    });

    if (containerRef.current) {
      observer.observe(containerRef.current, {
        childList: true,
        subtree: true,
      });
    }

    // Cleanup
    return () => {
      const script = document.querySelector(
        'script[src="https://inkarpinstrument.keka.com/careers/api/embedjobs/js/357ac919-3c5b-4878-922a-e01bc5fd29cd"]'
      );
      if (script) script.remove();

      observer.disconnect();
    };
  }, []);

  return (
    <section className="px-5 py-8 flex items-center justfy-center flex-col" id="careers-section">
      <h1 className="p-5 text-center text-sm font-[MaxOT] font-semibold uppercase border border-[#E63946] text-black rounded-full m-5 w-fit">
        Explore Career Opportunities
      </h1>
      <div className="max-w-7xl mx-auto border border-gray-300 rounded-xl py-5">
        <div className="rounded-2xl p-8 mb-8">
          <div
            id="khembedjobs"
            ref={containerRef}
            className="h-[600px] overflow-y-auto text-[#E63946] text-center font-[Roboto] px-4"
          />
        </div>
      </div>
    </section>
  );
};

export default NewCareers;
