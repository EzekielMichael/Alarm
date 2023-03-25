
var currentTime = document.querySelector("h1"),
setAlarm = document.querySelector("#setAlarm"),
ReSetAlarm = document.querySelector("#ReSetAlarm"),
container = document.querySelector(".container"),
alarmTime,
RingTone = new Audio("chamilion.mp3"),
SelectMenu = document.querySelectorAll("select");
	
	for (let i= 23; i>=0; i--){
		i = i<10? "0"+i:i;
		let option = `<option value="${i}" >${i}</option>`;
		SelectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option);
	}
	for (let i= 59; i>=0; i--){
		i = i<10? "0"+i:i;
		let option = `<option value="${i}" >${i}</option>`;
		SelectMenu[1].firstElementChild.insertAdjacentHTML("afterend",option);
	}
	
	setInterval(()=>{
	var date = new Date(),
	h = date.getHours(),
	m = date.getMinutes(),
	s = date.getSeconds();
	h = h<10? "0"+h:h;
	m = m<10? "0"+m:m;
	s = s<10? "0"+s:s;
		currentTime.innerText = `${h}:${m}:${s}`;
		let AlarmTimeSet = `${SelectMenu[0].value}:${SelectMenu[1].value}`;
			if(AlarmTimeSet == `${h}:${m}`){
				RingTone.play();
				console.log("Alarm is Ringing....");
			}else{
				RingTone.pause();
			}
	}, 1000);
	
	function setAlarm(){
		let almTm = `${SelectMenu[0].value}:${SelectMenu[1].value}`;
		console.log("Waoo! It functions");
		if(almTm.includes("Hours") || almTm.includes("Minutes")){
			setAlarm.innerHTML = "ClearAlarm";
			return alert("Please, Choose Option Correct!");
		}
		
	}
	
	setAlarm.addEventListener("click", setAlarm);
	ReSetAlarm.addEventListener("click", (e)=>{
		e.preventDefault();
		console.log("Waoo! It functions");
		ResetAlarm.firstElementChild.innerText="ClearAlarm";
	});
	
	
	
	
	