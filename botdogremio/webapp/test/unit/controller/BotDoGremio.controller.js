/*global QUnit*/

sap.ui.define([
	"botdogremio/controller/BotDoGremio.controller"
], function (Controller) {
	"use strict";

	QUnit.module("BotDoGremio Controller");

	QUnit.test("I should test the BotDoGremio controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
