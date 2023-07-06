/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'skyfrog.Application',

    name: 'skyfrog',

    requires: [
        // This will automatically load all classes in the skyfrog namespace
        // so that application classes do not need to require each other.
        'skyfrog.*'
    ],

    // The name of the initial view to create.
    mainView: 'skyfrog.view.main.Main'
});
