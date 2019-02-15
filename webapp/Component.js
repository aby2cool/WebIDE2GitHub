sap.ui.define([
	"sap/ui/core/UIComponent"]
	, function (UIComponent) {
		"use strict";
		return UIComponent.extend("opensap.webide2github.Component", {
			metadata : {
				manifest : "json"
			},
			init : function () {
				UIComponent.prototype.init.apply(this,arguments);
			}
		});
	});