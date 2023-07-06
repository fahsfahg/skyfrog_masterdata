Ext.define("skyfrog.view.masters.jobtype.JobType", {
  extend: "Ext.grid.Panel",
  xtype: "jobtype",

  controller: "JobTypeController",
  // viewModel: {
  //     type: 'skyfrog.view.masters.jobtype.JobTypeModel'
  // },

  store: {
    type: "jobtype",
  },

  title: "Job Type",

  reference: "jobtGrid",

  columns: [
    { xtype: "rownumberer" },
    { text: "Code", dataIndex: "code" },
    { text: "Document Type", dataIndex: "description", flex: 1 },
    { text: "Owner", dataIndex: "owner", flex: 1 },
    { text: "Prefix", dataIndex: "prefix", flex: 1 },
    { text: "Sub Type", dataIndex: "subtype", flex: 1 },
    { text: "Loading Time", dataIndex: "loadingTime" },
    { text: "UnLoading Time", dataIndex: "unloadingTime", flex: 1 },
    { text: "MaxLoading Time", dataIndex: "maxLoading", flex: 1 },
    { text: "MaxUnLoading Time", dataIndex: "maxUnloading", flex: 1 },
    { text: "Default", dataIndex: "isdefault", flex: 1 },
    { text: "Active", dataIndex: "isactive", flex: 1 },
  ],
  tbar: [
    {
      text: "Create New",
      handler: "onAddClick",
      iconCls: "customer-buttons-add",
    },
    {
      text: "Delete",
      handler: "onRemoveClick",
      iconCls: "customer-buttons-remove",
      bind: {
        disabled: "{!jobtGrid.selection}",
      },
    },
    {
      text: "Edit",
      handler: "onEditClick",
      iconCls: "customer-buttons-option",
      bind: {
        disabled: "{!jobtGrid.selection}",
      },
    },
  ],
});
