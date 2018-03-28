import Service from './service';

export abstract class ALoaderService extends Service {
    public abstract get InLoading():boolean ;
}

export class LoaderService extends ALoaderService {
    public get InLoading(): boolean {
        return false ;
    }
}