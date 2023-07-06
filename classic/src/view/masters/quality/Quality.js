Ext.define("skyfrog.view.masters.quality.Quality", {
  extend: "Ext.grid.Panel",
  xtype: "quality",

  controller: "QualityController",
  // viewModel: {
  //     type: 'masters-quality-quality'
  // },
  store: {
    type: "quality",
  },

  reference: "qualityGrid",

  title: "Quality Assurance",

  columns: [
    { xtype: "rownumberer" },
    { text: "Id", dataIndex: "id" },
    { text: "Name", dataIndex: "qaName" },
    { text: "Status", dataIndex: "isactive" },
  ],
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
    },
    {
      text: "Edit",
      handler: "onEditClick",
      iconCls: "customer-buttons-option",
      bind: {
        disabled: '{!qualityGrid.selection}'
    }
    },
  ],
});
