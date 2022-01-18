/**
 * 
 */
export default class Status {

    /**
     * 
     */
    public get nextValue(): string {
        return this._nextValue;
    }

    /**
     * 
     */
    public get viewValue(): string {
        return this._viewValue;
    }

    /**
     * 
     */
    public get value(): string {
        return this._value;
    }

    /**
     * 
     */
    public get isRent(): boolean {
        return this._isRent;
    }

    /**
     * 
     * @param value 
     * @param viewValue 
     * @param nextValue 
     * @param isRent 
     */
    public constructor(
        private readonly _value: string,
        private readonly _viewValue: string,
        private readonly _nextValue: string,
        private readonly _isRent: boolean
    ){
    }
}
