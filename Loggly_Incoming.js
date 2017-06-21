/*
 * To use functions that are defined in a shared library, import
 * the shared library using the require function. You can then
 * access the functions in the shared library. Shared library names
 * are case-sensitive.
 *
 * The following statements show how to use a function named 'myFunction'
 * that is included in a shared library named 'My Shared Library'.
 *
 * var mySharedLibrary = require('My Shared Library');
 * var message = mySharedLibrary.myFunction();
 */

// var data;

var data = JSON.parse( request.body );
properties = {};
properties.alert_name = data.alert_name;

console.log(properties.alert_name);




var trigger = JSON.stringify({
"properties": {
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
},
//"recipients" : [ {"targetName": callback.recipient } ]     The recipient is controlled by the form or subscription
});
console.log( 'Response payload: ' + JSON.stringify( trigger ) );
var req = http.request({
method: 'POST',
endpoint: 'xMatters',
path: '/reapi/2015-04-01/forms/c39169ae-4710-4865-a01f-1341170785af/triggers',
headers: {
'Content-Type': 'application/json'
}
});
req.write(trigger);


