import { PkConfig } from "./PkConfig";
import * as $ from 'jquery';
import { PkLoader } from "./PkLoader";
import { PkScene } from "./scene/PKScene";


export class PkGame extends Phaser.Game	{

	static pkConfig:PkConfig;

	static game:PkGame;
 
	constructor(pkConfig:PkConfig = new PkConfig())
	{
		var config:GameConfig = {
			type: Phaser.AUTO,
			width: pkConfig.canvasSize[0],
			height: pkConfig.canvasSize[1],
			parent:pkConfig.canvasContainerId
		};

		super(config);

		PkGame.pkConfig = pkConfig;

		// add states
		this.scene.add('PkLoaderPreLoader', PkGame.pkConfig.preLoaderState, true);

		PkGame.game = this;

		// console.log('PK Game init')
	}

	protected preload()
	{

	}

	protected create()
	{
	}

}

export class PkLoaderPreLoader extends PkScene {
		
	init()
	{
		// add loader screen
		this.game.scene.add('PkLoader', PkGame.pkConfig.loaderState);
	}


	preload()
	{
		// load loadingbar sprite
		if(PkGame.pkConfig.loaderLoadingBar != '')
			this.load.image('pk-loading-bar', PkGame.pkConfig.loaderLoadingBar);
		//
	}

	create()
	{
		// change to preloader screen*
		this.game.scene.start('PkLoader')
	}
}
