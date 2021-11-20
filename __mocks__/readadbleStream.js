export const mockReadableStream = jest.fn();
const mock = jest.fn().mockImplementation(() => {
    return {_read: mockReadableStream};
});

export default mock;