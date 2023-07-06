Ext.define("skyfrog.view.masters.polygon.PolygonStore", {
  extend: "Ext.data.Store",

  alias: "store.polygonstore",

  model: "skyfrog.model.Polygon",

  data: {
    items: [
      {
        polygoncode: "P0001",
        polygonname: "Polygon1"
      },
      {
        polygoncode: "P0002",
        polygonname: "Polygon2"
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
