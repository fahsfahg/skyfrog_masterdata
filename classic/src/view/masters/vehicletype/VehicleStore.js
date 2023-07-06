Ext.define("skyfrog.view.masters.vehicletype.VehicleStore", {
  extend: "Ext.data.Store",

  alias: "store.vehicle",

  model: "skyfrog.model.Vehicle",

  data: {
    items: [
      {
        code: "S00001",
        vehicle: "รถบรรทุก 6 ล้อ",
        speed: "180",
        usage: "300",
        volume: "500",
        weight: "10000",
        maxheight: "3.5",
        fuelcost: "35",
        fixedcost: "2005",
        timecost: "30",
        status: "Yes",
      },
      {
        code: "S00002",
        vehicle: "มอไซต์",
        speed: "140",
        usage: "100",
        volume: "1",
        weight: "100",
        maxheight: "15",
        fuelcost: "",
        fixedcost: "",
        timecost: "",
        status: "Yes",
      },
      {
        code: "S00003",
        vehicle: "รถบรรทุกขนาดเล็ก",
        speed: "100",
        usage: "300",
        volume: "3",
        weight: "680",
        maxheight: "3",
        fuelcost: "20",
        fixedcost: "800",
        timecost: "20",
        status: "Yes",
      },
      {
        code: "S00004",
        vehicle: "Truck",
        speed: "120",
        usage: "300",
        volume: "5",
        weight: "6",
        maxheight: "0",
        fuelcost: "0",
        fixedcost: "0",
        timecost: "0",
        status: "Yes",
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
