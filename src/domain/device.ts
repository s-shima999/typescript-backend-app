import {Status} from '../valueObject/status';
/**
 * 
 */
export default class Device{
   
    /**
     * 
     * @param id 
     * @param status 
     */
    public constructor(
        private readonly id :string,
        private readonly status :Status
    ){
        // 
    }

    public rental(): void{

        if (this.status.isRent) throw new Error('貸し出し不可のステータスです。');

    }

    public return(): void{
        if (!this.status.isRent) throw new Error('返却不可のステータスです。');
        
    }


}
