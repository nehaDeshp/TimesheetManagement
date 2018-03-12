'use strict';
module.exports = function(app) {
  var links = require('./eventcontroller');

  app.route('/events')
    .get(links.list_all_events)
    .post(links.add_new_event);


  app.route('/events/:id')
    .get(links.list_particular_event)
    .put(links.edit_an_event)
    .delete(links.delete_an_event);
	
  app.route('/metadata/events')
    .get(links.list_data_in_preevent)
    .post(links.add_data_in_preevent);	
	
  app.route('/metadata/events/:id')
    .put(links.edit_data_in_preevent)
    .delete(links.delete_data_in_prevent);
};