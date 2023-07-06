Ext.define("skyfrog.view.masters.zonemaster.ZoneMasterStore", {
  extend: "Ext.data.Store",

  alias: "store.zonemaster",

  model: "skyfrog.model.ZoneMaster",

  data: {
    items: [
      {
        group: "SKYFROG",
        zoneid: "บิ๊กซี สาขา เนโกะ ปาร์ค",
        zoneidS: "FC0001",
        zone: "SZone 01",
        areanumber: "1",
        status: "Active",
        createdate: "",
        updatedate: "",
      },
      {
        group: "Guest",
        zoneid: "เขตสายไหม",
        zoneidS: "BKK001",
        zone: "กทม",
        areanumber: "1",
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
