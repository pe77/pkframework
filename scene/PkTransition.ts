import { PkGame } from "../PkGame";
import { PkScene } from "./PKScene";
import { PkEvent } from "../event/PkEvent";
import { PkTransitionAnimation } from "./transitions/Default";

export class PkTransition  {

	transitionAnimation:I.TransitionAnimation = new PkTransitionAnimation.Default();

	to:string;
	params:Array<any>;
	game:PkGame;
	scene:PkScene;

	// defaults
	clearWorld:boolean = true;
	clearCache:boolean = false;

	constructor(scene:PkScene)
	{
		this.game = <PkGame>scene.game;
		this.scene = scene;
	}

	change(to:string, ...args:any[])
	{
		this.to = to;
		this.params = args;

		this.transitionAnimation.event.add(E.OnTransitionEndStart, this.endStartAnimation, this);
		this.transitionAnimation.event.add(E.OnTransitionEndEnd, this.endStartAnimation, this);

		this.transitionAnimation.start(); // anm out
	}

	// This is called when the state preload has finished and creation begins
	protected endStartAnimation(e)
	{
		// remove current scene
		// this.scene.shutdown();
		this.scene.scene.stop();
		

		// get next
		var nextScene:PkScene = <PkScene>this.game.scene.getScene(this.to);
		
		// change to next scene
		nextScene.events.on('transitionstart', ()=>{
			console.log('=== -scene render')
		});
		nextScene.scene.start();
		nextScene.initData = this.params;

		
	}
}

export module E
{
	export const OnTransitionEndStart:string 	= "OnTransitionEndStart";
	export const OnTransitionEndEnd:string 		= "OnTransitionEndEnd";
}

export module I
{
	export interface TransitionAnimation {

		event:PkEvent;

		start();
		end();
	}
}