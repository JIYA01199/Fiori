/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"syncd12/exercise_d12_11/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});