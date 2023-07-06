Ext.define("skyfrog.view.masters.handheld.HandheldStore", {
  extend: "Ext.data.Store",

  alias: "store.handheld",

  model: "skyfrog.model.Handheld",

  data: {
    items: [
      {
        code: "S00001",
        name: "เข้าถึงจุดรับสินค้า(Check In)",
        status: "Active",
      },
      {
        code: "S00002",
        name: "ออกจากจุดรับสินค้า(Truck Out)",
        status: "Active",
      },
      {
        code: "S00003",
        name: "ถึงจุดส่งสินค้า(Truck Arrival)",
        status: "Active",
      },
      {
        code: "S00004",
        name: "โหลดของสำเร็จ(Unload Complete)",
        status: "Active",
      },
      {
        code: "S00005",
        name: "ส่งของสำเร็จ(POD Complete)",
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
