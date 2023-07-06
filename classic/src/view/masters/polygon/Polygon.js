Ext.define("skyfrog.view.masters.polygon.Polygon", {
  extend: "Ext.grid.Panel",
  xtype: "polygon",

  controller: "masters-polygon-polygon",
  // viewModel: {
  //     type: 'masters-polygon-polygon'
  // },

  store: {
    type: "polygonstore",
  },
  reference: "polygonGrid",

  title: "Polygon Master",

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
        disabled: "{!polygonGrid.selection}",
      },
    },
    {
      text: "Edit",
      handler: "onEditClick",
      iconCls: "customer-buttons-option",
      bind: {
        disabled: "{!polygonGrid.selection}",
      },
    },
  ],

  columns: [
    { xtype: "rownumberer" },
    { text: "Polygon Code", dataIndex: "polygoncode" },
    { text: "Polygon Name", dataIndex: "polygonname" },
  ],
});
