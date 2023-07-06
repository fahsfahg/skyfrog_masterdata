Ext.define("skyfrog.view.masters.groupmaster.GroupMasterStore", {
    extend: "Ext.data.Store",
  
    alias: "store.groupmaster",
  
    model: "skyfrog.model.GroupMaster",
  
    data: {
      items: [
        {
          code: "5555",
          groupname: "1-Test-VRP-Time",
          status: "Actived",
          lat: "13.71507187",
          long: "100.82219211"
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
  