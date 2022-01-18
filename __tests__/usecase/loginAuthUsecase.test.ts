import LoginAuthUsecase from '../../src/usecase/loginAuthUsecase';

/**
 * loginAuthUsecaseテストモジュール
 */
describe('loginAuthUsecase', () => {

    /**
     * 
     */
    test('正常形', () => {
        const usecase = new LoginAuthUsecase();
        const result = usecase.run();

        expect(result.mailAddress).toBe('test@mail.jp');
        expect(result.name).toBe('test taro');
    });
});
