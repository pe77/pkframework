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
		state:Pk.PkState;

    	// defaults
    	clearWorld:boolean = true;
    	clearCache:boolean = false;

		constructor(state:Pk.PkState)
		{
			this.game = <Pk.PkGame>state.game;
			this.state = state;
		}

		change(to:string, ...args:any[])
		{
			this.to = to;
			this.params = args;


			this.transitionAnimation.event.add(Pk.E.OnTransitionEndStart, this.endStartAnimation, this);
			this.transitionAnimation.event.add(Pk.E.OnTransitionEndEnd, this.endStartAnimation, this);

			this.transitionAnimation.start();
		}

		// This is called when the state preload has finished and creation begins
		protected endStartAnimation(e, ...args:any[])
		{
			this.game.state.onStateChange.addOnce((state)=>{

				// get current state
				var currentState = this.game.state.getCurrentState();

				
				this.game.state.onCreateCallback    = () =>{
					// call current state create
					currentState.create();

					// play transition end
					this.transitionAnimation.end();
				}
			});

			// change state
			this.game.state.start(this.to, this.clearWorld, this.clearCache, ...this.params);
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
