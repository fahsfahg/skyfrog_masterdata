Ext.define("skyfrog.view.masters.jobprefix.JobPrefixStore", {
  extend: "Ext.data.Store",

  alias: "store.prefix",

  model: "skyfrog.model.PrefixModel",

  autoLoad: true,
  proxy: {
    type: "ajax",
    url: "http://localhost:5076/api/Prefix",
    reader: {
      type: "json",
      rootProperty: "items",
    },
  },
});
