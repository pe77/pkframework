/// <reference path='state/PkState.ts' />

module Pk
{
    export module I
	{
	
		export interface Loader {
			
			preload();
			create();
		}

	}

	export class PkLoader extends Pk.PkState implements Pk.I.Loader{

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
    			if(PkGame.pkConfig.initialState != '')
    				this.game.state.start(PkGame.pkConfig.initialState);
    			//

    		}, PkGame.pkConfig.loaderWaitingTime);
    		
    	}
    }

}