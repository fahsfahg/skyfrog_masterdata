Ext.define("skyfrog.view.masters.polygon.PolygonForm", {
    extend: "Ext.window.Window",
    xtype: "polygonform",
  
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
      reference: "polygonform",
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
              fieldLabel: 'Name <span style="color: red">*</span>',
              reference: "polygonname",
              itemId: "polygonname",
              publishes: "value",
              value: "",
              labelAsHtml: true,
              allowBlank: false,
              msgTarget: "side",
              padding: undefined,
              margin: "10 10 5 10",
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
  