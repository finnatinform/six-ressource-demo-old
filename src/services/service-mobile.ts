import Service from './service';

export abstract class AMobileService extends Service {
    public abstract IsMobile() : boolean ;
}

export class MobileService extends AMobileService {
    public IsMobile(): boolean {
        throw new Error('Method not implemented.');
    }
}