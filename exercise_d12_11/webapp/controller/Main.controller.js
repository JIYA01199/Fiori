sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("sync.d12.exercised1211.controller.Main", {
      onInit() {},

      async onDetails() {
        var oTable = this.getView().byId("table");
        var sSelectedItem = oTable.getSelectedItem();
        var oData = sSelectedItem.getBindingContext("data").getObject();

        this.getView().setModel(oData, "dataModel");

        this.oDialog ??= await this.loadFragment({
          name: "sync.d12.exercised1211.view.Dialog",
        });

        this.oDialog.open();
      },

      onCloseDialog() {
        if (this.oDialog) {
          this.oDialog.close();
        }
      },
    });
  }
);
