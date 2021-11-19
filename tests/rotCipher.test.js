const { rotCipher } = require('../ciphers/rotCipher');

describe('rot cipher', () => {
    let ALPHABET;
    let SYMBOLS;
    beforeEach(() => {
        ALPHABET = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
        SYMBOLS = '!@#$%^&*()-_=+<>?/;:';
    })
    test('should encrypt alphabet', () => {
        expect(rotCipher(ALPHABET, false)).toBe('IiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHh')
    });
    test('should decrypt alphabet', () => {
        expect(rotCipher(ALPHABET, true)).toBe('SsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRr')
    });
    test('no encrypt symbols', () => {
        expect(rotCipher(SYMBOLS, false)).toBe(SYMBOLS)
    });
    test('no decrypt symbols', () => {
        expect(rotCipher(SYMBOLS, true)).toBe(SYMBOLS)
    });
    test('negative cases', () => {
        expect(rotCipher(null)).toBe(undefined);
    });
});