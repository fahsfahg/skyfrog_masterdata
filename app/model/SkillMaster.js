Ext.define("skyfrog.model.SkillMaster", {
    extend: "skyfrog.model.Base",
  
    fields: [
      { name: "skillcode" },
      { name: "description", type: "string" },
      { name: "defaultskill", type: "string" },
      { name: "createdate" },
      { name: "updatedate" }
    ],
  });
  