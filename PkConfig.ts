import { PkLoader } from "./PkLoader";
import { PkLoaderPreLoader } from "./PkGame";

export class PkConfig {
	
	canvasSize			:[number|string, number|string] 		= [1024, 768]; // width, height
	canvasContainerId	:string 								= 'game-container';

	initialState:string 			= ''; // initial state after loadscreen

	// loading settings
	loaderLoadingBar:string			= ''; // loading bar
	loaderWaitingTime:number 		= 1000; // 1 sec
	loaderState:any	 				= PkLoader;
	preLoaderState:any 				= PkLoaderPreLoader;

}