const { chooseCipher } = require("../ciphers/cipher");

describe('cipher', () => {
    let ALPHABET;
    let SYMBOLS;
    beforeEach(() => {
        ALPHABET = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
        SYMBOLS = '!@#$%^&*()-_=+<>?/;:';
    })
    test('positive cases C1', () => {
        expect(chooseCipher(ALPHABET, 'C1')).toBe('BbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAa')
    });
    test('positive cases C0', () => {
        expect(chooseCipher(ALPHABET, 'C0')).toBe('ZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYy')
    });
    test('positive cases R1', () => {
        expect(chooseCipher(ALPHABET, 'R1')).toBe('IiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHh')
    });
    test('positive cases R0', () => {
        expect(chooseCipher(ALPHABET, 'R0')).toBe('SsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRr')
    });
    test('positive cases A', () => {
        expect(chooseCipher(ALPHABET, 'A')).toBe('ZzYyXxWwVvUuTtSsRrQqPpOoNnMmLlKkJjIiHhGgFfEeDdCcBbAa')
    });
    test('negative cases', () => {
        expect(chooseCipher(null)).toBe(null);
    });
});