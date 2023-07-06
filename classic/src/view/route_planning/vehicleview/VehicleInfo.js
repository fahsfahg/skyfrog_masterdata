
Ext.define('skyfrog.view.route_planning.vehicleview.VehicleInfo',{
    extend: 'Ext.panel.Panel',
    xtype: 'vehicleinfo',

    requires: [
        
    ],

    controller: 'route_planning-vehicleview-vehicleinfo',
    viewModel: {
        type: 'route_planning-vehicleview-vehicleinfo'
    },

    items: [{
        xtype: 'grid',

        columnLines: true,
        selType: 'checkboxmodel',

        columns: [{
            text: "Vehicle",
            dataIndex: 'name',
            width: 100,
        }, {
            text: "Weight %",
            dataIndex: 'price',
            width: 100,
        }, {
            text: "Volumn %",
            width: 100,
        }, {
            text: "% Change",
            width: 100,
        }]
    }]
});
