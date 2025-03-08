// List controller

sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History"
], function (Controller, History) {
  "use strict";

  return Controller.extend("myFioriApp.controller.List", {
    onItemPress: function (oEvent) {
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      var selectedOrderId = oEvent.getSource().getBindingContext("storageModel").getProperty("id");
      oRouter.navTo("detail", {
        id: selectedOrderId
      });
    },

    onCreatePress: function () {
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("create");
    }
  });
});