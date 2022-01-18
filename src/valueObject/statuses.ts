import Status from './status';

/**
 * 
 */
export default class Statuses{
    
    /**
     * 
     * @param statuses 
     */
    public constructor(
        private readonly statuses:Status[]
    ){
    }

    /**
     * 
     * @param status 
     * @returns 
     */
    public create(
        status:string
    ):Status {
        const nextStatus = this.statuses.find(
            diffStatus => status === diffStatus.value
        );

        if (nextStatus === undefined) throw new Error(`指定したステータスが不正です。[${status}]`);

        return nextStatus;
    }

    /**
     * 
     * @param status 
     * @returns 
     */
    public getNextStatus(
        status:Status
    ):Status {
        const nextStatus = this.statuses.find(
            diffStatus => status.nextValue === diffStatus.value
        );

        if (nextStatus === undefined) throw new Error(`指定したステータスが不正です。[${status.value}]`);

        return nextStatus;
    }
}
