'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var EventMetaSchema = new Schema({
	assginActivityType: Schema.Types.Mixed,
	participants: [String],
	guests: [String],
	resources: [String],
	address: [String],
	linkCompany: [String],
	linkProject: [String],
	linkContactPerson: [String],
	status: [String],
	reccuring: [String],
});
var NewEventSchema = new Schema({
	date: { type : Date, default: Date.now },
	duration: {type : Date, default: Date.now},
	title: {type: String,default:null},
	assignActivityType:{type:String,default:null},
	address: {type:String,default:null},
	description: {type:String,default:null},
	addRemainder: { type : Boolean, default: false },
	notify: { type : Boolean, default: false },
	allday:{ type : Boolean, default: false },
	recurring: Schema.Types.Mixed,
    status:{type:String,default:null},
	participants: [String],
	resources: [String],
	guests: [String],
	company: {type:String,default:null},
	contactPerson: {type:String,default:null},
	project: {type:String,default:null},
});

module.exports = mongoose.model('Preevent',EventMetaSchema);
module.exports = mongoose.model('Newevent',NewEventSchema);