Ext.define("skyfrog.view.masters.zonedetails.ZoneDetailsForm", {
  extend: "Ext.window.Window",
  xtype: "zonedetailsform",

  bind: {
    title: "{title}",
  },
  listeners: {
    beforerender: "beforeDetailRender",
  },

  bodyPadding: 10,
  layout: "fit",
  modal: true,
  width: 500,
  height: undefined,
  closable: false,

  items: {
    xtype: "form",
    reference: "zonedetailsform",
    bodyPadding: undefined,
    border: false,
    modelValidation: true,
    layout: {
      type: "vbox",
      align: "stretch",
    },
    checkboxToggle: true,
    defaultType: "checkbox",
    items: [
      {
        xtype: "textfield",
        fieldLabel: 'Zone ID <span style="color: red">*</span>',
        reference: "zoneid",
        itemId: "zoneid",
        publishes: "value",
        value: "",
        labelAsHtml: true,
        allowBlank: false,
        msgTarget: "side",
        padding: undefined,
        margin: "10 10 5 10",
      },
      {
        xtype: "textfield",
        fieldLabel: 'Description <span style="color: red">*</span>',
        reference: "description",
        itemId: "description",
        publishes: "value",
        value: "",
        labelAsHtml: true,
        allowBlank: false,
        msgTarget: "side",
        padding: undefined,
        margin: "10 10 5 10",
      },
      {
        checked: true,
        margin: "0 10 5 10",
        fieldLabel: "Status:",
        boxLabel: "Active",
        name: "status",
        inputValue: "active",
      }
    ],
  },

  buttons: [
    {
      text: "Save",
      handler: "onCancelClick",
    },
    {
      text: "Close",
      handler: "onCancelClick",
    },
  ],
});
