/// <reference path='../vendor/phaser/phaser.d.ts' />

module Pk
{

	interface IPkEventListener {
		
		key		:string;
		callBack	:Function;
		context	:any;
		
	}

	export class PkEvent {

		private static id:number = 0;
		private id:number = ++PkEvent.id;

		public name:string;

		private listeners:Array<IPkEventListener> = [];
		private target	 :any;

		constructor(name, target)
		{
			this.target = target;
			this.name 	= name;
		}

		add(key:string, callBack:Function, context?:any)
		{
			
			var context = context || {};
		    var exist = false;

		    // verifica se já não foi add
		    for (var i = 0; i < this.listeners.length; i++) {

		      if(this.listeners[i].callBack.toString() === callBack.toString())
		      {
		        exist = true
		        break;
		      }
		    };

		    if(!exist)
		      this.listeners.push({key:key, callBack:callBack, context:context});
		    //
		}

		dispatch(key:string, ...args:any[])
		{
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
		        	return;
		        }
		        
		        // dispara sem contexto mesmo
		        this.listeners[i].callBack(data, ...args);
		        
		      }
		    }
		}

	}
}