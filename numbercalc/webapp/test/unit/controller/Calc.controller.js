/*global QUnit*/

sap.ui.define([
	"syncd12/numbercalc/controller/Calc.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Calc Controller");

	QUnit.test("I should test the Calc controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
