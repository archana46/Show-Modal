$(document).ready( function() {
    app.initialized()
        .then(function(_client) {
          var client = _client;
          client.events.on('app.activated',
            function() {
                client.data.get('ticket')
                    .then(function(ticketdata) {
                        console.log('ticketdata',ticketdata);
                        var ticketid= ticketdata.ticket.id;
                        var options = {
                            headers: 
                            {
                                "Authorization": "Basic cHJrbGh3a2RPOUkxZGxWR3l1Zw==",
                                "content-type":"application/json"
                            },
                            body: JSON.stringify({
                                "body":"We are working on this issue. Will keep you posted." 
                                      
                            })
                        }
                            var url = 'https://ducky.freshdesk.com/api/v2/tickets/'+ticketid+'/reply';
                            console.log('ticketid url:', url);
                            // client.request.post(url, options)
                            // .then(function(replysuccess) {
                            //     console.log('replysuccess:',replysuccess);
                            // },
                            // function (replyerr) {
                            //     // body...
                            //     console.log('replyerr',replyerr);
                            // })
                            //  $('#apptext').text('result status is:'+ ticketdata.ticket.status);

                        $('#openModal').click(function() {
                            console.log('reply openModal clicked');

                            client.interface.trigger("showModal", {title: "Sample Modal", template: "modal.html"})
                        });
                            console.log('reply after op clicked');

                        })
                        .catch(function(f){
                            console.log('Error -',f);
                        })

                        
                    })
                    .catch(function(e) {
                        console.log('Exception - ', e);
                    });
        });
    });
    

