/// <reference path='../vendor/phaser/phaser.d.ts' />

module Pk
{
	export class PkElement extends Phaser.Group {


		private static id:number = 0;
		private id:number = ++PkElement.id;

		protected tweens:Array<Phaser.Tween> = [];

		public name = "PkElement";

		constructor(game)
		{
			super(game);

			console.log('PkElement create ID:', this.id);
		}

		addTween(displayObject:any)
		{
			this.tweens.push(this.game.add.tween(displayObject));
			return this.tweens[this.tweens.length-1];
		}

		destroy()
		{
			for (var i = this.tweens.length - 1; i >= 0; i--) {
				this.tweens[i].stop();
			}

			super.destroy();
		}
	}
}