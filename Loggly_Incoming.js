

var data = JSON.parse( request.body );

properties = {
    "edit_alert_link": data.edit_alert_link,
    "source_group": data.source_group,
    "start_time": data.start_time,
    "end_time": data.end_time,
    "search_link": data.search_link,
    "snooze_link": data.snooze_link,
    "owner_username": data.owner_username,
    "owner_email": data.owner_email,    
    "query": data.query,
    "num_hits": data.num_hits,
};
//"recipients" : [ {"targetName": callback.recipient } ]     The recipient is controlled by the form or subscription


console.log( 'Response payload: ' + JSON.stringify( properties ) );
trigger.properties = properties;

form.post( trigger );

