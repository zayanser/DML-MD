const {
  zokou
} = require("../framework/zokou");
const gis = require("g-i-s");
const axios = require("axios");
const conf = require(__dirname + "/../set");
zokou({
  'nomCom': "img",
  'aliases': ["image", "images"],
  'categorie': "search",
  'reaction': '🖼️'
}, async (_0x2ebed9, _0x1f4ff7, _0x5ebebb) => {
  const {
    repondre: _0x15e1d9,
    ms: _0x1a6165,
    arg: _0x411eb7
  } = _0x5ebebb;
  if (!_0x411eb7[0]) {
    _0x15e1d9("whích ímαgє dσ чσu wαnt mч fríєnd?");
    return;
  }
  const _0x2d6871 = _0x411eb7.join(" ");
  gis(_0x2d6871, (_0x1a5ea4, _0x1cd909) => _0x466828(_0x1a5ea4, _0x1cd909));
  function _0x466828(_0x30287f, _0x54f9fa) {
    if (_0x30287f) {
      _0x15e1d9("Oops, an error occurred.");
      return;
    }
    if (!_0x54f9fa || _0x54f9fa.length === 0) {
      _0x15e1d9("No images found.");
      return;
    }
    for (let _0xf62d6 = 0; _0xf62d6 < Math.min(_0x54f9fa.length, 5); _0xf62d6++) {
      _0x1f4ff7.sendMessage(_0x2ebed9, {
        'image': {
          'url': _0x54f9fa[_0xf62d6].url
        },
        'caption': "ᴅᴍʟ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴡᴀᴛsᴀᴘᴘ ʙᴏᴛ ɪᴍɢ",
        'contextInfo': {
          'externalAdReply': {
            'title': "ᴅᴍʟ ɪᴍɢ",
            'body': "Here's the image you searched for: " + _0x2d6871,
            'thumbnailUrl': _0x54f9fa[_0xf62d6].url,
            'sourceUrl': conf.GURL,
            'mediaType': 0x1,
            'showAdAttribution': true
          }
        }
      }, {
        'quoted': _0x1a6165
      });
    }
  
