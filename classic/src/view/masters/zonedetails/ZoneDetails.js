Ext.define("skyfrog.view.masters.zonedetails.ZoneDetails", {
  extend: "Ext.grid.Panel",
  xtype: "zonedetails",

  controller: "masters-zonedetails-zonedetails",
  // viewModel: {
  //     type: 'masters-zonedetails-zonedetails'
  // },

  store: {
    type: "zonedetails",
  },
  reference: "zonedetailsGrid",

  title: "Zone Details",

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
        disabled: "{!zonedetailsGrid.selection}",
      },
    },
    {
      text: "Edit",
      handler: "onEditClick",
      iconCls: "customer-buttons-option",
      bind: {
        disabled: "{!zonedetailsGrid.selection}",
      },
    },
    {
      text: "Export",
      handler: "onRemoveClick",
    },
    {
      text: "Import",
      handler: "onImportClick",
    },
    {
      text: "Template Import",
      handler: "onRemoveClick",
    },
  ],

  columns: [
    { xtype: "rownumberer" },
    { text: "Zone ID", dataIndex: "zoneid" },
    { text: "Description", dataIndex: "description" },
    { text: "Status", dataIndex: "status" },
    { text: "Create Date", dataIndex: "createdate" },
    { text: "Update Date", dataIndex: "updatedate" },
  ],
});
