/// <reference path='../event/PkEvent.ts' />
/// <reference path='../PkGame.ts' />
/// <reference path='PkLayer.ts' />

module Pk
{
    
    export module I
    {
        export interface ParallaxElement {
            tileElement:Phaser.TileSprite;
            layerElement:Pk.PkLayer;
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
                tileElement:element instanceof Phaser.TileSprite ? <Phaser.TileSprite>element : null,
                layerElement:element instanceof Pk.PkLayer ? <Pk.PkLayer>element : null,
                distance:element instanceof Pk.PkLayer ? element.distance : distance
            });
        }

        update()
        {
            for(let i in this.layers)
            {
                // if is tile sprite element
                if(this.layers[i].tileElement)
                {
                    let posX = 1 / this.layers[i].distance;
                    
                    this.layers[i].tileElement.tilePosition.x = -this.state.game.camera.x * posX;
                    this.layers[i].tileElement.tilePosition.y = -this.state.game.camera.y * posX;
                }

                // if is layer
                if(this.layers[i].layerElement)
                {
                // @todo
                }
                
            };

        }

    }
}
