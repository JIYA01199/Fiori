sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("ui5.walkthrough.controller.App", {
    /* onInit() {
        // set data model on view
        // 초기 셋팅 목적
        const oData = {
          recipient: {
            name: "World",
          },
        };
        const oModel = new JSONModel(oData);
        this.getView().setModel(oModel); // 뷰에 모델을 연결
        //  this.getView().setModel(oModel, "myModel"); // 모델명 추가

        // 2. Resource Model (i18n)
        // set i18n model on view
        // 초기 리소스 데이터 셋팅(최초 한번만) : 타켓 데이터 경로를 매개변수로
        const i18nModel = new ResourceModel({
          bundleName: "ui5.walkthrough.i18n.i18n", // 활용할 해당 뷰에게 모델 셋팅 : 리소스모델의 대상 데이터에 경로 안내 (파일로드)
        });
        this.getView().setModel(i18nModel, "i18n"); // 모델이름
      },
 */
  });
});
