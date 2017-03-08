/// <reference path='../../pk/PkState.ts' />

module GameBase
{

	export class Main extends Pk.PkState {

		init()
		{
			console.log('Main init');
		}

    	create()
    	{
    		console.log('Main create')
    	}
    }

}