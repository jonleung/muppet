# Muppet

## Implement
- [js/text_4_gif.js](js/text_4_gif.js)
- [js/text_for_images.js](js/text_for_images.js)
- [js/text_for_song.js](js/text_for_song.js)

## Implementation Order:
- Twilio Send Sms

```js
M.Twilio.sendMessage({
  to:'+16515556677', // Any number Twilio can deliver to
  from: '+14506667788', // A number you bought from Twilio and can use for outbound communication
  body: 'Yo, dude, whats up?' // body of the SMS message
});
```
- Twilio Recieve Sms
```
- Giphy Image Search 1
- Google Image Search 1st 
- Twilio Make Call
- Twitter Listen For Search Query


## Later 
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