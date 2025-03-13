/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"syncd12/mentoring/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});