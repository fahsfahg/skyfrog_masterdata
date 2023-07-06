Ext.define('skyfrog.model.PrefixModel', {
    extend: 'skyfrog.model.Base',
    alias: "model.JobPrefixModel",

    fields: [
        { name: 'id', type: 'int'},
        { name: 'prefix', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'format', type: 'string' },
        { name: 'formatType', type: 'int' },
        { name: 'isdefault', type: 'boolean' },
        { name: 'isactive', type: 'boolean' },
        { name: 'digitRunning', type: 'string'  },
        { name: 'delimiter', type: 'int' },
        { name: 'dateFormat', type: 'int'}
    ],
});
