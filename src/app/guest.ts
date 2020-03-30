export class Guest {
    _address:string;
    constructor(public id:number=1,public firstName:string,public surname:string,public age:number,public isVIP:boolean) {
        
    }

    set address(addr){
        this._address=addr;
    }
    get address(){
        return this._address;
    }
}
