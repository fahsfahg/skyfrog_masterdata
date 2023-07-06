Ext.define("skyfrog.view.route_planning.orderview.OrderView", {
  extend: "Ext.panel.Panel",
  xtype: "orderview",

  requires: [
    "skyfrog.view.route_planning.orderview.OrderViewController",
    "skyfrog.view.route_planning.orderview.OrderViewModel",
    "Ext.grid.*",
    "Ext.layout.container.Column",
  ],

  controller: "route_planning-orderview-orderview",
  viewModel: {
    type: "route_planning-orderview-orderview",
  },

  title: "Order Information",

  items: [
    {
      layout: {
        type: "hbox",
        align: "stretch",
      },
      items: [
        {
          fieldLabel: "Group",
          xtype: "combobox",
          name: "group",
          store: {
            fields: ["name", "value"],
            data: [
              { name: "Mr", value: "mr" },
              { name: "Mrs", value: "mrs" },
              { name: "Miss", value: "miss" },
            ],
          },
          displayField: "name",
          valueField: "value",
          typeAhead: true,
          queryMode: "local",
          emptyText: "Select Group",
          margin: "5 0 0 5",
        },
      ],
    },
    {
      xtype: "tabpanel",
      reference: "tabpanel",
      border: false,
      defaults: {
        bodyPadding: 10,
      },
      plain: true,
      bind: {
        tabPosition: "{positionBtn.value}",
        tabRotation: "{rotationBtn.value}",
      },
      items: [
        {
          title: "Order Result",
          icon: null,
          items: [
            {
              xtype: "grid",
              columnLines: true,
              selType: "checkboxmodel",
              columns: [
                {
                  text: "Shipment",
                  dataIndex: "name",
                  width: 100,
                },
                {
                  text: "Seq",
                  dataIndex: "price",
                  width: 100,
                },
                {
                  text: "Delivery Order",
                  width: 100,
                },
                {
                  text: "Type",
                  width: 100,
                },
                {
                  text: "WH Name",
                  width: 100,
                },
                {
                  text: "Drop Point",
                  width: 100,
                },
                {
                  text: "Supplier",
                  width: 100,
                },
                {
                  text: "Address",
                  width: 100,
                },
              ],
            },
          ],
        },
        {
          title: "Order UnAssign",
          icon: null,
          html: "gg",
        },
        {
          title: "Vehicle Summary",
          icon: null,
          html: "mm",
        },
      ],
    },
  ],
});
