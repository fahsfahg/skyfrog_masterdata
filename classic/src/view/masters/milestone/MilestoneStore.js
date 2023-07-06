Ext.define("skyfrog.view.masters.milestone.MilestoneStore", {
  extend: "Ext.data.Store",

  alias: "store.milestone",

  model: "skyfrog.model.Milestone",

  data: {
    items: [
      {
        code: "M00001",
        milestone: "เข้าถึงจุดรับ สินค้า",
        phase: "Phase - Transit to warehouse",
        status: "Actived",
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
