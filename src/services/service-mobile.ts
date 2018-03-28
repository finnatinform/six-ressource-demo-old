import Service from './service';

export abstract class AMobileService extends Service {
    public abstract IsMobile() : boolean ;
}

export class MobileService extends AMobileService {
    public IsMobile(): boolean {
        // TODO: Geht mit cordova-plugin-device device.platform
        throw new Error('Method not implemented.');
    }
}