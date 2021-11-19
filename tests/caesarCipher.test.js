const { caesarCipher } = require('../ciphers/caesarCipher');

describe('caesar cipher', () => {
    let ALPHABET;
    let SYMBOLS;
    beforeEach(() => {
       ALPHABET = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
       SYMBOLS = '!@#$%^&*()-_=+<>?/;:';
    })
    test('should encrypt alphabet', () => {
        expect(caesarCipher(ALPHABET, false)).toBe('BbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAa')
    });
    test('should decrypt alphabet', () => {
        expect(caesarCipher(ALPHABET, true)).toBe('ZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYy')
    });
    test('no encrypt symbols', () => {
        expect(caesarCipher(SYMBOLS, false)).toBe(SYMBOLS)
    });
    test('no decrypt symbols', () => {
        expect(caesarCipher(SYMBOLS, true)).toBe(SYMBOLS)
    });
    test('negative cases', () => {
        expect(caesarCipher(null)).toBe(undefined);
    });
});