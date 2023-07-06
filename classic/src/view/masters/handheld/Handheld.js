Ext.define('skyfrog.view.masters.handheld.Handheld',{
    extend: 'Ext.grid.Panel',
    xtype: 'handheld',

    controller: 'masters-handheld-handheld',
    // viewModel: {
    //     type: 'masters-handheld-handheld'
    // },
    store: {
        type: 'handheld'
    },

    title: 'Handheld Status',

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
          //   bind: {
          //     disabled: '{!qualityGrid.selection}'
          // }
          },
    ],

    columns: [
        { xtype: "rownumberer" },
        { text: "Code", dataIndex: "code"},
        { text: "Status Name", dataIndex: "name"},
        { text: "Status", dataIndex: "status"}
    ]
});
