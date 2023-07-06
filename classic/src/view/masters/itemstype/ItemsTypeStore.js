Ext.define("skyfrog.view.masters.itemstype.ItemsTypeStore", {
    extend: "Ext.data.Store",
  
    alias: "store.itemstypestore",
  
    model: "skyfrog.model.ItemsType",

    data: {
        items: [
            {
                code: "#FZ000X",
                name: "Frozen",
                status: "Actived"
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