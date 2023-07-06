Ext.define("skyfrog.view.route_planning.settingview.SettingView", {
  extend: "Ext.panel.Panel",
  xtype: "setting",

  requires: [
    "skyfrog.view.route_planning.settingview.SettingViewController",
    "skyfrog.view.route_planning.settingview.SettingViewModel",
  ],

  controller: "route_planning-settingview-settingview",
  viewModel: {
    type: "route_planning-settingview-settingview",
  },

  items: [
    {
      layout: {
        type: "vbox",
        align: "stretch",
      },
      items: [
        {
          xtype: "combobox",
          fieldLabel: 'Depots Point <span style="color: red">*</span>',
          value: "",
          labelAsHtml: true,
          allowBlank: false,
          msgTarget: "side",
          padding: undefined,
          margin: "10 0 5 0",
        },
      ],
    },
  ],
});
