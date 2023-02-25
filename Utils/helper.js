export const changeDate = () => {
  const inputDate = new Date(d);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const year = inputDate.getFullYear();
  const month = inputDate.getMonth();
  const day = inputDate.getDate();
  const hour = inputDate.getHours();
  const minute = inputDate.getMinutes();
  const second = inputDate.getSeconds();
  const outputDate = `${dayNames[inputDate.getDay()]} ${
    monthNames[month]
  } ${day} ${year} ${hour}:${minute}:${second} GMT+0600 (Bangladesh Standard Time)`;
  return outputDate;
};
