export const isCurrentTimeInRange = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentDay = daysOfWeek[currentDate.getDay()];

  if(currentDay === 'Friday' || currentDay === 'Saturday') {
    return currentHour >= 13 && currentHour < 23;
  }
  return currentHour >= 13 && currentHour < 22;
}
