import UserRepository from './repository/userRepository';
/**
 * 
 */
export default class User {

    /**
     * 
     * @param mailAddress 
     * @param name 
     */
    public constructor(
        public mailAddress: string,
        public name: string,
    ) {

        const repository = new UserRepository();
        repository.test();
    }
}
