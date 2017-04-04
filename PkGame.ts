/// <reference path='vendor/phaser/phaser.d.ts' />
/// <reference path='state/PkState.ts' />

module Pk
{
	export class PkGame extends Phaser.Game	{

		static pkConfig:PkConfig;

		static game:PkGame;

		constructor(pkConfig:PkConfig = new PkConfig())
		{
			super(pkConfig.canvasSize[0], pkConfig.canvasSize[1], pkConfig.renderMode, pkConfig.canvasId);

			PkGame.pkConfig = pkConfig;

			// add states
			this.state.add('PkLoaderPreLoader', PkGame.pkConfig.preLoaderState);

			// init loader
			this.state.start('PkLoaderPreLoader');

			PkGame.game = this;
		}

	}


	export class PkLoaderPreLoader extends Pk.PkState {
		
		init()
		{
			// add loader screen
			this.game.state.add('PkLoader', PkGame.pkConfig.loaderState);
		}


		preload()
		{
			// load loadingbar sprite
			this.load.image('pk-loading-bar', PkGame.pkConfig.loaderLoadingBar);
		}

		create()
		{
			// change to preloader screen*
			this.game.state.start('PkLoader');
		}
	}

}