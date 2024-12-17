import React, { useRef, useEffect, useState } from 'react';

const ScrollToSectionComponent = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (ref, sectionName) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${sectionName}`);
    }
  };

  const handleScroll = () => {
    const section1Top = section1Ref.current?.getBoundingClientRect().top;
    const section2Top = section2Ref.current?.getBoundingClientRect().top;
    const section3Top = section3Ref.current?.getBoundingClientRect().top;

    if (section1Top <= window.innerHeight / 2 && section1Top >= -window.innerHeight / 2) {
      setActiveSection('section1');
      window.history.replaceState(null, '', '#section1');
    } else if (section2Top <= window.innerHeight / 2 && section2Top >= -window.innerHeight / 2) {
      setActiveSection('section2');
      window.history.replaceState(null, '', '#section2');
    } else if (section3Top <= window.innerHeight / 2 && section3Top >= -window.innerHeight / 2) {
      setActiveSection('section3');
      window.history.replaceState(null, '', '#section3');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Buttons */}
      <div className="fixed top-0 left-0 w-full bg-white shadow p-4 flex justify-center gap-4 z-10">
        <button
          onClick={() => scrollToSection(section1Ref, 'section1')}
          className={`px-4 py-2 rounded ${activeSection === 'section1' ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white'}`}
        >
          Scroll to Section 1
        </button>
        <button
          onClick={() => scrollToSection(section2Ref, 'section2')}
          className={`px-4 py-2 rounded ${activeSection === 'section2' ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white'}`}
        >
          Scroll to Section 2
        </button>
        <button
          onClick={() => scrollToSection(section3Ref, 'section3')}
          className={`px-4 py-2 rounded ${activeSection === 'section3' ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white'}`}
        >
          Scroll to Section 3
        </button>
      </div>

      {/* Sections */}
      <div
        ref={section1Ref}
        className="h-screen flex items-center justify-center bg-red-200"
        id="section1"
      >
        <h1 className="text-3xl font-bold">Section 1</h1>
      </div>
      <div
        ref={section2Ref}
        className="h-screen flex items-center justify-center bg-green-200"
        id="section2"
      >
        <h1 className="text-3xl font-bold">Section 2</h1>
      </div>
      <div
        ref={section3Ref}
        className="h-screen flex items-center justify-center bg-yellow-200"
        id="section3"
      >
        <h1 className="text-3xl font-bold">Section 3</h1>
      </div>
    </div>
  );
};

export default ScrollToSectionComponent;
