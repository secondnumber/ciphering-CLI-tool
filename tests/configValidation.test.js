const {configValidation} = require("../utils/configValidation");

describe('config validation', () => {

    test('wrong config', () => {
        const exit = jest.spyOn(process, "exit").mockImplementation(number => number);
        const mockStderr = jest.spyOn(process.stderr, 'write').mockImplementation(() => {});

        configValidation('C2-A0')
        expect(mockStderr.mock.calls[0][0]).toEqual("Invalid config, please, pass the correct config\n")
        expect(exit).toHaveBeenCalledWith(2);
    });
    test('correct config', () => {
        expect(configValidation('C1-C0-R1-R0-A')).toBe(null);
    });
});