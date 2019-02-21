
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

	static createSquareBitmap(scene:Phaser.Scene, width:number, height:number, color:number = 0x000000):Phaser.GameObjects.Graphics
	{
		var recGraph = scene.add.graphics({x:0, y:0});
		
			/*
		bmd.ctx.beginPath();
		bmd.ctx.rect(0, 0, width, height);
		bmd.ctx.fillStyle = color;
		bmd.ctx.fill();
		return bmd;
		*/

		recGraph.fillStyle(color, 1);


		//  32px radius on the corners
		recGraph.fillRect(0, 0, width, height);
		

		return recGraph;
		

		// Phaser.GameObjects.Graphics.Bit
	}

	static createSquare(scene:Phaser.Scene, width:number, height:number, color:number = 0x000000):Phaser.GameObjects.Sprite
	{
		var textureName:string = width + '-' + height + '-' + color.toString();

		// create texture if not exist
		if(scene.textures.getTextureKeys().indexOf(textureName) == -1)
		{
			var bmd 	= PkUtils.createSquareBitmap(scene, width, height, color);
			bmd.generateTexture(textureName, width, height);
			bmd.destroy();
		}
			
		var s = scene.add.sprite(0, 0, textureName);
		s.setOrigin(0, 0)

		return s;
	}
/*
	static createCircle(scene:Phaser.Scene, diameter:number, color:string = "#000000"):Phaser.GameObjects.Sprite
	{
		var circleBtm:Phaser.GameObjects.Graphics = scene.add.graphics({x:0, y:0});
		//	Shapes drawn to the Graphics object must be filled.
		// circleBtm.beginFill(0xffffff);

		//	Here we'll draw a circle
		// circleBtm.drawCircle(0, 0, diameter);
		// circleBtm.generateTexture()

		return scene.add.sprite(0, 0, circleBtm);
	}
*/
}
