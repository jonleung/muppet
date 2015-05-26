// Twilio

/*########################
  Send a text message
*/
M.Twilio.sendMessage({
  to:'+16515556677', // Any number Twilio can deliver to
  from: '+14506667788', // A number you bought from Twilio and can use for outbound communication
  body: 'Yo, dude, whats up?' // body of the SMS message
});

/*########################
  Send an mms
*/

M.Twilio.sendMms({
  to:'+16515556677',
  from: '+14506667788',
  imageUrl: "http://cdn.idigitaltimes.com/sites/idigitaltimes.com/files/2015/05/12/muppets-disney.jpg"
});


/*########################
  Send a text message with a callback
*/

M.Twilio.sendMessage({
  to:'+16515556677', 
  from: '+14506667788',
  body: 'Yo, dude, whats up?'
}, function(err, responseData) {
  //executed when the call has been initiated.
  console.log(responseData.from); // outputs "+14506667788"
});

/*########################
  Make a phone call
*/

M.Twilio.sendMessage({
  to:'+16515556677', 
  from: '+14506667788',
  say: 'Yo man, what is going on?'
};

/*########################
  Make a phone call
*/

M.Twilio.sendMessage({
  to:'+16515556677', 
  from: '+14506667788',
  mp3_url: 'http://a.tumblr.com/tumblr_lxf3euks5R1qb8cupo1.mp3'
};


/*########################
  Make a phone call with chained TWIML
*/


var call = Twilio.makeCall({
  to:'+16515556677', 
  from: '+14506667788',
  script: function(call) {
    call.say("Welcome to the shire!");
    call.play("http://a.tumblr.com/tumblr_lxf3euks5R1qb8cupo1.mp3");
    call.hangup();
})

// --------OR--------

var call = Twilio.makeCall({
  to:'+16515556677', 
  from: '+14506667788'
);

call.say("Welcome to the shire!");
call.play("http://a.tumblr.com/tumblr_lxf3euks5R1qb8cupo1.mp3");
call.hangup();



/*########################
  Listen for Calls
  #TODO how does gathering numbers work
*/

M.Twilio.listenForCallsFrom("610-761-0083", function(call) {
  call.say("Welcome to the shire!");
  call.play("http://a.tumblr.com/tumblr_lxf3euks5R1qb8cupo1.mp3");
  call.hangup();
});


/*
  When you text this app, it sends you back an image
*/
Maestro.listenFor("twilio-text-message", {phone: "610-761-0083"}, function(message) {
  var text = message.body;
  var image = GoogleImage.search("bacon");
  var image_url = image.url;
  Twilio.sendMms({
    to:'+16515556677',
    from: '+14506667788',
    imageUrl: image_url
  });
});

var callPizzaFromText = function(text) {
  var users = Firebase.getUsers();
  var userToPhone = function(user) {
    return user.phone;
  }
  var allowedPhones = users.map(phone);
  if (_.contains(allowedPhones, phone) {
    Twilio.dial("+1-800-papa-johns", "I'd like to order a pizza with the following: " + text + " to " + user.address);
    Twilio.text(text.sender, "Your " + text + " has been ordered!")
  }
}

hackEDU.listenFor("text", {fromPhone: "+1-610-123-4567"}, actionForText)

var textTweet = function(tweet) {
  if (tweet.text.includes("activate launch sequence")) {
    Twilio.sendSms(tweet.text, "610-123-4567");
  }
};

hackEDU.listenFor("tweet", {username: "@jonathanjleung"}, actionForTweet)

var mmsInstagramPhoto = function(photo) {
  var address = Geo.reverseLookup(photo.geo.lat, photo.geo.long);
  var venue = GoogleMaps.reverseStreetAddressLookup(address);

  Twilio.mms("+1-610-123-4567", photo.url, "Your loved one hanging at " + venue;)
}

hackEDU.listenFor("instagram", {username: "jonathanleung"}, mmsInstagramPhoto)

