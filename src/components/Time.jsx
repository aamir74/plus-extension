import { useEffect, useState } from "react";

const Time = () => {
  const [date, setDate] = useState(new Date());
  const daysArr = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const hrs = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const mins =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const day = daysArr[date.getDay() - 1];

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1 className="timer">
        {hrs}:{mins}
      </h1>
      <p className="weekday">{day}</p>
    </div>
  );
};
export { Time };
