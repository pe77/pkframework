/// <reference path='PkState.ts' />

module Pk
{
    export interface IPkLoader {
        init();
        preload();
        create();
    }

	export class PkLoader extends Pk.PkState implements IPkLoader{

		init()
		{

		}

    	preload()
    	{
    		this.load.setPreloadSprite(this.add.sprite(200, 250, 'pk-loading-bar'));
    	}

    	create()
    	{
    		setTimeout(() => {

    			// if initial state set, load
    			if(this.game.getConfig().initialState != '')
    				this.game.state.start(this.game.getConfig().initialState);
    			//

    		}, this.game.getConfig().loaderWaitingTime);
    		
    	}
    }

}