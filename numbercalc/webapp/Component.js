sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sync/d12/numbercalc/model/models",
    "sap/ui/model/json/JSONModel",
  ],
  (UIComponent, models, JSONModel) => {
    "use strict";

    return UIComponent.extend("sync.d12.numbercalc.Component", {
      metadata: {
        manifest: "json",
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
      },

      init() {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        // set the device model
        this.setModel(models.createDeviceModel(), "device");

        // enable routing
        this.getRouter().initialize();

        // set my JSON Model
        const calcModel = new JSONModel({
          firstNumber: "숫자를 입력하세요",
          secondNumber: "숫자를 입력하세요",
          operation: "add",
          result: "",
        });
        this.setModel(calcModel);
      },
    });
  }
);
