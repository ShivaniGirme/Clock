let hour=document.getElementById('hr');
let min=document.getElementById('mn');
let sec=document.getElementById('sec');
let dat1=document.getElementById('dat')
let mon=document.getElementById('mon');
let yer=document.getElementById('yer');
let day=document.getElementById('day');
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function updateTime() {
	// body...
	let nTime = new Date();
	console.log(nTime);
	console.log(months[nTime.getMonth()]);
	
	hour.innerHTML=nTime.getHours();
	min.innerHTML=nTime.getMinutes();
	sec.innerHTML=nTime.getSeconds();
	dat1.innerHTML=nTime.getDate();
	mon.innerHTML=months[nTime.getMonth()];
	yer.innerHTML=nTime.getFullYear();
	day.innerHTML=days[nTime.getDay()];

}
setInterval(updateTime,1000);
