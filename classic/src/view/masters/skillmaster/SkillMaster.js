Ext.define("skyfrog.view.masters.skillmaster.SkillMaster", {
  extend: "Ext.grid.Panel",
  xtype: "skillmaster",

  controller: "masters-skillmaster-skillmaster",
  // viewModel: {
  //     type: 'masters-skillmaster-skillmaster'
  // },

  store: {
    type: "skillmasterstore",
  },
  reference: "skillmasterGrid",

  title: "Skill Master",

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
        disabled: "{!skillmasterGrid.selection}",
      },
    },
    {
      text: "Edit",
      handler: "onEditClick",
      iconCls: "customer-buttons-option",
      bind: {
        disabled: "{!skillmasterGrid.selection}",
      },
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
    { text: "Skill Code", dataIndex: "skillcode" },
    { text: "Description", dataIndex: "description" },
    { text: "Default skill for new handheld", dataIndex: "defaultskill" },
    { text: "Create Date", dataIndex: "createdate" },
    { text: "Update Date", dataIndex: "updatedate" },
  ],
});
