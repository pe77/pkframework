/// <reference path='../event/PkEvent.ts' />
/// <reference path='../PkGame.ts' />
/// <reference path='PkState.ts' />

/// <reference path='transitions/Default.ts' />

module Pk
{
    export class PkTransition  {

    	transitionAnimation:Pk.I.TransitionAnimation = new Pk.PkTransitionAnimation.Default();

    	to:string;
    	params:Array<any>;
    	game:Pk.PkGame;

    	// defaults
    	clearWorld:boolean = true;
    	clearCache:boolean = false;

		constructor(game:Pk.PkGame)
		{
			this.game = game;

			this.transitionAnimation.event.add(Pk.E.OnTransitionEndStart, this.endStartAnimation, this);
			this.transitionAnimation.event.add(Pk.E.OnTransitionEndEnd, this.endStartAnimation, this);
		}

		change(to:string, ...args:any[])
		{
			this.to = to;
			this.params = args;

			this.transitionAnimation.start();
		}

		// This is called when the state preload has finished and creation begins
		protected endStartAnimation(e, ...args:any[])
		{
			this.game.state.start(this.to, this.clearWorld, this.clearCache, ...this.params);

			this.transitionAnimation.end();

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
}
