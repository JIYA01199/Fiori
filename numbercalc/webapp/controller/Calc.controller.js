sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("sync.d12.numbercalc.controller.Calc", {
      onInit() {},
      onCalculate: function () {
        var oModel = this.getView().getModel("calcModel");
        var firstNumber = parseFloat(oModel.getProperty("/firstNumber"));
        var secondNumber = parseFloat(oModel.getProperty("/secondNumber"));
        var operation = oModel.getProperty("/operation");
      },
      onShowMultiplicationTable: function () {
        var sMsg;
        var fNumber = parseFloat(
          this.getView().getModel("calModel").getProperty("/firstNumber")
        );
        if (!fNumber) {
          sMsg = "구구단을 표시할 숫자를 입력해주세요.";
        }
        MessageToast.show(sMsg);
      },
    });
  }
);
