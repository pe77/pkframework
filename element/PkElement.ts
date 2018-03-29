/// <reference path='../vendor/phaser/phaser.d.ts' />

module Pk
{
	export class PkElement extends Phaser.Group {

 
		private static id:number = 0;
		private id:number = ++PkElement.id;

		protected tweens:Array<Phaser.Tween> = [];

		public name = "PkElement-"+ this.id;
		public event:PkEvent;

		constructor(game)
		{
			super(game);

			// inicia gerenciador de eventos
			this.event = new PkEvent('element-event-'+this.id, this);  
		}

		getId()
		{
			return this.id;
		}

		addTween(displayObject:any)
		{
			this.tweens.push(this.game.add.tween(displayObject));
			return this.tweens[this.tweens.length-1];
		}

		destroy()
		{
			// stop all tweens
			for (var i = this.tweens.length - 1; i >= 0; i--) 
				this.tweens[i].stop();
			//

			// clear all events propagation many-to-many
			this.event.clear();
			Pk.PkEvent.ignoreContext(this);

			super.destroy();
		}
	}
}