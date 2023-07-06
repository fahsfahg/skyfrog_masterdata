Ext.define("skyfrog.view.masters.jobtype.JobTypeStore", {
  extend: "Ext.data.Store",

  alias: "store.jobtype",

  model: "skyfrog.model.JobType",

  autoLoad: true,
  proxy: {
    type: "ajax",
    url: "http://localhost:5076/api/Jobtype",
    reader: {
      type: "json",
      rootProperty: "items",
    },
  },
});
