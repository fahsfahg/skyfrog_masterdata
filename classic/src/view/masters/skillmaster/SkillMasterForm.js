Ext.define("skyfrog.view.masters.skillmaster.SkillMasterForm", {
  extend: "Ext.window.Window",
  xtype: "skillmasterform",

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
    reference: "skillmasterform",
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
        fieldLabel: 'Skill Code (SK):',
        reference: "skillcode",
        itemId: "skillcode",
        publishes: "value",
        value: "",
        labelAsHtml: true,
        allowBlank: true,
        msgTarget: "side",
        padding: undefined,
        margin: "10 10 5 10",
      },
      {
        xtype: "textfield",
        fieldLabel: "Description:",
        reference: "description",
        itemId: "description",
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
        fieldLabel: "Default:",
        boxLabel: "Default skill for new handheld",
        name: "status",
        inputValue: "actived",
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
