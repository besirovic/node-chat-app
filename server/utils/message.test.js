var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {

    it('should generate correct message object', () => {
        var from = "Ademir";
        var text = "This is test message";
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});

    });

});

describe('generateLocationMessage', () => {

    it('should generate correct location object', () => {
        var from = 'Ademir';
        var lat = 12345;
        var lng = 67890;
        var url = `https://www.google.com/maps/q=${lat},${lng}`;

        var message = generateLocationMessage(from, lat, lng);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, text });

    });

});