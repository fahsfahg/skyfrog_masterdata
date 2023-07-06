Ext.define("skyfrog.view.masters.expense.Expense", {
  extend: "Ext.grid.Panel",
  xtype: "expense",

  controller: "masters-expense-expense",
  // viewModel: {
  //     type: 'expensemodel'
  // },
  store: {
    type: "expense",
  },
  title: "Expense",
  reference: "expenseGrid",

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
        disabled: "{!expenseGrid.selection}",
      },
    },
    {
      text: "Edit",
      handler: "onEditClick",
      iconCls: "customer-buttons-option",
      bind: {
        disabled: "{!expenseGrid.selection}",
      },
    },
  ],
  columns: [
    { xtype: "rownumberer" },
    { text: "Name", dataIndex: "name" },
    { text: "Status", dataIndex: "status" },
  ],
});
