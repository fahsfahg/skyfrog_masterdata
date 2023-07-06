Ext.define("skyfrog.view.masters.groupmaster.MaintenanceStore", {
    extend: "Ext.data.Store",
  
    alias: "store.maintenancestore",
  
    model: "skyfrog.model.Maintenance",

    data: {
        items: [
            {
                description: "เช็คระยะ",
                vehicle: "4 W",
                type: "PM - (Preventive Maintenance)",
                mileages: "20000",
                duration: "1",
                subtype: "From Month Duration"
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