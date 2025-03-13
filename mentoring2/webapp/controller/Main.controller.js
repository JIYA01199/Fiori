sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/m/MessageToast",
  ],
  (Controller, ODataModel, MessageToast) => {
    "use strict";

    return Controller.extend("sync.d12.mentoring2.controller.Main", {
      onInit() {
        // Odata 모듈 추가
        var oModel = new ODataModel("/sap/opu/odata/sap/ZEMPLOYEE_D12_SRV/");
        // view에 모델 설정
        this.getView().setModel(oModel);
      },
      onCreate() {
        // INPUT 값 가져오기 (getValue() 사용)
        var sNAME = this.getView().byId("NAME").getValue();
        var sPOSITION = this.getView().byId("POSITION").getValue();
        var sDEPARTMENT = this.getView().byId("DEPARTMENT").getValue();
        var sSTATUS = this.getView().byId("STATUS").getValue();
        var sEMAIL = this.getView().byId("EMAIL").getValue();
        var sPHONE = this.getView().byId("PHONE").getValue();
        var sLOCATION = this.getView().byId("LOCATION").getValue();
        var sSALARY = this.getView().byId("SALARY").getValue();

        // POST할 데이터 객체 생성 (POST 형식으로 넘겨준다.)
        var oNewData = {
          Cname: sNAME,
          Cposition: sPOSITION,
          Cdepartment: sDEPARTMENT,
          Cstatus: sSTATUS,
          Cemail: sEMAIL,
          Cphone: sPHONE,
          Clocation: sLOCATION,
          Csalary: sSALARY,
        };

        // 현재 View에 설정된 ODataModel 가져오기
        var oModel = this.getView().getModel();

        // ODataModel을 사용하여 데이터 생성 (POST 요청)
        oModel.create("/ZEMPLOYEE_D12Set", oNewData, {
          success: function () {
            MessageToast.show("데이터가 성공적으로 생성되었습니다.");
            oModel.refresh(); // 데이터 새로고침
          },
          error: function () {
            MessageToast.show("데이터 생성 오류");
          },
        });
      },
    });
  }
);
