module Pk
{
	export class PkUtils
	{
		// check if is a empty object
		static isEmpty(obj) {
		    for(var prop in obj) {
		        if(obj.hasOwnProperty(prop))
		            return false;
		    }
		    return true && JSON.stringify(obj) === JSON.stringify({});
		}

	}
}