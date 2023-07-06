Ext.define("skyfrog.view.masters.quality.QualityForm", {
  extend: "Ext.window.Window",
  xtype: "qualityform",

  bodyPadding: 10,

  bind: {
    title: "{title}",
  },
  layout: "fit",
  modal: true,
  width: 500,
  height: undefined,
  closable: false,

  listeners: {
    beforerender: "beforeDetailRender"
  },

  items: {
    xtype: "form",
    reference: "qualityform",
    bodyPadding: undefined,
    border: false,
    // use the Model's validations for displaying form errors
    modelValidation: true,
    layout: {
      type: "vbox",
      align: "stretch",
    },
    checkboxToggle: true,
    defaultType: "checkbox",
    items: [{
        xtype: "textfield",
        fieldLabel: 'QA Name <span style="color: red">*</span>',
        reference: "name",
        itemId: "name",
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
]
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
