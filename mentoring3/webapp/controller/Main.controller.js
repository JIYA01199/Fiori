sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("sync.d12.mentoring3.controller.Main", {
      onInit() {
        var oList = this.byId("employeeList"); // ID가 "employeeList"인 리스트 컨트롤을 가져옴
        oList.addEventDelegate({
          // addEventDelegate는 SAP UI5에서 이벤트(delegate)를 추가할 때 사용하는 함수
          // 기존 이벤트를 변경하지 않고 추가적인 이벤트를 위임(delegate)하는 기능

          // 리스트에 더블 클릭 이벤트를 추가 (뷰에서 계속 사용가능하게 oninit??)
          // oEvent 객체를 생성하여 ondblclick에 전달한다.
          // 내가 더블클릭한 객체를 판단해준다.
          // onOpenDialog 내부에 oEvent를 활용하여 어떤 리스트 항목을 클릭했는지 식별
          // ondblclick 표준 이벤트 이름.
          ondblclick: function (oEvent) {
            this.onOpenDialog(oEvent); //더블 클릭 이벤트 발생 시 onOpenDialog() 실행
          }.bind(this),
        });
      },

      async onOpenDialog(oEvent) {
        var oListItem = oEvent.srcControl; // 더블 클릭한 리스트 아이템 가져오기 (속성성)
        var oContext = oListItem.getBindingContext("Employees"); // 클릭한 아이템이 바인딩된 데이터 컨텍스트 가져오기 ("Employees" 모델에서 가져옴)
        var oData = oContext.getObject(); // 데이터 컨텍스트에서 실제 객체 데이터를 추출

        this.oDialog ??= await this.loadFragment({
          name: "sync.d12.mentoring3.view.Dialog",
        });

        // 다이얼로그에 JSON 모델을 생성하여 데이터 바인딩
        this.oDialog.setModel(new JSONModel(oData), "dialogModel");
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
