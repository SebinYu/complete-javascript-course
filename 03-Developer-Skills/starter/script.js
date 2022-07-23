// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//prettier: By using this extension, when you push the Enter key,
//VScode otomatically fix minor changes
const x = 23;
if (x === 23) console.log;
console.log();

const calcAge = birth => 2037 - birth;
console.log();

//🐬 스택오버플로우를 보고 처음보는 내용이 많이 나올 것임
//되도록 배웠던것과 관련된 정답(보통 첫,두번째 답변이 좋은경우가 많음)으로 고르기
//정답보고 복붙을 하는 것이 아닌, 내용을 이해하며 읽고 안보고 쳐보기 연습
const arr = [1, 56, 7, 81, 2];

//🐬 함수 선언 방식
const calcTrmpAmplitude = function (arr) {
  let max = arr[0];
  let min = arr[0];
  //🐬 let i = 0
  for (let i = 0; i < arr.length; i++) {
    const curArr = arr[i];
    if (typeof curArr !== 'number') {
      continue;
    } //continue: 아래 소스코드들 작동 중지

    if (arr[i] > max) {
      //🐬 arr[i]
      max = i;
    }
    if (arr[i] < min) {
      min = i;
    }
    console.log(max, min);
  }
};

calcTrmpAmplitude([3, 7, 4]);
calcTrmpAmplitude(arr);
