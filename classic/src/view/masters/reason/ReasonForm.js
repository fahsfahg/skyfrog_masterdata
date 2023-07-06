Ext.define("skyfrog.view.masters.reason.ReasonForm", {
  extend: "Ext.window.Window",
  xtype: "reasonform",

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
    reference: "reasonform",
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
        fieldLabel: 'Reason Name <span style="color: red">*</span>',
        reference: "reasonname",
        itemId: "reasonname",
        publishes: "value",
        value: "",
        labelAsHtml: true,
        allowBlank: false,
        msgTarget: "side",
        padding: undefined,
        margin: "10 10 5 10",
      },
      {
        xtype: "combobox",
        queryMode: "local",
        fieldLabel: "Type:",
        name: "type",
        itemId: "type",
        reference: "type",
        publishes: "value",
        value: "...",
        triggerAction: "all",
        forceSelection: true,
        editable: false,
        displayField: "name",
        valueField: "value",
        margin: "10 10 5 10",
        store: {
          fields: ["name", "value"],
          data: [
            { name: "Job", value: "Job" },
            { name: "Item", value: "Item" },
            { name: "Satisfaction", value: "Satisfaction" }
          ],
        },
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
      text: "Cancel",
      handler: "onCancelClick",
    },
  ],
});
