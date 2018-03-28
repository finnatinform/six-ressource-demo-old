import { Inject } from 'typescript-ioc';
import { AMobileService } from './service-mobile';

export class Services{

    @Inject
    public static MobileService : AMobileService ;
}