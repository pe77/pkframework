import { PkEvent } from "../../event/PkEvent";
import { E, I } from "../PkTransition";
import { PkScene } from "../PKScene";

export class PkTransitionSlide implements I.TransitionAnimation {

    public event:PkEvent = new PkEvent('Transitions.Slide', this);
    public scene:PkScene;

    public retangle:Phaser.GameObjects.Sprite;
    public changeTime:number = 300; // ms

    constructor(scene:PkScene)
    {
        this.scene = scene;
    }

    start()
    {
        // create bg
        var points:Array<number> = [
            (this.scene.game.canvas.width / 2) * (-1), 0, // 1
            this.scene.game.canvas.width, 0,  // 2
            this.scene.game.canvas.width, this.scene.game.canvas.height, // 4
            0, this.scene.game.canvas.height // 3
        ]

        var poly:Phaser.GameObjects.Polygon = this.scene.add.polygon(this.scene.game.canvas.width*1.5, 0, points, 0x000000);
        poly.setOrigin(0, 0);
        
        this.scene.add.tween({
            targets: poly,
            x: 0,
            duration:this.changeTime,
            onComplete: ()=>{
                // dispatch end transition | mandatory
                this.event.dispatch(E.OnTransitionEndStart); 
            },
            onUpdate:()=>{
                this.scene.children.bringToTop(poly);
            }
        });
    }


    end()
    { 
        this.scene.scene.setVisible(false);

        var points:Array<number> = [
            0, 0, // 1
            this.scene.game.canvas.width, 0,  // 2
            this.scene.game.canvas.width + (this.scene.game.canvas.width / 2), this.scene.game.canvas.height, // 4
            0, this.scene.game.canvas.height // 3
        ]

        var poly:Phaser.GameObjects.Polygon = this.scene.add.polygon(0, 0, points, 0x000000);
        poly.setOrigin(0, 0);

        this.scene.add.tween({
            targets: poly,
            x:-(this.scene.game.canvas.width * 1.5),
            duration:this.changeTime,
            onComplete: ()=>{
                // dispatch end transition | mandatory
                this.event.dispatch(E.OnTransitionEndEnd); 
            },
            onUpdate:()=>{
                this.scene.children.bringToTop(poly);
                this.scene.scene.setVisible(true);
            }
        });
    }
}
