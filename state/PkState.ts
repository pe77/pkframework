/// <reference path='PkTransition.ts' />
/// <reference path='../element/PkElement.ts' />
/// <reference path='../vendor/phaser/phaser.d.ts' />

module Pk
{

    export class PkState extends Phaser.State {
        
        transition:Pk.PkTransition;

        layers:Array<PkLayer> = [];

        pkGame:Pk.PkGame;

        
		init(...args:any[])
		{
            this.transition = new Pk.PkTransition(<Pk.PkGame>this.game);
            this.pkGame = <Pk.PkGame>this.game;
		}


        getGame():Pk.PkGame
        {
            return <Pk.PkGame>this.game;
        }


        addLayer = function(layerName:string)
        {
            var exist = false;

            // check if already exist
            for (var i = 0; i < this.layers.length; i++)
            {
                if(this.layers[i].name == layerName)
                {
                    exist = true;
                    break;
                }
            };
            

            if(!exist)
            {
                // add to layer
                var layer = new Pk.PkLayer(this.game);
                layer.name = layerName;
                this.layers.push(layer);    
            }
            
        }

        addToLayer = function(layerName:string, element:any)
        {
            var exist = false;
     
            // check if already exist
            for (var i = 0; i < this.layers.length; i++)
            {
                if(this.layers[i].name == layerName)
                {
                    exist = true;
                    break;
                }
            };

            // if dont exist, wharever
            if(!exist)
                return;
            //

            // add element to layer
            this.layers[i].add(element);

            // order layers
            for (var i = 0; i < this.layers.length; i++)
                this.game.world.bringToTop(this.layers[i]);
            //
            
        }


    	create()
    	{
    		// console.log('PkState create');
    		
    	}
    }


}
