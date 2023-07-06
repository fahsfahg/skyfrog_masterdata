Ext.define("skyfrog.view.masters.items.ImportForm", {
    extend: "Ext.window.Window",
    xtype: "importform",
  
    bind: {
      title: "{title}",
    },
  
    bodyPadding: 10,
    layout: "fit",
    modal: true,
    width: 500,
    height: undefined,
    closable: false,
  
    items: {
      xtype: "form",
      reference: "importform",
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
          xtype: "fileuploadfield",
          emptyText: "Please choose a CSV file.",
          fieldLabel: "File :",
          name: "file-path",
          buttonConfig: {
            text: "Browse...",
          },
        },
        {
          xtype: "textfield",
          fieldLabel: 'Name :',
          reference: "name",
          itemId: "name",
          publishes: "value",
          value: "",
          labelAsHtml: true,
          allowBlank: false,
          msgTarget: "side",
          padding: undefined,
        },
        {
          checked: true,
          fieldLabel: "Has Header Record:",
          boxLabel: "Yes",
          name: "status",
          inputValue: "active",
        }
      ],
    },
  
    buttons: [
      {
        text: "Reset",
        handler: "onCancelClick",
      },
      {
        text: "Cancle",
        handler: "onCancelClick",
      },
    ],
  });
  