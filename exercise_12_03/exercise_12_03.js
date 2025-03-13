/* while (true) {
  let answer = prompt("<1.입력, 2.삭제, 3.종료>"); //입력 값 받기

  if (answer == 1) {
    let add = prompt("할 일을 추가해주세요.");
    aList.push(add);
  } else if (answer == 2) {
    let number = prompt("삭제할 할 일의 번호를 입력하세요 (0부터 시작):");
    aList.splice(parseInt(number), 1);
  } else if (answer == 3) {
    console.log("최종 할 일 목록:" + aList);
    break;
  } else {
    alert("없는 메뉴 입니다.");
    break;
  }
}
 */

/* let aList = [];

while (true) {
  let answer = prompt(
    "<메뉴를 선택해 주세요> \n1. 목록 추가 \n2. 목록 삭제 \n3. 종료"
  ); // answer에 사용자 입력값을 받는다.

  if (answer == 1) {
    //1. 목록 추가
    let add = prompt("할 일을 추가해주세요.");
    if (add) {
      aList.push(add);
    } else {
      alert("값이 없습니다.");
    }
  } else if (answer == 2) {
    let number = prompt("삭제할 할 일의 번호를 입력하세요 (0부터 시작):");
    aList.splice(parseInt(number), 1);
  } else if (answer == 3) {
    console.log(`최종 할 일 목록: ${aList}`);
    break;
  } else {
    alert("없는 메뉴 입니다.");
    break;
  }
} */

let aList = [];

while (true) {
  let answer = prompt(
    "<메뉴를 선택해 주세요> \n1. 목록 추가 \n2. 목록 삭제 \n3. 목록 확인 \n4. 종료"
  ); // answer에 사용자 입력값을 받는다.

  if (answer == 1) {
    //1. 목록 추가
    while (true) {
      let add = prompt("할 일을 추가해주세요. 메뉴화면 : 엔터");
      if (add) {
        aList.push(add);
      } else {
        alert("메뉴로 돌아갑니다.");
        break;
      }
    }
  } else if (answer == 2) {
    //2. 목록 삭제
    let number = prompt("삭제할 할 일의 번호를 입력하세요 (0부터 시작):");
    aList.splice(parseInt(number), 1);
  } else if (answer == 3) {
    alert(`현재재 할 일 목록: \n ${aList}`);
  } else if (answer == 4) {
    console.log(`최종 할 일 목록: ${aList}`);
    break;
  } else {
    alert("없는 메뉴 입니다.");
    break;
  }
}
