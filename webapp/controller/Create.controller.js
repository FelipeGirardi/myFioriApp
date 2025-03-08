// Create controller

sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History"
], function (Controller, History) {
  "use strict";

  return Controller.extend("myFioriApp.controller.Create", {
    onInit: function () {
      this.getView().setModel(new sap.ui.model.json.JSONModel(), "newOrderModel");
    },

    onSavePress: function () {
      var oView = this.getView();
      var oStorageModel = oView.getModel("storageModel");
      var oNewOrderModel = oView.getModel("newOrderModel");

      var newOrder = {
        id: (oStorageModel.getProperty("/storageOrders").length + 1).toString(),
        description: oView.byId("descriptionInput").getValue(),
        quantity: parseInt(oView.byId("quantityInput").getValue()),
        status: oView.byId("statusInput").getValue()
      };

      oStorageModel.getProperty("/storageOrders").push(newOrder);
      oStorageModel.updateBindings();

      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("list");
    },

    onNavBack: function () {
      var oHistory = History.getInstance();
      var sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("list", {}, true);
      }
    }
  });
});