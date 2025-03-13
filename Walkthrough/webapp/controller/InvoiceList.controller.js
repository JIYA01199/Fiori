sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  (Controller, JSONModel, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.InvoiceList", {
      onInit() {
        const oViewModel = new JSONModel({
          currency: "EUR",
        });
        this.getView().setModel(oViewModel, "view");
      },

      // search field의 돋보기 눌렸을 때 trigger 되는 이벤트 핸들러 메소드 정의

      onFilterInvoices(oEvent) {
        // build filter array (필터 배열 생성 (기준은 배열))
        const aFilter = [];
        const sQuery = oEvent.getParameter("query"); //입력된 값값
        if (sQuery) {
          aFilter.push(
            new Filter("ProductName", FilterOperator.Contains, sQuery)
          );
        }

        // filter binding (바인딩 필터 적용)
        const oList = this.byId("invoiceList"); //대상 리스트 (인터널 테이블)
        const oBinding = oList.getBinding("items"); //각 아이템에 바인딩
        oBinding.filter(aFilter); //필터링
      },
    });
  }
);
