sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/Device",
  "myFioriApp/model/models"
], function (UIComponent, Device, models) {
  "use strict";

  return UIComponent.extend("myFioriApp.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);
      this.setModel(models.createStorageModel(), "storageModel");
      this.getRouter().initialize();
    }
  });
});