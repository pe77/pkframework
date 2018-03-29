/// <reference path='../vendor/phaser/phaser.d.ts' />

module Pk
{
	export class PkScreen extends Pk.PkElement {

        bg:Phaser.Sprite;
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
            this.bg = Pk.PkUtils.createSquare(this.game, this.game.world.width, this.game.world.height, "#000");
            this.bg.alpha = this.bgAlpha;

            if(this.blockOverInput)
            {
                this.bg.inputEnabled = true;
                // this.bg.input.priorityID = Number.POSITIVE_INFINITY;
            }

            this.add(this.bg);
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
}