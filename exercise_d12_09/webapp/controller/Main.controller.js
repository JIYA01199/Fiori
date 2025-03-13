sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/json/JSONModel",
  ],
  (Controller, ODataModel, JSONModel) => {
    "use strict";

    return Controller.extend("sync.d12.exercised1209.controller.Main", {
      onInit() {
        // 1.OData 모델을 가져와야한다.
        var oDataModel = new ODataModel("/v2/northwind/northwind.svc/");

        // 2. read해오기
        oDataModel.read("/Products", {
          success: function (oData) {
            console.log(oData);
            // 데이터 내림차순 정렬
            oData.results.sort((a, b) => b.UnitsInStock - a.UnitsInStock);
            // 그 중 상위 5개만 뽑기
            oData.results.splice(5);
            // 뽑은 상위 5개만 JSON모델에 넘겨주기
            var oChartModel = new JSONModel({ resultData: oData.results });

            // 해당 JSON 모델로 set 하기
            this.getView().setModel(oChartModel, "chartModel");
          }.bind(this),
          error: function (oError) {
            console.error("ODataModel 읽기 실패:", oError);
          },
        });
      },
    });
  }
);
