import { useState } from "react";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const CalView= ["Month","Week","Day"];

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isCalView, setIsCalView] = useState(CalView[0]);

  // Example Events
  const events = {
    "2026-02-15": "Exam",
    "2026-02-20": "Holiday",
    "2026-02-25": "PTM",
  };
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
 
  const prevMonth = () =>
    setCurrentDate(new Date(year, month - 1, 1));

  const nextMonth = () =>
    setCurrentDate(new Date(year, month + 1, 1));

  const isToday = (day) => {
    const today = new Date();

    
    return (
        day === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
    );
   };
   

  return (<>
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
        <div className="flex justify-between items-center py-4">
            <h2 className="text-gray-700 text-2xl font-semibold">Academic Calendar</h2>
            <div className="flex flex-col md:flex-row divide-y-2 md:divide-y-0  md:divide-x-2  border border-gray-400">
                {CalView.map((v,index)=>{
                    return(
                        <button
                        onClick={()=> setIsCalView(v)}
                        className={`px-2 ${isCalView === v? "bg-red-500 text-white":"text-gray-600"}`}
                        key={index}>{v}</button>
                    )
                })}
            </div>
        </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={prevMonth}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          ◀
        </button>

        <h2 className="text-lg font-semibold">
          {currentDate.toLocaleString("default", {
            month: "long",
          })}{" "}
          {year}
        </h2>

        <button
          onClick={nextMonth}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          ▶
        </button>
      </div>

      {/* Days Row */}
      <div className="grid grid-cols-7 text-center font-medium text-gray-600">
        {days.map((day) => (
          <div key={day}>{day}</div>
          
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 mt-2 gap-2 text-center">

        {/* Empty Cells */}
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={i}></div>
        ))}
        {/* Dates */}
        {Array.from({ length: totalDays }).map((_, i) => {
          const day = i + 1;
          const dateKey = `${year}-${String(month + 1).padStart(
            2,"0"
          )}-${String(day).padStart(2, "0")}`;
          return (
              <div
              key={day}
              className={`p-2 rounded-lg cursor-pointer flex justify-center
                ${
                  isToday(day)
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-100"
                }`}
            >
              <div>{day}</div>

              {/* Event Dot */}
              {events[dateKey] && (
                <div className="w-2 h-2 bg-red-500 rounded-full mx-auto mt-1"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
   

  </>);
}