Ext.define("skyfrog.view.masters.groupmaster.GroupMaster", {
  extend: "Ext.grid.Panel",
  xtype: "groupmaster",

  controller: "masters-groupmaster-groupmaster",
  // viewModel: {
  //     type: 'masters-groupmaster-groupmaster'
  // },
  store: {
    type: "groupmaster",
  },

  title: "GroupMaster",

  reference: 'groupmasterGrid',

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
        disabled: "{!groupmasterGrid.selection}",
      },
    },
    {
      text: "Edit",
      handler: "onEditClick",
      iconCls: "customer-buttons-option",
      bind: {
        disabled: "{!groupmasterGrid.selection}",
      },
    },
  ],

  columns: [
    { xtype: "rownumberer" },
    { text: "Code", dataIndex: "code" },
    { text: "GroupName", dataIndex: "groupname" },
    { text: "Status", dataIndex: "status" },
    { text: "Latitude", dataIndex: "lat" },
    { text: "Longitude", dataIndex: "long" },
  ],
});
