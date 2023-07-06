
Ext.define('skyfrog.view.route_planning.Main',{
    extend: 'Ext.panel.Panel',
    xtype: 'routemain',

    requires: [
        'Ext.layout.container.Border',
        'skyfrog.view.route_planning.vehicleview.VehicleInfo',
        'skyfrog.view.route_planning.settingview.SettingView'
    ],

    controller: 'route_planning-main',
    viewModel: {
        type: 'route_planning-main'
    },
    layout: 'border',
    width: 'fit',
    height: Ext.getViewportHeight() - 30,
    cls: Ext.baseCSSPrefix + 'shadow',

    bodyBorder: false,

    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 0
    },

    items: [
        {
            title: 'Vehicle Information',
            region: 'west',
            xtype: 'vehicleinfo',
            floatable: false,
            margin: '5 0 0 0',
            width: 300,
            minWidth: 200,
            maxWidth: 500
        },
        {
            collapsible: false,
            region: 'center',
            margin: '5 0 0 0',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'mapview',
                    height: 450,
                    
                },
                {
                    region: 'south',
                    xtype: 'orderview'
                }
            ]
            
        },
        {
            title: 'Setting',
            region: 'east',
            xtype: 'setting',
            floatable: false,
            margin: '5 0 0 0',
            width: 250,
            minWidth: 200,
            maxWidth: 500,
            bodyPadding: 10
        }
    ]

});
