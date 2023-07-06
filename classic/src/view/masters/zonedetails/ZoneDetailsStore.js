Ext.define("skyfrog.view.masters.zonedetails.ZoneDetailsStore", {
  extend: "Ext.data.Store",

  alias: "store.zonedetails",

  model: "skyfrog.model.ZoneDetails",

  data: {
    items: [
      {
        zoneid: "A007",
        description: "A_07",
        status: "Active",
        createdate: "",
        updatedate: "",
      },
      {
        zoneid: "A003",
        description: "A_03",
        status: "Active",
        createdate: "",
        updatedate: "",
      },
      {
        zoneid: "A019",
        description: "A_19",
        status: "Active",
        createdate: "",
        updatedate: "",
      },
    ],
  },

  autoLoad: true,
  proxy: {
    type: "memory",
    reader: {
      type: "json",
      rootProperty: "items",
    },
  },
});
