requirejs.config({
    baseUrl: '/javascripts',
    paths: {
        main: 'main',
        Tone: 'lib/Tone.min',
        jquery: 'lib/jquery-3.3.1.min',
		//underscore: 'lib/underscore-min',
        socketio: '../socket.io/socket.io',
        MidiConvert: 'lib/MidiConvert'
    }
});

if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) { 
            return typeof args[number] != 'undefined'
            ? args[number]
            : match
            ;
        });
    };
}

require(['main']);