import { useState, useEffect } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const MatchSchedule = ({ selectedDate, setSelectedDate }) => {
  const [dateOptions, setDateOptions] = useState([]);
  const [viewAll, setViewAll] = useState(false);

  // Format date for display
  const formatDisplayDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const isToday = date.getTime() === today.getTime();
    const isTomorrow = date.getTime() === tomorrow.getTime();
    
    if (isToday) return "Today";
    if (isTomorrow) return "Tomorrow";
    
    return date.toLocaleDateString('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    });
  };

  // Is date active
  const isMatchDay = (dateString) => {
    // Mock function to determine if there are matches on this date
    // In a real app, this would check against actual fixture data
    const date = new Date(dateString);
    const day = date.getDay(); // 0 is Sunday, 1 is Monday, etc.
    
    // For demo purposes: assume matches on weekends and Wednesdays
    return day === 0 || day === 3 || day === 6;
  };

  // Navigate to previous/next date
  const navigateDate = (direction) => {
    const currentDate = new Date(selectedDate);
    const newDate = new Date(currentDate);
    
    if (direction === 'next') {
      newDate.setDate(currentDate.getDate() + 1);
    } else {
      newDate.setDate(currentDate.getDate() - 1);
    }
    
    setSelectedDate(newDate.toISOString().split('T')[0]);
  };

  // Generate date options for the next 14 days
  useEffect(() => {
    const today = new Date();
    const options = [];
    
    for (let i = -2; i < (viewAll ? 30 : 12); i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      options.push({
        value: date.toISOString().split('T')[0],
        display: formatDisplayDate(date),
        hasMatches: isMatchDay(date),
        isWeekend: date.getDay() === 0 || date.getDay() === 6
      });
    }
    
    setDateOptions(options);
  }, [viewAll]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
            <Calendar className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
            Match Schedule
          </h2>
          
          {/* Calendar Picker */}
          <div className="flex items-center space-x-2">
            <label
              className="text-sm text-gray-700 dark:text-white font-medium hidden sm:inline"
              htmlFor="date"
            >
              Custom date:
            </label>
            <input
              id="date"
              type="date"
              className="border text-sm rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </div>
        
        {/* Date Navigation */}
        <div className="flex items-center mb-4">
          <button 
            onClick={() => navigateDate('prev')}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Previous day"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="mx-2 text-gray-700 dark:text-gray-300 text-sm font-medium">
            Selected: <span className="text-blue-600 dark:text-blue-400 font-semibold">
              {formatDisplayDate(selectedDate)}
            </span>
          </div>
          
          <button 
            onClick={() => navigateDate('next')}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Next day"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        {/* Date Pills */}
        <div className="mb-6 overflow-x-auto pb-4 no-scrollbar">
          <div className="flex space-x-2 min-w-max">
            {dateOptions.map((date) => (
              <button
                key={date.value}
                onClick={() => setSelectedDate(date.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex flex-col items-center min-w-20
                  ${selectedDate === date.value 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : date.hasMatches 
                      ? 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700'
                  }
                  ${date.isWeekend && !selectedDate === date.value ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800/50' : ''}
                `}
              >
                <span>{date.display}</span>
                {date.hasMatches && selectedDate !== date.value && (
                  <span className="w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mt-1"></span>
                )}
              </button>
            ))}
            
            <button 
              onClick={() => setViewAll(!viewAll)}
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200"
            >
              {viewAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchSchedule;