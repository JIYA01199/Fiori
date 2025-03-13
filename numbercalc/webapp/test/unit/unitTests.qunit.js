/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"syncd12/numbercalc/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});