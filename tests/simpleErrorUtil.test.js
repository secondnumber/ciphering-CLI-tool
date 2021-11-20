const { simpleErrorUtil } = require('../utils/simpleErrorUtil');

describe('My Module', () => {

    test('negative', () => {
        const exit = jest.spyOn(process, "exit").mockImplementation(number => number);
        const mockStderr = jest.spyOn(process.stderr, 'write').mockImplementation(() => {});

        simpleErrorUtil(null)
        expect(mockStderr.mock.calls[0]).toEqual(['err'])
        expect(exit).toHaveBeenCalledWith(5);
    });
})
