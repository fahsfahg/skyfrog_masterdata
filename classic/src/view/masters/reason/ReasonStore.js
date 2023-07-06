Ext.define("skyfrog.view.masters.reason.ReasonStore", {
  extend: "Ext.data.Store",

  alias: "store.reason",

  model: "skyfrog.model.Reason",

  data: {
    items: [
      {
        code: "000000",
        reason: "ส่งของช้า",
        type: "Satisfaction",
        status: "Active",
      },
      {
        code: "000011",
        reason: "ขับรถไม่สุภาพ",
        type: "Job",
        status: "Active",
      },
      {
        code: "000022",
        reason: "ของขาด",
        type: "Item",
        status: "Inactive",
      },
      {
        code: "R00019",
        reason: "สินค้าเสียหาย",
        type: "Item",
        status: "Active",
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
