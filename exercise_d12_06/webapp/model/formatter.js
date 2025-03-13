sap.ui.define(["sap/ui/core/format/DateFormat"], function (DateFormat) {
  "use strict";

  return {
    formatDate: function (sDate) {
      if (!sDate) return sDate; // 빈 값 처리
      const oDateFormat = DateFormat.getDateInstance({
        pattern: "yyyy/MM/dd", // 원하는 날짜 형식
      });
      return oDateFormat.format(new Date(sDate)); // 날짜 포맷팅
    },
    isFutureMonth: function (oDate) {
      var iMonth = new Date(oDate).getMonth() + 1;
      var cMonth = new Date().getMonth() + 1;

      //console.log(123, iMonth);
      //console.log(456, cMonth);
      return iMonth > cMonth ? "Favorite" : "Flagged";
    },
  };
});
