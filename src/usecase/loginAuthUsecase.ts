import User from '../domain/user';

export default class LoginAuthUsecase {

    /**
     * 
     */
    public constructor() {
        // 
    }

    /**
     * 
     */
    public run(): User {
        return new User(
            'test@mail.jp',
            'test taro'
        );
    }
}
