sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter", //필터 기능 추가
    "sap/ui/model/FilterOperator", //필터 연산자 추가
  ],
  (Controller, JSONModel, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("sync.d12.mentoring.controller.Main", {
      onInit() {
        const oViewModel = new JSONModel({
          currency: "KRW",
        });
        this.getView().setModel(oViewModel, "view");
      },
      onFilterProduct(oEvent) {
        // build filter array
        const aFilter = [];
        const sQuery = oEvent.getParameter("query");

        if (sQuery) {
          aFilter.push(new Filter("name", FilterOperator.Contains, sQuery));
        }

        // filter binding
        const oList = this.byId("productList");
        const oBinding = oList.getBinding("items");
        oBinding.filter(aFilter);
      },
    });
  }
);
