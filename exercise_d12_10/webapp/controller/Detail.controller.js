sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("sync.d12.exercised1210.controller.Detail", {
      onInit() {
        this.oRouter = this.getOwnerComponent().getRouter(); // 컨트롤러에 유효한 객체
        this.oRouter
          .getRoute("RouteDetail")
          .attachPatternMatched(this._onPatternMatched, this);
      },

      // pattern이 일치할 때 마다 실행되는 이벤트

      _onPatternMatched(oEvent) {
        //1. URL 에서 전달된 파라미터 가져오기.
        // var sId = oEvent.getParameter("arguments").key1; //키 지정
        var oArgu = oEvent.getParameters().arguments; //배열

        //2. 새로운 JSON 모델 생성하여 ID 값을 저장
        // var oModel = new JSONModel({ key1: sId });
        var oModel = new JSONModel(oArgu);

        //3. 뷰에 "detailModel"로 모델 설정
        this.getView().setModel(oModel, "detailModel");
      },

      onGoBack() {
        //let sMemo = this.getView().byId().getValue();
        //메인으로 돌아가는 로직 구성
        //   this.getOwnerComponent().getRouter().navTo('RouteMain', {});  //optional 이므로 paramter 없어도 됨
        this.oRouter.navTo(
          "RouteMain",
          {
            // "?query": {
            //   memo: sMemo,
            // },
          },
          true
        ); //꼭 활용되는 메서드 3개
      },
    });
  }
);
