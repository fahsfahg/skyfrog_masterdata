Ext.define('skyfrog.view.masters.jobprefix.JobPrefix',{
    extend: 'Ext.grid.Panel',
    xtype: 'jobprefix',
    
    requires: [
        'skyfrog.view.masters.jobprefix.JobPrefixController',
        'skyfrog.model.PrefixModel',
        'skyfrog.view.masters.jobprefix.JobPrefixStore'
    ],

    controller: 'JobPrefixController',
    // viewModel: {
    //     type: 'JobPrefixModel'
    // },
    store: {
        type: 'prefix',
        listeners: {
            load: function(store, records, success) {
                console.log(store.getData().items);
            }
        }
    },


    title: 'Job Prefix',
    
    reference: 'prefixGrid',
   
    columns: [
        { xtype: 'rownumberer' },
        { text: 'Prefix',  dataIndex: 'prefix' },
        { text: 'Description', dataIndex: 'description', flex: 4 },
        { text: 'Format', dataIndex: 'format', flex: 3 },
        { text: 'Default', dataIndex: 'isdefault', flex: 2 },
        { text: 'Status', dataIndex: 'isactive', flex: 2 },

    ],
    tbar: [{
            text: 'Create New',
            handler: 'onAddClick',
            iconCls: 'customer-buttons-add'
        },
        {
            text: 'Delete',
            handler: 'onRemoveClick',
            iconCls: 'customer-buttons-remove',
            bind: {
                disabled: '{!prefixGrid.selection}'
            }
        },
        {
            text: 'Edit',
            handler: 'onEditClick',
            iconCls: 'customer-buttons-option',
            bind: {
                disabled: '{!prefixGrid.selection}'
            }
        }],

});
