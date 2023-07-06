Ext.define("skyfrog.view.masters.quality.QualityStore", {
  extend: "Ext.data.Store",

  alias: "store.quality",

  model: "skyfrog.model.Quality",

  autoLoad: true,
  proxy: {
    type: "ajax",
    url: "http://localhost:5076/api/Quality",
    reader: {
      type: "json",
      rootProperty: "items",
    },
  },
});
