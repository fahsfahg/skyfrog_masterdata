Ext.define("skyfrog.view.masters.skillmaster.SkillMasterStore", {
    extend: "Ext.data.Store",
  
    alias: "store.skillmasterstore",
  
    model: "skyfrog.model.SkillMaster",

    data: {
        items: [
            {
                skillcode: "SK0000000001X",
                description: "test create skill",
                defaultskill: "false",
                createdate: "",
                updatedate: ""
            },
            {
                skillcode: "SK01",
                description: "งานประกอบเฟอร์นิเจอร์",
                defaultskill: "true",
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