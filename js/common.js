var kns = {
    'sitename' : 'KnowHowSpot',
    'web_root' : 'http://knowhowspot.com',
    'api_url' : function(api){
        return this.web_root + '/api/v1/' + api;
    },
    'user_url' : function (username){
        return this.web_root + '/users/' + encodeURIComponent(username) + '/';
    }
};

function show_msg(type, msg, duration){
  $('#status').removeClass('error').removeClass('success').removeClass('notice');
  $('#status').addClass(type).html(msg).fadeIn(function(){
    if(duration > 0){
        setTimeout( function(){ 
                $("#status").fadeOut("fast");
            }, duration
        );
    }
  });
}

