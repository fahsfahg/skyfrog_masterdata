Ext.define("skyfrog.view.masters.MainController", {
  extend: "Ext.app.ViewController",
  alias: "controller.masters-main",

  Listen: {
    controller: {
      "#": {
        unmatchedroute: "onRouteChange",
      },
    },
  },
  routes: {
    ":node": "onRouteChange",
  },

  lastview: null,
  setCurrentView: function (hashtag) {
    hashtag = (hashtag || "").toLowerCase();

    var me = this,
      refs = me.getReferences(),
      mainCard = refs.mainContent,
      MenuList = refs.treelist,
      mainLayout = mainCard.getLayout(),
      store = MenuList.getStore(),
      node =
        store.findNode("viewType", hashtag) ||
        store.findNode("routeId", hashtag),
      view = (node && node.get("viewType")) || "page404",
      lastview = me.lastview,
      existingItem = mainCard.child("component[routeId=" + hashtag + "]"),
      newview;

    if (lastview && lastview.isWindow) {
      lastview.destroy();
    }

    lastview = mainLayout.getActiveItem();

    if (!existingItem) {
      newview = Ext.create({
        xtype: view,
        routeId: hashtag,
        hideMode: "offsets",
      });
    }

    if (!newview || !newview.isWindow) {
      if (existingItem) {
        if (existingItem !== lastview) {
          mainLayout.setActiveItem(existingItem);
        }
        newview = existingItem;
      } else {
        Ext.suspendLayouts();
        mainLayout.setActiveItem(mainCard.add(newview));
        Ext.resumeLayouts(true);
      }
    }

    MenuList.setSelection(node);

    if (newview.isFocusable(true)) {
      newview.focus();
    }

    me.lastview = newview;
  },

  onMainView: function () {
    this.redirectTo("jobprefix");
  },

  onRouteChange: function (id) {
    this.setCurrentView(id);
  },

  onTreelistSelectionChange: function (tree, node) {
    var select = node && (node.get("viewType") || node.get("routeId"));
    if (select) {
      this.redirectTo(select);
    }
  },
});
