import { PkScene } from "./scene/PKScene";
import { PkGame } from "./PkGame";

export module I
{

    export interface Loader {
        
        preload();
        create();
    }

}

export class PkLoader extends PkScene implements I.Loader
{

    init()	
    {

    }

    preload()
    {
        // console.log('preload!')
        // this.load.setPreloadSprite(this.add.sprite(200, 250, 'pk-loading-bar'));
    }

    create()
    {
        setTimeout(() => {

            
            // if initial state set, load
            if(PkGame.pkConfig.initialState != '')
                this.game.scene.start(PkGame.pkConfig.initialState);
            //

        }, PkGame.pkConfig.loaderWaitingTime);
    }
}