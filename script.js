
let today= new Date();

console.log(today.getTime());



function count_days() {
let usersday = new Date(document.getElementById("usersday").value); //get the date from input
// let b = usersday.getTime(); //get millisecons for this user's date
// console.log(b);
	let each_day = 1000 * 60 * 60 * 24;//milliseconds in a day
	let ms_usersday = usersday.getTime();//milliseconds for date1
	let ms_today = today.getTime();//milliseconds for date2
	let ms_date_diff = Math.abs(ms_usersday - ms_today);//different of the two dates in milliseconds
	let days = Math.round(ms_date_diff/each_day);//divided the different with millisecond in a day
	// return days;
console.log(days);
document.getElementById('result').innerHTML= days;
}
