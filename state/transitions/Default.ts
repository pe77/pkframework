/// <reference path='../PkTransition.ts' />

module Pk
{
    export module PkTransitionAnimation
    {
        export class Default implements Pk.I.TransitionAnimation {

            public event:PkEvent = new PkEvent('PkTADefault', this);

            start()
            {
                // animation here
                // ...

                this.event.dispatch(Pk.E.OnTransitionEndStart);
            }

            end()
            {
                // animation here
                // ...

                this.event.dispatch(Pk.E.OnTransitionEndEnd);
            }
        }
    }
}
