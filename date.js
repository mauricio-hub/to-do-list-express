    //jshint esversion:6

exports.getDate = function(){
	
	let today = new Date();
    
    let options = {

    	weekday:"long",
    	day:"numeric",
    	month:"long",
    	year:"numeric"
    	 };

    return today.toLocaleDateString("en-US",options);

    //res.render({date:day})
   

}

