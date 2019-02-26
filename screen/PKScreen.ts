import { PkElement } from "../element/PkElement";
import { PkUtils } from "../utils/PkUtils";


export class PkScreen extends PkElement {

    bg:Phaser.GameObjects.Sprite;
    bgAlpha:number = 0.75;

    blockOverInput:boolean = true;

    constructor(game)
    {
        super(game);
        
    }

    create()
    {
        this.createBg();
    }

    protected createBg()
    {
        // create a generic background 
        this.bg = PkUtils.createSquare(this.scene, this.scene.game.canvas.width, this.scene.game.canvas.height, 0x000000);
        this.bg.alpha = this.bgAlpha;

        if(this.blockOverInput)
        {
            this.bg.input.enabled = true;
            // this.bg.input.priorityID = Number.POSITIVE_INFINITY;
        }

        this.add(this.bg);

        this.close();
    }

    open()
    {
        this.visible = true;
    }

    close()
    {
        this.visible = false;
        
        
    }
}