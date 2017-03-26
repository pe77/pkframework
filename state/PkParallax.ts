/// <reference path='../event/PkEvent.ts' />
/// <reference path='../PkGame.ts' />
/// <reference path='PkLayer.ts' />

module Pk
{
    
    export module I
    {
        export interface ParallaxElement {
            element:Phaser.TileSprite|Pk.PkLayer;
            distance:number;
        }
    }



    export class PkParallax  {

        state:Pk.PkState;
        layers:Array<Pk.I.ParallaxElement> = [];

		constructor(state:Pk.PkState)
		{
            this.state = state;
		}

        add(element:Phaser.TileSprite|Pk.PkLayer, distance?:number, cameraLock:boolean = true):void
        {
            // if using TileSprite, distance is mandatary
            if(element instanceof Phaser.TileSprite && !distance)
                throw new Error("If you use TileSprite for parallax, distance param is mandatory");
            //

            if(element instanceof Pk.PkLayer && distance)
                element.distance = distance;
            //
            
            if(element instanceof Pk.PkLayer && distance)
                element.distance = distance;
            //

            if(element instanceof Phaser.TileSprite && cameraLock)
                element.fixedToCamera = true;
            //

            this.layers.push({
                element:element,
                distance:element instanceof Pk.PkLayer ? element.distance : distance
            });
        }

        update()
        {
            for(let i in this.layers)
            {
                // calc speed
                if(this.layers[i].element instanceof Phaser.TileSprite)
                {
                    let posX = 1 / this.layers[i].distance;
                    
                    this.layers[i].element.tilePosition.x = -this.state.game.camera.x * posX;
                    this.layers[i].element.tilePosition.y = -this.state.game.camera.y * posX;
                }


            };

        }

    }
}
