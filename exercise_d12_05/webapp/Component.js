sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sync/d12/exercised1205/model/models",
    "sap/ui/model/json/JSONModel",
  ],
  (UIComponent, models, JSONModel) => {
    "use strict";

    return UIComponent.extend("sync.d12.exercised1205.Component", {
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
        const oModel = new JSONModel({ input: "연습문제 파이팅!" });
        this.setModel(oModel);
      },
    });
  }
);
