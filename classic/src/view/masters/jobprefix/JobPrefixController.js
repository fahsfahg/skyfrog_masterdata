Ext.define("skyfrog.view.masters.jobprefix.JobPrefixController", {
  extend: "Ext.app.ViewController",
  alias: "controller.JobPrefixController",

  requires: [
    "Ext.window.Window",
    "skyfrog.view.masters.jobprefix.JobPrefixForm",
  ],

  createDialog: function (record) {
    var view = this.getView();

    this.isEdit = !!record;
    this.dialog = view.add({
      xtype: "jobprefixform",
      viewModel: {
        data: {
          title: record ? "Edit Prefix: " + record.get("prefix") : "Add Prefix",
        },
      },
      record,

      session: true,
    });

    this.dialog.show();
  },

  onAddClick: function () {
    this.createDialog(null);
  },

  onEditClick: function (button) {
    var prefixGrid = this.getView();
    var selection = prefixGrid.getSelectionModel().getSelection()[0];
    this.createDialog(selection);

    // console.log(button.getWidgetRecord());

    // console.log(selection)
    // if(!selection){

    // }
    // this.createDialog(button.getWidgetRecord());
  },

  onRemoveClick: function (button) {
    var prefixGrid = this.getView();
    var selection = prefixGrid.getSelectionModel().getSelection()[0];

    selection.drop();
  },

  // onSaveClick: function() {
  //     // Save the changes pending in the dialog's child session back to the
  //     // parent session.
  //     var dialog = this.dialog,
  //         form = this.lookupReference('form'),
  //         isEdit = this.isEdit,
  //         id;

  //     if (form.isValid()) {
  //         if (!isEdit) {
  //             // Since we're not editing, we have a newly inserted record. Grab the id of
  //             // that record that exists in the child session
  //             id = dialog.getViewModel().get('theCompany').id;
  //         }

  //         dialog.getSession().save();

  //         if (!isEdit) {
  //             // Use the id of that child record to find the phantom in the parent session,
  //             // we can then use it to insert the record into our store
  //             this.getStore('companies').insert(0, this.getSession().getRecord('Company', id));
  //         }

  //         this.onCancelClick();
  //     }
  // },

  onCancelClick: function () {
    if (this.dialog) {
      this.dialog.destroy();
      this.dialog = null;
    }
  },

  beforeDetailRender: function (view) {
    if (view.record) {
      var record = view.record ? view.record : {};

        view.down("#prefix").setValue(record.get("prefix")),
        view.down("#descrprefix").setValue(record.get("description")),
        view.down("#isFormat").setValue(record.get("format")),
        view.down("#digitprefix").setValue(record.get("digitprefix"));
        view.down("#isFormat").setValue(record.get("isFormat")),
        view.down("#dataformat").setValue(record.get("dataformat"));
    }
  },
});
