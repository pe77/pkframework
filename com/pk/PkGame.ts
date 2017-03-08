/// <reference path='vendor/phaser/phaser.d.ts' />

module Pk
{
	export class PkGame extends Phaser.Game	{

		protected pkConfig:PkConfig;

		constructor(pkConfig:PkConfig = new PkConfig())
		{
			super(pkConfig.canvasSize[0], pkConfig.canvasSize[1], pkConfig.renderMode, pkConfig.canvasId);

			this.pkConfig = pkConfig;

			console.log('this.pkConfig:', this.pkConfig);



			// add states
			this.state.add('PkLoaderPreLoader', PkLoaderPreLoader);

			// init loader
			this.state.start('PkLoaderPreLoader');
		}

		public getConfig()
		{
			return this.pkConfig;
		}
	}


	class PkLoaderPreLoader extends Phaser.State {
		
		init()
		{
			// add loader screen
			this.game.state.add('PkLoader', this.game.getConfig().loaderState);
		}


		preload()
		{
			// load loadingbar sprite
			this.load.image('pk-loading-bar', this.game.getConfig().loaderLoadingBar);
		}

		create()
		{
			// console.log('this.game.getConfig().loaderState:', this.game.getConfig().loaderState);
			// change to preloader screen*
			// this.game.getConfig().loaderState();
			this.game.state.start('PkLoader');
		}
	}

}