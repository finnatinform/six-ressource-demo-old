import { GET, Path } from 'typescript-rest' ;

@Path('/data')
export class DataController{

    @GET
    private onGetCall():string{
        return 'Hallo Welt' ;
    }
} 