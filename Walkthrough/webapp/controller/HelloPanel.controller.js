sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.HelloPanel", {
      onShowHello() {
        // show a native JavaScript alert
        // alert("Hello World");

        // 리소스 모델 데이터 가져온다.
        // read msg from i18n model 모델 가져오기기
        const oBundle = this.getView().getModel("i18n").getResourceBundle();

        //기본 JSON 모델에서 /recipient/name 의 값을 가져온다.
        const sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");

        // i18n 모델에서 선택된 리소스번들의 값(텍스트)과 기본 모델에서의 name 값 조합합
        const sMsg = oBundle.getText("helloMsg", [sRecipient]);

        // show message
        MessageToast.show(sMsg);
        // MessageToast.show("Hello World"); // 리소스모델에 바인딩하여 표현
      },
      async onOpenDialog() {
        // create dialog lazily
        this.oDialog ??= await this.loadFragment({
          name: "ui5.walkthrough.view.HelloDialog",
        });

        this.oDialog.open();
      },
      onCloseDialog() {
        // note: We don't need to chain to the pDialog promise, since this event handler
        // is only called from within the loaded dialog itself.
        this.byId("helloDialog").close();
      },
    });
  }
);
