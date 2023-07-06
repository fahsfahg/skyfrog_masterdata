Ext.define("skyfrog.view.masters.Main", {
  extend: "Ext.panel.Panel",
  xtype: "mastermain",

  requires: ["Ext.layout.container.Border"],

  controller: "masters-main",
  viewModel: {
    type: "masters-main",
  },

  listeners: {
    render: "onMainView",
  },

  bodyBorder: false,
  layout: "border",
  height: Ext.getViewportHeight() - 30,

  // defaults: {
  //     collapsible: true,
  //     split: true,
  //     bodyPadding: 10
  // },

  
  items: [
    {
      title: "Menu",
      reference: "MainMenu",
      collapsible: true,
      split: true,
      region: "west",
      margin: "5 0 0 0",
      width: 220,
      minWidth: 100,
      maxWidth: 250,
      items: [
        {
          xtype: "treelist",
          reference: "treelist",
          store: {
            root: {
              expanded: true,
              children: [
                {
                  text: " Job Prefix",
                  routeId: "jobprefix",
                  viewType: "jobprefix",
                  iconCls: "x-fa fa-thumbtack",
                  leaf: true,
                },
                {
                  text: "Job Type",
                  viewType: "jobtype",
                  iconCls: "x-fa fa-thumbtack",
                  leaf: true,
                },
                {
                  text: "Quality Assurance",
                  viewType: "quality",
                  iconCls: "x-fa fa-thumbtack",
                  leaf: true,
                },
                {
                  text: "Expense",
                  viewType: "expense",
                  iconCls: "x-fa fa-thumbtack",
                  leaf: true,
                },
                {
                  text: "Reason",
                  viewType: "reason",
                  iconCls: "x-fa fa-thumbtack",
                  leaf: true,
                },
                {
                  text: "Vehicle Type",
                  viewType: "vehicle",
                  iconCls: "x-fa fa-thumbtack",
                  leaf: true,
                },
                {
                  text: "Handheld Status",
                  viewType: "handheld",
                  iconCls: "x-fa fa-thumbtack",
                  leaf: true,
                },
                {
                  text: "Milestone",
                  viewType: "milestone",
                  iconCls: "x-fa fa-thumbtack",
                  leaf: true,
                },
                {
                  text: "GroupMaster",
                  viewType: "groupmaster",
                  iconCls: "x-fa fa-thumbtack",
                  leaf: true,
                },
                {
                  text: "Maintenance Type",
                  viewType: "maintenance",
                  iconCls: "x-fa fa-thumbtack",
                  leaf: true,
                },
                {
                  text: "Items",
                  viewType: "items",
                  iconCls: "x-fa fa-thumbtack",
                  leaf: true,
                },
                {
                  text: "Items Type",
                  viewType: "itemstype",
                  iconCls: "x-fa fa-thumbtack",
                  leaf: true,
                },
                // {
                //   text: "Skill  Master",
                //   viewType: "skillmaster",
                //   iconCls: "x-fa fa-thumbtack",
                //   leaf: true,
                // },
                // {
                //   text: "Polygon Master",
                //   viewType: "polygon",
                //   iconCls: "x-fa fa-thumbtack",
                //   leaf: true,
                // },
                // {
                //   text: "Zone Details",
                //   viewType: "zonedetails",
                //   iconCls: "x-fa fa-thumbtack",
                //   leaf: true,
                // },
                // {
                //   text: "Zone Master",
                //   viewType: "zonemaster",
                //   iconCls: "x-fa fa-thumbtack",
                //   leaf: true,
                // }
              ],
            },
          },
          listeners: {
            selectionchange: "onTreelistSelectionChange",
          },
        },
      ],
    },
    {
      region: "center",
      margin: "5 0 0 0",
      layout: "fit",
      reference: "mainContent",
      layout: {
        type: "card",
        anchor: "100%",
      },
    },
  ],
});
