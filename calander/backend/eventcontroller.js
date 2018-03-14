'use strict';
var mongoose = require('mongoose'),
Newevent = mongoose.model('Newevent'),
Preevent = mongoose.model('Preevent');

exports.list_all_events = function(req,res){
	Newevent.find(function(err,events){
		if(err){
			res.send(err);
		}
		res.json(events);
	});
};

exports.add_new_event = function(req,res){
     Newevent.create(req.body).then(function(err,events){
		    if(err){
				  res.send(err);
			  }
	        res.send(events);
	 })
};

exports.list_particular_event = function(req,res){
	Newevent.findOne({_id:req.params.id},function(err,events){
		if(err){
			res.send(err);
		}
		res.json(events);
	});
};

exports.edit_an_event = function(req,res){
          Newevent.updateMany({_id:req.params.id},req.body).then(function(err,events){
			  if(err){
				  res.send(err);
			  }
		      res.send(events);
		  })

};

exports.delete_an_event = function(req,res){
	           
			  Newevent.remove({_id:req.params.id}).then(function(err,events){
	                       if(err){
				                res.send(err);
			               } 
						   res.send(events);
})
};

exports.list_data_in_preevent = function(req,res){
	Preevent.find(function(err,preevents){
		if(err){
			res.send(err);
		}
		res.json(preevents);
	});
};

exports.add_data_in_preevent = function(req,res){
     Preevent.create(req.body).then(function(err,preevents){
		    if(err){
				  res.send(err);
			  }
	        res.send(preevents);
	 })
};

exports.edit_data_in_preevent = function(req,res){
          Preevent.updateMany({_id:req.params.id},req.body).then(function(err,preevents){
			  if(err){
				  res.send(err);
			  }
		      res.send(preevents);
		  })

};

exports.delete_data_in_prevent = function(req,res){
	           
			  Preevent.remove({_id:req.params.id}).then(function(err,preevents){
	                       if(err){
				                res.send(err);
			               } 
						   res.send(preevents);
})
};
