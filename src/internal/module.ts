export default class Module{
    private __Path : string ;
    public Component : React.ComponentClass ;

    public get Path() : string {
        return this.__Path ;
    }

    constructor( _Path : string , _Component : React.ComponentClass ){        
        this.__Path = _Path ;
        this.Component = _Component ;
    }
}