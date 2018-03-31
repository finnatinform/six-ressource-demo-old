export default class Module{
    private __Path : string ;
    public Component : React.ComponentClass ;
    public Icon : string ;

    public get Path() : string {
        return '/' + this.__Path ;
    }

    constructor( _Path : string , _Component : React.ComponentClass, _Icon : string ){        
        this.__Path = _Path ;
        this.Component = _Component ;
        this.Icon = _Icon ;
    }
}