Ext.define("skyfrog.model.JobType", {
  extend: "skyfrog.model.Base",

  fields: [
    { name: "code", type: "int" },
    { name: "description", type: "string" },
    { name: "owner", type: "string" },
    { name: "prefix", type: "string" },
    { name: "subtype", type: "int" },
    { name: "loadingTime", type: "int" },
    { name: "unloadingTime", type: "int" },
    { name: "maxLoading", type: "int" },
    { name: "maxUnloading", type: "int" },
    { name: "isdefault", type: "boolean" },
    { name: "isactive", type: "boolean" },
  ],
});
