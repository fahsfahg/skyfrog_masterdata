Ext.define("skyfrog.view.masters.milestone.Milestone", {
  extend: "Ext.grid.Panel",
  xtype: "milestone",

  controller: "masters-milestone-milestone",
  // viewModel: {
  //     type: 'masters-milestone-milestone'
  // },

  store: {
    type: "milestone",
  },
  reference: "milestoneGrid",

  title: "Milestone",

  tbar: [
    {
      text: "Create New",
      handler: "onAddClick",
      iconCls: "customer-buttons-add",
      disabled: true,
    },
    {
      text: "Delete",
      handler: "onRemoveClick",
      iconCls: "customer-buttons-remove",
      disabled: true,
    },
    {
      text: "Edit",
      handler: "onEditClick",
      iconCls: "customer-buttons-option",
      bind: {
        disabled: "{!milestoneGrid.selection}",
      },
    },
  ],

  columns: [
    { xtype: "rownumberer" },
    { text: "Code", dataIndex: "code" },
    { text: "Milestone", dataIndex: "milestone" },
    { text: "JOB Phase", dataIndex: "phase" },
    { text: "Status", dataIndex: "status" },
  ],
});
