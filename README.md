# Muppet

## Implement
- [js/text_4_gif.js](js/text_4_gif.js)
- [js/text_for_images.js](js/text_for_images.js)
- [js/text_for_song.js](js/text_for_song.js)

## Implementation Order:
- Twilio Send Sms

```javascript
Twilio.sendMessage({
  to:'+16515556677', // Any number Twilio can deliver to
  from: '+14506667788', // A number you bought from Twilio and can use for outbound communication
  body: 'Yo, dude, whats up?' // body of the SMS message
});
```

- Twilio Recieve Sms

```javascript
Twilio.recieveMessages("610-761-0083", function(messsage) {
  var body = message.body;
  var gif = GoogleImage.getFirst(body);

  var sender_number = message.from

  Twilio.sendMms(senderNumber, imageURL);
})
```


- Giphy Image Search 1

```javascript
var gitObject = Giphy.getFirst(body);
var gifUrl = gitObject.url
console.log(gifUrl) // "http://giffy.com/some.gif"
```

- Google Image Search 1st 

```javascript
var imageObject = GoogleImage.getFirst(body);
var imageUrl = gifObject.url
console.log(imageUrl) // "http://image.com/gif.png"
```

- Twilio Make Call

```javascript
Twilio.makeCallPhone(senderNumber, mp3Url);

M.Twilio.sendMessage({
  to:'+16515556677', 
  from: '+14506667788',
  say: 'Yo man, what is going on?'
};

```

## Later 
- Twitter
- Instagram
- Sound Cloud
- Snapchat
- Photos
- Imgur
- Facebook
- Twitter
- Youtube
- Tumblr
- Pinterest
- Google
- Amazon
- Dropbox
- Reddit
- Google Sheets
- Email
- Weather