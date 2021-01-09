function convertNum(num){
  num=num.toString();
  num=num.replace('0','০');
  num=num.replace('1','১');
  num=num.replace('2','২');
  num=num.replace('3','৩');
  num=num.replace('4','৪');
  num=num.replace('5','৫');
  num=num.replace('6','৬');
  num=num.replace('7','৭');
  num=num.replace('8','৮');
  num=num.replace('9','৯');

  num=num.replace('0','০');
  num=num.replace('1','১');
  num=num.replace('2','২');
  num=num.replace('3','৩');
  num=num.replace('4','৪');
  num=num.replace('5','৫');
  num=num.replace('6','৬');
  num=num.replace('7','৭');
  num=num.replace('8','৮');
  num=num.replace('9','৯');

  num=num.replace('0','০');
  num=num.replace('1','১');
  num=num.replace('2','২');
  num=num.replace('3','৩');
  num=num.replace('4','৪');
  num=num.replace('5','৫');
  num=num.replace('6','৬');
  num=num.replace('7','৭');
  num=num.replace('8','৮');
  num=num.replace('9','৯');
  return num;
}
alert("This website was created by Nur Mahmud Ul Alam Tasin.\nReport bug at github.com/NurTasin/nobo-borsho\nv1.0.4");
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');
const currentYear = new Date().getFullYear();
const currentMonth= new Date().getMonth();
const currentDate=new Date().getDate();
const newYearTime = new Date(`April 14 ${currentMonth>3&&currentDate>14?currentYear + 1:currentYear} 00:00:00`);
year.innerText = convertNum(currentMonth>3&&currentDate>14?currentYear - 593:currentYear-594);
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
  let d = Math.floor(diff / 1000 / 60 / 60 / 24);
  let h = Math.floor(diff / 1000 / 60 / 60) % 24;
  let m = Math.floor(diff / 1000 / 60) % 60;
  let s = Math.floor(diff / 1000) % 60;
  d=convertNum(d);
  h=convertNum(h);
  m=convertNum(m);
  s=convertNum(s);
  days.innerHTML = d;
  hours.innerHTML = h.length < 2 ? '০' + h : h;
  minutes.innerHTML = m.length < 2 ? '০' + m : m;
  seconds.innerHTML = s.length < 2 ? '০' + s : s;
}
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 2000);
setInterval(updateCountdown, 1000);
