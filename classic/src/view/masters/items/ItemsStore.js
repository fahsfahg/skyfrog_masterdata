Ext.define("skyfrog.view.masters.items.ItemsStore", {
    extend: "Ext.data.Store",
  
    alias: "store.itemsstore",
  
    model: "skyfrog.model.Items",

    data: {
        items: [
            {
                code: "#123456",
                description: "ทดสอบ By Skyfrog 123456",
                width: "1154223.51",
                length: "52.54",
                height: "1235.57",
                weight: "1154223.51",
                itemtype: "Item General",
                status: "Actived",
                createdate: "",
                updatedate: ""
            }
        ]
    },
    autoLoad: true,
    proxy: {
      type: "memory",
      reader: {
        type: "json",
        rootProperty: "items",
      },
    },
})