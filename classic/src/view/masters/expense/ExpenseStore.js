Ext.define("skyfrog.view.masters.expense.ExpenseStore", {
    extend: "Ext.data.Store",
  
    alias: "store.expense",
  
    model: "skyfrog.model.Expense",

    data: {
        items: [
          {
            name: "ค่าน้ำมัน",
            status: "Actived",
          },
          {
            name: "ค่าปรับ",
            status: "Actived",
          },
          {
            name: "ค่าแรงรายวัน",
            status: "Actived",
          },
          {
            name: "ค่าใช้จ่าย",
            status: "Actived",
          },
          {
            name: "ค่าทางด่วน",
            status: "Actived",
          },
          {
            name: "ค่าจอดรถ",
            status: "Actived",
          },
          {
            name: "ค่ากาแฟ",
            status: "Inactive",
          },
        ],
      },
    
      autoLoad: true,
      proxy: {
        type: "memory",
        reader: {
          type: "json",
          rootProperty: "items",
        },
      },
})