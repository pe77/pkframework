
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

	static slugify(text, separator) {
		text = text.toString().toLowerCase().trim();

		const sets = [
			{to: 'a', from: '[ÀÁÂÃÄÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶ]'},
			{to: 'c', from: '[ÇĆĈČ]'},
			{to: 'd', from: '[ÐĎĐÞ]'},
			{to: 'e', from: '[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]'},
			{to: 'g', from: '[ĜĞĢǴ]'},
			{to: 'h', from: '[ĤḦ]'},
			{to: 'i', from: '[ÌÍÎÏĨĪĮİỈỊ]'},
			{to: 'j', from: '[Ĵ]'},
			{to: 'ij', from: '[Ĳ]'},
			{to: 'k', from: '[Ķ]'},
			{to: 'l', from: '[ĹĻĽŁ]'},
			{to: 'm', from: '[Ḿ]'},
			{to: 'n', from: '[ÑŃŅŇ]'},
			{to: 'o', from: '[ÒÓÔÕÖØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]'},
			{to: 'oe', from: '[Œ]'},
			{to: 'p', from: '[ṕ]'},
			{to: 'r', from: '[ŔŖŘ]'},
			{to: 's', from: '[ßŚŜŞŠ]'},
			{to: 't', from: '[ŢŤ]'},
			{to: 'u', from: '[ÙÚÛÜŨŪŬŮŰŲỤỦỨỪỬỮỰƯ]'},
			{to: 'w', from: '[ẂŴẀẄ]'},
			{to: 'x', from: '[ẍ]'},
			{to: 'y', from: '[ÝŶŸỲỴỶỸ]'},
			{to: 'z', from: '[ŹŻŽ]'},
			{to: '-', from: '[·/_,:;\']'}
		];

		sets.forEach(set => {
			text = text.replace(new RegExp(set.from,'gi'), set.to);
		});

		text = text.toString().toLowerCase()
			.replace(/\s+/g, '-')         // Replace spaces with -
			.replace(/&/g, '-and-')       // Replace & with 'and'
			.replace(/[^\w\-]+/g, '')     // Remove all non-word chars
			.replace(/\--+/g, '-')        // Replace multiple - with single -
			.replace(/^-+/, '')           // Trim - from start of text
			.replace(/-+$/, '');          // Trim - from end of text

		if ((typeof separator !== 'undefined') && (separator !== '-')) {
			text = text.replace(/-/g, separator);
		}

		return text;
	}
}
