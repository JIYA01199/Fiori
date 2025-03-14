sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("sync.d12.exercised1210.controller.Main", {
    // 컨트롤러가 로드될 때 한번만 실행 -> 모델 생성
    onInit() {
      // 한 단계 위에 있는 컴포넌트에 접근해서, 라우터를 가져온다
      // var oRouter = this.getOwnerComponent().getRouter; // 해당 함수에만 유효하다.
      this.oRouter = this.getOwnerComponent().getRouter(); // 컨트롤러에 유효한 객체
    },

    //1. 메인에서 버튼 누르면 움직이는 함수
    onGoDetail() {
      //input 필드에 들어오는 값 찾기 -> 매개변수로 전달하기
      //let sMemo = this.getView().byId("memo").getValue();

      //테이블 가져오기
      var oTable = this.getView().byId("table");

      //해당 테이블에서 내가 클릭한 특정 행 가져오기
      var sSelectedItem = oTable.getSelectedItem();
      var oData = sSelectedItem.getBindingContext("student").getObject();

      console.log(oData);

      // navTo(manifest에 있는 이름(어디로 갈지), {키:값}값을 넘겨 줄 수 있다.);
      this.oRouter.navTo(
        "RouteDetail",
        {
          no: oData.no,
          name: oData.name,
          gender: oData.gender,
          birthdate: oData.birthdate,
          //memo: sMemo,
        },
        true
      ); //꼭 활용되는 인자 3개
    },
  });
});
