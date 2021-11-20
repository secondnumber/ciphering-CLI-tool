const {configValidation} = require("../utils/configValidation");

describe('config validation error', () => {
    test('negative', () => {
        const mockStderr = jest.spyOn(process.stderr, 'write').mockImplementation(() => {});

        configValidation('C2-R3-A')
        expect(mockStderr.mock.calls).toEqual([["Invalid config, please, pass the correct config\n"]])
        mockStderr.mockRestore()
    });
})