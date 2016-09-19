//var cordova = {};
//cordova.platformId = 'null';
//$.getScript('http://op.genesisgo.us/wheel/app.js');

var app = {
  
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
	$.getScript('http://op.genesisgo.us/wheel/app.js');
    },

    receivedEvent: function(id) {}
};

app.initialize();


