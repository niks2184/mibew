/*!
 * This file is a part of Mibew Messenger.
 *
 * Copyright 2005-2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates._logo=Handlebars.template({1:function(a,e,n,s){var l;return null!=(l=e["if"].call(a,null!=(l=null!=a?a.page:a)?l.mibewHost:l,{name:"if",hash:{},fn:this.program(2,s,0),inverse:this.program(4,s,0),data:s}))?l:""},2:function(a,e,n,s){var l,t=this.lambda,i=this.escapeExpression;return"                <a onclick=\"window.open('"+i(t(null!=(l=null!=a?a.page:a)?l.mibewHost:l,a))+'\');return false;" href="'+i(t(null!=(l=null!=a?a.page:a)?l.mibewHost:l,a))+'">\n                    <img src="'+i(t(null!=(l=null!=(l=null!=a?a.page:a)?l.company:l)?l.chatLogoURL:l,a))+'" alt=""/>\n                </a>\n'},4:function(a,e,n,s){var l;return'                <img src="'+this.escapeExpression(this.lambda(null!=(l=null!=(l=null!=a?a.page:a)?l.company:l)?l.chatLogoURL:l,a))+'" alt=""/>\n'},6:function(a,e,n,s){var l;return null!=(l=e["if"].call(a,null!=(l=null!=a?a.page:a)?l.mibewHost:l,{name:"if",hash:{},fn:this.program(7,s,0),inverse:this.program(9,s,0),data:s}))?l:""},7:function(a,e,n,s){var l,t=this.lambda,i=this.escapeExpression;return"                <a onclick=\"window.open('"+i(t(null!=(l=null!=a?a.page:a)?l.mibewHost:l,a))+'\');return false;" href="'+i(t(null!=(l=null!=a?a.page:a)?l.mibewHost:l,a))+'">\n                    <img src="'+i(t(null!=(l=null!=a?a.page:a)?l.stylePath:l,a))+'/images/logo.png" alt=""/>\n                </a>\n'},9:function(a,e,n,s){var l;return'                <img src="'+this.escapeExpression(this.lambda(null!=(l=null!=a?a.page:a)?l.stylePath:l,a))+'/images/logo.png" alt=""/>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s){var l;return'<div id="logo-wrapper">\n    <div id="logo">\n'+(null!=(l=e["if"].call(a,null!=(l=null!=(l=null!=a?a.page:a)?l.company:l)?l.chatLogoURL:l,{name:"if",hash:{},fn:this.program(1,s,0),inverse:this.program(6,s,0),data:s}))?l:"")+'        &nbsp;\n        <div id="page-title">'+this.escapeExpression(this.lambda(null!=(l=null!=a?a.page:a)?l.title:l,a))+'</div>\n        <div class="clear">&nbsp;</div>\n    </div>\n</div>'},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates.default_control=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s){var l;return"<strong>"+this.escapeExpression((l=null!=(l=e.title||(null!=a?a.title:a))?l:e.helperMissing,"function"==typeof l?l.call(a,{name:"title",hash:{},data:s}):l))+"</strong>"},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates.message=Handlebars.template({1:function(a,e,n,s){var l,t=e.helperMissing,i="function",r=this.escapeExpression;return"<span class='name-"+r((l=null!=(l=e.kindName||(null!=a?a.kindName:a))?l:t,typeof l===i?l.call(a,{name:"kindName",hash:{},data:s}):l))+"'>"+r((l=null!=(l=e.name||(null!=a?a.name:a))?l:t,typeof l===i?l.call(a,{name:"name",hash:{},data:s}):l))+"</span>: "},3:function(a,e,n,s){return this.escapeExpression((e.urlReplace||a&&a.urlReplace||e.helperMissing).call(a,null!=a?a.message:a,{name:"urlReplace",hash:{},data:s}))},compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s){var l,t,i=e.helperMissing,r=this.escapeExpression;return"<span>"+r((e.formatTime||a&&a.formatTime||i).call(a,null!=a?a.created:a,{name:"formatTime",hash:{},data:s}))+"</span>\n"+(null!=(l=e["if"].call(a,null!=a?a.name:a,{name:"if",hash:{},fn:this.program(1,s,0),inverse:this.noop,data:s}))?l:"")+"\n<span class='message-"+r((t=null!=(t=e.kindName||(null!=a?a.kindName:a))?t:i,"function"==typeof t?t.call(a,{name:"kindName",hash:{},data:s}):t))+"'>"+(null!=(l=(e.replace||a&&a.replace||i).call(a,"\\n","<br/>",{name:"replace",hash:{},fn:this.program(3,s,0),inverse:this.noop,data:s}))?l:"")+"</span><br/>"},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["chat/avatar"]=Handlebars.template({1:function(a,e,n,s){var l;return'<img src="'+this.escapeExpression((l=null!=(l=e.imageLink||(null!=a?a.imageLink:a))?l:e.helperMissing,"function"==typeof l?l.call(a,{name:"imageLink",hash:{},data:s}):l))+'" border="0" alt="" />'},3:function(a,e,n,s){return'<div class="default-avatar"></div>'},compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s){var l;return null!=(l=e["if"].call(a,null!=a?a.imageLink:a,{name:"if",hash:{},fn:this.program(1,s,0),inverse:this.program(3,s,0),data:s}))?l:""},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["chat/layout"]=Handlebars.template({1:function(a,e,n,s){return'        <div id="avatar-region"></div>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s){var l;return(null!=(l=this.invokePartial(n._logo,a,{name:"_logo",data:s,helpers:e,partials:n}))?l:"")+'\n<div id="chat-header">\n    <div class="background-center"><div class="background-left"><div class="background-right">\n        <div id="controls-region"></div>\n    </div></div></div>\n</div>\n\n<div id="chat">\n    <div class="background-left"><div class="background-right"><div class="background-shady-center"><div class="background-shady-left"><div class="background-shady-right">\n'+(null!=(l=e.unless.call(a,null!=(l=null!=a?a.user:a)?l.isAgent:l,{name:"unless",hash:{},fn:this.program(1,s,0),inverse:this.noop,data:s}))?l:"")+'        <div id="messages-region"></div>\n        <div id="status-region"></div>\n    </div></div></div></div></div>\n</div>\n\n<div id="message-form-region"></div>\n\n<div id="footer">'+this.escapeExpression((e.l10n||a&&a.l10n||e.helperMissing).call(a,"Powered by:",{name:"l10n",hash:{},data:s}))+' <a id="poweredby-link" href="http://mibew.org" title="Mibew Community" target="_blank">mibew.org</a></div>'},usePartial:!0,useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["chat/message"]=Handlebars.template({1:function(a,e,n,s){var l,t=e.helperMissing,i="function",r=this.escapeExpression;return"<span class='name-"+r((l=null!=(l=e.kindName||(null!=a?a.kindName:a))?l:t,typeof l===i?l.call(a,{name:"kindName",hash:{},data:s}):l))+"'>"+r((l=null!=(l=e.name||(null!=a?a.name:a))?l:t,typeof l===i?l.call(a,{name:"name",hash:{},data:s}):l))+"</span>: "},3:function(a,e,n,s){return this.escapeExpression((e.urlReplace||a&&a.urlReplace||e.helperMissing).call(a,null!=a?a.message:a,{name:"urlReplace",hash:{},data:s}))},compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s){var l,t,i=e.helperMissing,r=this.escapeExpression;return"<span>"+r((e.formatTime||a&&a.formatTime||i).call(a,null!=a?a.created:a,{name:"formatTime",hash:{},data:s}))+"</span> \n"+(null!=(l=e["if"].call(a,null!=a?a.name:a,{name:"if",hash:{},fn:this.program(1,s,0),inverse:this.noop,data:s}))?l:"")+"\n<span class='message-"+r((t=null!=(t=e.kindName||(null!=a?a.kindName:a))?t:i,"function"==typeof t?t.call(a,{name:"kindName",hash:{},data:s}):t))+"'>"+(null!=(l=(e.replace||a&&a.replace||i).call(a,"\\n","<br/>",{name:"replace",hash:{},fn:this.program(3,s,0),inverse:this.noop,data:s}))?l:"")+"</span><br/>"},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["chat/message_form"]=Handlebars.template({1:function(a,e,n,s){return'    <div class="background-center"><div class="background-left"><div class="background-right">\n        <textarea id="message-input" class="message" tabindex="0" rows="4" cols="10"></textarea>\n    </div></div></div>\n'},3:function(a,e,n,s){var l,t=e.helperMissing;return'    <div id="post-message">\n        <div id="predefined-wrapper">\n'+(null!=(l=e["if"].call(a,null!=(l=null!=a?a.user:a)?l.isAgent:l,{name:"if",hash:{},fn:this.program(4,s,0),inverse:this.noop,data:s}))?l:"")+'        </div>\n        <a href="javascript:void(0)" id="send-message" title="'+this.escapeExpression((e.l10n||a&&a.l10n||t).call(a,"Send message",{name:"l10n",hash:{},data:s}))+'">'+(null!=(l=(e.l10n||a&&a.l10n||t).call(a,"Send ({0})",null!=a?a.sendShortcut:a,{name:"l10n",hash:{},data:s}))?l:"")+"</a>\n    </div>\n"},4:function(a,e,n,s){var l;return'                <select id="predefined" size="1" class="answer">\n                    <option>'+this.escapeExpression((e.l10n||a&&a.l10n||e.helperMissing).call(a,"Select answer...",{name:"l10n",hash:{},data:s}))+"</option>\n"+(null!=(l=e.each.call(a,null!=a?a.predefinedAnswers:a,{name:"each",hash:{},fn:this.program(5,s,0),inverse:this.noop,data:s}))?l:"")+"                </select>\n"},5:function(a,e,n,s){return"                    <option>"+this.escapeExpression(this.lambda(null!=a?a["short"]:a,a))+"</option>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s){var l;return'<div id="message">\n'+(null!=(l=e["if"].call(a,null!=(l=null!=a?a.user:a)?l.canPost:l,{name:"if",hash:{},fn:this.program(1,s,0),inverse:this.noop,data:s}))?l:"")+'</div>\n\n<div id="send">\n'+(null!=(l=e["if"].call(a,null!=(l=null!=a?a.user:a)?l.canPost:l,{name:"if",hash:{},fn:this.program(3,s,0),inverse:this.noop,data:s}))?l:"")+'</div>\n<div class="clear"></div>'},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["invitation/layout"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s){return'<div id="invitation-messages-region"></div>'},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["leave_message/description"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s){var l,t=e.helperMissing;return'<div class="buttons">\n\n    <a href="javascript:Mibew.Utils.closeChatPopup();" title="'+this.escapeExpression((e.l10n||a&&a.l10n||t).call(a,"Close",{name:"l10n",hash:{},data:s}))+'">\n        <i class="glyphicon glyphicon-remove text-danger"/>\n        \n    </a>\n</div>\n<div class="info-message">'+(null!=(l=(e.l10n||a&&a.l10n||t).call(a,"Sorry. None of the support team is available at the moment. <br/>Please leave a message and someone will get back to you shortly.",{name:"l10n",hash:{},data:s}))?l:"")+"</div>"},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["leave_message/form"]=Handlebars.template({1:function(a,e,n,s){var l;return null!=(l=e["if"].call(a,null!=a?a.groupId:a,{name:"if",hash:{},fn:this.program(2,s,0),inverse:this.noop,data:s}))?l:""},2:function(a,e,n,s){var l;return'<input type="hidden" name="group" value="'+this.escapeExpression((l=null!=(l=e.groupId||(null!=a?a.groupId:a))?l:e.helperMissing,"function"==typeof l?l.call(a,{name:"groupId",hash:{},data:s}):l))+'"/>'},4:function(a,e,n,s){var l,t=e.helperMissing,i=this.escapeExpression;return'        <tr>\n            <td class="text"><strong>'+i((e.l10n||a&&a.l10n||t).call(a,"Choose Department:",{name:"l10n",hash:{},data:s}))+'</strong></td>\n            <td>\n                <select name="group" style="min-width:200px;">\n'+(null!=(l=e.each.call(a,null!=a?a.groups:a,{name:"each",hash:{},fn:this.program(5,s,0),inverse:this.noop,data:s}))?l:"")+'                </select>\n            </td>\n        </tr>\n        <tr>\n            <td class="text"><strong>'+i((e.l10n||a&&a.l10n||t).call(a,"Department description:",{name:"l10n",hash:{},data:s}))+'</strong></td>\n            <td class="text" id="group-description">\n                '+(null!=(l=e.each.call(a,null!=a?a.groups:a,{name:"each",hash:{},fn:this.program(8,s,0),inverse:this.noop,data:s}))?l:"")+"\n            </td>\n        </tr>\n"},5:function(a,e,n,s){var l,t=this.lambda,i=this.escapeExpression;return'                        <option value="'+i(t(null!=a?a.id:a,a))+'" '+(null!=(l=e["if"].call(a,null!=a?a.selected:a,{name:"if",hash:{},fn:this.program(6,s,0),inverse:this.noop,data:s}))?l:"")+">"+i(t(null!=a?a.name:a,a))+"</option>\n"},6:function(a,e,n,s){return'selected="selected"'},8:function(a,e,n,s){var l;return null!=(l=e["if"].call(a,null!=a?a.selected:a,{name:"if",hash:{},fn:this.program(9,s,0),inverse:this.noop,data:s}))?l:""},9:function(a,e,n,s){return this.escapeExpression(this.lambda(null!=a?a.description:a,a))},11:function(a,e,n,s){return'        <tr>\n            <td><img id="captcha-img" src="captcha"/></td>\n            <td><input type="text" name="captcha" size="50" maxlength="15" value="" class="username"/></td>\n        </tr>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s){var l,t,i=this.lambda,r=this.escapeExpression,o=e.helperMissing,p="function";return'<form name="leaveMessageForm" method="post" action="">\n    <input type="hidden" name="style" value="'+r(i(null!=(l=null!=a?a.page:a)?l.style:l,a))+'"/>\n    <input type="hidden" name="info" value="'+r((t=null!=(t=e.info||(null!=a?a.info:a))?t:o,typeof t===p?t.call(a,{name:"info",hash:{},data:s}):t))+'"/>\n    <input type="hidden" name="referrer" value="'+r((t=null!=(t=e.referrer||(null!=a?a.referrer:a))?t:o,typeof t===p?t.call(a,{name:"referrer",hash:{},data:s}):t))+'"/>\n    '+(null!=(l=e.unless.call(a,null!=a?a.groups:a,{name:"unless",hash:{},fn:this.program(1,s,0),inverse:this.noop,data:s}))?l:"")+'\n\n    <div class="errors"></div>\n    <div class="panel panel-default.">\n        <div class="panel-body">\n    <table class="form">\n    \n          <div class="form-group">\n          <div class="input-group">\n            <span class=\n            "input-group-addon"><i class="glyphicon glyphicon-envelope text-primary"></i></span>\n            <input class="form-control" type="text" name="email" placeholder="Email" class="username" autofocus="autofocus" value="'+r((t=null!=(t=e.email||(null!=a?a.email:a))?t:o,typeof t===p?t.call(a,{name:"email",hash:{},data:s}):t))+'" required>\n           </div>\n           </div>\n         <div class="form-group">\n         <div class="input-group">\n            <span class="input-group-addon"><i class="glyphicon glyphicon-user text-primary"></i></span>\n            <input type="text" name="name" class="form-control" placeholder="Name" autofocus="autofocus" value="'+r((t=null!=(t=e.name||(null!=a?a.name:a))?t:o,typeof t===p?t.call(a,{name:"name",hash:{},data:s}):t))+'" class="username" required>\n         </div>\n         </div>\n         <div class="form-group">\n         <div class="input-group">\n            <span class="input-group-addon"><i class="glyphicon glyphicon-phone text-primary"></i></span>\n            <input type="text" name="InputCno" class="form-control" placeholder="Phone">\n         </div>\n         </div>\n'+(null!=(l=e["if"].call(a,null!=a?a.groups:a,{name:"if",hash:{},fn:this.program(4,s,0),inverse:this.noop,data:s}))?l:"")+'        <div class="form-group">\n        <div class="input-group">\n        <span class="input-group-addon"><i class="glyphicon glyphicon-comment text-primary"></i></span>\n        <textarea name="message" tabindex="0" cols="40" rows="2" class="form-control" type="text" placeholder:"Message" required>'+r((t=null!=(t=e.message||(null!=a?a.message:a))?t:o,typeof t===p?t.call(a,{name:"message",hash:{},data:s}):t))+"</textarea>\n        </div>\n        </div>\n"+(null!=(l=e["if"].call(a,null!=a?a.showCaptcha:a,{name:"if",hash:{},fn:this.program(11,s,0),inverse:this.noop,data:s}))?l:"")+'    </table>\n    <a href="javascript:void(0);" class="but" id="send-message"><button type="submit" class="btn btn-primary pull-right" >'+r((e.l10n||a&&a.l10n||o).call(a,"Send",{name:"l10n",hash:{},data:s}))+'<span class="glyphicon glyphicon-send"></span></button></a>\n    <button type="reset" value="Reset" name="reset" class="btn btn-danger">Reset <span class="glyphicon glyphicon-refresh"></span></button>\n</div>\n    </div>\n    <div class="clear">&nbsp;</div>\n</form>\n<div id="ajax-loader"><img src="'+r(i(null!=(l=null!=a?a.page:a)?l.stylePath:l,a))+'/images/ajax-loader.gif" alt="Loading..." /></div>'},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["leave_message/layout"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s){var l;return(null!=(l=this.invokePartial(n._logo,a,{name:"_logo",data:s,helpers:e,partials:n}))?l:"")+'\n<div id="headers">\n    <div class="headers-inwards-wrapper-common"><div class="headers-inwards-wrapper-left"><div class="headers-inwards-wrapper-right"><div class="headers-inwards-wrapper-top"><div class="headers-inwards-wrapper-top-left"><div class="headers-inwards-wrapper-top-right"><div class="headers-inwards-wrapper-bottom-left"><div class="headers-inwards-wrapper-bottom-right" id="description-region">\n    </div></div></div></div></div></div></div></div>\n</div>\n\n<div id="content-wrapper"></div>'},usePartial:!0,useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["leave_message/sent_description"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s){var l=e.helperMissing,t=this.escapeExpression;return'<div class="buttons">\n        <a href="javascript:Mibew.Utils.closeChatPopup();" title="'+t((e.l10n||a&&a.l10n||l).call(a,"Close...",{name:"l10n",hash:{},data:s}))+'">\n            <i class="glyphicon glyphicon-remove"style="color:#80bfff" />\n        </a>\n</div>\n<div class="info-message">'+t((e.l10n||a&&a.l10n||l).call(a,"Thank you for your message. We'll answer your query by email as soon as possible.",{name:"l10n",hash:{},data:s}))+"</div>"},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["survey/form"]=Handlebars.template({1:function(a,e,n,s){var l;return'<input type="hidden" name="email" value="'+this.escapeExpression((l=null!=(l=e.email||(null!=a?a.email:a))?l:e.helperMissing,"function"==typeof l?l.call(a,{name:"email",hash:{},data:s}):l))+'"/>'},3:function(a,e,n,s){var l;return null!=(l=e["if"].call(a,null!=a?a.groupId:a,{name:"if",hash:{},fn:this.program(4,s,0),inverse:this.noop,data:s}))?l:""},4:function(a,e,n,s){var l;return'<input type="hidden" name="group" value="'+this.escapeExpression((l=null!=(l=e.groupId||(null!=a?a.groupId:a))?l:e.helperMissing,"function"==typeof l?l.call(a,{name:"groupId",hash:{},data:s}):l))+'"/>'},6:function(a,e,n,s){var l;return'<input type="hidden" name="message" value="'+this.escapeExpression((l=null!=(l=e.message||(null!=a?a.message:a))?l:e.helperMissing,"function"==typeof l?l.call(a,{name:"message",hash:{},data:s}):l))+'"/>'},8:function(a,e,n,s){var l,t=e.helperMissing,i=this.escapeExpression;return"        <tr>\n            <td><strong>"+i((e.l10n||a&&a.l10n||t).call(a,"Choose Department:",{name:"l10n",hash:{},data:s}))+'</strong></td>\n            <td>\n                <select name="group">\n'+(null!=(l=e.each.call(a,null!=a?a.groups:a,{name:"each",hash:{},fn:this.program(9,s,0),inverse:this.noop,data:s}))?l:"")+"                </select>\n            </td>\n        </tr>\n        <tr>\n            <td><strong>"+i((e.l10n||a&&a.l10n||t).call(a,"Department description:",{name:"l10n",hash:{},data:s}))+'</strong></td>\n            <td id="group-description">'+(null!=(l=e.each.call(a,null!=a?a.groups:a,{name:"each",hash:{},fn:this.program(14,s,0),inverse:this.noop,data:s}))?l:"")+"</td>\n        </tr>\n"},9:function(a,e,n,s){var l,t=this.lambda,i=this.escapeExpression;return'                        <option value="'+i(t(null!=a?a.id:a,a))+'" '+(null!=(l=e["if"].call(a,null!=a?a.selected:a,{name:"if",hash:{},fn:this.program(10,s,0),inverse:this.noop,data:s}))?l:"")+">"+i(t(null!=a?a.name:a,a))+(null!=(l=e.unless.call(a,null!=a?a.online:a,{name:"unless",hash:{},fn:this.program(12,s,0),inverse:this.noop,data:s}))?l:"")+"</option>\n"},10:function(a,e,n,s){return'selected="selected"'},12:function(a,e,n,s){return" (offline)"},14:function(a,e,n,s){var l;return null!=(l=e["if"].call(a,null!=a?a.selected:a,{name:"if",hash:{},fn:this.program(15,s,0),inverse:this.noop,data:s}))?l:""},15:function(a,e,n,s){return this.escapeExpression(this.lambda(null!=a?a.description:a,a))},17:function(a,e,n,s){return'disabled="disabled"'},19:function(a,e,n,s){var l,t=e.helperMissing,i=this.escapeExpression;return"        <tr>\n            <td><strong>"+i((e.l10n||a&&a.l10n||t).call(a,"Email:",{name:"l10n",hash:{},data:s}))+'</strong></td>\n            <td><input type="text" name="email" size="50" value="'+i((l=null!=(l=e.email||(null!=a?a.email:a))?l:t,"function"==typeof l?l.call(a,{name:"email",hash:{},data:s}):l))+'" class="username"/></td>\n        </tr>\n'},21:function(a,e,n,s){var l,t=e.helperMissing,i=this.escapeExpression;return"        <tr>\n            <td><strong>"+i((e.l10n||a&&a.l10n||t).call(a,"Initial Question:",{name:"l10n",hash:{},data:s}))+'</strong></td>\n            <td valign="top"><textarea name="message" tabindex="0" cols="45" rows="2">'+i((l=null!=(l=e.message||(null!=a?a.message:a))?l:t,"function"==typeof l?l.call(a,{name:"message",hash:{},data:s}):l))+"</textarea></td>\n        </tr>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s){var l,t,i=this.lambda,r=this.escapeExpression,o=e.helperMissing,p="function";return'<form name="surveyForm" method="post" action="">\n    <input type="hidden" name="style" value="'+r(i(null!=(l=null!=a?a.page:a)?l.style:l,a))+'"/>\n    <input type="hidden" name="info" value="'+r((t=null!=(t=e.info||(null!=a?a.info:a))?t:o,typeof t===p?t.call(a,{name:"info",hash:{},data:s}):t))+'"/>\n    <input type="hidden" name="referrer" value="'+r((t=null!=(t=e.referrer||(null!=a?a.referrer:a))?t:o,typeof t===p?t.call(a,{name:"referrer",hash:{},data:s}):t))+'"/>\n    <input type="hidden" name="survey" value="on"/>\n    '+(null!=(l=e.unless.call(a,null!=a?a.showEmail:a,{name:"unless",hash:{},fn:this.program(1,s,0),inverse:this.noop,data:s}))?l:"")+"\n    "+(null!=(l=e.unless.call(a,null!=a?a.groups:a,{name:"unless",hash:{},fn:this.program(3,s,0),inverse:this.noop,data:s}))?l:"")+"\n    "+(null!=(l=e.unless.call(a,null!=a?a.showMessage:a,{name:"unless",hash:{},fn:this.program(6,s,0),inverse:this.noop,data:s}))?l:"")+'\n    \n    <div class="errors"></div>\n    \n    <div class="panel panel-default">\n    <div class="panel-body">\n    <table class="form">\n'+(null!=(l=e["if"].call(a,null!=a?a.groups:a,{name:"if",hash:{},fn:this.program(8,s,0),inverse:this.noop,data:s}))?l:"")+'           <div class="form-group">\n         <div class="input-group">\n            <span class="input-group-addon"><i class="glyphicon glyphicon-user text-primary"></i></span>\n            <input type="text" name="name" class="form-control" placeholder="Name" autofocus="autofocus" value="'+r((t=null!=(t=e.name||(null!=a?a.name:a))?t:o,typeof t===p?t.call(a,{name:"name",hash:{},data:s}):t))+'" '+(null!=(l=e.unless.call(a,null!=a?a.canChangeName:a,{name:"unless",hash:{},fn:this.program(17,s,0),inverse:this.noop,data:s}))?l:"")+'class="username" required>\n         </div>\n         </div>\n'+(null!=(l=e["if"].call(a,null!=a?a.showEmail:a,{name:"if",hash:{},fn:this.program(19,s,0),inverse:this.noop,data:s}))?l:"")+(null!=(l=e["if"].call(a,null!=a?a.showMessage:a,{name:"if",hash:{},fn:this.program(21,s,0),inverse:this.noop,data:s}))?l:"")+'    </table>\n    \n        <a href="javascript:void(0);" class="but btn-primary" id="submit-survey"><div class="round hollow text-center">\n        <span class="glyphicon glyphicon-comment"></span>'+r((e.l10n||a&&a.l10n||o).call(a," Start Chat",{name:"l10n",hash:{},data:s}))+'\n        </a>\n        </div>\n    </div>\n    </div>\n    <div class="clear">&nbsp;</div>\n</form>\n<div id="ajax-loader"><img src="'+r(i(null!=(l=null!=a?a.page:a)?l.stylePath:l,a))+'/images/ajax-loader.gif" alt="Loading..." /></div>'},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["survey/layout"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s){var l,t=e.helperMissing,i=this.escapeExpression;return(null!=(l=this.invokePartial(n._logo,a,{name:"_logo",data:s,helpers:e,partials:n}))?l:"")+'\n<div id="headers">\n    <div class="headers-inwards-wrapper-common"><div class="headers-inwards-wrapper-left"><div class="headers-inwards-wrapper-right"><div class="headers-inwards-wrapper-top"><div class="headers-inwards-wrapper-top-left"><div class="headers-inwards-wrapper-top-right"><div class="headers-inwards-wrapper-bottom-left"><div class="headers-inwards-wrapper-bottom-right">\n        <div class="buttons">\n            <a href="javascript:Mibew.Utils.closeChatPopup();" title="'+i((e.l10n||a&&a.l10n||t).call(a,"Close",{name:"l10n",hash:{},data:s}))+'"><i class="glyphicon glyphicon-remove text-danger"/></a>\n        </div>\n        <div class="info-message">'+i((e.l10n||a&&a.l10n||t).call(a,"Thank you for contacting us. Please fill out the form below and click the Start Chat button.",{name:"l10n",hash:{},data:s}))+'</div>\n    </div></div></div></div></div></div></div></div>\n</div>\n\n<div id="content-wrapper"></div>'},usePartial:!0,useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["chat/controls/close"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s){return'<div class="tpl-image" title="'+this.escapeExpression((e.l10n||a&&a.l10n||e.helperMissing).call(a,"Close chat",{name:"l10n",hash:{},data:s}))+'"></div>'},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["chat/controls/history"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s){return'<div class="tpl-image" title="'+this.escapeExpression((e.l10n||a&&a.l10n||e.helperMissing).call(a,"Visit history",{name:"l10n",hash:{},data:s}))+'"></div>'},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["chat/controls/redirect"]=Handlebars.template({1:function(a,e,n,s){return'<div class="tpl-image" title="'+this.escapeExpression((e.l10n||a&&a.l10n||e.helperMissing).call(a,"Redirect visitor to another operator",{name:"l10n",hash:{},data:s}))+'"></div>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s){var l;return null!=(l=e["if"].call(a,null!=(l=null!=a?a.user:a)?l.canPost:l,{name:"if",hash:{},fn:this.program(1,s,0),inverse:this.noop,data:s}))?l:""},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["chat/controls/refresh"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s){return'<div class="tpl-image" title="'+this.escapeExpression((e.l10n||a&&a.l10n||e.helperMissing).call(a,"Refresh",{name:"l10n",hash:{},data:s}))+'"></div>'},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["chat/controls/secure_mode"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s){return'<div class="tpl-image" title="SSL"></div>'},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["chat/controls/send_mail"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s){return'<div class="tpl-image" title="'+this.escapeExpression((e.l10n||a&&a.l10n||e.helperMissing).call(a,"Send chat history by e-mail",{name:"l10n",hash:{},data:s}))+'"></div>'},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["chat/controls/sound"]=Handlebars.template({1:function(a,e,n,s){return'    <div class="tpl-image sound-control-on" title="'+this.escapeExpression((e.l10n||a&&a.l10n||e.helperMissing).call(a,"Turn off sound",{name:"l10n",hash:{},data:s}))+'"></div>\n'},3:function(a,e,n,s){return'    <div class="tpl-image sound-control-off" title="'+this.escapeExpression((e.l10n||a&&a.l10n||e.helperMissing).call(a,"Turn on sound",{name:"l10n",hash:{},data:s}))+'"></div>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s){var l;return null!=(l=e["if"].call(a,null!=a?a.enabled:a,{name:"if",hash:{},fn:this.program(1,s,0),inverse:this.program(3,s,0),data:s}))?l:""},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["chat/controls/user_name"]=Handlebars.template({1:function(a,e,n,s){var l;return'    <span class="user-name-control-prefix">'+this.escapeExpression((e.l10n||a&&a.l10n||e.helperMissing).call(a,"You are",{name:"l10n",hash:{},data:s}))+"</span>\n"+(null!=(l=e["if"].call(a,null!=a?a.nameInput:a,{name:"if",hash:{},fn:this.program(2,s,0),inverse:this.program(4,s,0),data:s}))?l:"")},2:function(a,e,n,s){var l,t=this.escapeExpression;return'        <div class="user-name-control-input-background"><input id="user-name-control-input" type="text" size="12" value="'+t(this.lambda(null!=(l=null!=a?a.user:a)?l.name:l,a))+'" class="username" /></div>\n        <a href="javascript:void(0)" class="user-name-control-set tpl-image" title="'+t((e.l10n||a&&a.l10n||e.helperMissing).call(a,"Change name",{name:"l10n",hash:{},data:s}))+'"></a>\n'},4:function(a,e,n,s){var l,t=e.helperMissing,i=this.escapeExpression;return'        <a href="javascript:void(0)" title="'+i((e.l10n||a&&a.l10n||t).call(a,"Change name",{name:"l10n",hash:{},data:s}))+'">'+i(this.lambda(null!=(l=null!=a?a.user:a)?l.name:l,a))+'</a>\n        <a class="user-name-control-change tpl-image" title="'+i((e.l10n||a&&a.l10n||t).call(a,"Change name",{name:"l10n",hash:{},data:s}))+'"></a>\n'},6:function(a,e,n,s){var l,t=this.escapeExpression;return t((e.l10n||a&&a.l10n||e.helperMissing).call(a,"You are",{name:"l10n",hash:{},data:s}))+"&nbsp;"+t(this.lambda(null!=(l=null!=a?a.user:a)?l.name:l,a))+"\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s){var l;return null!=(l=e["if"].call(a,null!=(l=null!=a?a.user:a)?l.canChangeName:l,{name:"if",hash:{},fn:this.program(1,s,0),inverse:this.program(6,s,0),data:s}))?l:""},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["chat/status/base"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s){var l;return this.escapeExpression((l=null!=(l=e.title||(null!=a?a.title:a))?l:e.helperMissing,"function"==typeof l?l.call(a,{name:"title",hash:{},data:s}):l))},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["chat/status/message"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s){var l;return this.escapeExpression((l=null!=(l=e.message||(null!=a?a.message:a))?l:e.helperMissing,"function"==typeof l?l.call(a,{name:"message",hash:{},data:s}):l))},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["chat/status/typing"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,n,s){return this.escapeExpression((e.l10n||a&&a.l10n||e.helperMissing).call(a,"Remote user is typing...",{name:"l10n",hash:{},data:s}))},useData:!0})}();