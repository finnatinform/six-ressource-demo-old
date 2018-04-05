import * as React from 'react';

export interface IRessourceIconProps {

    Icon : string ;

    // Update allowed values for new images in images/ressources folder. Only needed, if icons are not defined with json file
    // Icon : 'ressource-01' | 
    //        'ressource-02' | 
    //        'ressource-03' | 
    //        'ressource-04' | 
    //        'ressource-05' | 
    //        'ressource-06' | 
    //        'ressource-07' | 
    //        'ressource-08' | 
    //        'ressource-09' | 
    //        'ressource-10' | 
    //        'ressource-11' | 
    //        'ressource-12' ;
}
export interface IRessourceIconState {  }

export class RessourceIcon extends React.Component<IRessourceIconProps, IRessourceIconState> {

    private get Icon():string{
        return './images/ressources/'+this.props.Icon+'.svg' ; // TODO für mobil anpassen
    }

    render() {
        return (
            <div>
                <img src={this.Icon} />
            </div>
        );
    }
}