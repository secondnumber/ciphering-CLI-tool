const { simpleErrorUtil } = require('../utils/simpleErrorUtil');

describe('My Module', () => {
    test('negative', () => {
        const mockStderr = jest.spyOn(process.stderr, 'write').mockImplementation(() => {});

        simpleErrorUtil(null)
        expect(mockStderr.mock.calls).toEqual([['err']])
        mockStderr.mockRestore()
    });
})





/*const mockStderr = jest.spyOn(process.stderr, 'write');
jest.spyOn(process, 'exit').mockImplementation(() => {});
jest.mock('../utils/simpleErrorUtil');


describe('My Module', () => {
    test('should exit process on condition match', () => {
        console.log(mockStderr.mock.calls)
        expect(mockStderr.mock.calls).toEqual([['err']])

    })
})
/*describe('My Module', () => {
    it('should exit process on condition match', () => {

        const realProcess = process;
        const exitMock = jest.fn();

        global.process = {...realProcess, exit: exitMock};



        global.process = realProcess;

        const mockStderr = jest.spyOn(process.stderr, 'write').mockImplementation(() => {});
        simpleErrorUtil(true);
        expect(mockStderr.mock.calls).toEqual([['err']])
        mockStderr.mockRestore()
    })
})*/