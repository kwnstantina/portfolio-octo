/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[12],{570:function(xa,ta,h){h.r(ta);var ra=h(0),na=h(1);h.n(na);xa=h(117);h=h(480);xa=function(oa){function ia(ka,ha,y){ha=oa.call(this,ka,ha,y)||this;ha.db=ka;return ha}Object(ra.c)(ia,oa);ia.prototype.request=function(ka){var ha=this;Object(na.each)(ka,function(y){ha.db.get(y,function(ba,r,n){return ba?ha.trigger("partReady.partRetriever",{Ib:y,error:ba}):ha.trigger("partReady.partRetriever",{Ib:y,data:r,Qk:!1,Rh:!1,error:null,
me:n})})})};ia.prototype.Ax=function(ka){ka()};return ia}(xa.a);Object(h.a)(xa);Object(h.b)(xa);ta["default"]=xa}}]);}).call(this || window)