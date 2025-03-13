/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"syncd12/exercise_d12_07/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
