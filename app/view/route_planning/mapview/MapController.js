Ext.define("skyfrog.view.route_planning.mapview.MapController", {
  extend: "Ext.app.ViewController",
  alias: "controller.route_planning-mapview-map",

  singleton: true,

  map: null,

  addMarkersToMap: function (map, data) {
    map.removeObjects(map.getObjects());

    data.forEach(function (record) {
      if (record.data) {
        record = record.data;
      }

      if (record["Checked"] == false) {
        return;
      }

      var latitude = record["latitude"];
      var longitude = record["longitude"];

      var icon = new H.map.Icon("resources/icons/right-arrow.png", {
        size: { w: 32, h: 32 },
      });

      var marker = new H.map.Marker(
        { lat: latitude, lng: longitude },
        { icon: icon }
      );

      map.addObject(marker);
    });
  },
  changemark: function (record) {
    this.addMarkersToMap(this.map, record);
  },
  initializeMap: function (panel) {
    var mapContainerId = panel.getItemId();
  
    var mapContainer = panel.el.down("#map", true);
  
    var platform = new H.service.Platform({
      apikey: "-Ph8Mw2hVuZ4zFx13WDLQ1swEX2pEdY3zznj7MyZa24",
    });
    var defaultLayers = platform.createDefaultLayers({
      lg: "th",
    });
    var map = new H.Map(mapContainer, defaultLayers.vector.normal.map, {
      center: { lat: 13.715062450299625, lng: 100.82220202842268 },
      zoom: 17,
      pixelRatio: window.devicePixelRatio || 1,
    });
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    var ui = H.ui.UI.createDefault(map, defaultLayers);
    if (!ui.getControl("mapsettings")) {
      var mapSettingsControl = new H.ui.MapSettingsControl({
        baseLayers: defaultLayers,
        alignment: "top",
      });
      ui.addControl("mapsettings", mapSettingsControl);
    }
    this.map = map;
    this.addMarkersToMap(map, []);
    panel.on("resize", this.onResizeMap, this);
  },

  onResizeMap: function (panel, width, height) {
    // console.log('Resizing map to match panel size...');
    if (this.map) {
      this.map.getViewPort().resize();
    }
  },
});
