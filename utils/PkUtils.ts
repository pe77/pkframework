/// <reference path='../vendor/phaser/phaser.d.ts' />

module Pk
{
	export class PkUtils
	{
		// check if is a empty object
		static isEmpty(obj) {
		    for(var prop in obj) {
		        if(obj.hasOwnProperty(prop))
		            return false;
		    }
		    return true && JSON.stringify(obj) === JSON.stringify({});
		}

		static createSquareBitmap(game:Phaser.Game, width:number, height:number, color:string = "#000000"):Phaser.BitmapData
		{
		  var bmd = game.add.bitmapData(width, height);
		   
		  bmd.ctx.beginPath();
		  bmd.ctx.rect(0, 0, width, height);
		  bmd.ctx.fillStyle = color;
		  bmd.ctx.fill();
		  return bmd;
		}

		static createSquare(game:Phaser.Game, width:number, height:number, color:string = "#000000"):Phaser.Sprite
		{
		  var bmd = Pk.PkUtils.createSquareBitmap(game, width, height, color);
		  return game.add.sprite(0, 0, bmd);
		}

		static createCircle(game:Phaser.Game, diameter:number, color:string = "#000000"):Phaser.Sprite
		{
			var circleBtm:Phaser.Graphics = game.add.graphics(0, 0);
			//	Shapes drawn to the Graphics object must be filled.
			circleBtm.beginFill(0xffffff);

			//	Here we'll draw a circle
			circleBtm.drawCircle(0, 0, diameter);

			return game.add.sprite(0, 0, circleBtm);
		}

	}
}