import { BrowserWindow , app } from 'electron' ;
import * as url from 'url' ;
import * as path from 'path' ;

let HWindow : BrowserWindow ;

function onAppReady():void{
    HWindow = new BrowserWindow();
    HWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, 'starter.html'),
            protocol: 'file:',
            slashes: true
        })
    );

    HWindow.on('closed', () => {
        HWindow = null ;
    });

}

app.on('ready', onAppReady);

app.on('window-all-closed', () =>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
});