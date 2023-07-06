Ext.define("skyfrog.view.masters.items.Items", {
  extend: "Ext.grid.Panel",
  xtype: "items",

  controller: "masters-items-items",
  // viewModel: {
  //   type: "masters-items-items",
  // },
  store: {
    type: "itemsstore",
  },
  reference: "itemsGrid",

  title: "Items",

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
        disabled: "{!itemsGrid.selection}",
      },
    },
    {
      text: "Edit",
      handler: "onEditClick",
      iconCls: "customer-buttons-option",
      bind: {
        disabled: "{!itemsGrid.selection}",
      },
    },
    {
      text: "Import",
      handler: "onImportClick",
      // iconCls: "customer-buttons-remove",
    },
    {
      text: "Template Import",
      handler: "onRemoveClick",
      // iconCls: "customer-buttons-remove",
    },
  ],

  columns: [
    { xtype: "rownumberer" },
    { text: "Item Code", dataIndex: "code" },
    { text: "Description", dataIndex: "description" },
    { text: "Status", dataIndex: "status" },
    { text: "Item Type", dataIndex: "itemtype" },
    { text: "Width", dataIndex: "width" },
    { text: "Length", dataIndex: "length" },
    { text: "Height", dataIndex: "height" },
    { text: "Weight", dataIndex: "weight" },
    { text: "CreateDate", dataIndex: "" },
    { text: "UpdateDate", dataIndex: "" },
  ],
});
