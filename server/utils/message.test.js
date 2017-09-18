var expect = require('expect');

var { generateMessage } = require('./message');

describe('generateMessage', () => {

    it('should generate correct message object', () => {
        var from = "Ademir";
        var text = "This is test message";
        var message = generateMessage(from, text);

        //expect(message.createdAt).toBeAn('number');
        //expect(message).toInclude({from, text});

    });

});