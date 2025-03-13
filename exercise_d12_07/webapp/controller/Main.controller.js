sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  (Controller, ODataModel, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("sync.d12.exercised1207.controller.Main", {
      onInit() {
        // Odata 모듈 추가
        var oModel = new ODataModel("/sap/opu/odata/sap/ZCARR_D12_SRV/");
        // view에 모델 설정
        this.getView().setModel(oModel);
      },

      onCreate() {
        // INPUT 값 가져오기 (getValue() 사용)
        var sCarrid = this.getView().byId("carrierid").getValue();
        var sCarrname = this.getView().byId("carrname").getValue();
        var sCurrcode = this.getView().byId("currcode").getValue();
        var sUrl = this.getView().byId("url").getValue();

        // POST할 데이터 객체 생성
        var oNewData = {
          Carrid: sCarrid,
          Carrname: sCarrname,
          Currcode: sCurrcode,
          Url: sUrl,
        };

        // 현재 View에 설정된 ODataModel 가져오기
        var oModel = this.getView().getModel();

        // ODataModel을 사용하여 데이터 생성 (POST 요청)
        oModel.create("/ZCARR_D12Set", oNewData, {
          success: function () {
            MessageToast.show("항공사 데이터가 성공적으로 생성되었습니다.");
            oModel.refresh(); // 데이터 새로고침
          },
          error: function () {
            MessageToast.show("데이터 생성 오류");
          },
        });
      },

      onDelete() {
        var oTable = this.getView().byId("table"); // 뷰에 정의된 테이블 객체 가져오기
        var oSelectedItem = oTable.getSelectedItem(); // 선택된 아이템 가져오기

        // 선택된 아이템이 없는 경우 메시지 출력 후 종료
        if (!oSelectedItem) {
          MessageToast.show("삭제할 항목을 선택해주세요.");
          return;
        }
        // 선택된 아이템의 바인딩 컨텍스트 가져오기
        var oContext = oSelectedItem.getBindingContext();

        if (!oContext) {
          MessageToast.show("삭제할 데이터를 찾을 수 없습니다.");
          return;
        }

        // ODataModel 가져오기
        var oModel = this.getView().getModel();

        // ODataModel에서 삭제 요청 (remove)
        oModel.remove(oContext.getPath(), {
          success: function () {
            MessageToast.show("데이터가 성공적으로 삭제되었습니다.");
            oModel.refresh(); // 데이터 새로고침
          },
          error: function () {
            MessageToast.show("데이터 삭제 오류");
          },
        });
      },

      async onUpdate() {
        var oTable = this.getView().byId("table"); // 뷰에 정의된 테이블 객체 가져오기
        var oSelectedItem = oTable.getSelectedItem(); // 선택된 아이템 가져오기

        // 선택된 아이템이 없는 경우 메시지 출력 후 종료료
        if (!oSelectedItem) {
          MessageToast.show("변경할 항목을 선택해주세요.");
          return;
        }
        // 선택된 아이템의 바인딩 컨텍스트 가져오기
        var oContext = oSelectedItem.getBindingContext();

        if (!oContext) {
          MessageToast.show("변경할 데이터를 찾을 수 없습니다.");
          return;
        }

        // 기존 데이터 가져오기
        var oData = oContext.getObject();

        // 다이얼로그를 동적으로 로드 (비동기)
        this.oDialog ??= await this.loadFragment({
          name: "sync.d12.exercised1207.view.Dialog",
        });

        // 다이얼로그 내부의 모델 설정 (선택한 데이터 바인딩)
        this.oDialog.setModel(new JSONModel(oData), "dialogModel");

        // 다이얼로그 열기
        this.oDialog.open();
      },

      onCloseDialog() {
        if (this.oDialog) {
          this.oDialog.close();
        }
      },

      onSave() {
        var oTable = this.getView().byId("table");
        var oSelectedItem = oTable.getSelectedItem();

        if (!oSelectedItem) {
          MessageToast.show("업데이트할 항목을 선택해주세요.");
          return;
        }

        var oContext = oSelectedItem.getBindingContext();
        var sPath = oContext.getPath();

        var oDialogModel = this.oDialog.getModel("dialogModel");

        if (!oDialogModel) {
          MessageToast.show("다이얼로그 모델을 찾을 수 없습니다.");
          return;
        }

        var sCarrname = oDialogModel.getProperty("/Carrname");
        var sUrl = oDialogModel.getProperty("/Url");

        var oUpdateEntry = {
          Carrname: sCarrname,
          Url: sUrl,
        };

        var oModel = this.getView().getModel();

        oModel.update(sPath, oUpdateEntry, {
          success: () => {
            MessageToast.show("항공사 데이터가 성공적으로 업데이트되었습니다.");
            oModel.refresh();
            if (this.oDialog) {
              this.oDialog.close();
            }
          },
          error: (oError) => {
            MessageToast.show("데이터 업데이트 오류");
            console.error(oError);
          },
        });
      },
    });
  }
);

//       // 프라그먼트 Input값 가져와서 해당 데이터 PUT 메소드 트리거
//       onSave() {
//         // update 메소드에 적용될 sPath 정보 찾기
//         const oTable = this.getView().byId("table"); // 테이블 ID를 사용하여 m.Table 가져오기
//         const aSelectedContexts = oTable.getSelectedContexts(); // 선택된 행들의 컨텍스트 가져오기
//         const sPath = aSelectedContexts[0].getPath();

//         // 사용자 입력값 가져오기
//         const sCarrname = this.getView().byId("Name").getValue();
//         const sUrl = this.getView().byId("Url").getValue();

//         // OData 전달 할 엔트리
//         const oUpdateEntry = {
//           Carrname: sCarrname,
//           Url: sUrl,
//         };

//         // 적용할 OData 모델 가져오기
//         const oModel = this.getView().getModel();

//         // ODataModel을 사용하여 UPDATE 요청
//         oModel.update(sPath, oUpdateEntry, {
//           success: () => {
//             MessageToast.show("항공사 데이터가 성공적으로 업데이트되었습니다.");
//             oModel.refresh(); // 데이터 새로고침
//             if (this.oDialog) {
//               this.oDialog.close();
//             }
//           },
//           error: (oError) => {
//             MessageToast.show("데이터 업데이트 오류");
//             console.error(oError);
//           },
//         });
//       },
//     });
//   }
// );
