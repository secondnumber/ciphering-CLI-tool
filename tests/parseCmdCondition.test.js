const { parseCondition } = require('../utils/parseCmdCondition');

describe('parse cmd condition', () => {
    const ARGS_NORM = [
        '/usr/local/bin/node',
        '/Users/yulyavorontsova/ciphering-CLI-tool/index',
        '-c',
        'C1-C1-R0-A',
        '-c',
        '-i',
        './input.txt',
        '-o',
        './output.txt'
    ]
    const ARG_NULL = [
        '/usr/local/bin/node',
        '/Users/yulyavorontsova/ciphering-CLI-tool/index',
        '-c',
        'C1-C1-R0-A',
        '-c',
        '-i',
        './input.txt',
    ]
    test('negative', () => {
        const mockStderr = jest.spyOn(process.stderr, 'write').mockImplementation(() => {});
        parseCondition(ARGS_NORM, ['-c', '-c'])
        expect(mockStderr.mock.calls).toEqual([[`Your arguments are duplicated\n`]])
        mockStderr.mockRestore()
    });
    test('positive', () => {
        expect(parseCondition(ARGS_NORM, ['-o'])).toEqual('./output.txt')
    });
    test('positive', () => {
        expect(parseCondition(ARG_NULL, null)).toEqual(undefined)
    });
});