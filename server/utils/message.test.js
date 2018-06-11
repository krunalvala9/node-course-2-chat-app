 var expect = require('expect');

 var {generateMessage, generateLocationMessage} = require('./message');

 describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Krunal';
        var text = 'Some message';
        var message = generateMessage(from, text);
        expect(message).toInclude({from, text});
        expect(message.createdAt).toBeA('number');
    });
 });

 describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Krunal';
        var latitude = 15;
        var longitude = 19;
        var url = 'https://www.google.com/maps?q=15,19';
        var locationMessage = generateLocationMessage(from, latitude, longitude);
        expect(locationMessage).toInclude({from, url});
        expect(locationMessage.createdAt).toBeA('number');
    });
 });