var fakewaffle=(function(b,a){a.responsiveTabs=function(e){a.currentPosition="tabs";
var d=b(".nav-tabs.responsive");
var f="";
var g="";
var c="";
if(e===undefined){e=["xs","sm"]
}b.each(e,function(){f+=" hidden-"+this;
g+=" visible-"+this
});
b.each(d,function(){var h=b(this);
var i=h.find("li a");
var j=b("<div></div>",{"class":"panel-group responsive"+g,id:"collapse-"+h.attr("id")});
b.each(i,function(){var p=b(this);
var l=p.attr("class")===undefined?"":p.attr("class");
var k="accordion-toggle";
var o=p.parent().attr("class")===undefined?"":p.parent().attr("class");
var n="panel panel-default";
var m=p.get(0).hash.replace("#","collapse-");
if(l.length>0){k+=" "+l
}if(o.length>0){o=o.replace(/\bactive\b/g,"");
n+=" "+o;
n=n.replace(/\s{2,}/g," ");
n=n.replace(/^\s+|\s+$/g,"")
}if(p.parent().hasClass("active")){c="#"+m
}j.append(b("<div>").attr("class",n).html(b("<div>").attr("class","panel-heading").html(b("<h4>").attr("class","panel-title").html(b("<a>",{"class":k,"data-toggle":"collapse","data-parent":"#collapse-"+h.attr("id"),href:"#"+m,html:p.html()})))).append(b("<div>",{id:m,"class":"panel-collapse collapse"})))
});
h.next().after(j);
h.addClass(f);
b(".tab-content.responsive").addClass(f)
});
a.checkResize();
a.bindTabToCollapse();
if(c){b(c).collapse("show")
}};
a.checkResize=function(){if(b(".panel-group.responsive").is(":visible")===true&&a.currentPosition==="tabs"){a.tabToPanel();
a.currentPosition="panel"
}else{if(b(".panel-group.responsive").is(":visible")===false&&a.currentPosition==="panel"){a.panelToTab();
a.currentPosition="tabs"
}}};
a.tabToPanel=function(){var c=b(".nav-tabs.responsive");
b.each(c,function(d,e){var f=b(e).next(".tab-content").find(">.tab-pane");
b.each(f,function(g,h){var i=b(h).attr("id").replace(/^/,"#collapse-");
b(h).removeClass("tab-pane").addClass("panel-body").appendTo(b(i))
})
})
};
a.panelToTab=function(){var c=b(".panel-group.responsive");
b.each(c,function(f,e){var h=b(e).attr("id").replace("collapse-","#");
var d=b(h).next(".tab-content")[0];
var g=b(e).find(">.panel-default>.panel-collapse>.panel-body");
console.log(g);
g.removeClass("panel-body").addClass("tab-pane").appendTo(b(d))
})
};
a.bindTabToCollapse=function(){var c=b(".nav-tabs.responsive").find("li a");
var d=b(".panel-group.responsive").find(".panel-collapse");
c.on("shown.bs.tab",function(h){var g=b(h.currentTarget.hash.replace(/#/,"#collapse-"));
g.collapse("show");
if(h.relatedTarget){var f=b(h.relatedTarget.hash.replace(/#/,"#collapse-"));
f.collapse("hide")
}});
d.on("shown.bs.collapse",function(h){var g=b(h.target).context.id.replace(/collapse-/g,"#");
b('a[href="'+g+'"]').tab("show");
var f=b(h.currentTarget).closest(".panel-group.responsive");
b(f).find(".panel-body").removeClass("active");
b(h.currentTarget).find(".panel-body").addClass("active")
})
};
b(window).resize(function(){a.checkResize()
});
return a
}(window.jQuery,fakewaffle||{}));
/*! jQuery Mobile v1.4.3 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */
(function(b,a,c){typeof define=="function"&&define.amd?define(["jquery"],function(d){return c(d,b,a),d.mobile
}):c(b.jQuery,b,a)
})(this,document,function(c,a,d,b){(function(aC,am,at,ao){function G(f){while(f&&typeof f.originalEvent!="undefined"){f=f.originalEvent
}return f
}function W(x,g){var k=x.type,y,f,u,j,r,m,e,q,w;
x=aC.Event(x),x.type=g,y=x.originalEvent,f=aC.event.props,k.search(/^(mouse|click)/)>-1&&(f=aB);
if(y){for(e=f.length,j;
e;
){j=f[--e],x[j]=y[j]
}}k.search(/mouse(down|up)|click/)>-1&&!x.which&&(x.which=1);
if(k.search(/^touch/)!==-1){u=G(y),k=u.touches,r=u.changedTouches,m=k&&k.length?k[0]:r&&r.length?r[0]:ao;
if(m){for(q=0,w=al.length;
q<w;
q++){j=al[q],x[j]=m[j]
}}}return x
}function ae(e){var h={},g,f;
while(e){g=aC.data(e,ay);
for(f in g){g[f]&&(h[f]=h.hasVirtualBinding=!0)
}e=e.parentNode
}return h
}function aw(e,g){var f;
while(e){f=aC.data(e,ay);
if(f&&(!g||f[g])){return e
}e=e.parentNode
}return null
}function Y(){aA=!1
}function ag(){aA=!0
}function V(){ac=0,ak.length=0,au=!1,ag()
}function X(){Y()
}function aH(){ad(),aE=setTimeout(function(){aE=0,V()
},aC.vmouse.resetTimerDuration)
}function ad(){aE&&(clearTimeout(aE),aE=0)
}function Q(f,h,g){var e;
if(g&&g[f]||!g&&aw(h.target,f)){e=W(h,f),aC(h.target).trigger(e)
}return e
}function aa(e){var g=aC.data(e.target,an),f;
!au&&(!ac||ac!==g)&&(f=Q("v"+e.type,e),f&&(f.isDefaultPrevented()&&e.preventDefault(),f.isPropagationStopped()&&e.stopPropagation(),f.isImmediatePropagationStopped()&&e.stopImmediatePropagation()))
}function af(f){var j=G(f).touches,g,e,h;
j&&j.length===1&&(g=f.target,e=ae(g),e.hasVirtualBinding&&(ac=aj++,aC.data(g,an,ac),ad(),X(),aD=!1,h=G(f).touches[0],az=h.pageX,aq=h.pageY,Q("vmouseover",f,e),Q("vmousedown",f,e)))
}function ax(f){if(aA){return
}aD||Q("vmousecancel",f,ae(f.target)),aD=!0,aH()
}function ab(f){if(aA){return
}var j=G(f).touches[0],h=aD,e=aC.vmouse.moveDistanceThreshold,g=ae(f.target);
aD=aD||Math.abs(j.pageX-az)>e||Math.abs(j.pageY-aq)>e,aD&&!h&&Q("vmousecancel",f,g),Q("vmousemove",f,g),aH()
}function Z(h){if(aA){return
}ag();
var f=ae(h.target),i,g;
Q("vmouseup",h,f),aD||(i=Q("vclick",h,f),i&&i.isDefaultPrevented()&&(g=G(h).changedTouches[0],ak.push({touchID:ac,x:g.clientX,y:g.clientY}),au=!0)),Q("vmouseout",h,f),aD=!1,aH()
}function ap(e){var g=aC.data(e,ay),f;
if(g){for(f in g){if(g[f]){return !0
}}}return !1
}function K(){}function z(e){var f=e.substr(1);
return{setup:function(){ap(this)||aC.data(this,ay,{});
var g=aC.data(this,ay);
g[e]=!0,av[e]=(av[e]||0)+1,av[e]===1&&aF.bind(f,aa),aC(this).bind(f,K),ah&&(av.touchstart=(av.touchstart||0)+1,av.touchstart===1&&aF.bind("touchstart",af).bind("touchend",Z).bind("touchmove",ab).bind("scroll",ax))
},teardown:function(){--av[e],av[e]||aF.unbind(f,aa),ah&&(--av.touchstart,av.touchstart||aF.unbind("touchstart",af).unbind("touchmove",ab).unbind("touchend",Z).unbind("scroll",ax));
var h=aC(this),g=aC.data(this,ay);
g&&(g[e]=!1),h.unbind(f,K),ap(this)||h.removeData(ay)
}}
}var ay="virtualMouseBindings",an="virtualTouchID",ar="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),al="clientX clientY pageX pageY screenX screenY".split(" "),aG=aC.event.mouseHooks?aC.event.mouseHooks.props:[],aB=aC.event.props.concat(aG),av={},aE=0,az=0,aq=0,aD=!1,ak=[],au=!1,aA=!1,ah="addEventListener" in at,aF=aC(at),aj=1,ac=0,J,ai;
aC.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};
for(ai=0;
ai<ar.length;
ai++){aC.event.special[ar[ai]]=z(ar[ai])
}ah&&at.addEventListener("click",function(s){var h=ak.length,e=s.target,k,g,q,p,m,j;
if(h){k=s.clientX,g=s.clientY,J=aC.vmouse.clickDistanceThreshold,q=e;
while(q){for(p=0;
p<h;
p++){m=ak[p],j=0;
if(q===e&&Math.abs(m.x-k)<J&&Math.abs(m.y-g)<J||aC.data(q,an)===m.touchID){s.preventDefault(),s.stopPropagation();
return
}}q=q.parentNode
}}},!0)
})(c,a,d),function(f){f.mobile={}
}(c),function(h,f){var g={touch:"ontouchend" in d};
h.mobile.support=h.mobile.support||{},h.extend(h.support,g),h.extend(h.mobile.support,g)
}(c),function(n,v,g){function j(f,u,e,l){var r=e.type;
e.type=u,l?n.event.trigger(e,g,f):n.event.dispatch.call(f,e),e.type=r
}var k=n(d),w=n.mobile.support.touch,h="touchmove scroll",q=w?"touchstart":"mousedown",p=w?"touchend":"mouseup",m=w?"touchmove":"mousemove";
n.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(e,f){n.fn[f]=function(i){return i?this.bind(f,i):this.trigger(f)
},n.attrFn&&(n.attrFn[f]=!0)
}),n.event.special.scrollstart={enabled:!0,setup:function(){function l(i,r){o=r,j(f,o?"scrollstart":"scrollstop",i)
}var f=this,u=n(f),o,e;
u.bind(h,function(i){if(!n.event.special.scrollstart.enabled){return
}o||l(i,!0),clearTimeout(e),e=setTimeout(function(){l(i,!1)
},50)
})
},teardown:function(){n(this).unbind(h)
}},n.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var e=this,i=n(e),f=!1;
i.bind("vmousedown",function(t){function l(){clearTimeout(r)
}function x(){l(),i.unbind("vclick",z).unbind("vmouseup",l),k.unbind("vmousecancel",x)
}function z(o){x(),!f&&y===o.target?j(e,"tap",o):f&&o.preventDefault()
}f=!1;
if(t.which&&t.which!==1){return !1
}var y=t.target,r;
i.bind("vmouseup",l).bind("vclick",z),k.bind("vmousecancel",x),r=setTimeout(function(){n.event.special.tap.emitTapOnTaphold||(f=!0),j(e,"taphold",n.Event("taphold",{target:y}))
},n.event.special.tap.tapholdThreshold)
})
},teardown:function(){n(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),k.unbind("vmousecancel")
}},n.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1000,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(t){var u=v.pageXOffset,o=v.pageYOffset,f=t.clientX,l=t.clientY;
if(t.pageY===0&&Math.floor(l)>Math.floor(t.pageY)||t.pageX===0&&Math.floor(f)>Math.floor(t.pageX)){f-=u,l-=o
}else{if(l<t.pageY-o||f<t.pageX-u){f=t.pageX-u,l=t.pageY-o
}}return{x:f,y:l}
},start:function(e){var i=e.originalEvent.touches?e.originalEvent.touches[0]:e,f=n.event.special.swipe.getLocation(i);
return{time:(new Date).getTime(),coords:[f.x,f.y],origin:n(e.target)}
},stop:function(e){var i=e.originalEvent.touches?e.originalEvent.touches[0]:e,f=n.event.special.swipe.getLocation(i);
return{time:(new Date).getTime(),coords:[f.x,f.y]}
},handleSwipe:function(f,u,o,e){if(u.time-f.time<n.event.special.swipe.durationThreshold&&Math.abs(f.coords[0]-u.coords[0])>n.event.special.swipe.horizontalDistanceThreshold&&Math.abs(f.coords[1]-u.coords[1])<n.event.special.swipe.verticalDistanceThreshold){var l=f.coords[0]>u.coords[0]?"swipeleft":"swiperight";
return j(o,"swipe",n.Event("swipe",{target:e,swipestart:f,swipestop:u}),!0),j(o,l,n.Event(l,{target:e,swipestart:f,swipestop:u}),!0),!0
}return !1
},eventInProgress:!1,setup:function(){var e,l=this,i=n(l),f={};
e=n.data(this,"mobile-events"),e||(e={length:0},n.data(this,"mobile-events",e)),e.length++,e.swipe=f,f.start=function(y){if(n.event.special.swipe.eventInProgress){return
}n.event.special.swipe.eventInProgress=!0;
var z,A=n.event.special.swipe.start(y),x=y.target,s=!1;
f.move=function(o){if(!A){return
}z=n.event.special.swipe.stop(o),s||(s=n.event.special.swipe.handleSwipe(A,z,l,x),s&&(n.event.special.swipe.eventInProgress=!1)),Math.abs(A.coords[0]-z.coords[0])>n.event.special.swipe.scrollSupressionThreshold&&o.preventDefault()
},f.stop=function(){s=!0,n.event.special.swipe.eventInProgress=!1,k.off(m,f.move),f.move=null
},k.on(m,f.move).one(p,f.stop)
},i.on(q,f.start)
},teardown:function(){var e,f;
e=n.data(this,"mobile-events"),e&&(f=e.swipe,delete e.swipe,e.length--,e.length===0&&n.removeData(this,"mobile-events")),f&&(f.start&&n(this).off(q,f.start),f.move&&k.off(m,f.move),f.stop&&k.off(p,f.stop))
}},n.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(e,f){n.event.special[e]={setup:function(){n(this).bind(f,n.noop)
},teardown:function(){n(this).unbind(f)
}}
})
}(c,this)
});
/*!
 * jQuery Validation Plugin v1.13.1
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2014 Jörn Zaefferer
 * Released under the MIT license
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{a(jQuery)
}}(function(d){d.extend(d.fn,{validate:function(e){if(!this.length){if(e&&e.debug&&window.console){console.warn("Nothing selected, can't validate, returning nothing.")
}return
}var f=d.data(this[0],"validator");
if(f){return f
}this.attr("novalidate","novalidate");
f=new d.validator(e,this[0]);
d.data(this[0],"validator",f);
if(f.settings.onsubmit){this.validateDelegate(":submit","click",function(g){if(f.settings.submitHandler){f.submitButton=g.target
}if(d(g.target).hasClass("cancel")){f.cancelSubmit=true
}if(d(g.target).attr("formnovalidate")!==undefined){f.cancelSubmit=true
}});
this.submit(function(g){if(f.settings.debug){g.preventDefault()
}function h(){var j,i;
if(f.settings.submitHandler){if(f.submitButton){j=d("<input type='hidden'/>").attr("name",f.submitButton.name).val(d(f.submitButton).val()).appendTo(f.currentForm)
}i=f.settings.submitHandler.call(f,f.currentForm,g);
if(f.submitButton){j.remove()
}if(i!==undefined){return i
}return false
}return true
}if(f.cancelSubmit){f.cancelSubmit=false;
return h()
}if(f.form()){if(f.pendingRequest){f.formSubmitted=true;
return false
}return h()
}else{f.focusInvalid();
return false
}})
}return f
},valid:function(){var f,e;
if(d(this[0]).is("form")){f=this.validate().form()
}else{f=true;
e=d(this[0].form).validate();
this.each(function(){f=e.element(this)&&f
})
}return f
},removeAttrs:function(g){var e={},f=this;
d.each(g.split(/\s/),function(h,i){e[i]=f.attr(i);
f.removeAttr(i)
});
return e
},rules:function(h,e){var j=this[0],g,l,m,i,f,k;
if(h){g=d.data(j.form,"validator").settings;
l=g.rules;
m=d.validator.staticRules(j);
switch(h){case"add":d.extend(m,d.validator.normalizeRule(e));
delete m.messages;
l[j.name]=m;
if(e.messages){g.messages[j.name]=d.extend(g.messages[j.name],e.messages)
}break;
case"remove":if(!e){delete l[j.name];
return m
}k={};
d.each(e.split(/\s/),function(n,o){k[o]=m[o];
delete m[o];
if(o==="required"){d(j).removeAttr("aria-required")
}});
return k
}}i=d.validator.normalizeRules(d.extend({},d.validator.classRules(j),d.validator.attributeRules(j),d.validator.dataRules(j),d.validator.staticRules(j)),j);
if(i.required){f=i.required;
delete i.required;
i=d.extend({required:f},i);
d(j).attr("aria-required","true")
}if(i.remote){f=i.remote;
delete i.remote;
i=d.extend(i,{remote:f})
}return i
}});
d.extend(d.expr[":"],{blank:function(e){return !d.trim(""+d(e).val())
},filled:function(e){return !!d.trim(""+d(e).val())
},unchecked:function(e){return !d(e).prop("checked")
}});
d.validator=function(e,f){this.settings=d.extend(true,{},d.validator.defaults,e);
this.currentForm=f;
this.init()
};
d.validator.format=function(e,f){if(arguments.length===1){return function(){var g=d.makeArray(arguments);
g.unshift(e);
return d.validator.format.apply(this,g)
}
}if(arguments.length>2&&f.constructor!==Array){f=d.makeArray(arguments).slice(1)
}if(f.constructor!==Array){f=[f]
}d.each(f,function(g,h){e=e.replace(new RegExp("\\{"+g+"\\}","g"),function(){return h
})
});
return e
};
d.extend(d.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusCleanup:false,focusInvalid:true,errorContainer:d([]),errorLabelContainer:d([]),onsubmit:true,ignore:":hidden",ignoreTitle:false,onfocusin:function(e){this.lastActive=e;
if(this.settings.focusCleanup){if(this.settings.unhighlight){this.settings.unhighlight.call(this,e,this.settings.errorClass,this.settings.validClass)
}this.hideThese(this.errorsFor(e))
}},onfocusout:function(e){if(!this.checkable(e)&&(e.name in this.submitted||!this.optional(e))){this.element(e)
}},onkeyup:function(e,f){if(f.which===9&&this.elementValue(e)===""){return
}else{if(e.name in this.submitted||e===this.lastElement){this.element(e)
}}},onclick:function(e){if(e.name in this.submitted){this.element(e)
}else{if(e.parentNode.name in this.submitted){this.element(e.parentNode)
}}},highlight:function(g,e,f){if(g.type==="radio"){this.findByName(g.name).addClass(e).removeClass(f)
}else{d(g).addClass(e).removeClass(f)
}},unhighlight:function(g,e,f){if(g.type==="radio"){this.findByName(g.name).removeClass(e).addClass(f)
}else{d(g).removeClass(e).addClass(f)
}}},setDefaults:function(e){d.extend(d.validator.defaults,e)
},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:d.validator.format("Please enter no more than {0} characters."),minlength:d.validator.format("Please enter at least {0} characters."),rangelength:d.validator.format("Please enter a value between {0} and {1} characters long."),range:d.validator.format("Please enter a value between {0} and {1}."),max:d.validator.format("Please enter a value less than or equal to {0}."),min:d.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){this.labelContainer=d(this.settings.errorLabelContainer);
this.errorContext=this.labelContainer.length&&this.labelContainer||d(this.currentForm);
this.containers=d(this.settings.errorContainer).add(this.settings.errorLabelContainer);
this.submitted={};
this.valueCache={};
this.pendingRequest=0;
this.pending={};
this.invalid={};
this.reset();
var e=(this.groups={}),g;
d.each(this.settings.groups,function(h,i){if(typeof i==="string"){i=i.split(/\s/)
}d.each(i,function(k,j){e[j]=h
})
});
g=this.settings.rules;
d.each(g,function(h,i){g[h]=d.validator.normalizeRule(i)
});
function f(k){var i=d.data(this[0].form,"validator"),h="on"+k.type.replace(/^validate/,""),j=i.settings;
if(j[h]&&!this.is(j.ignore)){j[h].call(i,this[0],k)
}}d(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']","focusin focusout keyup",f).validateDelegate("select, option, [type='radio'], [type='checkbox']","click",f);
if(this.settings.invalidHandler){d(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)
}d(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")
},form:function(){this.checkForm();
d.extend(this.submitted,this.errorMap);
this.invalid=d.extend({},this.errorMap);
if(!this.valid()){d(this.currentForm).triggerHandler("invalid-form",[this])
}this.showErrors();
return this.valid()
},checkForm:function(){this.prepareForm();
for(var e=0,f=(this.currentElements=this.elements());
f[e];
e++){this.check(f[e])
}return this.valid()
},element:function(g){var h=this.clean(g),f=this.validationTargetFor(h),e=true;
this.lastElement=f;
if(f===undefined){delete this.invalid[h.name]
}else{this.prepareElement(f);
this.currentElements=d(f);
e=this.check(f)!==false;
if(e){delete this.invalid[f.name]
}else{this.invalid[f.name]=true
}}d(g).attr("aria-invalid",!e);
if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers)
}this.showErrors();
return e
},showErrors:function(f){if(f){d.extend(this.errorMap,f);
this.errorList=[];
for(var e in f){this.errorList.push({message:f[e],element:this.findByName(e)[0]})
}this.successList=d.grep(this.successList,function(g){return !(g.name in f)
})
}if(this.settings.showErrors){this.settings.showErrors.call(this,this.errorMap,this.errorList)
}else{this.defaultShowErrors()
}},resetForm:function(){if(d.fn.resetForm){d(this.currentForm).resetForm()
}this.submitted={};
this.lastElement=null;
this.prepareForm();
this.hideErrors();
this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
},numberOfInvalids:function(){return this.objectLength(this.invalid)
},objectLength:function(g){var f=0,e;
for(e in g){f++
}return f
},hideErrors:function(){this.hideThese(this.toHide)
},hideThese:function(e){e.not(this.containers).text("");
this.addWrapper(e).hide()
},valid:function(){return this.size()===0
},size:function(){return this.errorList.length
},focusInvalid:function(){if(this.settings.focusInvalid){try{d(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")
}catch(f){}}},findLastActive:function(){var e=this.lastActive;
return e&&d.grep(this.errorList,function(f){return f.element.name===e.name
}).length===1&&e
},elements:function(){var f=this,e={};
return d(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function(){if(!this.name&&f.settings.debug&&window.console){console.error("%o has no name assigned",this)
}if(this.name in e||!f.objectLength(d(this).rules())){return false
}e[this.name]=true;
return true
})
},clean:function(e){return d(e)[0]
},errors:function(){var e=this.settings.errorClass.split(" ").join(".");
return d(this.settings.errorElement+"."+e,this.errorContext)
},reset:function(){this.successList=[];
this.errorList=[];
this.errorMap={};
this.toShow=d([]);
this.toHide=d([]);
this.currentElements=d([])
},prepareForm:function(){this.reset();
this.toHide=this.errors().add(this.containers)
},prepareElement:function(e){this.reset();
this.toHide=this.errorsFor(e)
},elementValue:function(f){var h,e=d(f),g=f.type;
if(g==="radio"||g==="checkbox"){return d("input[name='"+f.name+"']:checked").val()
}else{if(g==="number"&&typeof f.validity!=="undefined"){return f.validity.badInput?false:e.val()
}}h=e.val();
if(typeof h==="string"){return h.replace(/\r/g,"")
}return h
},check:function(h){h=this.validationTargetFor(this.clean(h));
var l=d(h).rules(),j=d.map(l,function(o,e){return e
}).length,m=false,g=this.elementValue(h),n,f,k;
for(f in l){k={method:f,parameters:l[f]};
try{n=d.validator.methods[f].call(this,g,h,k.parameters);
if(n==="dependency-mismatch"&&j===1){m=true;
continue
}m=false;
if(n==="pending"){this.toHide=this.toHide.not(this.errorsFor(h));
return
}if(!n){this.formatAndAdd(h,k);
return false
}}catch(i){if(this.settings.debug&&window.console){console.log("Exception occurred when checking element "+h.id+", check the '"+k.method+"' method.",i)
}throw i
}}if(m){return
}if(this.objectLength(l)){this.successList.push(h)
}return true
},customDataMessage:function(e,f){return d(e).data("msg"+f.charAt(0).toUpperCase()+f.substring(1).toLowerCase())||d(e).data("msg")
},customMessage:function(f,g){var e=this.settings.messages[f];
return e&&(e.constructor===String?e:e[g])
},findDefined:function(){for(var e=0;
e<arguments.length;
e++){if(arguments[e]!==undefined){return arguments[e]
}}return undefined
},defaultMessage:function(e,f){return this.findDefined(this.customMessage(e.name,f),this.customDataMessage(e,f),!this.settings.ignoreTitle&&e.title||undefined,d.validator.messages[f],"<strong>Warning: No message defined for "+e.name+"</strong>")
},formatAndAdd:function(f,h){var g=this.defaultMessage(f,h.method),e=/\$?\{(\d+)\}/g;
if(typeof g==="function"){g=g.call(this,h.parameters,f)
}else{if(e.test(g)){g=d.validator.format(g.replace(e,"{$1}"),h.parameters)
}}this.errorList.push({message:g,element:f,method:h.method});
this.errorMap[f.name]=g;
this.submitted[f.name]=g
},addWrapper:function(e){if(this.settings.wrapper){e=e.add(e.parent(this.settings.wrapper))
}return e
},defaultShowErrors:function(){var f,g,e;
for(f=0;
this.errorList[f];
f++){e=this.errorList[f];
if(this.settings.highlight){this.settings.highlight.call(this,e.element,this.settings.errorClass,this.settings.validClass)
}this.showLabel(e.element,e.message)
}if(this.errorList.length){this.toShow=this.toShow.add(this.containers)
}if(this.settings.success){for(f=0;
this.successList[f];
f++){this.showLabel(this.successList[f])
}}if(this.settings.unhighlight){for(f=0,g=this.validElements();
g[f];
f++){this.settings.unhighlight.call(this,g[f],this.settings.errorClass,this.settings.validClass)
}}this.toHide=this.toHide.not(this.toShow);
this.hideErrors();
this.addWrapper(this.toShow).show()
},validElements:function(){return this.currentElements.not(this.invalidElements())
},invalidElements:function(){return d(this.errorList).map(function(){return this.element
})
},showLabel:function(i,j){var f,l,h,g=this.errorsFor(i),e=this.idOrName(i),k=d(i).attr("aria-describedby");
if(g.length){g.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
g.html(j)
}else{g=d("<"+this.settings.errorElement+">").attr("id",e+"-error").addClass(this.settings.errorClass).html(j||"");
f=g;
if(this.settings.wrapper){f=g.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()
}if(this.labelContainer.length){this.labelContainer.append(f)
}else{if(this.settings.errorPlacement){this.settings.errorPlacement(f,d(i))
}else{f.insertAfter(i)
}}if(g.is("label")){g.attr("for",e)
}else{if(g.parents("label[for='"+e+"']").length===0){h=g.attr("id").replace(/(:|\.|\[|\])/g,"\\$1");
if(!k){k=h
}else{if(!k.match(new RegExp("\\b"+h+"\\b"))){k+=" "+h
}}d(i).attr("aria-describedby",k);
l=this.groups[i.name];
if(l){d.each(this.groups,function(n,m){if(m===l){d("[name='"+n+"']",this.currentForm).attr("aria-describedby",g.attr("id"))
}})
}}}}if(!j&&this.settings.success){g.text("");
if(typeof this.settings.success==="string"){g.addClass(this.settings.success)
}else{this.settings.success(g,i)
}}this.toShow=this.toShow.add(g)
},errorsFor:function(g){var f=this.idOrName(g),h=d(g).attr("aria-describedby"),e="label[for='"+f+"'], label[for='"+f+"'] *";
if(h){e=e+", #"+h.replace(/\s+/g,", #")
}return this.errors().filter(e)
},idOrName:function(e){return this.groups[e.name]||(this.checkable(e)?e.name:e.id||e.name)
},validationTargetFor:function(e){if(this.checkable(e)){e=this.findByName(e.name)
}return d(e).not(this.settings.ignore)[0]
},checkable:function(e){return(/radio|checkbox/i).test(e.type)
},findByName:function(e){return d(this.currentForm).find("[name='"+e+"']")
},getLength:function(f,e){switch(e.nodeName.toLowerCase()){case"select":return d("option:selected",e).length;
case"input":if(this.checkable(e)){return this.findByName(e.name).filter(":checked").length
}}return f.length
},depend:function(f,e){return this.dependTypes[typeof f]?this.dependTypes[typeof f](f,e):true
},dependTypes:{"boolean":function(e){return e
},string:function(f,e){return !!d(f,e.form).length
},"function":function(f,e){return f(e)
}},optional:function(e){var f=this.elementValue(e);
return !d.validator.methods.required.call(this,f,e)&&"dependency-mismatch"
},startRequest:function(e){if(!this.pending[e.name]){this.pendingRequest++;
this.pending[e.name]=true
}},stopRequest:function(e,f){this.pendingRequest--;
if(this.pendingRequest<0){this.pendingRequest=0
}delete this.pending[e.name];
if(f&&this.pendingRequest===0&&this.formSubmitted&&this.form()){d(this.currentForm).submit();
this.formSubmitted=false
}else{if(!f&&this.pendingRequest===0&&this.formSubmitted){d(this.currentForm).triggerHandler("invalid-form",[this]);
this.formSubmitted=false
}}},previousValue:function(e){return d.data(e,"previousValue")||d.data(e,"previousValue",{old:null,valid:true,message:this.defaultMessage(e,"remote")})
}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},number:{number:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(e,f){if(e.constructor===String){this.classRuleSettings[e]=f
}else{d.extend(this.classRuleSettings,e)
}},classRules:function(f){var g={},e=d(f).attr("class");
if(e){d.each(e.split(" "),function(){if(this in d.validator.classRuleSettings){d.extend(g,d.validator.classRuleSettings[this])
}})
}return g
},attributeRules:function(f){var i={},e=d(f),g=f.getAttribute("type"),j,h;
for(j in d.validator.methods){if(j==="required"){h=f.getAttribute(j);
if(h===""){h=true
}h=!!h
}else{h=e.attr(j)
}if(/min|max/.test(j)&&(g===null||/number|range|text/.test(g))){h=Number(h)
}if(h||h===0){i[j]=h
}else{if(g===j&&g!=="range"){i[j]=true
}}}if(i.maxlength&&/-1|2147483647|524288/.test(i.maxlength)){delete i.maxlength
}return i
},dataRules:function(f){var i,g,h={},e=d(f);
for(i in d.validator.methods){g=e.data("rule"+i.charAt(0).toUpperCase()+i.substring(1).toLowerCase());
if(g!==undefined){h[i]=g
}}return h
},staticRules:function(f){var g={},e=d.data(f.form,"validator");
if(e.settings.rules){g=d.validator.normalizeRule(e.settings.rules[f.name])||{}
}return g
},normalizeRules:function(f,e){d.each(f,function(i,h){if(h===false){delete f[i];
return
}if(h.param||h.depends){var g=true;
switch(typeof h.depends){case"string":g=!!d(h.depends,e.form).length;
break;
case"function":g=h.depends.call(e,e);
break
}if(g){f[i]=h.param!==undefined?h.param:true
}else{delete f[i]
}}});
d.each(f,function(g,h){f[g]=d.isFunction(h)?h(e):h
});
d.each(["minlength","maxlength"],function(){if(f[this]){f[this]=Number(f[this])
}});
d.each(["rangelength","range"],function(){var g;
if(f[this]){if(d.isArray(f[this])){f[this]=[Number(f[this][0]),Number(f[this][1])]
}else{if(typeof f[this]==="string"){g=f[this].replace(/[\[\]]/g,"").split(/[\s,]+/);
f[this]=[Number(g[0]),Number(g[1])]
}}}});
if(d.validator.autoCreateRanges){if(f.min!=null&&f.max!=null){f.range=[f.min,f.max];
delete f.min;
delete f.max
}if(f.minlength!=null&&f.maxlength!=null){f.rangelength=[f.minlength,f.maxlength];
delete f.minlength;
delete f.maxlength
}}return f
},normalizeRule:function(f){if(typeof f==="string"){var e={};
d.each(f.split(/\s/),function(){e[this]=true
});
f=e
}return f
},addMethod:function(e,g,f){d.validator.methods[e]=g;
d.validator.messages[e]=f!==undefined?f:d.validator.messages[e];
if(g.length<3){d.validator.addClassRules(e,d.validator.normalizeRule(e))
}},methods:{required:function(f,e,h){if(!this.depend(h,e)){return"dependency-mismatch"
}if(e.nodeName.toLowerCase()==="select"){var g=d(e).val();
return g&&g.length>0
}if(this.checkable(e)){return this.getLength(f,e)>0
}return d.trim(f).length>0
},email:function(f,e){return this.optional(e)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(f)
},url:function(f,e){return this.optional(e)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(f)
},date:function(f,e){return this.optional(e)||!/Invalid|NaN/.test(new Date(f).toString())
},dateISO:function(f,e){return this.optional(e)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(f)
},number:function(f,e){return this.optional(e)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(f)
},digits:function(f,e){return this.optional(e)||/^\d+$/.test(f)
},creditcard:function(i,f){if(this.optional(f)){return"dependency-mismatch"
}if(/[^0-9 \-]+/.test(i)){return false
}var j=0,h=0,e=false,k,g;
i=i.replace(/\D/g,"");
if(i.length<13||i.length>19){return false
}for(k=i.length-1;
k>=0;
k--){g=i.charAt(k);
h=parseInt(g,10);
if(e){if((h*=2)>9){h-=9
}}j+=h;
e=!e
}return(j%10)===0
},minlength:function(g,e,h){var f=d.isArray(g)?g.length:this.getLength(g,e);
return this.optional(e)||f>=h
},maxlength:function(g,e,h){var f=d.isArray(g)?g.length:this.getLength(g,e);
return this.optional(e)||f<=h
},rangelength:function(g,e,h){var f=d.isArray(g)?g.length:this.getLength(g,e);
return this.optional(e)||(f>=h[0]&&f<=h[1])
},min:function(f,e,g){return this.optional(e)||f>=g
},max:function(f,e,g){return this.optional(e)||f<=g
},range:function(f,e,g){return this.optional(e)||(f>=g[0]&&f<=g[1])
},equalTo:function(f,e,h){var g=d(h);
if(this.settings.onfocusout){g.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){d(e).valid()
})
}return f===g.val()
},remote:function(i,f,j){if(this.optional(f)){return"dependency-mismatch"
}var g=this.previousValue(f),e,h;
if(!this.settings.messages[f.name]){this.settings.messages[f.name]={}
}g.originalMessage=this.settings.messages[f.name].remote;
this.settings.messages[f.name].remote=g.message;
j=typeof j==="string"&&{url:j}||j;
if(g.old===i){return g.valid
}g.old=i;
e=this;
this.startRequest(f);
h={};
h[f.name]=i;
d.ajax(d.extend(true,{url:j,mode:"abort",port:"validate"+f.name,dataType:"json",data:h,context:e.currentForm,success:function(l){var n=l===true||l==="true",o,m,k;
e.settings.messages[f.name].remote=g.originalMessage;
if(n){k=e.formSubmitted;
e.prepareElement(f);
e.formSubmitted=k;
e.successList.push(f);
delete e.invalid[f.name];
e.showErrors()
}else{o={};
m=l||e.defaultMessage(f,"remote");
o[f.name]=g.message=d.isFunction(m)?m(i):m;
e.invalid[f.name]=true;
e.showErrors(o)
}g.valid=n;
e.stopRequest(f,n)
}},j));
return"pending"
}}});
d.format=function a(){throw"$.format has been deprecated. Please use $.validator.format instead."
};
var b={},c;
if(d.ajaxPrefilter){d.ajaxPrefilter(function(g,f,h){var e=g.port;
if(g.mode==="abort"){if(b[e]){b[e].abort()
}b[e]=h
}})
}else{c=d.ajax;
d.ajax=function(f){var g=("mode" in f?f:d.ajaxSettings).mode,e=("port" in f?f:d.ajaxSettings).port;
if(g==="abort"){if(b[e]){b[e].abort()
}b[e]=c.apply(this,arguments);
return b[e]
}return c.apply(this,arguments)
}
}d.extend(d.fn,{validateDelegate:function(g,f,e){return this.bind(f,function(h){var i=d(h.target);
if(i.is(g)){return e.apply(i,arguments)
}})
}})
}));
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{a(jQuery)
}}(function(f){var a=/\+/g;
function d(i){return b.raw?i:encodeURIComponent(i)
}function g(i){return b.raw?i:decodeURIComponent(i)
}function h(i){return d(b.json?JSON.stringify(i):String(i))
}function c(i){if(i.indexOf('"')===0){i=i.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")
}try{i=decodeURIComponent(i.replace(a," "));
return b.json?JSON.parse(i):i
}catch(j){}}function e(j,i){var k=b.raw?j:c(j);
return f.isFunction(i)?i(k):k
}var b=f.cookie=function(q,p,v){if(p!==undefined&&!f.isFunction(p)){v=f.extend({},b.defaults,v);
if(typeof v.expires==="number"){var r=v.expires,u=v.expires=new Date();
u.setTime(+u+r*86400000)
}return(document.cookie=[d(q),"=",h(p),v.expires?"; expires="+v.expires.toUTCString():"",v.path?"; path="+v.path:"",v.domain?"; domain="+v.domain:"",v.secure?"; secure":""].join(""))
}var w=q?undefined:{};
var s=document.cookie?document.cookie.split("; "):[];
for(var o=0,m=s.length;
o<m;
o++){var n=s[o].split("=");
var j=g(n.shift());
var k=n.join("=");
if(q&&q===j){w=e(k,p);
break
}if(!q&&(k=e(k))!==undefined){w[j]=k
}}return w
};
b.defaults={};
f.removeCookie=function(j,i){if(f.cookie(j)===undefined){return false
}f.cookie(j,"",f.extend({},i,{expires:-1}));
return !f.cookie(j)
}
}));
/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */
;
if("undefined"==typeof jQuery){throw new Error("Bootstrap's JavaScript requires jQuery")
}!function(a){var b=jQuery.fn.jquery.split(" ")[0].split(".");
if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||3<b[0]){throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}}(),function(a){a.fn.emulateTransitionEnd=function(c){var d=!1,b=this;
a(this).one("bsTransitionEnd",function(){d=!0
});
return setTimeout(function(){d||a(b).trigger(a.support.transition.end)
},c),this
},a(function(){a.support.transition=function b(){var d=document.createElement("bootstrap"),f={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var c in f){if(d.style[c]!==undefined){return{end:f[c]}
}}return !1
}(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(c){if(a(c.target).is(this)){return c.handleObj.handler.apply(this,arguments)
}}})
})
}(jQuery),function(d){var f='[data-dismiss="alert"]',b=function(a){d(a).on("click",f,this.close)
};
b.VERSION="3.4.1",b.TRANSITION_DURATION=150,b.prototype.close=function(h){var j=d(this),a=j.attr("data-target");
a||(a=(a=j.attr("href"))&&a.replace(/.*(?=#[^\s]*$)/,"")),a="#"===a?[]:a;
var k=d(document).find(a);
function l(){k.detach().trigger("closed.bs.alert").remove()
}h&&h.preventDefault(),k.length||(k=j.closest(".alert")),k.trigger(h=d.Event("close.bs.alert")),h.isDefaultPrevented()||(k.removeClass("in"),d.support.transition&&k.hasClass("fade")?k.one("bsTransitionEnd",l).emulateTransitionEnd(b.TRANSITION_DURATION):l())
};
var c=d.fn.alert;
d.fn.alert=function g(a){return this.each(function(){var h=d(this),i=h.data("bs.alert");
i||h.data("bs.alert",i=new b(this)),"string"==typeof a&&i[a].call(h)
})
},d.fn.alert.Constructor=b,d.fn.alert.noConflict=function(){return d.fn.alert=c,this
},d(document).on("click.bs.alert.data-api",f,b.prototype.close)
}(jQuery),function(c){var d=function(f,g){this.$element=c(f),this.options=c.extend({},d.DEFAULTS,g),this.isLoading=!1
};
function b(e){return this.each(function(){var g=c(this),h=g.data("bs.button"),f="object"==typeof e&&e;
h||g.data("bs.button",h=new d(this,f)),"toggle"==e?h.toggle():e&&h.setState(e)
})
}d.VERSION="3.4.1",d.DEFAULTS={loadingText:"loading..."},d.prototype.setState=function(g){var h="disabled",f=this.$element,j=f.is("input")?"val":"html",k=f.data();
g+="Text",null==k.resetText&&f.data("resetText",f[j]()),setTimeout(c.proxy(function(){f[j](null==k[g]?this.options[g]:k[g]),"loadingText"==g?(this.isLoading=!0,f.addClass(h).attr(h,h).prop(h,!0)):this.isLoading&&(this.isLoading=!1,f.removeClass(h).removeAttr(h).prop(h,!1))
},this),0)
},d.prototype.toggle=function(){var g=!0,h=this.$element.closest('[data-toggle="buttons"]');
if(h.length){var f=this.$element.find("input");
"radio"==f.prop("type")?(f.prop("checked")&&(g=!1),h.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==f.prop("type")&&(f.prop("checked")!==this.$element.hasClass("active")&&(g=!1),this.$element.toggleClass("active")),f.prop("checked",this.$element.hasClass("active")),g&&f.trigger("change")
}else{this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")
}};
var a=c.fn.button;
c.fn.button=b,c.fn.button.Constructor=d,c.fn.button.noConflict=function(){return c.fn.button=a,this
},c(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(f){var g=c(f.target).closest(".btn");
b.call(g,"toggle"),c(f.target).is('input[type="radio"], input[type="checkbox"]')||(f.preventDefault(),g.is("input,button")?g.trigger("focus"):g.find("input:visible,button:visible").first().trigger("focus"))
}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){c(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))
})
}(jQuery),function(f){var g=function(c,h){this.$element=f(c),this.$indicators=this.$element.find(".carousel-indicators"),this.options=h,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",f.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart" in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",f.proxy(this.pause,this)).on("mouseleave.bs.carousel",f.proxy(this.cycle,this))
};
function b(c){return this.each(function(){var j=f(this),k=j.data("bs.carousel"),h=f.extend({},g.DEFAULTS,j.data(),"object"==typeof c&&c),l="string"==typeof c?c:h.slide;
k||j.data("bs.carousel",k=new g(this,h)),"number"==typeof c?k.to(c):l?k[l]():h.interval&&k.pause().cycle()
})
}g.VERSION="3.4.1",g.TRANSITION_DURATION=600,g.DEFAULTS={interval:5000,pause:"hover",wrap:!0,keyboard:!0},g.prototype.keydown=function(c){if(!/input|textarea/i.test(c.target.tagName)){switch(c.which){case 37:this.prev();
break;
case 39:this.next();
break;
default:return
}c.preventDefault()
}},g.prototype.cycle=function(c){return c||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(f.proxy(this.next,this),this.options.interval)),this
},g.prototype.getItemIndex=function(c){return this.$items=c.parent().children(".item"),this.$items.index(c||this.$active)
},g.prototype.getItemForDirection=function(h,j){var c=this.getItemIndex(j);
if(("prev"==h&&0===c||"next"==h&&c==this.$items.length-1)&&!this.options.wrap){return j
}var k=(c+("prev"==h?-1:1))%this.$items.length;
return this.$items.eq(k)
},g.prototype.to=function(h){var j=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));
if(!(h>this.$items.length-1||h<0)){return this.sliding?this.$element.one("slid.bs.carousel",function(){j.to(h)
}):c==h?this.pause().cycle():this.slide(c<h?"next":"prev",this.$items.eq(h))
}},g.prototype.pause=function(c){return c||(this.paused=!0),this.$element.find(".next, .prev").length&&f.support.transition&&(this.$element.trigger(f.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this
},g.prototype.next=function(){if(!this.sliding){return this.slide("next")
}},g.prototype.prev=function(){if(!this.sliding){return this.slide("prev")
}},g.prototype.slide=function(x,u){var p=this.$element.find(".item.active"),j=u||this.getItemForDirection(x,p),k=this.interval,y="next"==x?"left":"right",w=this;
if(j.hasClass("active")){return this.sliding=!1
}var c=j[0],m=f.Event("slide.bs.carousel",{relatedTarget:c,direction:y});
if(this.$element.trigger(m),!m.isDefaultPrevented()){if(this.sliding=!0,k&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");
var q=f(this.$indicators.children()[this.getItemIndex(j)]);
q&&q.addClass("active")
}var v=f.Event("slid.bs.carousel",{relatedTarget:c,direction:y});
return f.support.transition&&this.$element.hasClass("slide")?(j.addClass(x),"object"==typeof j&&j.length&&j[0].offsetWidth,p.addClass(y),j.addClass(y),p.one("bsTransitionEnd",function(){j.removeClass([x,y].join(" ")).addClass("active"),p.removeClass(["active",y].join(" ")),w.sliding=!1,setTimeout(function(){w.$element.trigger(v)
},0)
}).emulateTransitionEnd(g.TRANSITION_DURATION)):(p.removeClass("active"),j.addClass("active"),this.sliding=!1,this.$element.trigger(v)),k&&this.cycle(),this
}};
var a=f.fn.carousel;
f.fn.carousel=b,f.fn.carousel.Constructor=g,f.fn.carousel.noConflict=function(){return f.fn.carousel=a,this
};
var d=function(j){var l=f(this),h=l.attr("href");
h&&(h=h.replace(/.*(?=#[^\s]+$)/,""));
var m=l.attr("data-target")||h,p=f(document).find(m);
if(p.hasClass("carousel")){var k=f.extend({},p.data(),l.data()),c=l.attr("data-slide-to");
c&&(k.interval=!1),b.call(p,k),c&&p.data("bs.carousel").to(c),j.preventDefault()
}};
f(document).on("click.bs.carousel.data-api","[data-slide]",d).on("click.bs.carousel.data-api","[data-slide-to]",d),f(window).on("load",function(){f('[data-ride="carousel"]').each(function(){var c=f(this);
b.call(c,c.data())
})
})
}(jQuery),function(c){var e=function(a,g){this.$element=c(a),this.options=c.extend({},e.DEFAULTS,g),this.$trigger=c('[data-toggle="collapse"][href="#'+a.id+'"],[data-toggle="collapse"][data-target="#'+a.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()
};
function f(g){var h,a=g.attr("data-target")||(h=g.attr("href"))&&h.replace(/.*(?=#[^\s]+$)/,"");
return c(document).find(a)
}function b(a){return this.each(function(){var h=c(this),j=h.data("bs.collapse"),g=c.extend({},e.DEFAULTS,h.data(),"object"==typeof a&&a);
!j&&g.toggle&&/show|hide/.test(a)&&(g.toggle=!1),j||h.data("bs.collapse",j=new e(this,g)),"string"==typeof a&&j[a]()
})
}e.VERSION="3.4.1",e.TRANSITION_DURATION=350,e.DEFAULTS={toggle:!0},e.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"
},e.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var g,j=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");
if(!(j&&j.length&&(g=j.data("bs.collapse"))&&g.transitioning)){var a=c.Event("show.bs.collapse");
if(this.$element.trigger(a),!a.isDefaultPrevented()){j&&j.length&&(b.call(j,"hide"),g||j.data("bs.collapse",null));
var k=this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[k](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;
var l=function(){this.$element.removeClass("collapsing").addClass("collapse in")[k](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")
};
if(!c.support.transition){return l.call(this)
}var h=c.camelCase(["scroll",k].join("-"));
this.$element.one("bsTransitionEnd",c.proxy(l,this)).emulateTransitionEnd(e.TRANSITION_DURATION)[k](this.$element[0][h])
}}}},e.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var g=c.Event("hide.bs.collapse");
if(this.$element.trigger(g),!g.isDefaultPrevented()){var h=this.dimension();
this.$element[h](this.$element[h]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;
var a=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
};
if(!c.support.transition){return a.call(this)
}this.$element[h](0).one("bsTransitionEnd",c.proxy(a,this)).emulateTransitionEnd(e.TRANSITION_DURATION)
}}},e.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
},e.prototype.getParent=function(){return c(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(c.proxy(function(g,h){var a=c(h);
this.addAriaAndCollapsedClass(f(a),a)
},this)).end()
},e.prototype.addAriaAndCollapsedClass=function(g,h){var a=g.hasClass("in");
g.attr("aria-expanded",a),h.toggleClass("collapsed",!a).attr("aria-expanded",a)
};
var d=c.fn.collapse;
c.fn.collapse=b,c.fn.collapse.Constructor=e,c.fn.collapse.noConflict=function(){return c.fn.collapse=d,this
},c(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(g){var h=c(this);
h.attr("data-target")||g.preventDefault();
var a=f(h),j=a.data("bs.collapse")?"toggle":h.data();
b.call(a,j)
})
}(jQuery),function(c){var g='[data-toggle="dropdown"]',i=function(a){c(a).on("click.bs.dropdown",this.toggle)
};
function b(j){var k=j.attr("data-target");
k||(k=(k=j.attr("href"))&&/#[A-Za-z]/.test(k)&&k.replace(/.*(?=#[^\s]*$)/,""));
var a="#"!==k?c(document).find(k):null;
return a&&a.length?a:j.parent()
}function f(a){a&&3===a.which||(c(".dropdown-backdrop").remove(),c(g).each(function(){var k=c(this),l=b(k),j={relatedTarget:this};
l.hasClass("open")&&(a&&"click"==a.type&&/input|textarea/i.test(a.target.tagName)&&c.contains(l[0],a.target)||(l.trigger(a=c.Event("hide.bs.dropdown",j)),a.isDefaultPrevented()||(k.attr("aria-expanded","false"),l.removeClass("open").trigger(c.Event("hidden.bs.dropdown",j)))))
}))
}i.VERSION="3.4.1",i.prototype.toggle=function(j){var k=c(this);
if(!k.is(".disabled, :disabled")){var a=b(k),l=a.hasClass("open");
if(f(),!l){"ontouchstart" in document.documentElement&&!a.closest(".navbar-nav").length&&c(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(c(this)).on("click",f);
var m={relatedTarget:this};
if(a.trigger(j=c.Event("show.bs.dropdown",m)),j.isDefaultPrevented()){return
}k.trigger("focus").attr("aria-expanded","true"),a.toggleClass("open").trigger(c.Event("shown.bs.dropdown",m))
}return !1
}},i.prototype.keydown=function(j){if(/(38|40|27|32)/.test(j.which)&&!/input|textarea/i.test(j.target.tagName)){var l=c(this);
if(j.preventDefault(),j.stopPropagation(),!l.is(".disabled, :disabled")){var a=b(l),m=a.hasClass("open");
if(!m&&27!=j.which||m&&27==j.which){return 27==j.which&&a.find(g).trigger("focus"),l.trigger("click")
}var p=a.find(".dropdown-menu li:not(.disabled):visible a");
if(p.length){var k=p.index(j.target);
38==j.which&&0<k&&k--,40==j.which&&k<p.length-1&&k++,~k||(k=0),p.eq(k).trigger("focus")
}}}};
var d=c.fn.dropdown;
c.fn.dropdown=function h(a){return this.each(function(){var j=c(this),k=j.data("bs.dropdown");
k||j.data("bs.dropdown",k=new i(this)),"string"==typeof a&&k[a].call(j)
})
},c.fn.dropdown.Constructor=i,c.fn.dropdown.noConflict=function(){return c.fn.dropdown=d,this
},c(document).on("click.bs.dropdown.data-api",f).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()
}).on("click.bs.dropdown.data-api",g,i.prototype.toggle).on("keydown.bs.dropdown.data-api",g,i.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",i.prototype.keydown)
}(jQuery),function(b){var d=function(a,f){this.options=f,this.$body=b(document.body),this.$element=b(a),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,b.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))
};
function e(a,f){return this.each(function(){var h=b(this),j=h.data("bs.modal"),g=b.extend({},d.DEFAULTS,h.data(),"object"==typeof a&&a);
j||h.data("bs.modal",j=new d(this,g)),"string"==typeof a?j[a](f):g.show&&j.show(f)
})
}d.VERSION="3.4.1",d.TRANSITION_DURATION=300,d.BACKDROP_TRANSITION_DURATION=150,d.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},d.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)
},d.prototype.show=function(f){var g=this,a=b.Event("show.bs.modal",{relatedTarget:f});
this.$element.trigger(a),this.isShown||a.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',b.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){g.$element.one("mouseup.dismiss.bs.modal",function(h){b(h.target).is(g.$element)&&(g.ignoreBackdropClick=!0)
})
}),this.backdrop(function(){var h=b.support.transition&&g.$element.hasClass("fade");
g.$element.parent().length||g.$element.appendTo(g.$body),g.$element.show().scrollTop(0),g.adjustDialog(),h&&g.$element[0].offsetWidth,g.$element.addClass("in"),g.enforceFocus();
var i=b.Event("shown.bs.modal",{relatedTarget:f});
h?g.$dialog.one("bsTransitionEnd",function(){g.$element.trigger("focus").trigger(i)
}).emulateTransitionEnd(d.TRANSITION_DURATION):g.$element.trigger("focus").trigger(i)
}))
},d.prototype.hide=function(a){a&&a.preventDefault(),a=b.Event("hide.bs.modal"),this.$element.trigger(a),this.isShown&&!a.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),b(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),b.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",b.proxy(this.hideModal,this)).emulateTransitionEnd(d.TRANSITION_DURATION):this.hideModal())
},d.prototype.enforceFocus=function(){b(document).off("focusin.bs.modal").on("focusin.bs.modal",b.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")
},this))
},d.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",b.proxy(function(a){27==a.which&&this.hide()
},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")
},d.prototype.resize=function(){this.isShown?b(window).on("resize.bs.modal",b.proxy(this.handleUpdate,this)):b(window).off("resize.bs.modal")
},d.prototype.hideModal=function(){var a=this;
this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")
})
},d.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null
},d.prototype.backdrop=function(f){var g=this,a=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var h=b.support.transition&&a;
if(this.$backdrop=b(document.createElement("div")).addClass("modal-backdrop "+a).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",b.proxy(function(i){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:i.target===i.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())
},this)),h&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!f){return
}h?this.$backdrop.one("bsTransitionEnd",f).emulateTransitionEnd(d.BACKDROP_TRANSITION_DURATION):f()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
var j=function(){g.removeBackdrop(),f&&f()
};
b.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",j).emulateTransitionEnd(d.BACKDROP_TRANSITION_DURATION):j()
}else{f&&f()
}}},d.prototype.handleUpdate=function(){this.adjustDialog()
},d.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})
},d.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})
},d.prototype.checkScrollbar=function(){var a=window.innerWidth;
if(!a){var f=document.documentElement.getBoundingClientRect();
a=f.right-Math.abs(f.left)
}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()
},d.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);
this.originalBodyPad=document.body.style.paddingRight||"";
var f=this.scrollbarWidth;
this.bodyIsOverflowing&&(this.$body.css("padding-right",a+f),b(this.fixedContent).each(function(h,j){var g=j.style.paddingRight,k=b(j).css("padding-right");
b(j).data("padding-right",g).css("padding-right",parseFloat(k)+f+"px")
}))
},d.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),b(this.fixedContent).each(function(f,g){var a=b(g).data("padding-right");
b(g).removeData("padding-right"),g.style.paddingRight=a||""
})
},d.prototype.measureScrollbar=function(){var a=document.createElement("div");
a.className="modal-scrollbar-measure",this.$body.append(a);
var f=a.offsetWidth-a.clientWidth;
return this.$body[0].removeChild(a),f
};
var c=b.fn.modal;
b.fn.modal=e,b.fn.modal.Constructor=d,b.fn.modal.noConflict=function(){return b.fn.modal=c,this
},b(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(f){var h=b(this),a=h.attr("href"),j=h.attr("data-target")||a&&a.replace(/.*(?=#[^\s]+$)/,""),k=b(document).find(j),g=k.data("bs.modal")?"toggle":b.extend({remote:!/#/.test(a)&&a},k.data(),h.data());
h.is("a")&&f.preventDefault(),k.one("show.bs.modal",function(i){i.isDefaultPrevented()||k.one("hidden.bs.modal",function(){h.is(":visible")&&h.trigger("focus")
})
}),e.call(k,g,this)
})
}(jQuery),function(k){var c=["sanitize","whiteList","sanitizeFn"],q=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],v={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},b=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,h=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
function s(g,m){var a=g.nodeName.toLowerCase();
if(-1!==k.inArray(a,m)){return -1===k.inArray(a,q)||Boolean(g.nodeValue.match(b)||g.nodeValue.match(h))
}for(var r=k(m).filter(function(i,n){return n instanceof RegExp
}),u=0,l=r.length;
u<l;
u++){if(a.match(r[u])){return !0
}}return !1
}function d(F,B,y){if(0===F.length){return F
}if(y&&"function"==typeof y){return y(F)
}if(!document.implementation||!document.implementation.createHTMLDocument){return F
}var u=document.implementation.createHTMLDocument("sanitization");
u.body.innerHTML=F;
for(var w=k.map(B,function(a,i){return i
}),G=k(u.body).find("*"),E=0,g=G.length;
E<g;
E++){var x=G[E],z=x.nodeName.toLowerCase();
if(-1!==k.inArray(z,w)){for(var C=k.map(x.attributes,function(a){return a
}),m=[].concat(B["*"]||[],B[z]||[]),D=0,A=C.length;
D<A;
D++){s(C[D],m)||x.removeAttribute(C[D].nodeName)
}}else{x.parentNode.removeChild(x)
}}return u.body.innerHTML
}var f=function(a,g){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,g)
};
f.VERSION="3.4.1",f.TRANSITION_DURATION=150,f.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:v},f.prototype.init=function(m,x,l){if(this.enabled=!0,this.type=m,this.$element=k(x),this.options=this.getOptions(l),this.$viewport=this.options.viewport&&k(document).find(k.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0] instanceof document.constructor&&!this.options.selector){throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!")
}for(var y=this.options.trigger.split(" "),z=y.length;
z--;
){var u=y[z];
if("click"==u){this.$element.on("click."+this.type,this.options.selector,k.proxy(this.toggle,this))
}else{if("manual"!=u){var g="hover"==u?"mouseenter":"focusin",w="hover"==u?"mouseleave":"focusout";
this.$element.on(g+"."+this.type,this.options.selector,k.proxy(this.enter,this)),this.$element.on(w+"."+this.type,this.options.selector,k.proxy(this.leave,this))
}}}this.options.selector?this._options=k.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()
},f.prototype.getDefaults=function(){return f.DEFAULTS
},f.prototype.getOptions=function(g){var l=this.$element.data();
for(var a in l){l.hasOwnProperty(a)&&-1!==k.inArray(a,c)&&delete l[a]
}return(g=k.extend({},this.getDefaults(),l,g)).delay&&"number"==typeof g.delay&&(g.delay={show:g.delay,hide:g.delay}),g.sanitize&&(g.template=d(g.template,g.whiteList,g.sanitizeFn)),g
},f.prototype.getDelegateOptions=function(){var a={},e=this.getDefaults();
return this._options&&k.each(this._options,function(g,i){e[g]!=i&&(a[g]=i)
}),a
},f.prototype.enter=function(a){var g=a instanceof this.constructor?a:k(a.currentTarget).data("bs."+this.type);
if(g||(g=new this.constructor(a.currentTarget,this.getDelegateOptions()),k(a.currentTarget).data("bs."+this.type,g)),a instanceof k.Event&&(g.inState["focusin"==a.type?"focus":"hover"]=!0),g.tip().hasClass("in")||"in"==g.hoverState){g.hoverState="in"
}else{if(clearTimeout(g.timeout),g.hoverState="in",!g.options.delay||!g.options.delay.show){return g.show()
}g.timeout=setTimeout(function(){"in"==g.hoverState&&g.show()
},g.options.delay.show)
}},f.prototype.isInStateTrue=function(){for(var a in this.inState){if(this.inState[a]){return !0
}}return !1
},f.prototype.leave=function(a){var g=a instanceof this.constructor?a:k(a.currentTarget).data("bs."+this.type);
if(g||(g=new this.constructor(a.currentTarget,this.getDelegateOptions()),k(a.currentTarget).data("bs."+this.type,g)),a instanceof k.Event&&(g.inState["focusout"==a.type?"focus":"hover"]=!1),!g.isInStateTrue()){if(clearTimeout(g.timeout),g.hoverState="out",!g.options.delay||!g.options.delay.hide){return g.hide()
}g.timeout=setTimeout(function(){"out"==g.hoverState&&g.hide()
},g.options.delay.hide)
}},f.prototype.show=function(){var H=k.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){this.$element.trigger(H);
var C=k.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);
if(H.isDefaultPrevented()||!C){return
}var z=this,w=this.tip(),x=this.getUID(this.type);
this.setContent(),w.attr("id",x),this.$element.attr("aria-describedby",x),this.options.animation&&w.addClass("fade");
var I="function"==typeof this.options.placement?this.options.placement.call(this,w[0],this.$element[0]):this.options.placement,F=/\s?auto?\s?/i,g=F.test(I);
g&&(I=I.replace(F,"")||"top"),w.detach().css({top:0,left:0,display:"block"}).addClass(I).data("bs."+this.type,this),this.options.container?w.appendTo(k(document).find(this.options.container)):w.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);
var y=this.getPosition(),A=w[0].offsetWidth,D=w[0].offsetHeight;
if(g){var m=I,E=this.getPosition(this.$viewport);
I="bottom"==I&&y.bottom+D>E.bottom?"top":"top"==I&&y.top-D<E.top?"bottom":"right"==I&&y.right+A>E.width?"left":"left"==I&&y.left-A<E.left?"right":I,w.removeClass(m).addClass(I)
}var B=this.getCalculatedOffset(I,y,A,D);
this.applyPlacement(B,I);
var G=function(){var a=z.hoverState;
z.$element.trigger("shown.bs."+z.type),z.hoverState=null,"out"==a&&z.leave(z)
};
k.support.transition&&this.$tip.hasClass("fade")?w.one("bsTransitionEnd",G).emulateTransitionEnd(f.TRANSITION_DURATION):G()
}},f.prototype.applyPlacement=function(E,A){var y=this.tip(),u=y[0].offsetWidth,w=y[0].offsetHeight,F=parseInt(y.css("margin-top"),10),D=parseInt(y.css("margin-left"),10);
isNaN(F)&&(F=0),isNaN(D)&&(D=0),E.top+=F,E.left+=D,k.offset.setOffset(y[0],k.extend({using:function(a){y.css({top:Math.round(a.top),left:Math.round(a.left)})
}},E),0),y.addClass("in");
var g=y[0].offsetWidth,x=y[0].offsetHeight;
"top"==A&&x!=w&&(E.top=E.top+w-x);
var z=this.getViewportAdjustedDelta(A,E,g,x);
z.left?E.left+=z.left:E.top+=z.top;
var B=/top|bottom/.test(A),m=B?2*z.left-u+g:2*z.top-w+x,C=B?"offsetWidth":"offsetHeight";
y.offset(E),this.replaceArrow(m,y[0][C],B)
},f.prototype.replaceArrow=function(g,l,a){this.arrow().css(a?"left":"top",50*(1-g/l)+"%").css(a?"top":"left","")
},f.prototype.setContent=function(){var a=this.tip(),g=this.getTitle();
this.options.html?(this.options.sanitize&&(g=d(g,this.options.whiteList,this.options.sanitizeFn)),a.find(".tooltip-inner").html(g)):a.find(".tooltip-inner").text(g),a.removeClass("fade in top bottom left right")
},f.prototype.hide=function(g){var l=this,a=k(this.$tip),m=k.Event("hide.bs."+this.type);
function r(){"in"!=l.hoverState&&a.detach(),l.$element&&l.$element.removeAttr("aria-describedby").trigger("hidden.bs."+l.type),g&&g()
}if(this.$element.trigger(m),!m.isDefaultPrevented()){return a.removeClass("in"),k.support.transition&&a.hasClass("fade")?a.one("bsTransitionEnd",r).emulateTransitionEnd(f.TRANSITION_DURATION):r(),this.hoverState=null,this
}},f.prototype.fixTitle=function(){var a=this.$element;
(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")
},f.prototype.hasContent=function(){return this.getTitle()
},f.prototype.getPosition=function(m){var x=(m=m||this.$element)[0],l="BODY"==x.tagName,y=x.getBoundingClientRect();
null==y.width&&(y=k.extend({},y,{width:y.right-y.left,height:y.bottom-y.top}));
var z=window.SVGElement&&x instanceof window.SVGElement,u=l?{top:0,left:0}:z?null:m.offset(),g={scroll:l?document.documentElement.scrollTop||document.body.scrollTop:m.scrollTop()},w=l?{width:k(window).width(),height:k(window).height()}:null;
return k.extend({},y,g,w,u)
},f.prototype.getCalculatedOffset=function(g,l,a,m){return"bottom"==g?{top:l.top+l.height,left:l.left+l.width/2-a/2}:"top"==g?{top:l.top-m,left:l.left+l.width/2-a/2}:"left"==g?{top:l.top+l.height/2-m/2,left:l.left-a}:{top:l.top+l.height/2-m/2,left:l.left+l.width}
},f.prototype.getViewportAdjustedDelta=function(C,z,x,m){var u={top:0,left:0};
if(!this.$viewport){return u
}var D=this.options.viewport&&this.options.viewport.padding||0,B=this.getPosition(this.$viewport);
if(/right|left/.test(C)){var g=z.top-D-B.scroll,w=z.top+D-B.scroll+m;
g<B.top?u.top=B.top-g:w>B.top+B.height&&(u.top=B.top+B.height-w)
}else{var y=z.left-D,A=z.left+D+x;
y<B.left?u.left=B.left-y:A>B.right&&(u.left=B.left+B.width-A)
}return u
},f.prototype.getTitle=function(){var a=this.$element,g=this.options;
return a.attr("data-original-title")||("function"==typeof g.title?g.title.call(a[0]):g.title)
},f.prototype.getUID=function(a){for(;
a+=~~(1000000*Math.random()),document.getElementById(a);
){}return a
},f.prototype.tip=function(){if(!this.$tip&&(this.$tip=k(this.options.template),1!=this.$tip.length)){throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!")
}return this.$tip
},f.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")
},f.prototype.enable=function(){this.enabled=!0
},f.prototype.disable=function(){this.enabled=!1
},f.prototype.toggleEnabled=function(){this.enabled=!this.enabled
},f.prototype.toggle=function(a){var g=this;
a&&((g=k(a.currentTarget).data("bs."+this.type))||(g=new this.constructor(a.currentTarget,this.getDelegateOptions()),k(a.currentTarget).data("bs."+this.type,g))),a?(g.inState.click=!g.inState.click,g.isInStateTrue()?g.enter(g):g.leave(g)):g.tip().hasClass("in")?g.leave(g):g.enter(g)
},f.prototype.destroy=function(){var a=this;
clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null
})
},f.prototype.sanitizeHtml=function(a){return d(a,this.options.whiteList,this.options.sanitizeFn)
};
var p=k.fn.tooltip;
k.fn.tooltip=function j(a){return this.each(function(){var l=k(this),m=l.data("bs.tooltip"),g="object"==typeof a&&a;
!m&&/destroy|hide/.test(a)||(m||l.data("bs.tooltip",m=new f(this,g)),"string"==typeof a&&m[a]())
})
},k.fn.tooltip.Constructor=f,k.fn.tooltip.noConflict=function(){return k.fn.tooltip=p,this
}
}(jQuery),function(d){var b=function(f,g){this.init("popover",f,g)
};
if(!d.fn.tooltip){throw new Error("Popover requires tooltip.js")
}b.VERSION="3.4.1",b.DEFAULTS=d.extend({},d.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),((b.prototype=d.extend({},d.fn.tooltip.Constructor.prototype)).constructor=b).prototype.getDefaults=function(){return b.DEFAULTS
},b.prototype.setContent=function(){var g=this.tip(),h=this.getTitle(),f=this.getContent();
if(this.options.html){var j=typeof f;
this.options.sanitize&&(h=this.sanitizeHtml(h),"string"===j&&(f=this.sanitizeHtml(f))),g.find(".popover-title").html(h),g.find(".popover-content").children().detach().end()["string"===j?"html":"append"](f)
}else{g.find(".popover-title").text(h),g.find(".popover-content").children().detach().end().text(f)
}g.removeClass("fade top bottom left right in"),g.find(".popover-title").html()||g.find(".popover-title").hide()
},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()
},b.prototype.getContent=function(){var f=this.$element,g=this.options;
return f.attr("data-content")||("function"==typeof g.content?g.content.call(f[0]):g.content)
},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")
};
var a=d.fn.popover;
d.fn.popover=function c(e){return this.each(function(){var g=d(this),h=g.data("bs.popover"),f="object"==typeof e&&e;
!h&&/destroy|hide/.test(e)||(h||g.data("bs.popover",h=new b(this,f)),"string"==typeof e&&h[e]())
})
},d.fn.popover.Constructor=b,d.fn.popover.noConflict=function(){return d.fn.popover=a,this
}
}(jQuery),function(b){function d(f,g){this.$body=b(document.body),this.$scrollElement=b(f).is(document.body)?b(window):b(f),this.options=b.extend({},d.DEFAULTS,g),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",b.proxy(this.process,this)),this.refresh(),this.process()
}function c(e){return this.each(function(){var g=b(this),h=g.data("bs.scrollspy"),f="object"==typeof e&&e;
h||g.data("bs.scrollspy",h=new d(this,f)),"string"==typeof e&&h[e]()
})
}d.VERSION="3.4.1",d.DEFAULTS={offset:10},d.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)
},d.prototype.refresh=function(){var e=this,f="offset",g=0;
this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),b.isWindow(this.$scrollElement[0])||(f="position",g=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var j=b(this),k=j.data("target")||j.attr("href"),h=/^#./.test(k)&&b(k);
return h&&h.length&&h.is(":visible")&&[[h[f]().top+g,k]]||null
}).sort(function(h,i){return h[0]-i[0]
}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])
})
},d.prototype.process=function(){var h,k=this.$scrollElement.scrollTop()+this.options.offset,g=this.getScrollHeight(),l=this.options.offset+g-this.$scrollElement.height(),m=this.offsets,j=this.targets,f=this.activeTarget;
if(this.scrollHeight!=g&&this.refresh(),l<=k){return f!=(h=j[j.length-1])&&this.activate(h)
}if(f&&k<m[0]){return this.activeTarget=null,this.clear()
}for(h=m.length;
h--;
){f!=j[h]&&k>=m[h]&&(m[h+1]===undefined||k<m[h+1])&&this.activate(j[h])
}},d.prototype.activate=function(g){this.activeTarget=g,this.clear();
var h=this.selector+'[data-target="'+g+'"],'+this.selector+'[href="'+g+'"]',f=b(h).parents("li").addClass("active");
f.parent(".dropdown-menu").length&&(f=f.closest("li.dropdown").addClass("active")),f.trigger("activate.bs.scrollspy")
},d.prototype.clear=function(){b(this.selector).parentsUntil(this.options.target,".active").removeClass("active")
};
var a=b.fn.scrollspy;
b.fn.scrollspy=c,b.fn.scrollspy.Constructor=d,b.fn.scrollspy.noConflict=function(){return b.fn.scrollspy=a,this
},b(window).on("load.bs.scrollspy.data-api",function(){b('[data-spy="scroll"]').each(function(){var e=b(this);
c.call(e,e.data())
})
})
}(jQuery),function(f){var b=function(a){this.element=f(a)
};
function g(a){return this.each(function(){var h=f(this),i=h.data("bs.tab");
i||h.data("bs.tab",i=new b(this)),"string"==typeof a&&i[a]()
})
}b.VERSION="3.4.1",b.TRANSITION_DURATION=150,b.prototype.show=function(){var k=this.element,m=k.closest("ul:not(.dropdown-menu)"),j=k.data("target");
if(j||(j=(j=k.attr("href"))&&j.replace(/.*(?=#[^\s]*$)/,"")),!k.parent("li").hasClass("active")){var p=m.find(".active:last a"),q=f.Event("hide.bs.tab",{relatedTarget:k[0]}),l=f.Event("show.bs.tab",{relatedTarget:p[0]});
if(p.trigger(q),k.trigger(l),!l.isDefaultPrevented()&&!q.isDefaultPrevented()){var h=f(document).find(j);
this.activate(k.closest("li"),m),this.activate(h,h.parent(),function(){p.trigger({type:"hidden.bs.tab",relatedTarget:k[0]}),k.trigger({type:"shown.bs.tab",relatedTarget:p[0]})
})
}}},b.prototype.activate=function(h,k,a){var l=k.find("> .active"),m=a&&f.support.transition&&(l.length&&l.hasClass("fade")||!!k.find("> .fade").length);
function j(){l.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),h.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),m?(h[0].offsetWidth,h.addClass("in")):h.removeClass("fade"),h.parent(".dropdown-menu").length&&h.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),a&&a()
}l.length&&m?l.one("bsTransitionEnd",j).emulateTransitionEnd(b.TRANSITION_DURATION):j(),l.removeClass("in")
};
var d=f.fn.tab;
f.fn.tab=g,f.fn.tab.Constructor=b,f.fn.tab.noConflict=function(){return f.fn.tab=d,this
};
var c=function(a){a.preventDefault(),g.call(f(this),"show")
};
f(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',c).on("click.bs.tab.data-api",'[data-toggle="pill"]',c)
}(jQuery),function(a){var d=function(g,h){this.options=a.extend({},d.DEFAULTS,h);
var f=this.options.target===d.DEFAULTS.target?a(this.options.target):a(document).find(this.options.target);
this.$target=f.on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(g),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()
};
function c(e){return this.each(function(){var g=a(this),h=g.data("bs.affix"),f="object"==typeof e&&e;
h||g.data("bs.affix",h=new d(this,f)),"string"==typeof e&&h[e]()
})
}d.VERSION="3.4.1",d.RESET="affix affix-top affix-bottom",d.DEFAULTS={offset:0,target:window},d.prototype.getState=function(q,m,k,g){var h=this.$target.scrollTop(),u=this.$element.offset(),p=this.$target.height();
if(null!=k&&"top"==this.affixed){return h<k&&"top"
}if("bottom"==this.affixed){return null!=k?!(h+this.unpin<=u.top)&&"bottom":!(h+p<=q-g)&&"bottom"
}var f=null==this.affixed,j=f?h:u.top;
return null!=k&&h<=k?"top":null!=g&&q-g<=j+(f?p:m)&&"bottom"
},d.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset
}this.$element.removeClass(d.RESET).addClass("affix");
var f=this.$target.scrollTop(),g=this.$element.offset();
return this.pinnedOffset=g.top-f
},d.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)
},d.prototype.checkPosition=function(){if(this.$element.is(":visible")){var h=this.$element.height(),l=this.options.offset,g=l.top,m=l.bottom,p=Math.max(a(document).height(),a(document.body).height());
"object"!=typeof l&&(m=g=l),"function"==typeof g&&(g=l.top(this.$element)),"function"==typeof m&&(m=l.bottom(this.$element));
var j=this.getState(p,h,g,m);
if(this.affixed!=j){null!=this.unpin&&this.$element.css("top","");
var f="affix"+(j?"-"+j:""),k=a.Event(f+".bs.affix");
if(this.$element.trigger(k),k.isDefaultPrevented()){return
}this.affixed=j,this.unpin="bottom"==j?this.getPinnedOffset():null,this.$element.removeClass(d.RESET).addClass(f).trigger(f.replace("affix","affixed")+".bs.affix")
}"bottom"==j&&this.$element.offset({top:p-h-m})
}};
var b=a.fn.affix;
a.fn.affix=c,a.fn.affix.Constructor=d,a.fn.affix.noConflict=function(){return a.fn.affix=b,this
},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var f=a(this),g=f.data();
g.offset=g.offset||{},null!=g.offsetBottom&&(g.offset.bottom=g.offsetBottom),null!=g.offsetTop&&(g.offset.top=g.offsetTop),c.call(f,g)
})
})
}(jQuery);
/*!
 * Lightbox for Bootstrap 3 by @ashleydw
 * https://github.com/ashleydw/lightbox
 *
 * License: https://github.com/ashleydw/lightbox/blob/master/LICENSE
 */
