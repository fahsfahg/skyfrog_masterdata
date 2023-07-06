Ext.define("skyfrog.view.masters.reason.Reason", {
  extend: "Ext.grid.Panel",
  xtype: "reason",

  controller: "masters-reason-reason",
  // viewModel: {
  //     type: 'reasonmodel'
  // },
  store: {
    type: "reason",
  },
  title: "Reason",
  reference: "reasonGrid",

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
        disabled: "{!reasonGrid.selection}",
      },
    },
    {
      text: "Edit",
      handler: "onEditClick",
      iconCls: "customer-buttons-option",
      bind: {
        disabled: "{!reasonGrid.selection}",
      },
    },
  ],
  columns: [
    { xtype: "rownumberer" },
    { text: "Code", dataIndex: "code" },
    { text: "Reason Name", dataIndex: "reason" },
    { text: "Type", dataIndex: "type" },
    { text: "Status", dataIndex: "status" },
  ],
});
