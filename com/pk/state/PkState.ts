module Pk
{
    export class PkState extends Phaser.State {
        
        transition:Pk.PkTransition;

		init()
		{
			console.log('PkState init');
            this.transition = new Pk.PkTransition(this.game);
		}


    	create()
    	{
    		// console.log('PkState create');
    		
    	}
    }


}
