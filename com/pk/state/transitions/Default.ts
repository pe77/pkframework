/// <reference path='../PkTransition.ts' />

module Pk
{
    export module PkTransitionAnimation
    {
        export class Default implements Pk.I.TransitionAnimation {

            public event:PkEvent = new PkEvent('PkTADefault', this);

            constructor()
            {
                console.log('PkTransitionAnimationDefault constructor');
            }

            start()
            {
                console.log('start in...');

                // animation
                // ...

                console.log('...start out');

                this.event.dispatch(Pk.E.OnTransitionEndStart);
            }

            end()
            {

                console.log('end in...');

                // animation
                // ...

                console.log('...end out');

                this.event.dispatch(Pk.E.OnTransitionEndEnd);
            }
        }
    }
}
