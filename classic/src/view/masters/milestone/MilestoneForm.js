Ext.define("skyfrog.view.masters.milestone.MilestoneForm", {
  extend: "Ext.window.Window",
  xtype: "milestoneform",

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
    reference: "milestoneform",
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
        fieldLabel: 'Milestone Name <span style="color: red">*</span>',
        reference: "milestone",
        itemId: "milestone",
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
        fieldLabel: 'JOB Phase <span style="color: red">*</span>',
        reference: "phase",
        itemId: "phase",
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
      text: "Cancel",
      handler: "onCancelClick",
    },
  ],
});
