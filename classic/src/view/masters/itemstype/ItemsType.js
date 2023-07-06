Ext.define("skyfrog.view.masters.itemstype.ItemsType", {
  extend: "Ext.grid.Panel",
  xtype: "itemstype",

  controller: "masters-itemstype-itemstype",
  // viewModel: {
  //     type: 'masters-itemstype-itemstype'
  // },

  store: {
    type: "itemstypestore",
  },
  reference: "itemstypeGrid",

  title: "Items Type",

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
        disabled: "{!itemstypeGrid.selection}",
      },
    },
    {
      text: "Edit",
      handler: "onEditClick",
      iconCls: "customer-buttons-option",
      bind: {
        disabled: "{!itemstypeGrid.selection}",
      },
    },
  ],

  columns: [
    { xtype: "rownumberer" },
    { text: "Item Code", dataIndex: "code" },
    { text: "Name", dataIndex: "name" },
    { text: "Status", dataIndex: "status" },
  ],
});