(function(){var d,c;
d=jQuery,c=function(a,l){var k,j,i,h=this;
return this.options=d.extend({title:null,footer:null,remote:null},d.fn.ekkoLightbox.defaults,l||{}),this.$element=d(a),k="",this.modal_id=this.options.modal_id?this.options.modal_id:"ekkoLightbox-"+Math.floor(1000*Math.random()+1),i='<div class="modal-header"'+(this.options.title||this.options.always_show_close?"":' style="display:none"')+'><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">'+(this.options.title||"&nbsp;")+"</h4></div>",j='<div class="modal-footer"'+(this.options.footer?"":' style="display:none"')+">"+this.options.footer+"</div>",d(document.body).append('<div id="'+this.modal_id+'" class="ekko-lightbox modal fade" tabindex="-1"><div class="modal-dialog"><div class="modal-content">'+i+'<div class="modal-body"><div class="ekko-lightbox-container"><div></div></div></div>'+j+"</div></div></div>"),this.modal=d("#"+this.modal_id),this.modal_dialog=this.modal.find(".modal-dialog").first(),this.modal_content=this.modal.find(".modal-content").first(),this.modal_body=this.modal.find(".modal-body").first(),this.lightbox_container=this.modal_body.find(".ekko-lightbox-container").first(),this.lightbox_body=this.lightbox_container.find("> div:first-child").first(),this.showLoading(),this.modal_arrows=null,this.border={top:parseFloat(this.modal_dialog.css("border-top-width"))+parseFloat(this.modal_content.css("border-top-width"))+parseFloat(this.modal_body.css("border-top-width")),right:parseFloat(this.modal_dialog.css("border-right-width"))+parseFloat(this.modal_content.css("border-right-width"))+parseFloat(this.modal_body.css("border-right-width")),bottom:parseFloat(this.modal_dialog.css("border-bottom-width"))+parseFloat(this.modal_content.css("border-bottom-width"))+parseFloat(this.modal_body.css("border-bottom-width")),left:parseFloat(this.modal_dialog.css("border-left-width"))+parseFloat(this.modal_content.css("border-left-width"))+parseFloat(this.modal_body.css("border-left-width"))},this.padding={top:parseFloat(this.modal_dialog.css("padding-top"))+parseFloat(this.modal_content.css("padding-top"))+parseFloat(this.modal_body.css("padding-top")),right:parseFloat(this.modal_dialog.css("padding-right"))+parseFloat(this.modal_content.css("padding-right"))+parseFloat(this.modal_body.css("padding-right")),bottom:parseFloat(this.modal_dialog.css("padding-bottom"))+parseFloat(this.modal_content.css("padding-bottom"))+parseFloat(this.modal_body.css("padding-bottom")),left:parseFloat(this.modal_dialog.css("padding-left"))+parseFloat(this.modal_content.css("padding-left"))+parseFloat(this.modal_body.css("padding-left"))},this.modal.on("show.bs.modal",this.options.onShow.bind(this)).on("shown.bs.modal",function(){return h.modal_shown(),h.options.onShown.call(h)
}).on("hide.bs.modal",this.options.onHide.bind(this)).on("hidden.bs.modal",function(){return h.gallery&&d(document).off("keydown.ekkoLightbox"),h.modal.remove(),h.options.onHidden.call(h)
}).modal("show",l),this.modal
},c.prototype={modal_shown:function(){var a,e=this;
return this.options.remote?(this.gallery=this.$element.data("gallery"),this.gallery&&(this.gallery_items="document.body"===this.options.gallery_parent_selector||""===this.options.gallery_parent_selector?d(document.body).find('*[data-toggle="lightbox"][data-gallery="'+this.gallery+'"]'):this.$element.parents(this.options.gallery_parent_selector).first().find('*[data-toggle="lightbox"][data-gallery="'+this.gallery+'"]'),this.gallery_index=this.gallery_items.index(this.$element),d(document).on("keydown.ekkoLightbox",this.navigate.bind(this)),this.options.directional_arrows&&this.gallery_items.length>1&&(this.lightbox_container.prepend('<div class="ekko-lightbox-nav-overlay"><a href="#" class="'+this.strip_stops(this.options.left_arrow_class)+'"></a><a href="#" class="'+this.strip_stops(this.options.right_arrow_class)+'"></a></div>'),this.modal_arrows=this.lightbox_container.find("div.ekko-lightbox-nav-overlay").first(),this.lightbox_container.find("a"+this.strip_spaces(this.options.left_arrow_class)).on("click",function(b){return b.preventDefault(),e.navigate_left()
}),this.lightbox_container.find("a"+this.strip_spaces(this.options.right_arrow_class)).on("click",function(b){return b.preventDefault(),e.navigate_right()
}))),this.options.type?"image"===this.options.type?this.preloadImage(this.options.remote,!0):"youtube"===this.options.type&&(a=this.getYoutubeId(this.options.remote))?this.showYoutubeVideo(a):"vimeo"===this.options.type?this.showVimeoVideo(this.options.remote):"instagram"===this.options.type?this.showInstagramVideo(this.options.remote):"url"===this.options.type?this.showInstagramVideo(this.options.remote):this.error('Could not detect remote target type. Force the type using data-type="image|youtube|vimeo|url"'):this.detectRemoteType(this.options.remote)):this.error("No remote target given")
},strip_stops:function(b){return b.replace(/\./g,"")
},strip_spaces:function(b){return b.replace(/\s/g,"")
},isImage:function(b){return b.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
},isSwf:function(b){return b.match(/\.(swf)((\?|#).*)?$/i)
},getYoutubeId:function(f){var e;
return e=f.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/),e&&11===e[2].length?e[2]:!1
},getVimeoId:function(b){return b.indexOf("vimeo")>0?b:!1
},getInstagramId:function(b){return b.indexOf("instagram")>0?b:!1
},navigate:function(b){if(b=b||window.event,39===b.keyCode||37===b.keyCode){if(39===b.keyCode){return this.navigate_right()
}if(37===b.keyCode){return this.navigate_left()
}}},navigateTo:function(a){var f,e;
return 0>a||a>this.gallery_items.length-1?this:(this.showLoading(),this.gallery_index=a,this.options.onNavigate.call(this,this.gallery_index),this.$element=d(this.gallery_items.get(this.gallery_index)),this.updateTitleAndFooter(),e=this.$element.attr("data-remote")||this.$element.attr("href"),this.detectRemoteType(e,this.$element.attr("data-type")||!1),this.gallery_index+1<this.gallery_items.length&&(f=d(this.gallery_items.get(this.gallery_index+1),!1),e=f.attr("data-remote")||f.attr("href"),"image"===f.attr("data-type")||this.isImage(e))?this.preloadImage(e,!1):void 0)
},navigate_left:function(){return 1!==this.gallery_items.length?(0===this.gallery_index?this.gallery_index=this.gallery_items.length-1:this.gallery_index--,this.options.onNavigate.call(this,"left",this.gallery_index),this.navigateTo(this.gallery_index)):void 0
},navigate_right:function(){return 1!==this.gallery_items.length?(this.gallery_index===this.gallery_items.length-1?this.gallery_index=0:this.gallery_index++,this.options.onNavigate.call(this,"right",this.gallery_index),this.navigateTo(this.gallery_index)):void 0
},detectRemoteType:function(f,e){var g;
return"image"===e||this.isImage(f)?(this.options.type="image",this.preloadImage(f,!0)):"youtube"===e||(g=this.getYoutubeId(f))?(this.options.type="youtube",this.showYoutubeVideo(g)):"vimeo"===e||(g=this.getVimeoId(f))?(this.options.type="vimeo",this.showVimeoVideo(g)):"instagram"===e||(g=this.getInstagramId(f))?(this.options.type="instagram",this.showInstagramVideo(g)):"url"===e||(g=this.getInstagramId(f))?(this.options.type="instagram",this.showInstagramVideo(g)):(this.options.type="url",this.loadRemoteContent(f))
},updateTitleAndFooter:function(){var f,e,h,g;
return h=this.modal_content.find(".modal-header"),e=this.modal_content.find(".modal-footer"),g=this.$element.data("title")||"",f=this.$element.data("footer")||"",g||this.options.always_show_close?h.css("display","").find(".modal-title").html(g||"&nbsp;"):h.css("display","none"),f?e.css("display","").html(f):e.css("display","none"),this
},showLoading:function(){return this.lightbox_body.html('<div class="modal-loading">Loading..</div>'),this
},showYoutubeVideo:function(f){var e,h,g;
return e=560/315,g=this.$element.data("width")||560,g=this.checkDimensions(g),h=g/e,this.resize(g),this.lightbox_body.html('<iframe width="'+g+'" height="'+h+'" src="//www.youtube.com/embed/'+f+'?badge=0&autoplay=1&html5=1" frameborder="0" allowfullscreen></iframe>'),this.options.onContentLoaded.call(this),this.modal_arrows?this.modal_arrows.css("display","none"):void 0
},showVimeoVideo:function(f){var e,h,g;
return e=500/281,g=this.$element.data("width")||560,g=this.checkDimensions(g),h=g/e,this.resize(g),this.lightbox_body.html('<iframe width="'+g+'" height="'+h+'" src="'+f+'?autoplay=1" frameborder="0" allowfullscreen></iframe>'),this.options.onContentLoaded.call(this),this.modal_arrows?this.modal_arrows.css("display","none"):void 0
},showInstagramVideo:function(f){var e;
return e=this.$element.data("width")||612,e=this.checkDimensions(e),this.resize(e),this.lightbox_body.html('<iframe width="'+e+'" height="'+e+'" src="'+this.addTrailingSlash(f)+'embed/" frameborder="0" allowfullscreen></iframe>'),this.options.onContentLoaded.call(this),this.modal_arrows?this.modal_arrows.css("display","none"):void 0
},loadRemoteContent:function(a){var h,g,f=this;
return g=this.$element.data("width")||560,this.resize(g),h=this.$element.data("disableExternalCheck")||!1,console.log(h,this.isExternal(a)),h||this.isExternal(a)?(this.lightbox_body.html('<iframe width="'+g+'" height="'+g+'" src="'+a+'" frameborder="0" allowfullscreen></iframe>'),this.options.onContentLoaded.call(this)):this.lightbox_body.load(a,d.proxy(function(){return f.$element.trigger("loaded.bs.modal")
})),this.modal_arrows?this.modal_arrows.css("display","block"):void 0
},isExternal:function(f){var e;
return e=f.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/),"string"==typeof e[1]&&e[1].length>0&&e[1].toLowerCase()!==location.protocol?!0:"string"==typeof e[2]&&e[2].length>0&&e[2].replace(new RegExp(":("+{"http:":80,"https:":443}[location.protocol]+")?$"),"")!==location.host?!0:!1
},error:function(b){return this.lightbox_body.html(b),this
},preloadImage:function(a,h){var g,f=this;
return g=new Image,(null==h||h===!0)&&(g.onload=function(){var e;
return e=d("<img />"),e.attr("src",g.src),e.addClass("img-responsive"),f.lightbox_body.html(e),f.modal_arrows&&f.modal_arrows.css("display","block"),f.resize(g.width),f.options.onContentLoaded.call(f)
},g.onerror=function(){return f.error("Failed to load image: "+a)
}),g.src=a,g
},resize:function(a){var e;
return e=a+this.border.left+this.padding.left+this.padding.right+this.border.right,e==32?e=500:e,this.modal_dialog.css("width","auto").css("max-width",e),this.lightbox_container.find("a").css("padding-top",function(){return d(this).parent().height()/2
}),this
},checkDimensions:function(f){var e,g;
return g=f+this.border.left+this.padding.left+this.padding.right+this.border.right,e=document.body.clientWidth,g>e&&(f=this.modal_body.width()),f
},close:function(){return this.modal.modal("hide")
},addTrailingSlash:function(b){return"/"!==b.substr(-1)&&(b+="/"),b
}},d.fn.ekkoLightbox=function(a){return this.each(function(){var b;
return b=d(this),a=d.extend({remote:b.attr("data-remote")||b.attr("href"),gallery_parent_selector:b.attr("data-parent"),type:b.attr("data-type")},a,b.data()),new c(this,a),this
})
},d.fn.ekkoLightbox.defaults={gallery_parent_selector:"*:not(.row)",left_arrow_class:".glyphicon .glyphicon-chevron-left",right_arrow_class:".glyphicon .glyphicon-chevron-right",directional_arrows:!0,type:null,always_show_close:!0,onShow:function(){},onShown:function(){},onHide:function(){},onHidden:function(){},onNavigate:function(){},onContentLoaded:function(){}}
}).call(this);
"use strict";
if(!String.prototype.includes){String.prototype.includes=function(a,b){if(typeof b!=="number"){b=0
}if(b+a.length>this.length){return false
}else{return this.indexOf(a,b)!==-1
}}
}(function(a,b){if(typeof module!=="undefined"&&module.exports){module.exports=b(require("jquery"))
}else{if(typeof define==="function"&&define.amd){define(["jquery"],function(c){return b(c)
})
}else{b(a.jQuery)
}}}(this,function(b){var c=function(e,d){this.$element=b(e);
this.options=b.extend({},b.fn.typeahead.defaults,d);
this.matcher=this.options.matcher||this.matcher;
this.sorter=this.options.sorter||this.sorter;
this.select=this.options.select||this.select;
this.autoSelect=typeof this.options.autoSelect=="boolean"?this.options.autoSelect:true;
this.highlighter=this.options.highlighter||this.highlighter;
this.render=this.options.render||this.render;
this.updater=this.options.updater||this.updater;
this.displayText=this.options.displayText||this.displayText;
this.source=this.options.source;
this.delay=this.options.delay;
this.$menu=b(this.options.menu);
this.$appendTo=this.options.appendTo?b(this.options.appendTo):null;
this.shown=false;
this.listen();
this.showHintOnFocus=typeof this.options.showHintOnFocus=="boolean"?this.options.showHintOnFocus:false;
this.afterSelect=this.options.afterSelect;
this.addItem=false
};
c.prototype={constructor:c,select:function(){var e=this.$menu.find(".active").data("value");
this.$element.data("active",e);
if(this.autoSelect||e){var d=this.updater(e);
this.$element.val(this.displayText(d)||d).change();
this.afterSelect(d)
}return this.hide()
},updater:function(d){return d
},setSource:function(d){this.source=d
},show:function(){var e=b.extend({},this.$element.position(),{height:this.$element[0].offsetHeight}),d;
d=typeof this.options.scrollHeight=="function"?this.options.scrollHeight.call():this.options.scrollHeight;
(this.$appendTo?this.$menu.appendTo(this.$appendTo):this.$menu.insertAfter(this.$element)).css({top:e.top+e.height+d,left:e.left}).show();
this.shown=true;
return this
},hide:function(){this.$menu.hide();
this.shown=false;
return this
},lookup:function(e){var d;
if(typeof(e)!="undefined"&&e!==null){this.query=e
}else{this.query=this.$element.val()||""
}if(this.query.length<this.options.minLength){return this.shown?this.hide():this
}var f=b.proxy(function(){if(b.isFunction(this.source)){this.source(this.query,b.proxy(this.process,this))
}else{if(this.source){this.process(this.source)
}}},this);
clearTimeout(this.lookupWorker);
this.lookupWorker=setTimeout(f,this.delay)
},process:function(d){var e=this;
d=b.grep(d,function(f){return e.matcher(f)
});
d=this.sorter(d);
if(!d.length&&!this.options.addItem){return this.shown?this.hide():this
}if(d.length>0){this.$element.data("active",d[0])
}else{this.$element.data("active",null)
}if(this.options.addItem){d.push(this.options.addItem)
}if(this.options.items=="all"){return this.render(d).show()
}else{return this.render(d.slice(0,this.options.items)).show()
}},matcher:function(e){var d=this.displayText(e);
return ~d.toLowerCase().indexOf(this.query.toLowerCase())
},sorter:function(f){var g=[],e=[],d=[],i;
while((i=f.shift())){var h=this.displayText(i);
if(!h.toLowerCase().indexOf(this.query.toLowerCase())){g.push(i)
}else{if(~h.indexOf(this.query)){e.push(i)
}else{d.push(i)
}}}return g.concat(e,d)
},highlighter:function(m){var g=b("<div></div>");
var j=this.query;
var f=m.toLowerCase().indexOf(j.toLowerCase());
var h,d,e,k,l;
h=j.length;
if(h===0){return g.text(m).html()
}while(f>-1){d=m.substr(0,f);
e=m.substr(f,h);
k=m.substr(f+h);
l=b("<strong></strong>").text(e);
g.append(document.createTextNode(d)).append(l);
m=k;
f=m.toLowerCase().indexOf(j.toLowerCase())
}return g.append(document.createTextNode(m)).html()
},render:function(e){var g=this;
var d=this;
var f=false;
e=b(e).map(function(h,j){var k=d.displayText(j);
h=b(g.options.item).data("value",j);
h.find("a").html(g.highlighter(k));
return h[0]
});
if(this.autoSelect&&!f){e.first().addClass("active");
this.$element.data("active",e.first().data("value"))
}this.$menu.html(e);
return this
},displayText:function(d){return d.name||d
},next:function(e){var f=this.$menu.find(".active").removeClass("active"),d=f.next();
if(!d.length){d=b(this.$menu.find("li")[0])
}d.addClass("active")
},prev:function(e){var f=this.$menu.find(".active").removeClass("active"),d=f.prev();
if(!d.length){d=this.$menu.find("li").last()
}d.addClass("active")
},listen:function(){this.$element.on("focus",b.proxy(this.focus,this)).on("blur",b.proxy(this.blur,this)).on("keypress",b.proxy(this.keypress,this)).on("keyup",b.proxy(this.keyup,this));
if(this.eventSupported("keydown")){this.$element.on("keydown",b.proxy(this.keydown,this))
}this.$menu.on("click",b.proxy(this.click,this)).on("mouseenter","li",b.proxy(this.mouseenter,this)).on("mouseleave","li",b.proxy(this.mouseleave,this))
},destroy:function(){this.$element.data("typeahead",null);
this.$element.data("active",null);
this.$element.off("focus").off("blur").off("keypress").off("keyup");
if(this.eventSupported("keydown")){this.$element.off("keydown")
}this.$menu.remove()
},eventSupported:function(d){var e=d in this.$element;
if(!e){this.$element.setAttribute(d,"return;");
e=typeof this.$element[d]==="function"
}return e
},move:function(d){if(!this.shown){return
}switch(d.keyCode){case 9:case 13:case 27:d.preventDefault();
break;
case 38:if(d.shiftKey){return
}d.preventDefault();
this.prev();
break;
case 40:if(d.shiftKey){return
}d.preventDefault();
this.next();
break
}},keydown:function(d){this.suppressKeyPressRepeat=~b.inArray(d.keyCode,[40,38,9,13,27]);
if(!this.shown&&d.keyCode==40){this.lookup()
}else{this.move(d)
}},keypress:function(d){if(this.suppressKeyPressRepeat){return
}this.move(d)
},keyup:function(d){switch(d.keyCode){case 40:case 38:case 16:case 17:case 18:break;
case 9:case 13:if(!this.shown){return
}this.select();
break;
case 27:if(!this.shown){return
}this.hide();
break;
default:this.lookup()
}d.preventDefault()
},focus:function(d){if(!this.focused){this.focused=true;
if(this.options.showHintOnFocus){this.lookup("")
}}},blur:function(d){this.focused=false;
if(!this.mousedover&&this.shown){this.hide()
}},click:function(d){d.preventDefault();
this.select();
this.$element.focus()
},mouseenter:function(d){this.mousedover=true;
this.$menu.find(".active").removeClass("active");
b(d.currentTarget).addClass("active")
},mouseleave:function(d){this.mousedover=false;
if(typeof(this.focused)!=="undefined"){if(!this.focused&&this.shown){this.hide()
}}}};
var a=b.fn.typeahead;
b.fn.typeahead=function(e){var d=arguments;
if(typeof e=="string"&&e=="getActive"){return this.data("active")
}return this.each(function(){var h=b(this),g=h.data("typeahead"),f=typeof e=="object"&&e;
if(!g){h.data("typeahead",(g=new c(this,f)))
}if(typeof e=="string"){if(d.length>1){g[e].apply(g,Array.prototype.slice.call(d,1))
}else{g[e]()
}}})
};
b.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu" role="listbox"></ul>',item:'<li><a href="#" role="option"></a></li>',minLength:1,scrollHeight:0,autoSelect:true,afterSelect:b.noop,addItem:false,delay:0};
b.fn.typeahead.Constructor=c;
b.fn.typeahead.noConflict=function(){b.fn.typeahead=a;
return this
};
b(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(f){var d=b(this);
if(d.data("typeahead")){return
}d.typeahead(d.data())
})
}));
"use strict";
var mwaEmail;
var mwaCountry;
var mwaFirstName;
var mwaLastName;
var mwaReferenceId;
var isLoggedIn;
var profileDataLoadAttempted;
var primaryDomain=true;
var domainInterval;
var iframeLoaded=false;
var MWEmbeddedStatus;
window.MathWorks=window.MathWorks||{};
"use strict";
if(!String.prototype.startsWith){String.prototype.startsWith=function(b,a){a=a||0;
return this.substr(a,b.length)===b
}
}"use strict";
if(!String.prototype.endsWith){String.prototype.endsWith=function(c,b){var a=this.toString();
if(typeof b!=="number"||!isFinite(b)||Math.floor(b)!==b||b>a.length){b=a.length
}b-=c.length;
var d=a.indexOf(c,b);
return d!==-1&&d===b
}
}"use strict";
if(!Array.prototype.includes){Object.defineProperty(Array.prototype,"includes",{value:function(d,e){if(this===null){throw new TypeError('"this" is null or not defined')
}var f=Object(this);
var a=f.length>>>0;
if(a===0){return false
}var g=e|0;
var c=Math.max(g>=0?g:a-Math.abs(g),0);
function b(h,i){return h===i||(typeof h==="number"&&typeof i==="number"&&isNaN(h)&&isNaN(i))
}while(c<a){if(b(f[c],d)){return true
}c++
}return false
}})
}(function(){function a(f,h,d){function g(j,k){if(!h[j]){if(!f[j]){var m="function"==typeof require&&require;
if(!k&&m){return m(j,!0)
}if(b){return b(j,!0)
}var e=new Error("Cannot find module '"+j+"'");
throw e.code="MODULE_NOT_FOUND",e
}var l=h[j]={exports:{}};
f[j][0].call(l.exports,function(i){var o=f[j][1][i];
return g(o||i)
},l,l.exports,a,f,h,d)
}return h[j].exports
}for(var b="function"==typeof require&&require,c=0;
c<d.length;
c++){g(d[c])
}return g
}return a
})()({1:[function(c,d,a){var b=c("./utils.js");
var e={init:function(){var f=this;
var j=window.location.href,g=b.getDomain(j),i=b.getSubdomain(g),h=b.getLang(j);
f.setMWAPrefCookie(g,i);
f.setPerfCookie(h,g,j)
},setMWAPrefCookie:function(h,j){var f=this;
var k=new RegExp("[?&]requestedDomain=([^&]*)"),i=k.exec(window.location.search);
if(i){var g=b.getValidLang(j,i[1]);
b.setCookie(h,g);
f.updateWindowHistory()
}},updateWindowHistory:function(){var f=window.location.href.replace(/requestedDomain=[a-z]?[a-z]?&?/,"");
f=f.replace(/\&$/,"");
f=f.replace(/\?$/,"");
history.replaceState({},document.title,f)
},setPerfCookie:function(i,h,j){var f=b.getPrefDomain(h),g=b.getPrefLang(h);
if((!h.endsWith(".mathworks.com")&&!h.endsWith(".mathworks.cn"))||b.isExemptUrl(j)){return
}if(f){if(document.body.classList.contains("templateservice")){i=g
}if((f!==h||(g&&g!==i))){b.setCookie(f,g);
b.switchDomain(f,g)
}}}};
d.exports=e;
e.init()
},{"./utils.js":2}],2:[function(b,c,a){c.exports={isRewritten:function(d){return d[3]!=="content"
},isExemptUrl:function(d){if(this.getDomain(d)==="blueprint"){return true
}var e=["/services/training/schedule_enroll.html","/company/aboutus/directions.html","/programs/nrd","/programs/usrp","/company/events/seminars/intl_reg_form.html","/googlee8a9c0de75ed5e40.html","/mwaccount/profiles/identity/","/mwaccount/profiles/incomplete","/mwaccount/profiles/reverify","/mwaccount/profiles/reverify/email","/mwaccount/profiles/verify","/mwaccount/profiles/verify/existing","/login","/login/association/tah/existing","/login/verification/tah/new","/login/verification/tah/reverify"];
return e.some(function(f){return d.includes(f)
})
},getDomain:function(e){var f;
var d=e.split("/");
if(this.isRewritten(d)){f=d[2]
}else{f=d[5]
}return f
},getSubdomain:function(e){var d=/^([a-z0-9]{2,3})\./.exec(e);
if(d){return d[1]
}d=/^(aem-)?([a-z0-9]{2,3})-/.exec(e);
if(d){return d[2]
}d=/^([a-z0-9]{2,})$/.exec(e);
if(d){return d[1]
}throw"cannot determine subdomain for domain "+e
},getLang:function(e){var f;
var d=e.split("/");
if(this.isRewritten(d)){if(d[3]&&d[3].match(/^[a-z][a-z]$/)){f=d[3]
}else{if(this.getSubdomain(d[2])==="ch"){f="en"
}else{if(this.getSubdomain(d[2])==="ww2"){f="zh"
}else{f=""
}}}}else{f=d[6].substr(0,2)
}return f
},rewriteUrl:function(e,f,g){var d=e.split("/");
if(d[3]==="content"){d[5]=f;
d[6]=g
}else{d[2]=f;
if(d[3]&&d[3].match(/^[a-z][a-z]$/)){if((g==="en"&&f.startsWith("ch"))||(g==="zh"&&f.endsWith("mathworks.cn"))){d.splice(3,1)
}else{d[3]=g
}}else{if(g&&!(g==="en"&&f.startsWith("ch"))&&!(g==="zh"&&f.endsWith("mathworks.cn"))){d.splice(3,0,g)
}}}return d.join("/")
},setCookie:function(g,h){var d="mathworks.com";
if(location.host.endsWith("mathworks.cn")){d="mathworks.cn"
}var f=this.getSubdomain(g);
if(g.endsWith("mathworks.cn")){f="cn"
}if(f==="www"){f="us"
}if(f!=="cn"&&f!=="ch"){h=""
}var i=this.getCookieNames(g);
var e=new Date();
e.setFullYear(e.getFullYear()+68);
document.cookie=[i.mwaPrefsCookieName,"=",encodeURIComponent(JSON.stringify({domain:f,lang:h,v:2})),"; expires=",e.toUTCString(),"; path=/","; domain=",d].join("")
},logoutMWA:function(e){var d="mathworks.com";
if(location.host.endsWith("mathworks.cn")){d="mathworks.cn"
}var f=this.getCookieNames(e);
document.cookie=f.mwaLoginCookieName+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain="+d+";"
},getSubdomainSuffix:function(e){var f;
var d=e.split(".")[0].split("-");
if(d.length>1){f=d[d.length-1]
}return f
},getCookieNames:function(e){var d="mwa";
var g="mwa_prefs";
var f=this.getSubdomainSuffix(e);
if(f){d=d+"_"+f;
g=g+"_"+f
}return{mwaLoginCookieName:d,mwaPrefsCookieName:g}
},switchDomain:function(h,d){var e=location.pathname;
if(e.match(/^\/[a-z]{2}\//)){e=e.substring(3)
}else{if(e.match(/^\/[a-z]{2}\.html/)){e="/"
}}d=this.getValidLang(this.getSubdomain(h),d);
var f="//"+h;
if(d&&!this.isDefaultLang(this.getSubdomain(h),d)&&!document.body.classList.contains("templateservice")){f+="/"+d
}f+=e+location.search;
f=f.replace(/requestedDomain=[a-z]?[a-z]?&?/,"");
f=f.replace(/\&$/,"");
f=f.replace(/\?$/,"");
var g="requestedDomain="+d;
if(f.indexOf("?")>-1){f=f+"&"+g
}else{f=f+"?"+g
}window.location=f
},getPrefCookie:function(d){var g=this.getCookieNames(d);
var e=new RegExp("(?:(?:^|.*;\\s*)"+g.mwaPrefsCookieName+"\\s*\\=\\s*([^;]*).*$)|^.*$");
if(document.cookie){var f=document.cookie.replace(e,"$1");
if(f){return JSON.parse(decodeURIComponent(f))
}}return""
},getPrefDomain:function(e){var g=this.getPrefCookie(e);
var d;
if(!!g){d=g.domain;
if(d==="us"){d="www"
}var f=this.getSubdomainSuffix(e);
if(d!=="cn"){if(f){d=d+"-"+f
}d=d+".mathworks.com"
}else{d="ww2";
if(f){d=d+"-"+f
}d=d+".mathworks.cn"
}}return d
},getPrefLang:function(d){var e=this.getPrefCookie(d);
return this.getValidLang(e.domain,e.lang)
},getCookieVersion:function(d){var e=this.getPrefCookie(d);
return e.v
},getValidLang:function(e,f){var g={};
g.ch=["en","de","fr"];
g.cn=["zh","en"];
g.ww2=["zh","en"];
var d=g[e];
if(d){if(d.indexOf(f)>=0){return f
}else{return d[0]
}}return""
},isDefaultLang:function(e,f){var g={};
g.ch="en";
g.cn="zh";
g.ww2="zh";
var d=g[e];
if(d){if(d===f){return true
}else{return false
}}else{if(f){return false
}}return true
}}
},{}]},{},[1]);
(function(){function a(f,h,d){function g(j,k){if(!h[j]){if(!f[j]){var m="function"==typeof require&&require;
if(!k&&m){return m(j,!0)
}if(b){return b(j,!0)
}var e=new Error("Cannot find module '"+j+"'");
throw e.code="MODULE_NOT_FOUND",e
}var l=h[j]={exports:{}};
f[j][0].call(l.exports,function(i){var o=f[j][1][i];
return g(o||i)
},l,l.exports,a,f,h,d)
}return h[j].exports
}for(var b="function"==typeof require&&require,c=0;
c<d.length;
c++){g(d[c])
}return g
}return a
})()({1:[function(b,c,a){c.exports={US:{name:"United States",subdomain:"www"},AD:{name:"Andorra",subdomain:"es"},AR:{name:"Argentina",subdomain:"la"},AU:{name:"Australia",subdomain:"au"},AT:{name:"Austria",subdomain:"de"},BE:{name:"Belgium",subdomain:"nl"},BO:{name:"Bolivia",subdomain:"la"},BV:{name:"Bouvet Islands",subdomain:"se"},CA:{name:"Canada",subdomain:"www"},CL:{name:"Chile",subdomain:"la"},CN:{name:"China",subdomain:"ww2"},CX:{name:"Christmas Island",subdomain:"au"},CC:{name:"Cocos-Keeling Islands",subdomain:"au"},CO:{name:"Colombia",subdomain:"la"},CR:{name:"Costa Rica",subdomain:"la"},DK:{name:"Denmark",subdomain:"se"},DO:{name:"Dominican Republic",subdomain:"la"},EC:{name:"Ecuador",subdomain:"la"},SV:{name:"El Salvador",subdomain:"la"},EE:{name:"Estonia",subdomain:"se"},FO:{name:"Faroe Islands",subdomain:"se"},FJ:{name:"Fiji",subdomain:"au"},FI:{name:"Finland",subdomain:"se"},FR:{name:"France",subdomain:"fr"},GF:{name:"French Guiana",subdomain:"fr"},PF:{name:"French Polynesia",subdomain:"fr"},DE:{name:"Germany",subdomain:"de"},GL:{name:"Greenland",subdomain:"se"},GP:{name:"Guadalupe",subdomain:"fr"},GT:{name:"Guatemala",subdomain:"la"},HK:{name:"Hong Kong",subdomain:"ww2"},HN:{name:"Honduras",subdomain:"la"},IS:{name:"Iceland",subdomain:"se"},IN:{name:"India",subdomain:"in"},IE:{name:"Ireland",subdomain:"uk"},IT:{name:"Italy",subdomain:"it"},JP:{name:"Japan",subdomain:"jp"},KR:{name:"Korea",subdomain:"kr"},LV:{name:"Latvia",subdomain:"se"},LI:{name:"Liechtenstein",subdomain:"ch"},LT:{name:"Lithuania",subdomain:"se"},LU:{name:"Luxembourg",subdomain:"nl"},MO:{name:"Macau",subdomain:"ww2"},MQ:{name:"Martinique",subdomain:"fr"},YT:{name:"Mayotte Island",subdomain:"fr"},MX:{name:"Mexico",subdomain:"la"},MC:{name:"Monaco",subdomain:"fr"},NL:{name:"Netherlands",subdomain:"nl"},NC:{name:"New Caledonia",subdomain:"fr"},NZ:{name:"New Zealand",subdomain:"au"},NI:{name:"Nicaragua",subdomain:"la"},NO:{name:"Norway",subdomain:"se"},PA:{name:"Panama",subdomain:"la"},PG:{name:"Papua New Guinea",subdomain:"au"},PY:{name:"Paraguay",subdomain:"la"},PE:{name:"Peru",subdomain:"la"},PT:{name:"Portugal",subdomain:"www"},PR:{name:"Puerto Rico",subdomain:"la"},RE:{name:"Reunion Island",subdomain:"fr"},ES:{name:"Spain",subdomain:"es"},LK:{name:"Sri Lanka",subdomain:"in"},SE:{name:"Sweden",subdomain:"se"},CH:{name:"Switzerland",subdomain:"ch"},GB:{name:"United Kingdom",subdomain:"uk"},UY:{name:"Uruguay",subdomain:"la"},VA:{name:"Vatican City",subdomain:"it"},VE:{name:"Venezuela",subdomain:"la"}}
},{}],2:[function(d,g,b){var c=d("./utils.js"),f=d("./countrySubdomains.js");
var e,a;
var h={init:function(){var l=this,q=window.location.href,k=c.getDomain(q),p=c.getSubdomain(k),n=c.getLang(q),o=c.getPrefDomain(k),j=c.getPrefLang(k),m=c.getSubdomain(o),i=window.MathWorksCountryCode;
l.setCookieAndSwitchDomain();
l.setCountrySelectorButtonText(j,m,n,p);
l.setRecommendedLink(i,o,j);
l.showChinaPerformanceAlert(i);
l.checkVisitorPrefDomain(o,i,k,j,p,n,q)
},setCookieAndSwitchDomain:function(){$("a.domain_selector_link").click(function(j){j.preventDefault();
var i=c.getDomain(this.href),k=$(this).data("lang");
c.setCookie(i,k);
c.switchDomain(i,k)
})
},setCountrySelectorButtonText:function(k,i,j,m){var l;
if(k){l=$("a[data-subdomain='"+i+"'][data-lang='"+k+"'][data-selected-text]").data("selected-text")
}else{if(j){l=$("a[data-subdomain='"+m+"'][data-lang='"+j+"'][data-selected-text]").data("selected-text")
}else{l=$("a[data-subdomain='"+m+"'][data-default-lang='true'][data-selected-text]").data("selected-text")
}}$("#countrySelectorButtonText").text(l)
},setRecommendedLink:function(i,k,l){var j=this;
if(i){if(f[i]!==undefined){e=f[i].subdomain
}else{e="www"
}a=$("a[data-subdomain='"+e+"'][data-recommended-text]")
}else{if(k){e=c.getSubdomain(k);
if(l){a=$("a[data-subdomain='"+e+"'][data-lang='"+l+"']")
}else{a=$("a[data-subdomain='"+e+"'][data-default-lang='true']")
}}}if(!a){e="www";
a=$("a[data-subdomain='"+e+"'][data-recommended-text]")
}j.clickRecommendedDomainButton(a);
j.clickWorldwideLink(a)
},clickRecommendedDomainButton:function(i){var j=$("#recommended_domain_button");
$(".recommended-country").text(i.data("recommended-text"));
j.attr("href",i.attr("href"));
j.data("lang",i.data("lang"));
j.click(function(l){l.preventDefault();
var k=c.getDomain(this.href);
var m=$(this).data("lang");
c.setCookie(k,m);
c.switchDomain(k,m)
})
},clickWorldwideLink:function(j){var i=$("a.worldwide_link");
i.attr("href",j.attr("href"));
i.data("lang",j.data("lang"));
i.click(function(m){m.preventDefault();
var l=c.getDomain(this.href);
var o=$(this).data("lang");
c.setCookie(l,o);
var k=m.target.getAttribute("href");
var n="/company/worldwide.html?s_tid=dmselect_cta&requestedDomain=";
if(k){location.href=k+n
}})
},showChinaPerformanceAlert:function(i){if(i==="CN"){$("#china_performance_alert").show()
}},checkVisitorPrefDomain:function(k,j,n,m,o,l,p){if((!n.endsWith(".mathworks.com")&&!n.endsWith(".mathworks.cn"))||c.isExemptUrl(p)){return
}if(k){if(j==="CN"&&c.getSubdomain(k)!=="ww2"&&!c.getCookieVersion(n)){$("#country-unselected").modal("show");
return
}}if(!k){if(j){var i=$("a[data-country-code='"+j+"']").data("subdomain");
if((j.toLowerCase()===o)||(i===o)){c.setCookie(n,l)
}else{$("#country-unselected").modal("show")
}return
}if(o==="www"){c.setCookie(n,"")
}else{$("#country-unselected").modal("show")
}}else{if(k===n){if(document.body.classList.contains("templateservice")){l=m
}c.setCookie(n,l)
}}}};
g.exports=h;
h.init()
},{"./countrySubdomains.js":1,"./utils.js":3}],3:[function(b,c,a){c.exports={isRewritten:function(d){return d[3]!=="content"
},isExemptUrl:function(d){if(this.getDomain(d)==="blueprint"){return true
}var e=["/services/training/schedule_enroll.html","/company/aboutus/directions.html","/programs/nrd","/programs/usrp","/company/events/seminars/intl_reg_form.html","/googlee8a9c0de75ed5e40.html","/mwaccount/profiles/identity/","/mwaccount/profiles/incomplete","/mwaccount/profiles/reverify","/mwaccount/profiles/reverify/email","/mwaccount/profiles/verify","/mwaccount/profiles/verify/existing","/login","/login/association/tah/existing","/login/verification/tah/new","/login/verification/tah/reverify"];
return e.some(function(f){return d.includes(f)
})
},getDomain:function(e){var f;
var d=e.split("/");
if(this.isRewritten(d)){f=d[2]
}else{f=d[5]
}return f
},getSubdomain:function(e){var d=/^([a-z0-9]{2,3})\./.exec(e);
if(d){return d[1]
}d=/^(aem-)?([a-z0-9]{2,3})-/.exec(e);
if(d){return d[2]
}d=/^([a-z0-9]{2,})$/.exec(e);
if(d){return d[1]
}throw"cannot determine subdomain for domain "+e
},getLang:function(e){var f;
var d=e.split("/");
if(this.isRewritten(d)){if(d[3]&&d[3].match(/^[a-z][a-z]$/)){f=d[3]
}else{if(this.getSubdomain(d[2])==="ch"){f="en"
}else{if(this.getSubdomain(d[2])==="ww2"){f="zh"
}else{f=""
}}}}else{f=d[6].substr(0,2)
}return f
},rewriteUrl:function(e,f,g){var d=e.split("/");
if(d[3]==="content"){d[5]=f;
d[6]=g
}else{d[2]=f;
if(d[3]&&d[3].match(/^[a-z][a-z]$/)){if((g==="en"&&f.startsWith("ch"))||(g==="zh"&&f.endsWith("mathworks.cn"))){d.splice(3,1)
}else{d[3]=g
}}else{if(g&&!(g==="en"&&f.startsWith("ch"))&&!(g==="zh"&&f.endsWith("mathworks.cn"))){d.splice(3,0,g)
}}}return d.join("/")
},setCookie:function(g,h){var d="mathworks.com";
if(location.host.endsWith("mathworks.cn")){d="mathworks.cn"
}var f=this.getSubdomain(g);
if(g.endsWith("mathworks.cn")){f="cn"
}if(f==="www"){f="us"
}if(f!=="cn"&&f!=="ch"){h=""
}var i=this.getCookieNames(g);
var e=new Date();
e.setFullYear(e.getFullYear()+68);
document.cookie=[i.mwaPrefsCookieName,"=",encodeURIComponent(JSON.stringify({domain:f,lang:h,v:2})),"; expires=",e.toUTCString(),"; path=/","; domain=",d].join("")
},logoutMWA:function(e){var d="mathworks.com";
if(location.host.endsWith("mathworks.cn")){d="mathworks.cn"
}var f=this.getCookieNames(e);
document.cookie=f.mwaLoginCookieName+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain="+d+";"
},getSubdomainSuffix:function(e){var f;
var d=e.split(".")[0].split("-");
if(d.length>1){f=d[d.length-1]
}return f
},getCookieNames:function(e){var d="mwa";
var g="mwa_prefs";
var f=this.getSubdomainSuffix(e);
if(f){d=d+"_"+f;
g=g+"_"+f
}return{mwaLoginCookieName:d,mwaPrefsCookieName:g}
},switchDomain:function(h,d){var e=location.pathname;
if(e.match(/^\/[a-z]{2}\//)){e=e.substring(3)
}else{if(e.match(/^\/[a-z]{2}\.html/)){e="/"
}}d=this.getValidLang(this.getSubdomain(h),d);
var f="//"+h;
if(d&&!this.isDefaultLang(this.getSubdomain(h),d)&&!document.body.classList.contains("templateservice")){f+="/"+d
}f+=e+location.search;
f=f.replace(/requestedDomain=[a-z]?[a-z]?&?/,"");
f=f.replace(/\&$/,"");
f=f.replace(/\?$/,"");
var g="requestedDomain="+d;
if(f.indexOf("?")>-1){f=f+"&"+g
}else{f=f+"?"+g
}window.location=f
},getPrefCookie:function(d){var g=this.getCookieNames(d);
var e=new RegExp("(?:(?:^|.*;\\s*)"+g.mwaPrefsCookieName+"\\s*\\=\\s*([^;]*).*$)|^.*$");
if(document.cookie){var f=document.cookie.replace(e,"$1");
if(f){return JSON.parse(decodeURIComponent(f))
}}return""
},getPrefDomain:function(e){var g=this.getPrefCookie(e);
var d;
if(!!g){d=g.domain;
if(d==="us"){d="www"
}var f=this.getSubdomainSuffix(e);
if(d!=="cn"){if(f){d=d+"-"+f
}d=d+".mathworks.com"
}else{d="ww2";
if(f){d=d+"-"+f
}d=d+".mathworks.cn"
}}return d
},getPrefLang:function(d){var e=this.getPrefCookie(d);
return this.getValidLang(e.domain,e.lang)
},getCookieVersion:function(d){var e=this.getPrefCookie(d);
return e.v
},getValidLang:function(e,f){var g={};
g.ch=["en","de","fr"];
g.cn=["zh","en"];
g.ww2=["zh","en"];
var d=g[e];
if(d){if(d.indexOf(f)>=0){return f
}else{return d[0]
}}return""
},isDefaultLang:function(e,f){var g={};
g.ch="en";
g.cn="zh";
g.ww2="zh";
var d=g[e];
if(d){if(d===f){return true
}else{return false
}}else{if(f){return false
}}return true
}}
},{}]},{},[2]);
"use strict";
if(MWEmbeddedStatus===undefined){MWEmbeddedStatus={}
}String.prototype.endsWith=function(a){var b=this.length-a.length;
return b>=0&&this.lastIndexOf(a)===b
};
MWEmbeddedStatus=(function(){var a;
a=function(c,d){this.instance;
this.config=$.extend({},a.defaultConfig,c||{});
var b={};
b.src=this.config.embeddedEndpoint+"v2/status.html";
b.tabindex="-1";
b.height=0;
b.width=0;
b.id="embeddedStatus";
b.frameborder=0;
this._iframe=$("<iframe>",b)
};
a.defaultConfig={};
a.defaultConfig.success=function(){};
a.defaultConfig.error=function(){};
a.initialize=function(c,e){var b=new a(c,e);
try{a.instance=b.initialize();
return this
}catch(d){}};
a.findCookie=function(b){return a.instance.findCookie(b)
};
a.redirectToSSO=function(b){a.instance.redirectToSSO(b)
};
a.verifyEvent=function(b){return a.instance.verifyOrigin(b.origin)
};
a.getConfig=function(){return a.instance.config
};
a.getIframe=function(){return a.instance._getIframe()
};
a.logout=function(){return a.instance.logout()
};
a.postMessage=function(b){return a.instance.postMessage(b)
};
a.prototype.initialize=function(){if(window.addEventListener){window.addEventListener("message",this._receiver,false);
this._writeIframe();
return this
}};
a.prototype.findCookie=function(e){var d=e+"=";
var g=decodeURIComponent(document.cookie);
var b=g.split(";");
for(var f=0;
f<b.length;
f++){var h=b[f];
while(h.charAt(0)===" "){h=h.substring(1)
}if(h.indexOf(d)===0){return h.substring(d.length,h.length)
}}return
};
a.prototype.redirectToSSO=function(b){window.location.href="https://"+location.hostname+"/login/mwa-sso?uri="+encodeURIComponent(window.location.href)+"&tx_id="+b
};
a.prototype.verifyOrigin=function(b){return b.endsWith(".mathworks.com")
};
a.prototype.logout=function(){document.cookie="mwa_SID=; domain="+window.location.hostname+";path=/";
a.instance.config.logout()
};
a.prototype.postMessage=function(c,b){a.getIframe().contentWindow.postMessage(JSON.stringify(c),b.origin)
};
a.prototype._receiver=function(e){try{if(a.verifyEvent(e)){var c=JSON.parse(e.data);
var b=c.event;
if(b==="connected"){var f={event:"getStatus",sessionId:a.prototype.findCookie("mwa_SID")};
a.prototype.postMessage(f,e)
}else{if(b==="sso"){a.prototype.redirectToSSO(c.tx_id)
}else{if(b==="logout"){a.logout()
}}}}}catch(d){return
}};
a.prototype._writeIframe=function(b){window.addEventListener("DOMContentLoaded",function(){if(!document.querySelector("#embeddedStatus")){document.querySelector("body").appendChild(a.getIframe())
}},false)
};
a.prototype._getIframe=function(){return this._iframe[0]
};
return a
}());
(function(){function a(f,h,d){function g(j,k){if(!h[j]){if(!f[j]){var m="function"==typeof require&&require;
if(!k&&m){return m(j,!0)
}if(b){return b(j,!0)
}var e=new Error("Cannot find module '"+j+"'");
throw e.code="MODULE_NOT_FOUND",e
}var l=h[j]={exports:{}};
f[j][0].call(l.exports,function(i){var o=f[j][1][i];
return g(o||i)
},l,l.exports,a,f,h,d)
}return h[j].exports
}for(var b="function"==typeof require&&require,c=0;
c<d.length;
c++){g(d[c])
}return g
}return a
})()({1:[function(b,c,a){c.exports={isRewritten:function(d){return d[3]!=="content"
},isExemptUrl:function(d){if(this.getDomain(d)==="blueprint"){return true
}var e=["/services/training/schedule_enroll.html","/company/aboutus/directions.html","/programs/nrd","/programs/usrp","/company/events/seminars/intl_reg_form.html","/googlee8a9c0de75ed5e40.html","/mwaccount/profiles/identity/","/mwaccount/profiles/incomplete","/mwaccount/profiles/reverify","/mwaccount/profiles/reverify/email","/mwaccount/profiles/verify","/mwaccount/profiles/verify/existing","/login","/login/association/tah/existing","/login/verification/tah/new","/login/verification/tah/reverify"];
return e.some(function(f){return d.includes(f)
})
},getDomain:function(e){var f;
var d=e.split("/");
if(this.isRewritten(d)){f=d[2]
}else{f=d[5]
}return f
},getSubdomain:function(e){var d=/^([a-z0-9]{2,3})\./.exec(e);
if(d){return d[1]
}d=/^(aem-)?([a-z0-9]{2,3})-/.exec(e);
if(d){return d[2]
}d=/^([a-z0-9]{2,})$/.exec(e);
if(d){return d[1]
}throw"cannot determine subdomain for domain "+e
},getLang:function(e){var f;
var d=e.split("/");
if(this.isRewritten(d)){if(d[3]&&d[3].match(/^[a-z][a-z]$/)){f=d[3]
}else{if(this.getSubdomain(d[2])==="ch"){f="en"
}else{if(this.getSubdomain(d[2])==="ww2"){f="zh"
}else{f=""
}}}}else{f=d[6].substr(0,2)
}return f
},rewriteUrl:function(e,f,g){var d=e.split("/");
if(d[3]==="content"){d[5]=f;
d[6]=g
}else{d[2]=f;
if(d[3]&&d[3].match(/^[a-z][a-z]$/)){if((g==="en"&&f.startsWith("ch"))||(g==="zh"&&f.endsWith("mathworks.cn"))){d.splice(3,1)
}else{d[3]=g
}}else{if(g&&!(g==="en"&&f.startsWith("ch"))&&!(g==="zh"&&f.endsWith("mathworks.cn"))){d.splice(3,0,g)
}}}return d.join("/")
},setCookie:function(g,h){var d="mathworks.com";
if(location.host.endsWith("mathworks.cn")){d="mathworks.cn"
}var f=this.getSubdomain(g);
if(g.endsWith("mathworks.cn")){f="cn"
}if(f==="www"){f="us"
}if(f!=="cn"&&f!=="ch"){h=""
}var i=this.getCookieNames(g);
var e=new Date();
e.setFullYear(e.getFullYear()+68);
document.cookie=[i.mwaPrefsCookieName,"=",encodeURIComponent(JSON.stringify({domain:f,lang:h,v:2})),"; expires=",e.toUTCString(),"; path=/","; domain=",d].join("")
},logoutMWA:function(e){var d="mathworks.com";
if(location.host.endsWith("mathworks.cn")){d="mathworks.cn"
}var f=this.getCookieNames(e);
document.cookie=f.mwaLoginCookieName+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain="+d+";"
},getSubdomainSuffix:function(e){var f;
var d=e.split(".")[0].split("-");
if(d.length>1){f=d[d.length-1]
}return f
},getCookieNames:function(e){var d="mwa";
var g="mwa_prefs";
var f=this.getSubdomainSuffix(e);
if(f){d=d+"_"+f;
g=g+"_"+f
}return{mwaLoginCookieName:d,mwaPrefsCookieName:g}
},switchDomain:function(h,d){var e=location.pathname;
if(e.match(/^\/[a-z]{2}\//)){e=e.substring(3)
}else{if(e.match(/^\/[a-z]{2}\.html/)){e="/"
}}d=this.getValidLang(this.getSubdomain(h),d);
var f="//"+h;
if(d&&!this.isDefaultLang(this.getSubdomain(h),d)&&!document.body.classList.contains("templateservice")){f+="/"+d
}f+=e+location.search;
f=f.replace(/requestedDomain=[a-z]?[a-z]?&?/,"");
f=f.replace(/\&$/,"");
f=f.replace(/\?$/,"");
var g="requestedDomain="+d;
if(f.indexOf("?")>-1){f=f+"&"+g
}else{f=f+"?"+g
}window.location=f
},getPrefCookie:function(d){var g=this.getCookieNames(d);
var e=new RegExp("(?:(?:^|.*;\\s*)"+g.mwaPrefsCookieName+"\\s*\\=\\s*([^;]*).*$)|^.*$");
if(document.cookie){var f=document.cookie.replace(e,"$1");
if(f){return JSON.parse(decodeURIComponent(f))
}}return""
},getPrefDomain:function(e){var g=this.getPrefCookie(e);
var d;
if(!!g){d=g.domain;
if(d==="us"){d="www"
}var f=this.getSubdomainSuffix(e);
if(d!=="cn"){if(f){d=d+"-"+f
}d=d+".mathworks.com"
}else{d="ww2";
if(f){d=d+"-"+f
}d=d+".mathworks.cn"
}}return d
},getPrefLang:function(d){var e=this.getPrefCookie(d);
return this.getValidLang(e.domain,e.lang)
},getCookieVersion:function(d){var e=this.getPrefCookie(d);
return e.v
},getValidLang:function(e,f){var g={};
g.ch=["en","de","fr"];
g.cn=["zh","en"];
g.ww2=["zh","en"];
var d=g[e];
if(d){if(d.indexOf(f)>=0){return f
}else{return d[0]
}}return""
},isDefaultLang:function(e,f){var g={};
g.ch="en";
g.cn="zh";
g.ww2="zh";
var d=g[e];
if(d){if(d===f){return true
}else{return false
}}else{if(f){return false
}}return true
}}
},{}],2:[function(c,d,a){var b=c("../domainSelector/utils.js");
var e=c("./utils.js");
var f={init:function(){var l=this;
var m=window.location.href;
var k=b.getDomain(m);
var g="https://"+window.location.hostname;
var i=($("body").attr("data-is-homepage")==="true");
var o=e.getMWACookieNames(k);
var j=o.mwaDeprecatedAccountLoginCookieName;
var n=o.mwaLoginCookieName;
var h=o.mwaLoginProfileCookieName;
l.checkMWLoginCookie(n);
l.attemptShowLogin(n,h,j,g,i,m,0);
l.attemptSSOLogin()
},checkMWLoginCookie:function(g){if(!!$.cookie(g)){isLoggedIn=true
}else{isLoggedIn=false
}},redirectUrl:function(g){return window.customGlobalNavRedirectUrl||g
},showLoggedOut:function(h,j,i){var g=this;
isLoggedIn=false;
profileDataLoadAttempted=true;
$(".not-logged-in").show();
$(".mwa-nav_login").attr("href",h+"/login"+(j?"":"?uri="+encodeURIComponent(g.redirectUrl(i))));
$(".headernav_login").show()
},populateContactForm:function(i,k,h,n){if($('input[name="E_mail"]').length){var j=$('input[name="E_mail"]');
j.val(i);
j.prop("readonly",true)
}if($('input[name="First_Name"]').length){var m=$('input[name="First_Name"]');
m.val(k);
m.prop("readonly",true)
}if($('input[name="Last_Name"]').length){var g=$('input[name="Last_Name"]');
g.val(h);
g.prop("readonly",true)
}if($('select[name="Country"]').length){var l=$('select[name="Country"]');
if(!l.val()){l.val(n).change()
}}},hideDomainContent:function(h){if(typeof(filterDomains)!=="undefined"){if(isLoggedIn&&filterDomains){if(h){var i=filterDomains.split(",");
var g=h.split("@");
if($.inArray("@"+g[1],i)>-1){$(".domain-specific").show();
$(".not-domain-specific").hide()
}else{$(".domain-specific").hide();
$(".not-domain-specific").show()
}}else{$(".domain-specific").hide();
$(".not-domain-specific").show()
}}}},showLoggedIn:function(i,j,m){var g=this;
isLoggedIn=true;
var h="/etc.clientlibs/mathworks/clientlibs/customer-ui/templates/common/resources/images/ico-header-account-active.svg";
var l="";
var k="";
if(i.profile){if(i.profile.profilePicture){l="/matlabcentral/profiles/"+i.profile.profilePicture
}if(i.profile.loginDisplayName){k=i.profile.loginDisplayName
}}$(".logged-in").show();
$(".mwa-name").text(k);
$(".mwa-account").attr("href",j+"/mwaccount/?s_tid=gn_myac");
$(".mwa-link-license").attr("href",j+"/licensecenter/licenses/add?s_tid=gn_aslc");
$(".mwa-community-profile").attr("href",j+"/matlabcentral/profile/authors/my_profile?s_tid=gn_comm");
$(".mwa-logout").attr("href",j+"/login/logout?uri="+encodeURIComponent(g.redirectUrl(m)));
$(".mwa_image_drop_down").attr("style","background-image:url("+l+"), url("+h+")").attr("alt",k);
$(".mobile_account_image").attr("style","background-image:url("+l+"), url("+h+")").attr("alt",k);
$(".mobile_account_name").append(k);
$(".headernav_logout").show();
$.get("/bin/mathworks/profile.json",function(n){mwaEmail=n.email;
mwaCountry=n.country;
mwaFirstName=n.firstName;
mwaLastName=n.lastName;
mwaReferenceId=n.referenceId;
g.hideDomainContent(mwaEmail);
g.populateContactForm(mwaEmail,mwaFirstName,mwaLastName,mwaCountry)
}).always(function(){profileDataLoadAttempted=true
})
},refreshProfileCookie:function(i,n,j,k,m,l,g){var h=this;
$.get(k+"/login/cookies/refresh?uri="+encodeURIComponent("/login"),h.attemptShowLogin(i,n,j,k,m,l,g)).fail(function(o){if(o.status===403){window.location=o.responseJSON.redirectUrl
}else{h.attemptShowLogin(i,n,j,k,m,l,g)
}})
},attemptShowLogin:function(t,h,k,g,j,s,o){var p=this;
var m=$.cookie(t);
var q=$.cookie(h);
if(o++>5){p.showLoggedOut(g,j,s);
return
}if(!!m){var i=JSON.parse(m);
var r=i.id;
if(!!q){var l=JSON.parse(q);
var n=l.id;
if(r&&n&&(r===n)){p.showLoggedIn(l,g,s)
}else{p.refreshProfileCookie(t,h,k,g,j,s,o)
}}else{p.refreshProfileCookie(t,h,k,g,j,s,o)
}}else{if(!!$.cookie(k)){p.refreshProfileCookie(t,h,k,g,j,s,o)
}else{p.showLoggedOut(g,j,s)
}}},attemptSSOLogin:function(){if((window.location.pathname.indexOf("/api/parts/")===-1)&&(window.location.pathname!=="/login")&&(window.location.pathname.indexOf("/login/")===-1)&&(window.location.search.indexOf("requestedDomain=")===-1)&&(window.location.hostname.indexOf("mathworks.com")===-1)){var h="https://login.mathworks.com/embedded-login/";
if(window.location.hostname.indexOf("www.mathworks")===-1){var i=window.location.hostname.split(".")[0].split("-")[1];
var g=i;
if(i&&i.indexOf("1")!==-1){g=i.substring(0,i.length-1)
}h="https://login-"+g+".mathworks.com/embedded-login/"
}window.MWEmbeddedStatus.initialize({clientString:"login",parentNodeId:null,embeddedEndpoint:h,logout:function(){window.location.replace("https://"+window.location.hostname+"/login/logout?uri="+encodeURIComponent(window.location.href))
}})
}}};
d.exports=f;
f.init()
},{"../domainSelector/utils.js":1,"./utils.js":3}],3:[function(b,c,a){c.exports={getMWACookieNames:function(h){var e="mwa";
var f="mwa_session";
var k="mwa_profile";
var g="MW_AL";
var j="mwa_dc";
var i;
var d=h.split(".")[0].split("-");
if(d.length>1){i=d[d.length-1];
e=e+"_"+i;
f=f+"_"+i;
k=k+"_"+i
}return{mwaLoginCookieName:e,mwaLoginSessionCookieName:f,mwaLoginProfileCookieName:k,mwaDeprecatedAccountLoginCookieName:g,mwaEmailAddressCookieName:j}
}}
},{}]},{},[2]);
(function(){function a(f,h,d){function g(j,k){if(!h[j]){if(!f[j]){var m="function"==typeof require&&require;
if(!k&&m){return m(j,!0)
}if(b){return b(j,!0)
}var e=new Error("Cannot find module '"+j+"'");
throw e.code="MODULE_NOT_FOUND",e
}var l=h[j]={exports:{}};
f[j][0].call(l.exports,function(i){var o=f[j][1][i];
return g(o||i)
},l,l.exports,a,f,h,d)
}return h[j].exports
}for(var b="function"==typeof require&&require,c=0;
c<d.length;
c++){g(d[c])
}return g
}return a
})()({1:[function(b,c,a){$(function(){$(".login-or-create-account-link, .login-or-create-account-link-hardware").attr("href","https://"+window.location.hostname+"/login?uri="+encodeURIComponent(window.location))
})
},{}]},{},[1]);
(function(){function a(f,h,d){function g(j,k){if(!h[j]){if(!f[j]){var m="function"==typeof require&&require;
if(!k&&m){return m(j,!0)
}if(b){return b(j,!0)
}var e=new Error("Cannot find module '"+j+"'");
throw e.code="MODULE_NOT_FOUND",e
}var l=h[j]={exports:{}};
f[j][0].call(l.exports,function(i){var o=f[j][1][i];
return g(o||i)
},l,l.exports,a,f,h,d)
}return h[j].exports
}for(var b="function"==typeof require&&require,c=0;
c<d.length;
c++){g(d[c])
}return g
}return a
})()({1:[function(b,c,a){var d={init:function(){$("#mobile_search").on("shown.bs.collapse",function(){$(".search_nested_content_container .input-group .form-control").focus()
}).on("hidden.bs.collapse",function(){$("#search_actuator .icon-search.btn_search").focus()
})
}};
c.exports=d;
document.addEventListener("DOMContentLoaded",function(){d.init()
})
},{}]},{},[1]);
(function(){function a(f,h,d){function g(j,k){if(!h[j]){if(!f[j]){var m="function"==typeof require&&require;
if(!k&&m){return m(j,!0)
}if(b){return b(j,!0)
}var e=new Error("Cannot find module '"+j+"'");
throw e.code="MODULE_NOT_FOUND",e
}var l=h[j]={exports:{}};
f[j][0].call(l.exports,function(i){var o=f[j][1][i];
return g(o||i)
},l,l.exports,a,f,h,d)
}return h[j].exports
}for(var b="function"==typeof require&&require,c=0;
c<d.length;
c++){g(d[c])
}return g
}return a
})()({1:[function(b,c,a){var d={init:function(){var e=this;
e.displayRandomFeatureSlide()
},displayRandomFeatureSlide:function(){if($(".carousel[data-random]").length){var e=$(".carousel[data-random]");
e.each(function(g,h){var j=$(h).find(".item"),f=j.length-1,i=Math.floor(Math.random()*(f-0+1))+0;
$(h).find(".item").removeClass("active").eq(i).addClass("active");
$(h).find(".carousel-indicators li").removeClass("active").eq(i).addClass("active")
})
}}};
c.exports=d;
d.init()
},{}]},{},[1]);
(function(){function a(f,h,d){function g(j,k){if(!h[j]){if(!f[j]){var m="function"==typeof require&&require;
if(!k&&m){return m(j,!0)
}if(b){return b(j,!0)
}var e=new Error("Cannot find module '"+j+"'");
throw e.code="MODULE_NOT_FOUND",e
}var l=h[j]={exports:{}};
f[j][0].call(l.exports,function(i){var o=f[j][1][i];
return g(o||i)
},l,l.exports,a,f,h,d)
}return h[j].exports
}for(var b="function"==typeof require&&require,c=0;
c<d.length;
c++){g(d[c])
}return g
}return a
})()({1:[function(b,c,a){var d={init:function(){var e=this;
e.computeDataComponentAttributes()
},computeDataComponentAttributes:function(){var e=this;
$("[data-link]").each(function(){$(this).attr("data-component",e.findResource(this,".containsPriorityResourceName")||e.findResource(this,".containsResourceName")||"link")
});
$(".fat_footer_container").find('[data-component="text"]').attr("data-component","footer")
},findResource:function(j,f){var e;
var h=$(j).closest(f).attr("class");
if(h){h=h.split(" ");
for(var g=0;
g<h.length;
g++){var k=h[g];
if(k.startsWith("resourceClass-")){e=k.substring(14);
break
}}}return e
}};
c.exports=d;
d.init()
},{}]},{},[1]);
(function(){function a(f,h,d){function g(j,k){if(!h[j]){if(!f[j]){var m="function"==typeof require&&require;
if(!k&&m){return m(j,!0)
}if(b){return b(j,!0)
}var e=new Error("Cannot find module '"+j+"'");
throw e.code="MODULE_NOT_FOUND",e
}var l=h[j]={exports:{}};
f[j][0].call(l.exports,function(i){var o=f[j][1][i];
return g(o||i)
},l,l.exports,a,f,h,d)
}return h[j].exports
}for(var b="function"==typeof require&&require,c=0;
c<d.length;
c++){g(d[c])
}return g
}return a
})()({1:[function(b,c,a){var d={init:function(){var e=this;
e.initializeDigitalData()
},initializeDigitalData:function(){if(typeof digitalData!=="undefined"){if(!digitalData.hasOwnProperty("user")){digitalData.user=[]
}if(digitalData.user.length===0){digitalData.user.push({})
}if(!digitalData.user[0].hasOwnProperty("segment")){digitalData.user[0].segment={}
}if(window.MathWorksCountryCode!==undefined&&window.MathWorksCountryCode.length===2){digitalData.user[0].segment.internalTraffic="0"
}else{digitalData.user[0].segment.internalTraffic="1"
}}}};
c.exports=d;
d.init()
},{}]},{},[1]);
"use strict";
var MWS=[];
$(document).ready(function(){setTimeout(function(){$(".sticky_header_container").affix({offset:{top:function(){return(this.bottom=$(".header").length>0?Math.max($("#header_desktop").outerHeight(true),$("#header_mobile").outerHeight(true),$("#doc_header_spacer").outerHeight(true)):0)
}}})
},100);
$('<a class="btn btn_color_mediumgray" id="go-top" tabindex="0"><span class="sr-only">Go to top of page</span><span class="icon-arrow-open-up icon_24"></span></a>').on("click",function(n){n.preventDefault();
$("html, body").animate({scrollTop:0},300)
}).appendTo("body");
$(window).on("scroll",function(){if($(this).scrollTop()>200){$("#go-top").fadeIn(200)
}else{$("#go-top").fadeOut(200)
}});
(function d(){$("button.icon-search.btn_search").on("click",function(){$("input.conjoined_search").focus()
});
$("button.icon-remove.btn_search").on("click",function(){$("input.conjoined_search").blur()
})
})();
if($(".carousel").length){var i=$(".carousel");
i.swiperight(function(){$(this).carousel("prev")
});
i.swipeleft(function(){$(this).carousel("next")
});
i.find(".carousel-control, .carousel-indicators li").on("click",function(){$(this).closest(".carousel").carousel("pause")
})
}$.fn.carouselHeights=function(){var n=$(this);
var o=function(){n.each(function(){var q=$(this).find(".item");
var s=[],p;
q.each(function(){s.push($(this).height())
});
p=Math.max.apply(null,s);
var r=q.find(".content_slider_item");
r.css("height",p+"px");
r.css("min-height",p+"px")
})
};
o();
$(window).on("resize orientationchange",function(){$(".content_slider .item .content_slider_item").css("height","auto");
$(".content_slider .item .content_slider_item").css("min-height","0");
o()
});
$(".carousel_counter").each(function(){var p=$(this).parents(".carousel.content_slider").find(".carousel-inner .item").length;
$(this).text("1 / "+p)
});
$(".carousel.content_slider").on("slid.bs.carousel",function(){var r=$(this).data("bs.carousel");
var s=r.$items.length;
var p=$(this).find(".item.active").index();
var q=(p)+" / "+s;
$(this).find(".carousel_counter").text(q)
})
};
$(".content_slider").carouselHeights();
if($(".tab-container .responsive").length){if(typeof(fakewaffle)!=="undefined"){fakewaffle.responsiveTabs(["xs","sm"]);
$(".tab-container .responsive").each(function(){$(this).find(".accordion-toggle:first").click();
$(this).find(".accordion-toggle:gt(0)").addClass("collapsed")
})
}}if($(".tabs").length&&window.location.search){if(typeof(URLSearchParams)!=="undefined"){var b=new URLSearchParams(window.location.search);
if((typeof(b)!=="undefined")&&(b.has("sec"))){var h=b.get("sec");
$("#"+h).tab("show")
}}}if($("#shadowonload").length){$("#shadowonload").modal("toggle").on("click",function(n){if(n.target===this){window.location.href=$(this).find(".modal-header a.close").attr("href")
}})
}if($(".table_collapse").length){$(".table_collapse table td").each(function(){var n=$(this).closest("table").find("th").eq(this.cellIndex).text();
$(this).attr("data-label",n).html()
})
}function f(){var n=$(".thumbnail .overlay_container, .animation_overlay_container");
if(n.length>0){n.each(function(){var p=$(this).parent().width()/24;
if($(this).closest("li")&&$(this).closest("li").hasClass("lslide")){p=$(this).closest("li").width()/24
}if(p<12){p=12
}var o=p/6;
$(this).css("font-size",p+"px").css("padding",o+"px");
$(this).find(".video_length").css("font-size",p+"px")
})
}}f();
$(window).on("debouncedresize resizeAdaptiveImages",function(){f()
});
$(window).resize(function(){f()
});
if($(".expand_collapse").length){MWS.expand={querystr:"",curpage:"",open_obj:"",getExpandData:function(){return sessionStorage.getItem("expand")
},storeExpandData:function(){sessionStorage.expand=JSON.stringify(MWS.expand.open_obj)
},getUrlVars:function(){var q=[],p;
var n=window.location.href.slice(window.location.href.indexOf("?")+1).split("&");
for(var o=0;
o<n.length;
o++){p=n[o].split("=");
q.push(p[0]);
q[p[0]]=p[1]
}return q
}};
MWS.expand.querystr=window.location.href.slice(window.location.href.indexOf("?")+1);
if(window.location.href.indexOf("?")<0){MWS.expand.querystr=""
}MWS.expand.curpage={url:window.location.pathname,query:MWS.expand.querystr,open:[]};
MWS.expand.open_obj={page:[MWS.expand.curpage]};
if(MWS.expand.getExpandData()){var m=0;
MWS.expand.open_obj=JSON.parse(MWS.expand.getExpandData());
$.each(MWS.expand.open_obj.page,function(n,o){if(o.url===window.location.pathname&&o.query===MWS.expand.querystr){MWS.expand.curpage=o;
m=1
}});
if(!m){MWS.expand.open_obj.page.push(MWS.expand.curpage);
MWS.expand.storeExpandData()
}}else{MWS.expand.storeExpandData()
}var e=MWS.expand.getUrlVars()["expand"];
if(typeof(e)!=="undefined"){e=e.split(",")
}else{e=[]
}var a="default";
if(MWS.expand.querystr===""&&MWS.expand.curpage.query!==""){a="default";
MWS.expand.curpage.open=[]
}else{if(MWS.expand.querystr!==""&&MWS.expand.curpage.query!==MWS.expand.querystr&&e.length>0){a="query";
MWS.expand.curpage.open=[]
}else{if(MWS.expand.curpage.open.length>0){a="cookie"
}else{if(MWS.expand.querystr!==""&&e.length>0){a="query";
MWS.expand.curpage.open=[]
}else{MWS.expand.curpage.open=[]
}}}}MWS.expand.curpage.query=MWS.expand.querystr;
$("body").on("click",".expand_trigger",function(){var o=$(this);
var n=o.data("index");
if(o.hasClass("collapsed")){if($.inArray(n,MWS.expand.curpage.open)<0){MWS.expand.curpage.open.push(n);
MWS.expand.storeExpandData()
}}else{MWS.expand.curpage.open.splice($.inArray(n,MWS.expand.curpage.open),1);
MWS.expand.storeExpandData()
}setTimeout(function(){var p=$("."+o.closest(".expand_collapse").data("toggle"));
var s=p.data("target");
var r=1;
var q=1;
if(s==="all"){r=$(".expand_trigger").length;
q=$(".expand_trigger:not(.collapsed)").length
}else{r=$("."+s).find(">.expand_trigger + .collapse").length;
q=$("."+s).find(">.expand_trigger + .collapse.in").length
}if(r===q){p.find(".expand_all").hide();
p.find(".collapse_all").show()
}else{if(q===0){p.find(".expand_all").show();
p.find(".collapse_all").hide()
}}},500)
});
$("body").on("click",".expand_all",function(o){o.preventDefault();
var p=$(this).hide().next().show().parent().data("target");
var n=[];
if(p==="all"){$(".expand_trigger.collapsed").each(function(){$(this).click();
n.push($(this).parent().data("index"))
})
}else{$("."+p+" > .expand_trigger.collapsed").each(function(){$(this).click();
n.push($(this).parent().data("index"))
})
}$.each(n,function(q,r){if($.inArray(r,MWS.expand.curpage.open)<0){MWS.expand.curpage.open.push(r)
}});
MWS.expand.storeExpandData()
});
$("body").on("click",".collapse_all",function(o){o.preventDefault();
var p=$(this).hide().prev().show().parent().data("target");
var n=[];
if(p==="all"){$(".expand_trigger:not(.collapsed)").each(function(){$(this).click();
n.push($(this).parent().data("index"))
})
}else{$("."+p+" > .expand_trigger:not(.collapsed)").each(function(){$(this).click();
n.push($(this).parent().data("index"))
})
}$.each(n,function(q,r){MWS.expand.curpage.open.splice($.inArray(r,MWS.expand.curpage.open),1)
});
MWS.expand.storeExpandData()
});
$(".expand_trigger").each(function(n){var p=$(this);
p.data("index",n);
var o=[];
if((a==="query"&&$.inArray(p.data("target").substr(1),e)>-1)||(a==="cookie"&&$.inArray(n,MWS.expand.curpage.open)>-1)||(a==="default"&&p.hasClass("default_open"))){p.click();
o.push(n)
}$.each(o,function(q,r){if($.inArray(r,MWS.expand.curpage.open)<0){MWS.expand.curpage.open.push(r)
}});
MWS.expand.storeExpandData()
});
var g=$(".switch");
var c=g.length;
g.each(function(o){var q=$(this);
var p=0;
var n=0;
if(c===1){q.data("target","all").addClass("mwToggle0");
$(".expand_collapse").data("toggle","mwToggle0");
p=$(".expand_trigger").length;
n=$(".expand_trigger:not(.collapsed)").length
}else{if(q.data("target")===""||q.data("target")===null){q.data("target","mwExpandToggle"+o).addClass("mwToggle"+o);
q.parent().addClass("mwExpandToggle"+o).data("toggle","mwToggle"+o)
}else{var r=q.addClass("mwToggle"+o).data("target");
$("."+r).data("toggle","mwToggle"+o)
}p=$("."+q.data("target")).find(">.expand_trigger + .collapse").length;
n=$("."+q.data("target")).find(">.expand_trigger + .collapse.in").length
}if(p===n){q.find(".expand_all").hide();
q.find(".collapse_all").show()
}else{q.find(".expand_all").show();
q.find(".collapse_all").hide()
}})
}if($("#js_offices").length){$(window).on("load",function(){if($("#js_offices")){var n=window.MathWorksCountryCode;
if(location.hash.length===3){k(location.hash)
}else{if(n&&n.length===2){k("#"+n)
}else{k("#default")
}}}});
$(window).on("hashchange",function(){k(location.hash)
})
}function k(p){var q=p.split("#");
if(q.length===2&&(q[1].length===2||q[1]==="default")){var n=q[1];
q=n.toLowerCase();
$(".js_office").hide();
if($(".country-"+q).length){$(".country-direct").hide();
$(".country-"+q).show()
}else{$(".country-direct").show();
$(".country-us").show();
q="us"
}$(".hq-address").hide();
if($(".country-us").is(":visible")){$(".hq-address").show()
}$(".hq-panel").hide();
if($(".country-us").is(":hidden")){$(".hq-panel").show()
}$(".main-fax").html("");
$("#js_offices .country-fax").each(function(){if($(this).is(":visible")){$(".main-fax").html($(this).data("fax"));
return false
}});
$(".main-phone").html("");
$("#js_offices .country-phone").each(function(){if($(this).is(":visible")){$(".main-phone").html($(this).data("phone"));
return false
}});
var o=$(".countrylist .dropdown-menu a[href$='#"+n.toUpperCase()+"']").text();
if(o!==""){$("button .dropdown_text").text(o)
}}}if($("ul.sliderlight").length){$("ul.sliderlight").each(function(){$(this).lightSlider({item:$(this).data("item"),slideMove:$(this).data("slidemove"),auto:$(this).data("auto"),speed:$(this).data("speed"),loop:$(this).data("loop"),pauseOnHover:true,pager:false,easing:"cubic-bezier(0.25, 0, 0.25, 1)",adaptiveHeight:$(this).data("adaptiveheight"),slideEndAnimation:true,addClass:"",responsive:[{breakpoint:768,settings:{item:($(this).data("item")>1&&$(this).data("num-item")%2===0)?2:1,slideMove:($(this).data("item")>1&&$(this).data("num-item")%2===0)?2:1,slideMargin:10}},{breakpoint:480,settings:{item:1,slideMove:1}}]})
});
f();
$("ul.sliderlight").each(function(){$(this).removeAttr("style")
})
}var j=$(".panel.add_cursor_pointer");
j.find("a").attr("tabindex","-1");
j.keydown(function(n){if(n.which===13){l(this)
}});
j.click(function(){l(this)
});
function l(n){var o=$(n).find("a");
if(o.length>0){o.get(0).click()
}}});
function moreToggle(){$(".show_more_toggle").each(function(){$(this).css("max-height","");
var a=$(this).height(),f=$(this).data("height"),e=$(this).data("collapse-text"),c=$(this).data("expand-text"),b=$(this).data("force-shorten"),d=this;
if(b===true||a>f){$(this).css({"max-height":f});
$(this).append('<p class="read_more add_margin_0 small"><a href="#" class="showMore icon-arrow-open-down">'+c+"</a></p>");
$(this).find(".read_more a").on("click",function(g){g.preventDefault();
if($(this).hasClass("showMore")){$(d).animate({"max-height":a+5},400).toggleClass("show_more_toggle_expanded");
$(this).text(e).removeClass("icon-arrow-open-down showMore").addClass("icon-arrow-open-up showLess")
}else{$(d).animate({"max-height":f},400).toggleClass("show_more_toggle_expanded");
$(this).text(c).removeClass("icon-arrow-open-up showLess").addClass("icon-arrow-open-down showMore")
}})
}})
}function processTags(){$("a.tag_component").each(function(){if($(this).text().length>21){$(this).attr("title",$(this).html()).text($(this).text().substr(0,18)).append("...")
}if($(this).hasClass("tag_remove")){$(this).append('<span class="icon_16 icon-remove"></span>')
}})
}$(document).ready(function(){moreToggle();
processTags()
});
$(window).resize(function(){moreToggle()
});
$(document).ready(function(){$(".modal").on("shown.bs.modal",function(){if($("#C_EmailAddressID").is(":visible")){$("#C_EmailAddressID").focus()
}})
});
function moreToggle_evaluate(){$(".show_more_toggle_element").each(function(){$(".show_more_toggle_mask",this).css("height","");
var a=$(".show_more_toggle_content",this).height(),d=$(this).data("height"),b=$(this).data("expand-text"),c=$(this).data("collapse-text");
if(a>d){if(!($(".show_more_toggle_mask",this).hasClass("show_more_toggle_expanded"))){$(".show_more_toggle_mask",this).removeClass("more_toggle_remove_mask");
$(".show_more_toggle_mask",this).css("height",d)
}if(!($(".read_more_actuator a",this).length)){$(this).append('<p class="read_more_actuator small"><a href="#" class="showMore icon-arrow-open-down" aria-label="'+b+"/"+c+' Toggle">'+b+"</a></p>")
}else{$(".read_more_actuator a",this).css("display","")
}}else{if(!($(".show_more_toggle_mask",this).hasClass("show_more_toggle_expanded"))){$(".show_more_toggle_mask",this).addClass("more_toggle_remove_mask")
}if($(".read_more_actuator a",this).length){$(".read_more_actuator a",this).css("display","none")
}}})
}$(document).on("click",".read_more_actuator a",function(f){var a=$(this).closest(".show_more_toggle_element").find(".show_more_toggle_content").height(),g=$(this).closest(".show_more_toggle_element").data("height"),d=$(this).closest(".show_more_toggle_element").data("collapse-text"),b=$(this).closest(".show_more_toggle_element").data("expand-text"),c=$(this).closest(".show_more_toggle_element");
f.preventDefault();
if($(this).hasClass("showMore")){$(".show_more_toggle_mask",c).css("height",a).toggleClass("show_more_toggle_expanded");
$(this).text(d).removeClass("icon-arrow-open-down showMore").addClass("icon-arrow-open-up showLess")
}else{$(".show_more_toggle_mask",c).css("height",g).toggleClass("show_more_toggle_expanded");
$(this).text(b).removeClass("icon-arrow-open-up showLess").addClass("icon-arrow-open-down showMore")
}});
$(document).ready(function(){moreToggle_evaluate()
});
$(window).on("resize orientationchange",function(){moreToggle_evaluate()
});
$(document).ready(function(){$("#matrix_collapse").on("show.bs.collapse",function(){if($("#topnav_collapse").hasClass("in")){$("#topnav_collapse").collapse("toggle")
}});
$("#topnav_collapse").on("show.bs.collapse",function(){if($("#matrix_collapse").hasClass("in")){$("#matrix_collapse").collapse("toggle")
}})
});
$(document).click(function(a){if($(".navbar-collapse").has(a.target).length===0){if($("#matrix_collapse").hasClass("in")){$("#matrix_collapse").collapse("toggle")
}if($("#topnav_collapse").hasClass("in")){$("#topnav_collapse").collapse("toggle")
}}});
"use strict";
(function(f){function g(){var k=h(location.pathname);
if(k.charAt(0)==="/"){k=k.substr(1)
}var i=f("a:not([data-toggle]):not([data-slide])");
var j=[];
f.each(i,function(m,l){try{var n=l.pathname.substring(l.pathname.indexOf("#"));
n=h(n);
if(n.charAt(0)==="/"){n=n.substr(1)
}if(k===n&&l.hash!==""){j.push(l)
}}catch(o){}});
return j
}function h(i){return i.replace(/(index.html)$/,"")
}function d(){f.each(g(),function(){var j=this.hash;
var i=e(j);
if(i.length>0){f(this).on("click",function(k){k.preventDefault();
var l=a();
var m=i.offset().top-c();
f(l).animate({scrollTop:m},700,function(){i.focus();
i.trigger("afterScroll")
});
if(history.pushState){history.pushState(null,null,j)
}else{location.hash=j
}})
}})
}function a(){return f("html, body")
}function e(k){var j=[];
var i=k.substring(1).replace(/([;&,.+*~':"!^#$%@\[\]\(\)=>\|])/g,"\\$1");
j=f("#"+i);
if(j.length===0){j=f("[name="+i+"]")
}return j
}function c(){var i=0;
i=f(".sticky_header_container").height()+10;
return i
}function b(){if(location.hash.length>0){var k=e(location.hash);
if(k.length>0){var i=a();
var j=k.offset().top-c();
f(i).scrollTop(j);
k.trigger("afterScroll")
}}}f(function(){d()
});
f(window).on("load",function(){b()
})
})(jQuery);
"use strict";
window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");
g.id="mq-test-1";
g.style.cssText="position:absolute;top:-100em";
d.style.background="none";
d.appendChild(g);
return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';
a.insertBefore(d,b);
c=g.offsetWidth===42;
a.removeChild(d);
return{matches:c,media:h}
}
}(document));
(function(d){var b=d.event,a,c;
a=b.special.debouncedresize={setup:function(){d(this).on("resize",a.handler)
},teardown:function(){d(this).off("resize",a.handler)
},handler:function(i,e){var h=this,g=arguments,f=function(){i.type="debouncedresize";
b.dispatch.apply(h,g)
};
if(c){clearTimeout(c)
}e?f():c=setTimeout(f,a.threshold)
},threshold:150}
})($);
(function(){function a(f,h,d){function g(j,k){if(!h[j]){if(!f[j]){var m="function"==typeof require&&require;
if(!k&&m){return m(j,!0)
}if(b){return b(j,!0)
}var e=new Error("Cannot find module '"+j+"'");
throw e.code="MODULE_NOT_FOUND",e
}var l=h[j]={exports:{}};
f[j][0].call(l.exports,function(i){var o=f[j][1][i];
return g(o||i)
},l,l.exports,a,f,h,d)
}return h[j].exports
}for(var b="function"==typeof require&&require,c=0;
c<d.length;
c++){g(d[c])
}return g
}return a
})()({1:[function(c,d,a){var b=(window._);
var e=function(g,f){this.attributes=b.extend({},f);
this.settings=b.extend({},g)
};
b.extend(e.prototype,{getSuggestion:function(i,g,h){var f=this;
f.searchForm=g;
f.searchQuery=h;
$.getJSON(i,function(j){f.updateSuggestion(j)
})
},getMoreSuggestion:function(g,h){var f=this;
f.suggestionMore=h;
$.getJSON(g,function(i){f.updateSuggestionMore(i)
})
},updateSuggestion:function(f){var g=this;
g.searchtext=f.searchtext;
if(f.words.wordlist.length!==0){g.pages=f.pages;
g.words=f.words;
$(g).trigger("updated")
}else{$(g).trigger("removedSuggestion")
}},updateSuggestionMore:function(g){var f=this;
f.suggestions=g.suggestions;
f.wordlist=g.wordlist;
$(f).trigger("updatedMore")
}});
d.exports=e
},{}],2:[function(c,d,a){var b=(window._),e=c("./GroupTypeaheadModel.js");
var f=function(h){this.settings=b.extend({},h);
this.$el=this.settings.el;
this.model=new e({url:this.$el.data("url")});
this.urlLanguage="";
var g=this;
this.labelSuggestions=$(".form-control.conjoined_search").data("label-suggestions");
this.labelMore=$(".form-control.conjoined_search").data("label-more");
g.init()
};
b.extend(f.prototype,{init:function(){var g=this;
window.SearchTracking={};
var h=this.$el.data("site-language");
if(h==="zh"){g.urlLanguage="zh_CN"
}else{if(h==="ja"){g.urlLanguage="ja_JP"
}else{if(h==="ko"){g.urlLanguage="ko_KR"
}else{if(h==="es"){g.urlLanguage="es"
}else{g.urlLanguage="en"
}}}}$(g.model).on("updated",function(){g.getSearchGroupTypeahead()
});
$(g.model).on("removedSuggestion",function(){g.removeSuggestions()
});
$(g.model).on("updatedMore",function(){g.getSearchGroupTypeaheadMore()
});
$(g.$el).on("keyup",function(j){var i=j.keyCode?j.keyCode:j.charCode;
if(i!==40&&i!==38&&i!==27&&i!==13){g.updateGroupTypeAhead()
}});
$(g.$el).on("keydown",function(j){var i=j.keyCode?j.keyCode:j.charCode;
if(i===40){g.handleArrowKey(i)
}else{if(i===38){g.handleArrowKey(i)
}else{if(i===27){j.preventDefault();
g.removeSuggestions()
}else{if(i===13){g.handleEnterKey(j)
}}}}});
$(".search_nested_content_container").on("click",".suggestion-more",function(){g.loadMoreSuggestions($(this))
});
$("body").on("click",function(i){if(($(i.target).closest(".search_nested_content_container").length)<1&&!$(i.target).hasClass("suggestion-more")){g.removeSuggestions()
}});
$(".nav_toc").on("click","li",function(){g.removeSuggestions()
});
$(".search_nested_content_container").on("click","a",function(){var i=$(this).attr("href");
g.setTracking(i)
});
$(window).on("resize orientationchange",function(){g.updateContainerWidth()
})
},updateGroupTypeAhead:function(){var g=this;
var h=g.model;
var j=g.$el.val();
var i=g.$el.closest("form");
var k="/help/search/suggest/doccenter/"+g.urlLanguage+"?q="+encodeURIComponent(j)+"&width=2000";
h.getSuggestion(k,i,j)
},updateContainerWidth:function(){var g=this;
if($(".typeahead_type_grouped").length){var h=g.model.searchForm.outerWidth();
if(window.innerWidth>"767"){h+=100
}$(".typeahead_type_grouped").outerWidth(h)
}},removeSuggestions:function(){$(".typeahead_type_grouped").remove()
},getSearchGroupTypeahead:function(){var h=this;
var i=h.model.words.wordlist;
var g=h.model.pages;
var j=h.model.searchForm.find(".input-group");
if(i.length!==0||g.length!==0){var k=Mathworks.templates.searchgrouptypeahead({pages:h.model.pages,words:h.model.words,labelMore:h.labelMore,labelSuggestions:h.labelSuggestions});
if($(".typeahead_container").length){$(".typeahead_container").replaceWith(k)
}else{j.append(k)
}}h.updateContainerWidth()
},getSearchGroupTypeaheadMore:function(){var g=this;
var i=g.model.suggestionMore;
var h=Mathworks.templates.searchgrouptypeaheadmore({suggestions:g.model.suggestions,wordlist:g.model.wordlist});
i.after(h)
},setTracking:function(g){if(g.length!==0){SearchTracking.app="support_results";
if(g.indexOf("/support/search.html?suggestion=true&q=")>-1){var h=g.substring(g.lastIndexOf("q=")+2);
SearchTracking.typeahead=h;
SearchTracking.term=h;
SearchTracking.page=1
}else{SearchTracking.typeahead=g;
SearchTracking.term=g;
SearchTracking.page="direct";
if(typeof _satellite!=="undefined"){_satellite.track("cruxTypeAhead")
}}}},handleArrowKey:function(j){var k=$(".selected-suggestion");
var h=k.closest(".suggestionarea");
if(k.length>0){var g;
if(j===40||j===38){var l=h.parent();
var i;
g=j===40?k.nextAll(".suggestion:first"):k.prevAll(".suggestion:first");
g.addClass("selected-suggestion");
if(g.length===0){i=j===40?l.next().find(".suggestion:first"):l.prev().find(".suggestion:last");
k.removeClass("selected-suggestion");
return i.addClass("selected-suggestion")
}else{k.removeClass("selected-suggestion")
}}h.scrollTop(h.scrollTop()+($(".selected-suggestion").offset().top-h.offset().top))
}else{if(j===40){return $(".suggestion:first").addClass("selected-suggestion")
}else{if(j===38){return $(".suggestion:last").addClass("selected-suggestion")
}}}},loadMoreSuggestions:function(h){var g=this;
var i=$(h).closest("li");
g.displayMoreSuggestions(i,h)
},handleEnterKey:function(j){var g=this;
var i=$(".selected-suggestion");
var h;
if(i.length>0){j.preventDefault();
var k=i.find(".suggestion-more");
if(k.length>0){g.displayMoreSuggestions(i,k)
}else{h=i.children("a").attr("href")
}}else{h="/support/search.html?q="+g.$el.val()
}if(h){window.location=h;
g.setTracking(h)
}},displayMoreSuggestions:function(m,j){var p=this;
var l=this.model;
var g=$(j);
var n=g.data("type");
var i=g.data("q");
var k=n+"area";
var h=$("."+k);
h.css("height",h.outerHeight());
m.empty();
var o="/help/search/suggestmore/doccenter/"+p.urlLanguage+"?q="+i+"&type="+n+"&start=5";
l.getMoreSuggestion(o,m)
}});
d.exports=f
},{"./GroupTypeaheadModel.js":1}],3:[function(c,d,a){var b=(window._);
var e=function(g){this.settings=b.extend({},g);
this.$el=this.settings.el;
var f=this;
f.init()
};
b.extend(e.prototype,{init:function(){var f=this;
$(f.$el).on("keyup",function(){f.updateTypeAhead()
})
},updateTypeAhead:function(){var f;
var g=$("input[data-typeahead-collection]");
if(g.length!==0){f=g
}if(f){f.typeahead({minLength:1,source:function(k,m){var i=this.$element.data("typeahead-collection")||"entire_site";
var j=this.$element.data("site-domain")||"www";
var h=this.$element.data("site-language")||"en";
var l="/searchresults/suggestions?c[]="+i+"&site_domain="+j+"&site_language="+h+"&term="+k;
$.ajax({method:"get",url:l,success:function(n){m(n)
},error:function(){m([])
}})
},matcher:function(){return true
},highlighter:function(i){var h=new RegExp("("+this.query+")","gi");
return i.replace(h,"<strong>$1</strong>")
},afterSelect:function(){if($(".typeahead.dropdown-menu >.active").length){this.$element.siblings(".suggestionbox").val("true")
}this.$element.closest("form").submit()
},autoSelect:false,select:function(){var h="";
var i=this.$menu.find(".active").data("value");
if(i){this.$element.data("active",i);
h=this.updater(i);
if(!h){h=""
}this.$element.val(this.displayText(h)||h).text(this.displayText(h)||h).change()
}else{h=this.$element.val()
}this.afterSelect(h);
return this.hide()
}});
$("#query").on("change",function(){$("#search").val($(this).val())
});
$("#search").on("change",function(){$("#query").val($(this).val())
})
}}});
d.exports=e
},{}],4:[function(d,e,c){var b=d("./TypeaheadView.js");
var a=d("./GroupTypeaheadView.js");
$(".form-control.conjoined_search").each(function(){if($(this).data("typeahead-collection")==="help"){new a({el:$(this)})
}else{new b({el:$(this)})
}})
},{"./GroupTypeaheadView.js":2,"./TypeaheadView.js":3}]},{},[4]);