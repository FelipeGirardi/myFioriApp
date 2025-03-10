// Models

sap.ui.define([
  "sap/ui/model/json/JSONModel"
], function (JSONModel) {
  "use strict";

  return {
    createStorageModel: function () {
      return new JSONModel({
        storageOrders: []
      });
    }
  };
});