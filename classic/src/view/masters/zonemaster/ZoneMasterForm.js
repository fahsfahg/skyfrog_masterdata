Ext.define("skyfrog.view.masters.zonemaster.ZoneMasterForm", {
  extend: "Ext.window.Window",
  xtype: "zonemasterform",

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
    reference: "zonemasterform",
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
        xtype: "combobox",
        queryMode: "local",
        fieldLabel: "Group:",
        name: "group",
        itemId: "group",
        reference: "group",
        publishes: "value",
        value: "...",
        triggerAction: "all",
        forceSelection: true,
        editable: false,
        displayField: "name",
        valueField: "value",
        margin: "0 10 5 10",
        store: {
          fields: ["name", "value"],
          data: [
            { name: "Guest", value: "Guest" },
            { name: "SKYFROG", value: "SKYFROG" },
          ],
        },
      },
      {
        xtype: "combobox",
        queryMode: "local",
        fieldLabel: "Zone ID:",
        name: "zoneid",
        itemId: "zoneid",
        reference: "zoneid",
        publishes: "value",
        value: "deliver",
        triggerAction: "all",
        forceSelection: true,
        editable: false,
        displayField: "name",
        valueField: "value",
        margin: "10 10 5 10",
        store: {
          fields: ["name", "value"],
          data: [
            { name: "BKK001 - เขตสายไหม", value: "เขตสายไหม" },
            { name: "FC0001 - บิ๊กซี สาขา เนโกะ ปาร์ค", value: "บิ๊กซี สาขา เนโกะ ปาร์ค" },
          ],
        },
      },
      {
        xtype: "textfield",
        fieldLabel: 'Zone <span style="color: red">*</span>',
        reference: "zone",
        itemId: "zone",
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
        fieldLabel: "Area Number",
        reference: "areanumber",
        itemId: "areanumber",
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
      },
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
