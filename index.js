const _0x1c6c8e=_0x3301;(function(_0x50b374,_0x42d490){const _0x45ed08=_0x3301,_0x1b3a4e=_0x50b374();while(!![]){try{const _0x232809=-parseInt(_0x45ed08(0x205))/0x1*(parseInt(_0x45ed08(0x242))/0x2)+parseInt(_0x45ed08(0x298))/0x3*(parseInt(_0x45ed08(0x250))/0x4)+parseInt(_0x45ed08(0x283))/0x5*(parseInt(_0x45ed08(0x271))/0x6)+parseInt(_0x45ed08(0x2ac))/0x7+-parseInt(_0x45ed08(0x248))/0x8+parseInt(_0x45ed08(0x295))/0x9+-parseInt(_0x45ed08(0x264))/0xa;if(_0x232809===_0x42d490)break;else _0x1b3a4e['push'](_0x1b3a4e['shift']());}catch(_0x16edb6){_0x1b3a4e['push'](_0x1b3a4e['shift']());}}}(_0x3bea,0xb6adb),require(_0x1c6c8e(0x204)));const {default:ZimBotIncConnect,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require(_0x1c6c8e(0x21e)),{state,saveState}=useSingleFileAuthState('./'+sessionName+_0x1c6c8e(0x27a)),pino=require(_0x1c6c8e(0x238)),{Boom}=require(_0x1c6c8e(0x245)),fs=require('fs'),yargs=require(_0x1c6c8e(0x255)),chalk=require(_0x1c6c8e(0x22b)),FileType=require(_0x1c6c8e(0x2b1)),path=require('path'),PhoneNumber=require('awesome-phonenumber'),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x1c6c8e(0x29f)),{formatp,tanggal,formatDate,getTime,clockString,runtime,jsonformat,format,parseMention,getRandom}=require('./lib/myfunc'),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require(_0x1c6c8e(0x2bb));var low;try{low=require(_0x1c6c8e(0x244));}catch(_0x1465b6){low=require(_0x1c6c8e(0x279));}const {Low,JSONFile}=low,mongoDB=require('./lib/mongoDB');global[_0x1c6c8e(0x1f3)]=(_0x109c91,_0x5d7799='/',_0x42d2cd={},_0x40bade)=>(_0x109c91 in global[_0x1c6c8e(0x282)]?global[_0x1c6c8e(0x282)][_0x109c91]:_0x109c91)+_0x5d7799+(_0x42d2cd||_0x40bade?'?'+new URLSearchParams(Object['entries']({..._0x42d2cd,..._0x40bade?{[_0x40bade]:global[_0x1c6c8e(0x2b0)][_0x109c91 in global[_0x1c6c8e(0x282)]?global['APIs'][_0x109c91]:_0x109c91]}:{}})):'');const store=makeInMemoryStore({'logger':pino()[_0x1c6c8e(0x27b)]({'level':_0x1c6c8e(0x292),'stream':_0x1c6c8e(0x1fd)})});global[_0x1c6c8e(0x219)]=new Object(yargs(process[_0x1c6c8e(0x290)][_0x1c6c8e(0x284)](0x2))[_0x1c6c8e(0x23b)](![])[_0x1c6c8e(0x222)]()),global['db']=new Low(/https?:\/\//[_0x1c6c8e(0x294)](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb/[_0x1c6c8e(0x294)](opts['db'])?new mongoDB(opts['db']):new JSONFile(_0x1c6c8e(0x23f))),global['db'][_0x1c6c8e(0x2a7)]={'users':{},'chats':{},'database':{},'game':{},'settings':{},'others':{},'sticker':{},...global['db'][_0x1c6c8e(0x2a7)]||{}};if(global['db'])setInterval(async()=>{const _0x3e7bee=_0x1c6c8e;if(global['db']['data'])await global['db'][_0x3e7bee(0x269)]();},0x1e*0x3e8);async function startZimBotInc(){const _0x2d27fa=_0x1c6c8e,_0x4d407b=ZimBotIncConnect({'logger':pino({'level':_0x2d27fa(0x292)}),'printQRInTerminal':!![],'browser':[_0x2d27fa(0x26d),'Safari','1.0.0'],'auth':state});store[_0x2d27fa(0x2ba)](_0x4d407b['ev']);global[_0x2d27fa(0x247)]===_0x2d27fa(0x2a1)&&_0x4d407b['ws']['on'](_0x2d27fa(0x23a),async _0x6edcbf=>{const _0x426ec7=_0x2d27fa,_0x786a29=_0x6edcbf[_0x426ec7(0x2a9)][0x0][_0x426ec7(0x293)]['call-creator'];if(_0x6edcbf['content'][0x0][_0x426ec7(0x25d)]==_0x426ec7(0x249)){let _0x48fdcf=await _0x4d407b[_0x426ec7(0x26e)](_0x786a29,global[_0x426ec7(0x276)]);_0x4d407b['sendMessage'](_0x786a29,{'text':_0x426ec7(0x285)},{'quoted':_0x48fdcf}),await sleep(0x1f40),await _0x4d407b['updateBlockStatus'](_0x786a29,_0x426ec7(0x246));}});_0x4d407b['ev']['on'](_0x2d27fa(0x228),async _0x2d31ca=>{const _0x39bf06=_0x2d27fa;try{mek=_0x2d31ca[_0x39bf06(0x1ea)][0x0];if(!mek[_0x39bf06(0x1f8)])return;mek[_0x39bf06(0x1f8)]=Object[_0x39bf06(0x1e9)](mek[_0x39bf06(0x1f8)])[0x0]===_0x39bf06(0x1ff)?mek['message'][_0x39bf06(0x1ff)]['message']:mek[_0x39bf06(0x1f8)];if(mek[_0x39bf06(0x291)]&&mek['key'][_0x39bf06(0x29e)]==='status@broadcast')return;if(!_0x4d407b['public']&&!mek[_0x39bf06(0x291)]['fromMe']&&_0x2d31ca[_0x39bf06(0x22e)]===_0x39bf06(0x1f5))return;if(mek[_0x39bf06(0x291)]['id']['startsWith'](_0x39bf06(0x28f))&&mek[_0x39bf06(0x291)]['id']['length']===0x10)return;m=smsg(_0x4d407b,mek,store),require(_0x39bf06(0x257))(_0x4d407b,m,_0x2d31ca,store);}catch(_0x1825b7){console[_0x39bf06(0x20a)](_0x1825b7);}});function _0x133ab1(_0x4d7cf5){const _0x4b5965=_0x2d27fa;return _0x4d7cf5[Math[_0x4b5965(0x24e)](_0x4d7cf5[_0x4b5965(0x218)]*Math['random']())];}let _0x2b4fab=[f1,f2,f3,f4,f5,f6],_0x5304cb=_0x133ab1(_0x2b4fab);return global[_0x2d27fa(0x29b)]===_0x2d27fa(0x2a1)&&_0x4d407b['ev']['on'](_0x2d27fa(0x21c),async _0x1cf52e=>{const _0x3b28cf=_0x2d27fa;console['log'](_0x1cf52e);try{let _0x43e6c3=await _0x4d407b['groupMetadata'](_0x1cf52e['id']),_0x31ae58=_0x1cf52e[_0x3b28cf(0x1ed)];for(let _0x6a1985 of _0x31ae58){try{ppuser=await _0x4d407b[_0x3b28cf(0x21d)](_0x6a1985,'image');}catch{ppuser=_0x3b28cf(0x21a);}try{ppgroup=await _0x4d407b[_0x3b28cf(0x21d)](_0x1cf52e['id'],'image');}catch{ppgroup=_0x3b28cf(0x21a);}if(_0x1cf52e[_0x3b28cf(0x1fe)]=='add'){var _0x3a9c91=await getBuffer(ppuser);let _0xf54110={'key':{'fromMe':![],'participant':_0x3b28cf(0x21f),'remoteJid':_0x3b28cf(0x28e)},'message':{'orderMessage':{'itemCount':0x98967f,'status':0xc8,'thumbnail':_0x3a9c91,'surface':0xc8,'message':''+_0x43e6c3[_0x3b28cf(0x29a)],'orderTitle':_0x3b28cf(0x288),'sellerJid':'0@s.whatsapp.net'}},'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]},'sendEphemeral':!![]};he=''+global['welcomemsg'];let _0xb12191=_0x3b28cf(0x243),_0x2f74b1=[{'buttonId':'menu','buttonText':{'displayText':_0x3b28cf(0x2a4)},'type':0x1},{'buttonId':_0x3b28cf(0x1f1),'buttonText':{'displayText':_0x3b28cf(0x1fb)},'type':0x1}],_0x29b304={'document':fs[_0x3b28cf(0x240)](_0x3b28cf(0x274)),'mimetype':_0x5304cb,'jpegThumbnail':_0x3a9c91,'mentions':[_0x6a1985],'fileName':_0x3b28cf(0x1f6)+_0x43e6c3[_0x3b28cf(0x29a)],'fileLength':0x5af3107a3fff,'caption':he,'footer':''+global[_0x3b28cf(0x209)],'buttons':_0x2f74b1,'headerType':0x4,'contextInfo':{'externalAdReply':{'title':_0x3b28cf(0x278),'body':'SUBSCRIBE\x20'+global[_0x3b28cf(0x209)],'mediaType':0x2,'thumbnail':_0x3a9c91,'sourceUrl':_0xb12191,'mediaUrl':_0xb12191}}};_0x4d407b[_0x3b28cf(0x1ef)](_0x1cf52e['id'],_0x29b304,{'quoted':_0xf54110});}else{if(_0x1cf52e['action']==_0x3b28cf(0x273)){let _0x28f03e={'key':{'fromMe':![],'participant':_0x3b28cf(0x21f),'remoteJid':'6289523258649-1604595598@g.us'},'message':{'orderMessage':{'itemCount':0x98967f,'status':0xc8,'thumbnail':_0x3a9c91,'surface':0xc8,'message':''+_0x43e6c3[_0x3b28cf(0x29a)],'orderTitle':'memek','sellerJid':'0@s.whatsapp.net'}},'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]},'sendEphemeral':!![]};he=''+global['byemsg'];let _0x501820=''+global[_0x3b28cf(0x23e)],_0x173753=[{'buttonId':'menu','buttonText':{'displayText':_0x3b28cf(0x2a4)},'type':0x1},{'buttonId':_0x3b28cf(0x1f1),'buttonText':{'displayText':_0x3b28cf(0x1fb)},'type':0x1}],_0x47bc6b={'document':fs['readFileSync']('./lib/tes.xlsx'),'mimetype':_0x5304cb,'jpegThumbnail':_0x3a9c91,'mentions':[_0x6a1985],'fileName':'Bye\x20Bro.\x20Dont\x20Come\x20Again\x20'+_0x43e6c3[_0x3b28cf(0x29a)],'fileLength':0x5af3107a3fff,'caption':he,'footer':''+global[_0x3b28cf(0x209)],'buttons':_0x173753,'headerType':0x4,'contextInfo':{'externalAdReply':{'title':'BYE\x20DONT\x20COME\x20BACK\x20HERE','body':_0x3b28cf(0x23c)+global['botname'],'mediaType':0x2,'thumbnail':_0x3a9c91,'sourceUrl':_0x501820,'mediaUrl':_0x501820}}};_0x4d407b[_0x3b28cf(0x1ef)](_0x1cf52e['id'],_0x47bc6b,{'quoted':_0x28f03e});}}}}catch(_0x2cd4e6){console['log'](_0x2cd4e6);}}),_0x4d407b[_0x2d27fa(0x29d)]=_0x504233=>{const _0x5650fd=_0x2d27fa;if(!_0x504233)return _0x504233;if(/:\d+@/gi[_0x5650fd(0x294)](_0x504233)){let _0x16a075=jidDecode(_0x504233)||{};return _0x16a075['user']&&_0x16a075[_0x5650fd(0x221)]&&_0x16a075[_0x5650fd(0x223)]+'@'+_0x16a075[_0x5650fd(0x221)]||_0x504233;}else return _0x504233;},_0x4d407b['ev']['on'](_0x2d27fa(0x2a3),_0x100d4c=>{const _0x3e875a=_0x2d27fa;for(let _0x4bd9be of _0x100d4c){let _0x4afaaa=_0x4d407b[_0x3e875a(0x29d)](_0x4bd9be['id']);if(store&&store[_0x3e875a(0x1f4)])store[_0x3e875a(0x1f4)][_0x4afaaa]={'id':_0x4afaaa,'name':_0x4bd9be['notify']};}}),_0x4d407b[_0x2d27fa(0x2ad)]=(_0x1faf11,_0x492dbc=![])=>{const _0x761bc8=_0x2d27fa;id=_0x4d407b[_0x761bc8(0x29d)](_0x1faf11),_0x492dbc=_0x4d407b[_0x761bc8(0x266)]||_0x492dbc;let _0x115add;if(id[_0x761bc8(0x200)](_0x761bc8(0x203)))return new Promise(async _0x33374b=>{const _0x2e2f3a=_0x761bc8;_0x115add=store[_0x2e2f3a(0x1f4)][id]||{};if(!(_0x115add[_0x2e2f3a(0x1eb)]||_0x115add[_0x2e2f3a(0x29a)]))_0x115add=_0x4d407b[_0x2e2f3a(0x234)](id)||{};_0x33374b(_0x115add[_0x2e2f3a(0x1eb)]||_0x115add[_0x2e2f3a(0x29a)]||PhoneNumber('+'+id[_0x2e2f3a(0x20b)](_0x2e2f3a(0x297),''))[_0x2e2f3a(0x272)](_0x2e2f3a(0x1ee)));});else _0x115add=id===_0x761bc8(0x21f)?{'id':id,'name':_0x761bc8(0x232)}:id===_0x4d407b[_0x761bc8(0x29d)](_0x4d407b[_0x761bc8(0x223)]['id'])?_0x4d407b['user']:store[_0x761bc8(0x1f4)][id]||{};return(_0x492dbc?'':_0x115add['name'])||_0x115add['subject']||_0x115add[_0x761bc8(0x217)]||PhoneNumber('+'+_0x1faf11[_0x761bc8(0x20b)](_0x761bc8(0x297),''))[_0x761bc8(0x272)](_0x761bc8(0x1ee));},_0x4d407b[_0x2d27fa(0x26e)]=async(_0x558edb,_0x15305b,_0x218638='',_0x3f9019={})=>{const _0xfa2ca2=_0x2d27fa;let _0x2f340d=[];for(let _0x3bb263 of _0x15305b){_0x2f340d[_0xfa2ca2(0x24b)]({'displayName':await _0x4d407b[_0xfa2ca2(0x2ad)](_0x3bb263+_0xfa2ca2(0x297)),'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:'+await _0x4d407b[_0xfa2ca2(0x2ad)](_0x3bb263+'@s.whatsapp.net')+'\x0aFN:'+await _0x4d407b[_0xfa2ca2(0x2ad)](_0x3bb263+_0xfa2ca2(0x297))+_0xfa2ca2(0x260)+_0x3bb263+':'+_0x3bb263+'\x0aitem1.X-ABLabel:MALIK\x0aitem2.EMAIL;type=INTERNET:abdulmmujahid2@gmail.com\x0aitem2.X-ABLabel:Email\x0aitem3.URL:https://instagram.com/texas__finnest/\x0aitem3.X-ABLabel:Instagram\x0aitem4.ADR:;;MOMBASA;;;;\x0aitem4.X-ABLabel:Region\x0aEND:VCARD'});}_0x4d407b[_0xfa2ca2(0x1ef)](_0x558edb,{'contacts':{'displayName':_0x2f340d['length']+_0xfa2ca2(0x28b),'contacts':_0x2f340d},..._0x3f9019},{'quoted':_0x218638});},_0x4d407b[_0x2d27fa(0x24d)]=_0x5884cd=>{const _0x3e7836=_0x2d27fa;return _0x4d407b['query']({'tag':'iq','attrs':{'to':_0x3e7836(0x297),'type':_0x3e7836(0x280),'xmlns':'status'},'content':[{'tag':_0x3e7836(0x26a),'attrs':{},'content':Buffer[_0x3e7836(0x296)](_0x5884cd,_0x3e7836(0x239))}]}),_0x5884cd;},_0x4d407b[_0x2d27fa(0x2b4)]=!![],_0x4d407b[_0x2d27fa(0x1f2)]=_0xdd82c6=>smsg(_0x4d407b,_0xdd82c6,store),_0x4d407b['ev']['on'](_0x2d27fa(0x1ec),async _0x133d51=>{const _0x2350bd=_0x2d27fa,{connection:_0x470a14,lastDisconnect:_0x1b6d44}=_0x133d51;if(_0x470a14===_0x2350bd(0x202)){let _0x3ab140=new Boom(_0x1b6d44?.[_0x2350bd(0x24c)])?.[_0x2350bd(0x2a8)][_0x2350bd(0x26c)];if(_0x3ab140===DisconnectReason[_0x2350bd(0x263)])console[_0x2350bd(0x20a)]('Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again'),_0x4d407b[_0x2350bd(0x2b2)]();else{if(_0x3ab140===DisconnectReason[_0x2350bd(0x286)])console['log']('Connection\x20closed,\x20reconnecting....'),startZimBotInc();else{if(_0x3ab140===DisconnectReason[_0x2350bd(0x235)])console['log'](_0x2350bd(0x27e)),startZimBotInc();else{if(_0x3ab140===DisconnectReason[_0x2350bd(0x277)])console[_0x2350bd(0x20a)](_0x2350bd(0x25e)),_0x4d407b[_0x2350bd(0x2b2)]();else{if(_0x3ab140===DisconnectReason[_0x2350bd(0x22d)])console[_0x2350bd(0x20a)]('Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.'),_0x4d407b['logout']();else{if(_0x3ab140===DisconnectReason[_0x2350bd(0x227)])console[_0x2350bd(0x20a)]('Restart\x20Required,\x20Restarting...'),startZimBotInc();else{if(_0x3ab140===DisconnectReason['timedOut'])console[_0x2350bd(0x20a)](_0x2350bd(0x24f)),startZimBotInc();else _0x4d407b[_0x2350bd(0x253)]('Unknown\x20DisconnectReason:\x20'+_0x3ab140+'|'+_0x470a14);}}}}}}}console[_0x2350bd(0x20a)](_0x2350bd(0x28d),_0x133d51);function _0x2d5c8c(_0x192924,_0x5f2e6f){var _0x269f4b=_0x7353b2();return _0x2d5c8c=function(_0x501653,_0x5423c4){_0x501653=_0x501653-0x72;var _0x19c26b=_0x269f4b[_0x501653];return _0x19c26b;},_0x2d5c8c(_0x192924,_0x5f2e6f);}function _0x7353b2(){const _0x27a446=_0x2350bd;var _0x3ec56e=[_0x27a446(0x268),'6530xCguJO','209zmhIhq','6045970nBcuxk',_0x27a446(0x229),_0x27a446(0x26f),_0x27a446(0x25a),_0x27a446(0x2b9),'784oslxDo','8576xgSzVp',_0x27a446(0x270),_0x27a446(0x254),_0x27a446(0x275),_0x27a446(0x210),_0x27a446(0x20c)];return _0x7353b2=function(){return _0x3ec56e;},_0x7353b2();}var _0x54fcb7=_0x2d5c8c;(function(_0x48135f,_0x290bef){const _0x4f3670=_0x2350bd;var _0x89f06a=_0x2d5c8c,_0x2b8a1b=_0x48135f();while(!![]){try{var _0x45fe56=parseInt(_0x89f06a(0x7b))/0x1*(parseInt(_0x89f06a(0x79))/0x2)+parseInt(_0x89f06a(0x72))/0x3*(-parseInt(_0x89f06a(0x80))/0x4)+-parseInt(_0x89f06a(0x76))/0x5*(-parseInt(_0x89f06a(0x75))/0x6)+parseInt(_0x89f06a(0x7d))/0x7*(-parseInt(_0x89f06a(0x7e))/0x8)+parseInt(_0x89f06a(0x74))/0x9*(-parseInt(_0x89f06a(0x78))/0xa)+-parseInt(_0x89f06a(0x77))/0xb*(parseInt(_0x89f06a(0x7f))/0xc)+parseInt(_0x89f06a(0x73))/0xd;if(_0x45fe56===_0x290bef)break;else _0x2b8a1b[_0x4f3670(0x24b)](_0x2b8a1b[_0x4f3670(0x212)]());}catch(_0x152f45){_0x2b8a1b['push'](_0x2b8a1b[_0x4f3670(0x212)]());}}}(_0x7353b2,0x618e0),console[_0x2350bd(0x20a)](chalk[_0x54fcb7(0x7c)](_0x54fcb7(0x7a),_0x133d51)));}),_0x4d407b['ev']['on'](_0x2d27fa(0x213),saveState),_0x4d407b['sendListMsg']=(_0x17dfc0,_0x20cc2e='',_0x15c76e='',_0x1d7bf6='',_0x2086bc='',_0xaf1b0c=[],_0x455007)=>{const _0x2ec592=_0x2d27fa;let _0x1388b6=_0xaf1b0c;var _0x2c4990={'text':_0x20cc2e,'footer':_0x15c76e,'title':_0x1d7bf6,'buttonText':_0x2086bc,'sections':_0x1388b6};_0x4d407b[_0x2ec592(0x1ef)](_0x17dfc0,_0x2c4990,{'quoted':_0x455007});},_0x4d407b[_0x2d27fa(0x1f7)]=(_0x422bce,_0x49028f='',_0x39ec03='',_0x117616=[])=>{const _0x4ac9bb=_0x2d27fa;let _0x2a3baf=_0x117616;var _0x759531={'text':_0x49028f,'footer':_0x39ec03,'templateButtons':_0x2a3baf};_0x4d407b[_0x4ac9bb(0x1ef)](_0x422bce,_0x759531);},_0x4d407b['send5ButImg']=async(_0x4eef72,_0xe09cbc='',_0x3eb40b='',_0xdffe1d,_0x1b32b9=[],_0x42301c={})=>{const _0x58ce61=_0x2d27fa;let _0x5f56e0=await prepareWAMessageMedia({'image':_0xdffe1d},{'upload':_0x4d407b[_0x58ce61(0x287)]});var _0x25db4d=generateWAMessageFromContent(_0x4eef72,proto[_0x58ce61(0x2b6)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':_0x5f56e0[_0x58ce61(0x299)],'hydratedContentText':_0xe09cbc,'hydratedFooterText':_0x3eb40b,'hydratedButtons':_0x1b32b9}}}),_0x42301c);_0x4d407b[_0x58ce61(0x224)](_0x4eef72,_0x25db4d['message'],{'messageId':_0x25db4d['key']['id']});},_0x4d407b[_0x2d27fa(0x20f)]=async(_0x2d1996,_0x3a80fb='',_0xb1d70a='',_0x4bf46b,_0x1e3797=[],_0xda5a7f={})=>{const _0x5bc95a=_0x2d27fa;let _0x243189=await prepareWAMessageMedia({'video':_0x4bf46b},{'upload':_0x4d407b[_0x5bc95a(0x287)]});var _0x3de59d=generateWAMessageFromContent(_0x2d1996,proto[_0x5bc95a(0x2b6)][_0x5bc95a(0x27f)]({'templateMessage':{'hydratedTemplate':{'videoMessage':_0x243189['videoMessage'],'hydratedContentText':_0x3a80fb,'hydratedFooterText':_0xb1d70a,'hydratedButtons':_0x1e3797}}}),_0xda5a7f);_0x4d407b[_0x5bc95a(0x224)](_0x2d1996,_0x3de59d[_0x5bc95a(0x1f8)],{'messageId':_0x3de59d[_0x5bc95a(0x291)]['id']});},_0x4d407b[_0x2d27fa(0x1fc)]=async(_0x17113c,_0x2ef702='',_0xefa7fc='',_0x1288b4,_0x223acb=[],_0x41d41a={})=>{const _0x16f5cf=_0x2d27fa;let _0x28ef88=await prepareWAMessageMedia({'video':_0x1288b4,'gifPlayback':!![]},{'upload':_0x4d407b['waUploadToServer']});var _0xb39ba3=generateWAMessageFromContent(_0x17113c,proto[_0x16f5cf(0x2b6)]['fromObject']({'templateMessage':{'hydratedTemplate':{'videoMessage':_0x28ef88[_0x16f5cf(0x20d)],'hydratedContentText':_0x2ef702,'hydratedFooterText':_0xefa7fc,'hydratedButtons':_0x223acb}}}),_0x41d41a);_0x4d407b[_0x16f5cf(0x224)](_0x17113c,_0xb39ba3[_0x16f5cf(0x1f8)],{'messageId':_0xb39ba3[_0x16f5cf(0x291)]['id']});},_0x4d407b[_0x2d27fa(0x25b)]=(_0x9ba99a,_0x2c47da=[],_0x4a2fba,_0x56bf66,_0x700cf0='',_0x868a25={})=>{const _0x2feacf=_0x2d27fa;let _0x256fec={'text':_0x4a2fba,'footer':_0x56bf66,'buttons':_0x2c47da,'headerType':0x2,..._0x868a25};_0x4d407b[_0x2feacf(0x1ef)](_0x9ba99a,_0x256fec,{'quoted':_0x700cf0,..._0x868a25});},_0x4d407b[_0x2d27fa(0x1fa)]=(_0x42bb0c,_0x1c7590,_0x70ca98='',_0x5c5641)=>_0x4d407b[_0x2d27fa(0x1ef)](_0x42bb0c,{'text':_0x1c7590,..._0x5c5641},{'quoted':_0x70ca98}),_0x4d407b['sendImage']=async(_0x42f70c,_0x34cb66,_0x4accef='',_0x3bc44d='',_0x358ccd)=>{const _0x58555d=_0x2d27fa;let _0x368e14=Buffer[_0x58555d(0x23d)](_0x34cb66)?_0x34cb66:/^data:.*?\/.*?;base64,/i[_0x58555d(0x294)](_0x34cb66)?Buffer['from'](_0x34cb66[_0x58555d(0x2a6)]`,`[0x1],_0x58555d(0x29c)):/^https?:\/\//[_0x58555d(0x294)](_0x34cb66)?await await getBuffer(_0x34cb66):fs[_0x58555d(0x214)](_0x34cb66)?fs[_0x58555d(0x240)](_0x34cb66):Buffer[_0x58555d(0x259)](0x0);return await _0x4d407b[_0x58555d(0x1ef)](_0x42f70c,{'image':_0x368e14,'caption':_0x4accef,..._0x358ccd},{'quoted':_0x3bc44d});},_0x4d407b[_0x2d27fa(0x220)]=async(_0x3385f0,_0x329cf4,_0x55b506='',_0x2739b8='',_0xdd6392=![],_0x39f5c5)=>{const _0x1df969=_0x2d27fa;let _0x524efb=Buffer[_0x1df969(0x23d)](_0x329cf4)?_0x329cf4:/^data:.*?\/.*?;base64,/i[_0x1df969(0x294)](_0x329cf4)?Buffer['from'](_0x329cf4[_0x1df969(0x2a6)]`,`[0x1],'base64'):/^https?:\/\//[_0x1df969(0x294)](_0x329cf4)?await await getBuffer(_0x329cf4):fs[_0x1df969(0x214)](_0x329cf4)?fs['readFileSync'](_0x329cf4):Buffer[_0x1df969(0x259)](0x0);return await _0x4d407b[_0x1df969(0x1ef)](_0x3385f0,{'video':_0x524efb,'caption':_0x55b506,'gifPlayback':_0xdd6392,..._0x39f5c5},{'quoted':_0x2739b8});},_0x4d407b[_0x2d27fa(0x1f9)]=async(_0x73274e,_0x2ad998,_0xec7e7c='',_0x4f8d40=![],_0x3f0c2c)=>{const _0x2062a5=_0x2d27fa;let _0x214be8=Buffer[_0x2062a5(0x23d)](_0x2ad998)?_0x2ad998:/^data:.*?\/.*?;base64,/i[_0x2062a5(0x294)](_0x2ad998)?Buffer[_0x2062a5(0x296)](_0x2ad998[_0x2062a5(0x2a6)]`,`[0x1],_0x2062a5(0x29c)):/^https?:\/\//['test'](_0x2ad998)?await await getBuffer(_0x2ad998):fs[_0x2062a5(0x214)](_0x2ad998)?fs[_0x2062a5(0x240)](_0x2ad998):Buffer[_0x2062a5(0x259)](0x0);return await _0x4d407b[_0x2062a5(0x1ef)](_0x73274e,{'audio':_0x214be8,'ptt':_0x4f8d40,..._0x3f0c2c},{'quoted':_0xec7e7c});},_0x4d407b['sendTextWithMentions']=async(_0x4599ea,_0x1f74a2,_0x492112,_0x48b1cd={})=>_0x4d407b['sendMessage'](_0x4599ea,{'text':_0x1f74a2,'contextInfo':{'mentionedJid':[..._0x1f74a2[_0x2d27fa(0x226)](/@(\d{0,16})/g)][_0x2d27fa(0x236)](_0x41d07d=>_0x41d07d[0x1]+'@s.whatsapp.net')},..._0x48b1cd},{'quoted':_0x492112}),_0x4d407b[_0x2d27fa(0x2b3)]=async(_0x86ee8b,_0x303ea6,_0x288821,_0x3f5d50={})=>{const _0x2072e1=_0x2d27fa;let _0x35c795=Buffer['isBuffer'](_0x303ea6)?_0x303ea6:/^data:.*?\/.*?;base64,/i[_0x2072e1(0x294)](_0x303ea6)?Buffer[_0x2072e1(0x296)](_0x303ea6['split']`,`[0x1],_0x2072e1(0x29c)):/^https?:\/\//[_0x2072e1(0x294)](_0x303ea6)?await await getBuffer(_0x303ea6):fs[_0x2072e1(0x214)](_0x303ea6)?fs[_0x2072e1(0x240)](_0x303ea6):Buffer[_0x2072e1(0x259)](0x0),_0x31da41;return _0x3f5d50&&(_0x3f5d50[_0x2072e1(0x25f)]||_0x3f5d50[_0x2072e1(0x265)])?_0x31da41=await writeExifImg(_0x35c795,_0x3f5d50):_0x31da41=await imageToWebp(_0x35c795),await _0x4d407b['sendMessage'](_0x86ee8b,{'sticker':{'url':_0x31da41},..._0x3f5d50},{'quoted':_0x288821}),_0x31da41;},_0x4d407b[_0x2d27fa(0x208)]=async(_0x1d1e74,_0x1b855c,_0x1842e4,_0x5edfb6={})=>{const _0x5de314=_0x2d27fa;let _0x40fc77=Buffer[_0x5de314(0x23d)](_0x1b855c)?_0x1b855c:/^data:.*?\/.*?;base64,/i[_0x5de314(0x294)](_0x1b855c)?Buffer[_0x5de314(0x296)](_0x1b855c[_0x5de314(0x2a6)]`,`[0x1],_0x5de314(0x29c)):/^https?:\/\//[_0x5de314(0x294)](_0x1b855c)?await await getBuffer(_0x1b855c):fs[_0x5de314(0x214)](_0x1b855c)?fs[_0x5de314(0x240)](_0x1b855c):Buffer[_0x5de314(0x259)](0x0),_0x554763;return _0x5edfb6&&(_0x5edfb6[_0x5de314(0x25f)]||_0x5edfb6[_0x5de314(0x265)])?_0x554763=await writeExifVid(_0x40fc77,_0x5edfb6):_0x554763=await videoToWebp(_0x40fc77),await _0x4d407b[_0x5de314(0x1ef)](_0x1d1e74,{'sticker':{'url':_0x554763},..._0x5edfb6},{'quoted':_0x1842e4}),_0x554763;},_0x4d407b['downloadAndSaveMediaMessage']=async(_0x472d82,_0x27cb87,_0x2891fa=!![])=>{const _0x1f2395=_0x2d27fa;let _0x5c547f=_0x472d82[_0x1f2395(0x258)]?_0x472d82[_0x1f2395(0x258)]:_0x472d82,_0x26f478=(_0x472d82[_0x1f2395(0x258)]||_0x472d82)[_0x1f2395(0x21b)]||'',_0x5d07ef=_0x472d82[_0x1f2395(0x207)]?_0x472d82[_0x1f2395(0x207)][_0x1f2395(0x20b)](/Message/gi,''):_0x26f478[_0x1f2395(0x2a6)]('/')[0x0];const _0x46b5b5=await downloadContentFromMessage(_0x5c547f,_0x5d07ef);let _0x346486=Buffer['from']([]);for await(const _0x4b5e0e of _0x46b5b5){_0x346486=Buffer[_0x1f2395(0x27c)]([_0x346486,_0x4b5e0e]);}let _0x44b17e=await FileType[_0x1f2395(0x22c)](_0x346486);return trueFileName=_0x2891fa?_0x27cb87+'.'+_0x44b17e['ext']:_0x27cb87,await fs['writeFileSync'](trueFileName,_0x346486),trueFileName;},_0x4d407b[_0x2d27fa(0x267)]=async _0x44e425=>{const _0x532433=_0x2d27fa;let _0xffb53e=(_0x44e425[_0x532433(0x258)]||_0x44e425)['mimetype']||'',_0x3d1a86=_0x44e425[_0x532433(0x207)]?_0x44e425[_0x532433(0x207)][_0x532433(0x20b)](/Message/gi,''):_0xffb53e[_0x532433(0x2a6)]('/')[0x0];const _0x50020a=await downloadContentFromMessage(_0x44e425,_0x3d1a86);let _0x43c26e=Buffer['from']([]);for await(const _0x27f8ad of _0x50020a){_0x43c26e=Buffer[_0x532433(0x27c)]([_0x43c26e,_0x27f8ad]);}return _0x43c26e;},_0x4d407b[_0x2d27fa(0x281)]=async(_0x2cf5f8,_0x437b99,_0x390648='',_0x1c8a66='',_0x6640ab='',_0x5198fe={})=>{const _0x56ea89=_0x2d27fa;let _0x1e77b5=await _0x4d407b[_0x56ea89(0x2a2)](_0x437b99,!![]),{mime:_0x3a9272,ext:_0x39f586,res:_0x2fb750,data:_0xed1b5,filename:_0x5707b7}=_0x1e77b5;if(_0x2fb750&&_0x2fb750[_0x56ea89(0x26a)]!==0xc8||file[_0x56ea89(0x218)]<=0x10000)try{throw{'json':JSON[_0x56ea89(0x222)](file[_0x56ea89(0x26b)]())};}catch(_0x1301f6){if(_0x1301f6[_0x56ea89(0x2a0)])throw _0x1301f6['json'];}let _0x117773='',_0xdba3bb=_0x3a9272,_0x1b29cd=_0x5707b7;if(_0x5198fe[_0x56ea89(0x251)])_0x117773='document';if(_0x5198fe[_0x56ea89(0x22a)]||/webp/[_0x56ea89(0x294)](_0x3a9272)){let {writeExif:_0x25e1b0}=require(_0x56ea89(0x29f)),_0x2885ef={'mimetype':_0x3a9272,'data':_0xed1b5};_0x1b29cd=await _0x25e1b0(_0x2885ef,{'packname':_0x5198fe[_0x56ea89(0x25f)]?_0x5198fe[_0x56ea89(0x25f)]:global[_0x56ea89(0x25f)],'author':_0x5198fe[_0x56ea89(0x265)]?_0x5198fe['author']:global[_0x56ea89(0x265)],'categories':_0x5198fe[_0x56ea89(0x206)]?_0x5198fe[_0x56ea89(0x206)]:[]}),await fs['promises'][_0x56ea89(0x230)](_0x5707b7),_0x117773=_0x56ea89(0x215),_0xdba3bb='image/webp';}else{if(/image/[_0x56ea89(0x294)](_0x3a9272))_0x117773=_0x56ea89(0x211);else{if(/video/[_0x56ea89(0x294)](_0x3a9272))_0x117773=_0x56ea89(0x22f);else{if(/audio/['test'](_0x3a9272))_0x117773=_0x56ea89(0x237);else _0x117773='document';}}}return await _0x4d407b[_0x56ea89(0x1ef)](_0x2cf5f8,{[_0x117773]:{'url':_0x1b29cd},'caption':_0x1c8a66,'mimetype':_0xdba3bb,'fileName':_0x390648,..._0x5198fe},{'quoted':_0x6640ab,..._0x5198fe}),fs[_0x56ea89(0x24a)][_0x56ea89(0x230)](_0x1b29cd);},_0x4d407b[_0x2d27fa(0x2b7)]=async(_0x1eb1e2,_0x5106b8,_0x400dc0=![],_0x171720={})=>{const _0x543e52=_0x2d27fa;let _0x2ebc64;_0x171720[_0x543e52(0x289)]&&(_0x5106b8[_0x543e52(0x1f8)]=_0x5106b8[_0x543e52(0x1f8)]&&_0x5106b8[_0x543e52(0x1f8)][_0x543e52(0x1ff)]&&_0x5106b8['message'][_0x543e52(0x1ff)][_0x543e52(0x1f8)]?_0x5106b8['message'][_0x543e52(0x1ff)][_0x543e52(0x1f8)]:_0x5106b8['message']||undefined,_0x2ebc64=Object[_0x543e52(0x1e9)](_0x5106b8[_0x543e52(0x1f8)]['viewOnceMessage']['message'])[0x0],delete(_0x5106b8[_0x543e52(0x1f8)]&&_0x5106b8[_0x543e52(0x1f8)][_0x543e52(0x261)]?_0x5106b8[_0x543e52(0x1f8)][_0x543e52(0x261)]:_0x5106b8[_0x543e52(0x1f8)]||undefined),delete _0x5106b8[_0x543e52(0x1f8)][_0x543e52(0x233)][_0x543e52(0x1f8)][_0x2ebc64][_0x543e52(0x201)],_0x5106b8['message']={..._0x5106b8['message'][_0x543e52(0x233)][_0x543e52(0x1f8)]});let _0x570b92=Object[_0x543e52(0x1e9)](_0x5106b8['message'])[0x0],_0x2a010e=await generateForwardMessageContent(_0x5106b8,_0x400dc0),_0x1d845e=Object['keys'](_0x2a010e)[0x0],_0x15e512={};if(_0x570b92!=_0x543e52(0x2aa))_0x15e512=_0x5106b8[_0x543e52(0x1f8)][_0x570b92][_0x543e52(0x2b8)];_0x2a010e[_0x1d845e]['contextInfo']={..._0x15e512,..._0x2a010e[_0x1d845e]['contextInfo']};const _0x3dc8f1=await generateWAMessageFromContent(_0x1eb1e2,_0x2a010e,_0x171720?{..._0x2a010e[_0x1d845e],..._0x171720,..._0x171720[_0x543e52(0x2b8)]?{'contextInfo':{..._0x2a010e[_0x1d845e]['contextInfo'],..._0x171720[_0x543e52(0x2b8)]}}:{}}:{});return await _0x4d407b[_0x543e52(0x224)](_0x1eb1e2,_0x3dc8f1['message'],{'messageId':_0x3dc8f1[_0x543e52(0x291)]['id']}),_0x3dc8f1;},_0x4d407b[_0x2d27fa(0x20e)]=(_0x30d9fc,_0x476155,_0x59e99f='',_0x147608=_0x4d407b[_0x2d27fa(0x223)]['id'],_0x5aff2c={})=>{const _0x156e49=_0x2d27fa;let _0x4987c8=Object['keys'](_0x476155[_0x156e49(0x1f8)])[0x0],_0x413871=_0x4987c8===_0x156e49(0x1ff);_0x413871&&(_0x4987c8=Object[_0x156e49(0x1e9)](_0x476155[_0x156e49(0x1f8)][_0x156e49(0x1ff)][_0x156e49(0x1f8)])[0x0]);let _0x4a6e01=_0x413871?_0x476155[_0x156e49(0x1f8)][_0x156e49(0x1ff)][_0x156e49(0x1f8)]:_0x476155[_0x156e49(0x1f8)],_0x1c07e2=_0x4a6e01[_0x4987c8];if(typeof _0x1c07e2===_0x156e49(0x2ae))_0x4a6e01[_0x4987c8]=_0x59e99f||_0x1c07e2;else{if(_0x1c07e2[_0x156e49(0x2ab)])_0x1c07e2[_0x156e49(0x2ab)]=_0x59e99f||_0x1c07e2['caption'];else{if(_0x1c07e2['text'])_0x1c07e2[_0x156e49(0x256)]=_0x59e99f||_0x1c07e2[_0x156e49(0x256)];}}if(typeof _0x1c07e2!==_0x156e49(0x2ae))_0x4a6e01[_0x4987c8]={..._0x1c07e2,..._0x5aff2c};if(_0x476155[_0x156e49(0x291)]['participant'])_0x147608=_0x476155[_0x156e49(0x291)][_0x156e49(0x27d)]=_0x147608||_0x476155[_0x156e49(0x291)]['participant'];else{if(_0x476155['key']['participant'])_0x147608=_0x476155[_0x156e49(0x291)][_0x156e49(0x27d)]=_0x147608||_0x476155[_0x156e49(0x291)][_0x156e49(0x27d)];}if(_0x476155['key']['remoteJid'][_0x156e49(0x216)](_0x156e49(0x297)))_0x147608=_0x147608||_0x476155[_0x156e49(0x291)][_0x156e49(0x29e)];else{if(_0x476155[_0x156e49(0x291)]['remoteJid'][_0x156e49(0x216)](_0x156e49(0x241)))_0x147608=_0x147608||_0x476155['key']['remoteJid'];}return _0x476155[_0x156e49(0x291)][_0x156e49(0x29e)]=_0x30d9fc,_0x476155['key'][_0x156e49(0x25c)]=_0x147608===_0x4d407b[_0x156e49(0x223)]['id'],proto[_0x156e49(0x231)][_0x156e49(0x27f)](_0x476155);},_0x4d407b[_0x2d27fa(0x2a2)]=async(_0x30765c,_0x3ea89d)=>{const _0x5c5dac=_0x2d27fa;let _0x5d3f19,_0x16ce7f=Buffer[_0x5c5dac(0x23d)](_0x30765c)?_0x30765c:/^data:.*?\/.*?;base64,/i['test'](_0x30765c)?Buffer[_0x5c5dac(0x296)](_0x30765c['split']`,`[0x1],'base64'):/^https?:\/\//[_0x5c5dac(0x294)](_0x30765c)?await(_0x5d3f19=await getBuffer(_0x30765c)):fs['existsSync'](_0x30765c)?(filename=_0x30765c,fs['readFileSync'](_0x30765c)):typeof _0x30765c==='string'?_0x30765c:Buffer[_0x5c5dac(0x259)](0x0),_0x29bb73=await FileType['fromBuffer'](_0x16ce7f)||{'mime':_0x5c5dac(0x2af),'ext':_0x5c5dac(0x28c)};filename=path[_0x5c5dac(0x28a)](__filename,_0x5c5dac(0x252)+new Date()*0x1+'.'+_0x29bb73['ext']);if(_0x16ce7f&&_0x3ea89d)fs[_0x5c5dac(0x24a)][_0x5c5dac(0x262)](filename,_0x16ce7f);return{'res':_0x5d3f19,'filename':filename,'size':await getSizeMedia(_0x16ce7f),..._0x29bb73,'data':_0x16ce7f};},_0x4d407b;}startZimBotInc();function _0x3301(_0x2eef72,_0x5bff8c){const _0x3beab0=_0x3bea();return _0x3301=function(_0x330198,_0x4a9e9c){_0x330198=_0x330198-0x1e9;let _0x59b859=_0x3beab0[_0x330198];return _0x59b859;},_0x3301(_0x2eef72,_0x5bff8c);}let file=require['resolve'](__filename);function _0x3bea(){const _0x5e6ce8=['conversation','caption','5956713IgyZke','getName','string','application/octet-stream','APIKeys','file-type','logout','sendImageAsSticker','public','watchFile','Message','copyNForward','contextInfo','red','bind','./lib/myfunc','keys','messages','name','connection.update','participants','international','sendMessage','redBright','script','serializeM','api','contacts','notify','Welcome\x20To\x20','send5ButMsg','message','sendAudio','sendText','Script\x20😼','send5ButGif','store','action','ephemeralMessage','endsWith','viewOnce','close','@g.us','./config','911113vxDjnx','categories','mtype','sendVideoAsSticker','botname','log','replace','9HiPGET','videoMessage','cMod','send5ButVid','18339633RBPDKV','image','shift','creds.update','existsSync','sticker','includes','verifiedName','length','opts','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','mimetype','group-participants.update','profilePictureUrl','@adiwajshing/baileys','0@s.whatsapp.net','sendVideo','server','parse','user','relayMessage','cache','matchAll','restartRequired','messages.upsert','102UfxOsv','asSticker','chalk','fromBuffer','loggedOut','type','video','unlink','WebMessageInfo','WhatsApp','viewOnceMessage','groupMetadata','connectionLost','map','audio','pino','utf-8','CB:call','exitProcess','SUBSCRIBE\x20','isBuffer','ytchannel','src/database.json','readFileSync','@broadcast','2xedpmt','https://youtu.be/w--BaB_9VI8','lowdb','@hapi/boom','block','callblock','7581536HdJsUN','offer','promises','push','error','setStatus','floor','Connection\x20TimedOut,\x20Reconnecting...','4hdxxeV','asDocument','../src/','end','4gopdTv','yargs/yargs','text','./VihangaMD.js','msg','alloc','526MLKBVv','sendButtonText','fromMe','tag','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','packname','\x0aitem1.TEL;waid=','ignore','writeFile','badSession','16177220WKPVPW','author','withoutContact','downloadMediaMessage','3306pJLxeL','write','status','toString','statusCode','ZIM\x20BOT\x20INC','sendContact','SRNY\x20V3\x20CONNECTED','398760gxJiUV','6096ZbUoka','getNumber','remove','./lib/tes.xlsx','1204674uiPudO','owner','connectionReplaced','Don\x27t\x20forget\x20to\x20share\x20group','./lib/lowdb','.json','child','concat','participant','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','fromObject','set','sendMedia','APIs','6975lufPBe','slice','*Automatic\x20system\x20block!*\x0a*Don\x27t\x20call\x20bot!\x0aPlease\x20contact\x20the\x20owner\x20to\x20UNBLOCK!*','connectionClosed','waUploadToServer','memek','readViewOnce','join','\x20Kontak','.bin','Connected...','6289523258649-1604595598@g.us','BAE5','argv','key','silent','attrs','test','4980096NIgPsL','from','@s.whatsapp.net','4209465OKmWhG','imageMessage','subject','welcomeandgoodbye','base64','decodeJid','remoteJid','./lib/exif','json','true','getFile','contacts.update','Menu\x20📝','unwatchFile','split','data','output','content'];_0x3bea=function(){return _0x5e6ce8;};return _0x3bea();}fs[_0x1c6c8e(0x2b5)](file,()=>{const _0x1412da=_0x1c6c8e;fs[_0x1412da(0x2a5)](file),console[_0x1412da(0x20a)](chalk[_0x1412da(0x1f0)]('Update\x20'+__filename)),delete require[_0x1412da(0x225)][file],require(file);});
