Ext.define('skyfrog.view.masters.handheld.HandheldController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.masters-handheld-handheld',

    requires: [
        "skyfrog.view.masters.handheld.HandheldForm",
        "Ext.window.Window",
    ],

    createDialog: function (record) {
        var view = this.getView();
    
        this.isEdit = !!record;
        this.dialog = view.add({
          xtype: "handheldform",
          viewModel: {
            data: {
              title: record ? "Edit : " + record.get("code") : "Vehicle Status",
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
    
            view.down("#name").setValue(record.get("name"))
        }
      },

});
