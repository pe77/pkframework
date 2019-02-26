import { PkEvent } from "../../event/PkEvent";
import { E, I } from "../PkTransition";

export module PkTransitionAnimation
{
    export class Default implements I.TransitionAnimation {

        public event:PkEvent = new PkEvent('PkTADefault', this);

        start()
        {
            // animation here
            // ...

            this.event.dispatch(E.OnTransitionEndStart);
        }

        end()
        {
            // animation here
            // ...

            this.event.dispatch(E.OnTransitionEndEnd);
        }
    }
}
