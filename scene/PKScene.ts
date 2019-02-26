import { PkGame } from "../PkGame";
import { PkTransition } from "./PkTransition";
import { PkElement } from "../element/PkElement";

export module I
{
    export interface LayerData {

        name:string;
        total:number;
        group:Phaser.GameObjects.Container;
    }
}


export class PkScene extends Phaser.Scene {
    
    transition:PkTransition;
    layers:Array<I.LayerData> = [];
    initData:any[];

    constructor(config:Phaser.Scenes.Settings.Config = {})
    {
        super(config)
        
    }

    init()
    {
        console.log('SCENE INIT')
        this.transition = new PkTransition(this);
    }

    preload()
    {
        console.log('scene preload')
        // this.transition.transitionAnimation.end();
    }

    getGame():PkGame
    {
        return <PkGame>this.game;
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
            this.layers.push({
                name:layerName,
                total:0,
                group: (new PkElement(this))// this.game.add.group()
            });    
        }
        
    }

    getLayer(layerName:string):I.LayerData
    {
        for (var i = 0; i < this.layers.length; i++)
            if(this.layers[i].name == layerName)
                return this.layers[i];
        //

        return null;
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
        this.layers[i].group.add(element);

        // order layers
        for (var i = 0; i < this.layers.length; i++)
            this.children.bringToTop(this.layers[i].group)
        //
        
        this.bringLayerToTop('transition'); // transition layer always on top
    }

    bringLayerToTop(layerName:string)
    {
        for (var i = 0; i < this.layers.length; i++)
        {
            if(this.layers[i].name == layerName)
            {
                this.children.bringToTop(this.layers[i].group)
                // console.log('bring ' + this.layers[i].name + ' to top')
            }
                
        }
            
        //
    }

    create()
    {
        this.addLayer('transition')
        this.transition.transitionAnimation.end();
        // console.log('PkScene create');

        // this.scene.
    }

    shutdown()
    {
        
    }

}