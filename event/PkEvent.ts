/// <reference path='../vendor/phaser/phaser.d.ts' />

module Pk
{

	export module I
	{
		export interface EventListener {
			
			key		:string;
			callBack	:Function;
			context	:any;
			
		}
	}

	export class PkEvent {

		private static id:number = 0;
		private static events:Array<Pk.PkEvent> = [];
		id:number = ++PkEvent.id;

		public name:string;

		private listeners:Array<I.EventListener> = [];
		private target	 :any;

		constructor(name, target)
		{
			this.target = target;
			this.name 	= name;

			Pk.PkEvent.events.push(this);
		}

		static ignoreContext(context)
		{
			 for (var i = 0; i < Pk.PkEvent.events.length; i++) {
				var event:Pk.PkEvent = Pk.PkEvent.events[i];
				var listeners:Array<I.EventListener> = Pk.PkEvent.events[i].listeners;

				var tmpListeners:Array<I.EventListener> = [];
				for (var j = 0; j < listeners.length; j++) {
					var listener:I.EventListener = listeners[j];

					
					if(!listener.context.event)
					{
						tmpListeners.push(listener);
						continue;
					}

					if(listener.context.event.id !== context.event.id)
					{
						tmpListeners.push(listener);
					}else{
						// console.debug('ignore context:', context)
					}
				}

				Pk.PkEvent.events[i].listeners = tmpListeners;



			 }
		}

		add(key:string, callBack:Function, context:any)
		{
			
				var context = context || {};
		    var exist = false;

		    // verifica se já não foi add
		    for (var i = 0; i < this.listeners.length; i++) {

		      if(
						this.listeners[i].callBack.toString() === callBack.toString()
						&&
						this.listeners[i].context === context
						)
		      {
		        exist = true;
		        break;
		      }
		    };

		    if(!exist)
		      this.listeners.push({key:key, callBack:callBack, context:context});
		    //
		}

		clear(key?:string)
		{
			// clear all
			if(!key)
			{
				this.listeners = [];
			}else{ // clear only key
				var tmpListeners:Array<I.EventListener> = [];
				for (var i = 0; i < this.listeners.length; i++)
		    {
		      if(key != this.listeners[i].key)
		      {
						tmpListeners.push(this.listeners[i]);
					}
				}

				this.listeners = tmpListeners;
				return;
			}
		}

		dispatch(key:string, ...args:any[])
		{
				if(this.target.name == 'Lizzard')
				{
					// console.debug('dispath lizzard event:', key)
				}

		    for (var i = 0; i < this.listeners.length; i++)
		    {
		      if(key == this.listeners[i].key)
		      {
		        var data = {
		        	target:this.target // ho dispatch the event
		        };

		        // se houver contexto, manda pelo contexto
		        if(this.listeners[i].context)
		        {
		        	this.listeners[i].callBack.call(this.listeners[i].context, data, ...args);
		        	continue;
		        }
		        
		        // dispara sem contexto mesmo
		        this.listeners[i].callBack(data, ...args);
		        
		      }
		    }
		}

	}
}