module Pk
{
	export class PkConfig {
		
		canvasSize	:[number, number] 	= [800, 600]; // width, height
		canvasId	:string 			= 'game';

		renderMode	:number 			= RenderMode.AUTO; 

		initialState:string 			= ''; // initial state after loadscreen

		// loading settings
		loaderLoadingBar:string			= 'assets/images/loading.png'; // loading bar
		loaderWaitingTime:number 		= 1000; // 1 sec
		loaderState:Pk.IPkLoader	 	= Pk.PkLoader;

	}

	// for remember ...    :'(     ... never forget
	enum RenderMode
    {
        AUTO = Phaser.AUTO,
        CANVAS = Phaser.CANVAS,
        WEBGL = Phaser.WEBGL,
        HEADLESS = Phaser.HEADLESS
    }
}