Ext.define("skyfrog.view.masters.itemstype.ItemsTypeForm", {
  extend: "Ext.window.Window",
  xtype: "itemstypeform",

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
    reference: "itemstypeform",
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
            fieldLabel: 'Code Item Type <span style="color: red">*</span>',
            reference: "code",
            itemId: "code",
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
            fieldLabel: 'Item Type:',
            reference: "name",
            itemId: "name",
            publishes: "value",
            value: "",
            labelAsHtml: true,
            allowBlank: true,
            msgTarget: "side",
            padding: undefined,
            margin: "10 10 5 10",
          },
          {
            checked: true,
            margin: "0 10 5 10",
            fieldLabel: "Active:",
            boxLabel: "Actived",
            name: "status",
            inputValue: "actived",
          }
    ],
  },

  buttons: [
    {
      text: "Save",
      handler: "onCancelClick",
    },
    {
      text: "Cancel",
      handler: "onCancelClick",
    },
  ],
});
