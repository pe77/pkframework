import { PkEvent } from "../event/PkEvent";


export class PkElement {


	private static id:number = 0;
	private id:number = ++PkElement.id;

	public name = "PkElement-"+ this.id;
	public event:PkEvent;

	constructor(game)
	{

		// inicia gerenciador de eventos
		this.event = new PkEvent('element-event-'+this.id, this);  
	}

	getId()
	{
		return this.id;
	}

	destroy()
	{

		// clear all events propagation many-to-many
		this.event.clear();
		PkEvent.ignoreContext(this);

		// super.destroy();
	}
}
