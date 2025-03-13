sap.ui.define(["sap/ui/core/ComponentContainer"], (ComponentContainer) => {
  "use strict";

  new ComponentContainer({
    name: "ui5.walkthrough",
    settings: {
      id: "walkthrough",
    },
    async: true,
  }).placeAt("content");
});

/* sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("ui5.walkthrough.controller.App", {
    onShowHello() {
      // show a native JavaScript alert
      alert("Hello World");
    },
  });
}); */

/* sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
  "use strict";

  XMLView.create({
    viewName: "sap.ui.demo.walkthrough.view.App",
  }).then(function (oView) {
    oView.placeAt("content");
  });
  //XML view를 생성 "성공하고 나면"~ placeAt()실행
}); */

/* sap.ui.define(["sap/ui/core/mvc/XMLView"], (XMLView) => {
  "use strict";

  XMLView.create({
    viewName: "ui5.walkthrough.view.App",
  }).then((oView) => oView.placeAt("content"));
});
 */
/* //data-sap-ui-on-init="module:ui5/walkthrough/index" : 모듈 정의를 index.js에서 하겠다.
// 비동기 구동을 통해서 필요한 UI5 컨트롤이나 라이브러리를 로드하여, 깨지지 않고 구동욀 수 있도록 한다.

sap.ui.define(["sap/m/Text"], (Text) => {
  "use strict"; // 엄격 관리

  // alert("UI5 is ready"); //bootstrapping 확인 위함

  // 생성자 메소드로부터 객체 생성
  new Text({
    text: "Hello World",
  }).placeAt("content");
  // placeAt : sap-ui-core에 상속받은 컨트롤들이 사용가능한 메소드
  // 기능 : HTML 파일의 해당 요소에 삽입하라. 위치시켜라. 
  // DOM에 직접 렌더링하지 않고 컨트롤에게 삽입하여 렌더링 
  });
 */
