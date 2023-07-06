Ext.define("skyfrog.view.masters.jobprefix.JobPrefixForm", {
  extend: "Ext.window.Window",
  xtype: "jobprefixform",

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
    beforerender: "beforeDetailRender",
  },

  items: {
    xtype: "form",
    reference: "jobprefixform",
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
    items: [
      {
        xtype: "textfield",
        fieldLabel: 'Prefix <span style="color: red">*</span>',
        reference: "prefixfield",
        itemId: "prefix",
        name: "prefix",
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
        fieldLabel: "Description:",
        itemId: "descrprefix",
        reference: "descrprefix",
        name: "description",
        msgTarget: "side",
        padding: undefined,
        margin: "0 10 5 10",
      },
      {
        xtype: "combobox",
        fieldLabel: "Format:",
        reference: "isFormat",
        itemId: "isFormat",
        name: "format_type",
        queryMode: "local",
        publishes: "value",
        value: 1,
        triggerAction: "all",
        forceSelection: true,
        editable: false,
        displayField: "name",
        valueField: "value",
        margin: "0 10 5 10",
        store: {
          fields: ["name", "value"],
          data: [
            {
              name: "Prefix + Delimiter + Date + Delimiter + Running",
              value: 0,
            },
            { name: "Prefix + Delimiter + Running", value: 1 },
          ],
        },
      },
      {
        xtype: "textfield",
        fieldLabel: "Digit Running:",
        reference: "digitprefix",
        itemId: "digitprefix",
        publishes: "value",
        value: "0000",
        regex: /^\d(0){1,}?$/,
        msgTarget: "side",
        padding: undefined,
        margin: "0 10 5 10",
      },
      {
        xtype: "displayfield",
        name: "displayfield1",
        margin: "-10 0 0 115",
        value: '*Enter "0" only',
      },
      {
        xtype: "combobox",
        queryMode: "local",
        value: "",
        publishes: "value",
        triggerAction: "all",
        forceSelection: true,
        editable: false,
        fieldLabel: "Data Format:",
        name: "dataformat",
        reference: "dataformat",
        itemId: "dataformat",
        displayField: "name",
        valueField: "value",
        margin: "0 10 5 10",
        store: {
          fields: ["name", "value"],
          data: [
            { name: "YY", value: 1 },
            { name: "YY-MM", value: 2 },
            { name: "YY-MM-DD", value: 3 },
          ],
        },
        bind: {
          disabled: '{isFormat.value === 1}',
        },
      },
      {
        xtype: "combobox",
        queryMode: "local",
        publishes: "value",
        value: 0,
        triggerAction: "all",
        forceSelection: true,
        editable: false,
        fieldLabel: "Delimiter:",
        name: "delimiter",
        reference: "delimiter",
        displayField: "name",
        valueField: "value",
        margin: "0 10 5 10",
        store: {
          fields: ["name", "value"],
          data: [
            { name: "no delimiter", value: 0 },
            { name: "-", value: 1 },
          ],
        },
      },
      {
        xtype: "displayfield",
        margin: "0 10 5 10",
        fieldLabel: "Job Format:",
        bind: {
          value:
            "{prefixfield.value}{delimiter.value}{dataformat.value}{digitprefix.value}",
        },
      },
      {
        margin: "5 10 0 10",
        fieldLabel: "Default:",
        boxLabel: "Yes",
        name: "default",
        inputValue: "yes",
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
