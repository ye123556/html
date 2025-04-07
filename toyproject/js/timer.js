let minute = 0;
let second = 0;
let millisecond = 0;
let interval; // 초기화 변수수
const minutes = document.getElementById('minute');
const seconds = document.getElementById('second');
let milliseconds = document.getElementById('millisecond');
const start = document.getElementById('start-btn');
const stopB = document.getElementById('stop-btn');
const reset = document.getElementById('reset-btn');

// 시작버튼
start.onclick = function () {
  if (start.disabled == false) {
    // 활성화
    interval = setInterval(startClock, 10); // 1초마다 startClock함수를 실행할 것임
  } else {
    start.disabled = true; // 비활성화
  }
};

// 정지버튼
stopB.onclick = function () {
  start.disabled == false;
  clearInterval(interval); // 타이머 반복 실행을 종료한다.
  start.disabled = false;
};

// reset버튼
reset.onclick = function () {
  start.disabled == false;
  clearInterval(interval);
  second = 0;
  minute = 0;
  millisecond = 0;
  //html span 초기화
  minutes.innerText = '00';
  seconds.innerText = '00';
  milliseconds.innerText = '00';
};

function startClock() {
  //second++; // 시작버튼 누르면 1씩 증가할 것이다.
  // if (second <= 9) seconds.innerText = '0' + second;
  // else seconds.innerText = second; // 이거 왜 안되는거야?

  // 초가 59이상일때 1분으로 변경
  //   if (second > 59) {
  //     minute++;
  //     minutes.innerText = minute;
  //     second = 0;
  //     // seconds.innerText="00";
  //     seconds.innerText = second;
  //   } else {
  //     seconds.innerText = second;
  //   }
  // }

  // 성공성공ㅠㅠ!!!!
  millisecond++;
  if (second < 10) seconds.innerText = '0' + second;
  else seconds.innerText = second;

  if (minute < 10) minutes.innerText = '0' + minute;
  else minutes.innerText = minute;

  if (millisecond > 99) {
    second++;
    seconds.innerText = '0' + second;
    millisecond = 0;
  }
  if (second > 59 || millisecond > 99) {
    minute++;
    second++;
    minutes.innerText = minute;
    second = 0;
    seconds.innerText = second;
  } else {
    milliseconds.innerText = millisecond;
  }
}
// var time = setInterval("func()", 1000); // func()함수를 1초 간격으로 갱신
// clearInterval(time); // time에 들어있는 interval값을 초기하 시킴(=종료시킴)

// let minute = 0;
// let second = 0;
// /* 숫자 변수를 저장해놓고 1초마다 1씩 증가하는!! */
// setInterval(() => console.log(++minute), 1000);
