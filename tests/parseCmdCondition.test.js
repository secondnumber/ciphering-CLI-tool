const { parseCondition } = require('../utils/parseCmdCondition');

describe('parse cmd condition', () => {
    const exit = jest.spyOn(process, "exit").mockImplementation(number => number);
    const mockStderr = jest.spyOn(process.stderr, 'write').mockImplementation(() => {});
    const ARG_EXIST = [
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
    const ARG_ABSENT = [
        '/usr/local/bin/node',
        '/Users/yulyavorontsova/ciphering-CLI-tool/index',
        '-c',
        'C1-C1-R0-A',
        '-c',
        '-i',
        './input.txt',
    ]
    const ARG_WRONG_OUTPUT = [
        '/usr/local/bin/node',
        '/Users/yulyavorontsova/ciphering-CLI-tool/index',
        '-c',
        'C1-C1-R0-A',
        '-c',
        '-i',
        './input.txt',
        '-o',
        './out.txt'
    ]
    test('arguments duplicated', () => {


        parseCondition(ARG_EXIST, ['-i', '--input'])
        expect(mockStderr.mock.calls[0][0]).toEqual(`Your arguments are duplicated\n`)
        expect(exit).toHaveBeenCalledWith(5);
        exit.mockClear()
        mockStderr.mockClear()
    });
    test('positive 1', () => {
        expect(parseCondition(ARG_EXIST, ['-o'])).toEqual('./output.txt')
    });
    test('negative no flag', () => {
        expect(parseCondition(ARG_ABSENT, null)).toEqual(null)
    });
});