/// <reference path='../../pk/state/PkState.ts' />
/// <reference path='../../pk/state/PkTransition.ts' />

module GameBase
{

	export class Menu extends Pk.PkState {

		init()
		{
            super.init();
			console.log('Menu init');
		}

    	create()
    	{
            super.create();
    		console.log('Menu create');


    		
    		setTimeout(()=>{
                this.transition.change('Main', 'foi', 77);
    		}, 1000);
    		
    	}
    }

}