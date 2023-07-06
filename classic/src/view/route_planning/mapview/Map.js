
Ext.define('skyfrog.view.route_planning.mapview.Map',{
    extend: 'Ext.panel.Panel',
    xtype: 'mapview',

    requires: [
        'skyfrog.view.route_planning.mapview.MapController',
        'skyfrog.view.route_planning.mapview.MapModel'
    ],

    controller: 'route_planning-mapview-map',
    viewModel: {
        type: 'route_planning-mapview-map'
    },

    html: [
        '<style>html body {width: 100%; height: 100%;margin: 0;padding: 0;overflow: hidden;} #mapContainer { width: 100%; height: 100%;padding :0px;position: absolute; overflow: hidden;} #map {  position: absolute;height: 100%; width: 100%;top:0;bottom:0;}</style>' +
        '<div id="map"></div>'
    ],

    listeners: {
        afterrender: function (panel) {
            this.panelReference = panel;
            skyfrog.view.route_planning.mapview.MapController.initializeMap(panel);
        },
    },
    
     
});
