const {configValidation} = require("../utils/configValidation");

jest.mock("../utils/configValidation");

test('calls configValidation', () => {
    expect(configValidation).toBeDefined()
});