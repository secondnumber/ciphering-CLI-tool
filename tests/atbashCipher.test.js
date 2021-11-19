const { atbashCipher } = require('../ciphers/atbashCipher');

describe('atbash cipher', () => {
    let ALPHABET;
    let SYMBOLS;
    beforeEach(() => {
        ALPHABET = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
        SYMBOLS = '!@#$%^&*()-_=+<>?/;:';
    })
    test('should encrypt/decrypt alphabet', () => {
            expect(atbashCipher(ALPHABET)).toBe("ZzYyXxWwVvUuTtSsRrQqPpOoNnMmLlKkJjIiHhGgFfEeDdCcBbAa")
    });
    test('no encrypt symbols', () => {
        expect(atbashCipher(SYMBOLS)).toBe(SYMBOLS)
    });
    test('negative cases', () => {
        expect(atbashCipher(null)).toBe(undefined);
    });
});