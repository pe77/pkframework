import { PkLayer } from "./PkLayer";
import { PkScene } from "./PKScene";

    export module I
    {
        export interface ParallaxElement {
            tileElement:Phaser.GameObjects.TileSprite;
            layerElement:PkLayer;
            distance:number;
        }
    }

    export class PkParallax  {

        scene:PkScene;
        layers:Array<I.ParallaxElement> = [];

		constructor(scene:PkScene)
		{
            this.scene = scene;

		}

        add(element:Phaser.GameObjects.TileSprite|PkLayer, distance?:number, cameraLock:boolean = true):void
        {
            // if using TileSprite, distance is mandatary
            if(element instanceof Phaser.GameObjects.TileSprite && !distance)
                throw new Error("If you use TileSprite for parallax, distance param is mandatory");
            //

            if(element instanceof PkLayer && distance)
                element.distance = distance;
            //
            
            if(element instanceof PkLayer && distance)
                element.distance = distance;
            //

            /*
            if(element instanceof Phaser.GameObjects.TileSprite && cameraLock)
                element.fixedToCamera = true;
            // */

            this.layers.push({
                tileElement:element instanceof Phaser.GameObjects.TileSprite ? <Phaser.GameObjects.TileSprite>element : null,
                layerElement:element instanceof PkLayer ? <PkLayer>element : null,
                distance:element instanceof PkLayer ? element.distance : distance
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
                    
                    this.layers[i].tileElement.tilePositionX = -this.scene.cameras[0].posX * posX;
                    this.layers[i].tileElement.tilePositionY = -this.scene.cameras[0].posY * posX;

                }

                

                // if is layer
                if(this.layers[i].layerElement)
                {
                // @todo
                }
                
            };

        }

    }
