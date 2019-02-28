import { PkEvent } from "../event/PkEvent";
import { PkScene } from "../scene/PKScene";


export class PkElement extends Phaser.GameObjects.Container {


	private static id:number = 0;
	private id:number = 0;

	public name = "PkElement-"+ this.id;
	public event:PkEvent;

	public pkScene:PkScene;

	constructor(scene:PkScene)
	{
		super(scene, 0, 0);

		this.pkScene = scene;

		// inicia gerenciador de eventos
		this.event = new PkEvent('element-event-'+this.id, this);  

		scene.add.existing(this);

		this.id = ++PkElement.id;
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

		super.destroy();
	}
}
