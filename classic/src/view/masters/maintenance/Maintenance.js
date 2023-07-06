Ext.define("skyfrog.view.masters.maintenance.Maintenance", {
  extend: "Ext.grid.Panel",
  xtype: "maintenance",

  controller: "masters-maintenance-maintenance",
  // viewModel: {
  //     type: 'masters-maintenance-maintenance'
  // },
  store: {
    type: "maintenancestore",
  },

  title: "Maintenance Type",

  reference: "maintenanceGrid",

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
        disabled: "{!maintenanceGrid.selection}",
      },
    },
    {
      text: "Edit",
      handler: "onEditClick",
      iconCls: "customer-buttons-option",
      bind: {
        disabled: "{!maintenanceGrid.selection}",
      },
    },
  ],

  columns: [
    { xtype: "rownumberer" },
    { text: "Description", dataIndex: "description" },
    { text: "Vehicle", dataIndex: "vehicle" },
    { text: "Type", dataIndex: "type" },
    { text: "Mileages", dataIndex: "mileages" },
    { text: "Month Duration", dataIndex: "duration" },
    { text: "Sub Type", dataIndex: "subtype" },
  ],
});
