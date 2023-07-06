Ext.define("skyfrog.model.Maintenance", {
    extend: "skyfrog.model.Base",
  
    fields: [
      { name: "description" },
      { name: "vehicle" },
      { name: "type" },
      { name: "mileages" },
      { name: "duration" },
      { name: "subtype" }
    ],
  });
  