//{Key : value, Key : value, Key : value ...}
var fruit = {
  name: "banana",
  color: "yellow",
  drigin: "Puerto Rico",
  weight: 230,
  size: 17,
};

var aFruit = []; //배열객체 선언

// 멀티 주석 : Shift + alt + A , 싱글 주석 : ctrl + /

for (var p in fruit) {
  console.log(p + ":" + fruit[p]); // 출력력
  aFruit.push(fruit[p]); //Array 객체의 메소드 PUSH
}

console.log(aFruit); //배열에 입력된 데이터 출력

alert(aFruit[3]); //상단 메세지창에 배열 index에 해당하는 value 출력
