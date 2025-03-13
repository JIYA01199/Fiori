/*   1. 화면상에서 입력받은 두 입력값을 메소드를 활용하여 값을 가져온다.
     2. 해당 변수 면적 계산 함수의 매개변수로 활용하여 호출한다.
     3. 결과값을 리턴한다. -> 출력 요소에 넣어준다. (랜더링)
        "계산된 면적 : ____"                                */

// 면적 계산 함수
function calculateArea(length, width) {
  return length * width; //길이와 너비를 곱해서 면적을 계산
}

// 버튼 클릭 시 호출되는 함수
function calculate() {
  // 입력 값 가져오기기 (오른쪽에 있는 값값을 왼쪽 변수에 넣어준다.)
  let rlength = document.getElementById("num1").value;
  let rwidth = document.getElementById("num2").value;

  /*   //현재 타입이 number라 숫자만 들어오겠지만 아닌경우 isNAlN을 통해 값이 제대로 들어왔는지 확인인 
  //유효성 검사 : 값이 제대로 입력되었는지 확인 isNaN() : 값이 숫자인지 아닌지 확인
  if(isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
    alert("유효한 길이와 너비를 입력해주세요");
    return;
  } */

  // 면적을 계산하여 결과에 담아준다.
  let area = calculateArea(rlength, rwidth);

  // 결과 출력 -> 화면상에 존재하는 innerText 속성에 값 할당
  document.getElementById("result").innerText = "계산된 면적 : " + area;
}
