sap.ui.define([], () => {
  "use strict";

  return {
    statusText(sStatus) {
      const oResourceBundle = this.getOwnerComponent()
        .getModel("i18n")
        .getResourceBundle();

      if (sStatus < 5000) {
        return oResourceBundle.getText("productsStatusA"); // '싸다'
      } else if (sStatus < 20000) {
        return oResourceBundle.getText("productsStatusB"); // '적당하다'
      } else {
        return oResourceBundle.getText("productsStatusC"); // '비싸다'
      }
    },
  };
});

// formatter.js를 추가하고 가격이 5,000미만일 경우 ‘싸다’,
// 그 이상 20,000미만일 경우 ‘적당하다 ‘
// 그 이상일 경우 ‘비싸다’를 i18n에서 가져와서 firstStatus에 출력하라
// (함수명은 자율, i18n에 싸다, 적당하다, 비싸다를 가지는 변수 작성)
