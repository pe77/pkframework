/// <reference path='../../pk/state/PkState.ts' />

module GameBase
{

	export class Main extends Pk.PkState {

		init()
		{
			console.log('Main init');
		}

    	create()
    	{
    		console.log('Main create');

    		// cria um evento teste
    		var e = new Pk.PkElement(this.game);

    		var t = 5;
    		e.event.add('onTeste', (event, d1, d2, d3)=>{
    			console.log('event onTeste 111', event, d1, d2, d3);
    		});


    		e.event.add('onTeste', (event, d1, d2, d3)=>{
    			console.log('event onTeste 222', event, d1, d2, d3);
    		});

    		setTimeout(()=>{
    			e.event.dispatch('onTeste', 1, [1], 'um');
    		}, 1000);

    		/*
    		setTimeout(()=>{
    			e.event.dispatch('onTeste', 2, [2], 'dois');
    		}, 2000);
    		*/
    	}
    }

}