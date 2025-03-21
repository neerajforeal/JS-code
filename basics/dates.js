let myDate = new Date();
console.log(myDate); // 2021-01-31T10:00:00.000Z
console.log(myDate.getDate()); // 31
console.log(myDate.toDateString()); // Sun Jan 31 2021
console.log(myDate.toLocaleString()); // 1/31/2021, 3:00:00 PM
console.log(myDate.toISOString()); // 2021-01-31T10:00:00.000Z
console.log(myDate.toUTCString()); // Sun, 31 Jan 2021 10:00:00 GMT
console.log(typeof myDate); // object

let myCreatedDate = new Date("2021-01-31");
console.log(myCreatedDate); // 2021-01-31T00:00:00.000Z
console.log(myCreatedDate.getDate()); // 31
console.log(myCreatedDate.toDateString()); // Sun Jan 31 2021
console.log(myCreatedDate.toLocaleString()); // 1/31/2021, 5:30:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000));
