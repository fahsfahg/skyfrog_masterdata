Ext.define("skyfrog.view.masters.zonemaster.ZoneMaster", {
  extend: "Ext.grid.Panel",
  xtype: "zonemaster",

  controller: "masters-zonemaster-zonemaster",
  // viewModel: {
  //   type: "masters-zonemaster-zonemaster",
  // },
  store: {
    type: "zonemaster",
  },
  reference: "zonemasterGrid",

  title: "Zone Master",

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
        disabled: "{!zonemasterGrid.selection}",
      },
    },
    {
      text: "Edit",
      handler: "onEditClick",
      iconCls: "customer-buttons-option",
      bind: {
        disabled: "{!zonemasterGrid.selection}",
      },
    },
    {
      text: "Export",
      handler: "onRemoveClick",
    },
    {
      text: "Import",
      handler: "onRemoveClick",
    },
    {
      text: "Template Import",
      handler: "onRemoveClick",
    },
  ],

  columns: [
    { xtype: "rownumberer" },
    { text: "Group", dataIndex: "group" },
    { text: "Zone ID", dataIndex: "zoneidS" },
    { text: "Zone", dataIndex: "zone" },
    { text: "Area Number", dataIndex: "areanumber" },
    { text: "Status", dataIndex: "status" },
    { text: "Create Date", dataIndex: "createdate" },
    { text: "Update Date", dataIndex: "updatedate" },
  ],
});
