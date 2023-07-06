Ext.define("skyfrog.view.masters.vehicletype.Vehicle", {
  extend: "Ext.grid.Panel",
  xtype: "vehicle",

  controller: "masters-vehicletype-vehicle",
  // viewModel: {
  //     type: 'masters-vehicletype-vehicle'
  // },

  title: "Vehicle Type",

  store: {
    type: "vehicle",
  },
  reference: "vehicleGrid",

  tbar: [
    {
      text: "Create New",
      handler: "onAddClick",
      iconCls: "customer-buttons-add",
    },
    {
      text: "Delete",
      handler: "onRemoveClick",
      iconCls: "customer-buttons-remove",
      bind: {
        disabled: "{!vehicleGrid.selection}",
      },
    },
    {
      text: "Edit",
      handler: "onEditClick",
      iconCls: "customer-buttons-option",
      bind: {
        disabled: "{!vehicleGrid.selection}",
      },
    },
  ],
  columns: [
    { xtype: "rownumberer" },
    { text: "Code", dataIndex: "code" },
    { text: "Vehicle Type Name", dataIndex: "vehicle" },
    { text: "Speed Limit", dataIndex: "speed" },
    { text: "Average Usage", dataIndex: "usage" },
    { text: "Volume Capacity", dataIndex: "volume" },
    { text: "Weight Capacity", dataIndex: "weight" },
    { text: "Max Height", dataIndex: "maxheight" },
    { text: "Fuel Cost", dataIndex: "fuelcost" },
    { text: "Fixed Cost", dataIndex: "fixedcost" },
    { text: "Time Cost", dataIndex: "timecost" },
    { text: "Status", dataIndex: "status" },
  ],
});
