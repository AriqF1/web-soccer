import { useState, useRef, useEffect } from "react";
import { ContentFaq, ContentFaq2 } from "../assets/constant/faq";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Faq = () => {
  // Combine both FAQ arrays into one for the carousel
  const allFaqs = [...ContentFaq, ...ContentFaq2];
  
  // State for tracking the carousel
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  const carouselRef = useRef(null);
  
  // Function to scroll to next item
  const scrollNext = () => {
    if (activeIndex < allFaqs.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };
  
  // Function to scroll to previous item
  const scrollPrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };
  
  // Update scroll position when activeIndex changes
  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * activeIndex;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);
  
  // Mouse/Touch events for manual scrolling
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
    // Find which card is most visible and set it as active
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth;
      const newIndex = Math.round(carouselRef.current.scrollLeft / cardWidth);
      setActiveIndex(Math.max(0, Math.min(newIndex, allFaqs.length - 1)));
    }
  };
  
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };
  
  // Touch events
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };
  
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="px-4 mx-auto max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to the most common questions about our services and features.
          </p>
        </div>
        
        {/* Carousel Navigation */}
        <div className="flex justify-between items-center mb-6 px-4">
          <button 
            onClick={scrollPrev} 
            disabled={activeIndex === 0}
            className={`p-2 rounded-full ${activeIndex === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100 dark:hover:bg-gray-700'}`}
            aria-label="Previous FAQ"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {activeIndex + 1} / {allFaqs.length}
          </div>
          
          <button 
            onClick={scrollNext} 
            disabled={activeIndex === allFaqs.length - 1}
            className={`p-2 rounded-full ${activeIndex === allFaqs.length - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100 dark:hover:bg-gray-700'}`}
            aria-label="Next FAQ"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden"
        >
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            {allFaqs.map((item, index) => (
              <div 
                key={index} 
                className="min-w-full w-full flex-shrink-0 snap-center px-4"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 h-full border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                        <svg
                          className="w-6 h-6 text-blue-600 dark:text-blue-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.question}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {allFaqs.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index
                  ? "bg-blue-600"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Go to FAQ ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;