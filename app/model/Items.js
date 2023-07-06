Ext.define("skyfrog.model.Items", {
    extend: "skyfrog.model.Base",
  
    fields: [
      { name: "code" },
      { name: "description", type: "string" },
      { name: "width", type: "string" },
      { name: "length", type: "string" },
      { name: "height", type: "string" },
      { name: "weight", type: "string" },
      { name: "itemtype", type: "string" },
      { name: "status" },
      { name: "createdate" },
      { name: "updatedate" }
    ],
  });
  