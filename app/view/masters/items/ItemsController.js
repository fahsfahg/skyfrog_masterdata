Ext.define('skyfrog.view.masters.items.ItemsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.masters-items-items',

    requires: [
        "skyfrog.view.masters.items.ItemsForm",
        "Ext.window.Window",
    ],

    createDialog: function (record) {
        var view = this.getView();
    
        this.isEdit = !!record;
        this.dialog = view.add({
          xtype: "itemsform",
          viewModel: {
            data: {
              title: record ? "Edit : " + record.get("code") : "Form Items Master",
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
    
            view.down("#code").setValue(record.get("code")),
            view.down("#description").setValue(record.get("description")),
            view.down("#width").setValue(record.get("width")),
            view.down("#length").setValue(record.get("length")),
            view.down("#height").setValue(record.get("height")),
            view.down("#weight").setValue(record.get("weight")),
            view.down("#itemtype").setValue(record.get("itemtype"))
        }
      },

      createDialogImport: function (record) {
        var view = this.getView();
    
        this.isEdit = !!record;
        this.dialog = view.add({
          xtype: "importform",
          viewModel: {
            data: {
              title: record ? "Sky Frog - Zone Details Upload" : "Sky Frog - Zone Details Upload",
            },
          },
          record,
    
          session: true,
        });
    
        this.dialog.show();
      },

      onImportClick: function () {
        this.createDialogImport(null);
      }

});
