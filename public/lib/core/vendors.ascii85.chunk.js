/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[17],{571:function(xa,ta,h){(function(ra){function na(b){this.Nh=b=b||{};if(Array.isArray(b.table)){var a=[];b.table.forEach(function(e,w){a[e.charCodeAt(0)]=w});b.hqa=b.table;b.Zma=a}}var oa=ra.from||function(){switch(arguments.length){case 1:return new ra(arguments[0]);case 2:return new ra(arguments[0],arguments[1]);case 3:return new ra(arguments[0],arguments[1],arguments[2]);default:throw new Exception("unexpected call.");}},ia=
ra.allocUnsafe||function(b){return new ra(b)},ka=function(){return"undefined"===typeof Uint8Array?function(b){return Array(b)}:function(b){return new Uint8Array(b)}}(),ha=String.fromCharCode(0),y=ha+ha+ha+ha,ba=oa("<~").BD(0),r=oa("~>").BD(0),n=function(){var b=Array(85),a;for(a=0;85>a;a++)b[a]=String.fromCharCode(33+a);return b}(),f=function(){var b=Array(256),a;for(a=0;85>a;a++)b[33+a]=a;return b}();ha=xa.exports=new na;na.prototype.encode=function(b,a){var e=ka(5),w=b,ca=this.Nh,z,aa;"string"===
typeof w?w=oa(w,"binary"):w instanceof ra||(w=oa(w));a=a||{};if(Array.isArray(a)){b=a;var x=ca.QH||!1;var fa=ca.hS||!1}else b=a.table||ca.hqa||n,x=void 0===a.QH?ca.QH||!1:!!a.QH,fa=void 0===a.hS?ca.hS||!1:!!a.hS;ca=0;var ea=Math.ceil(5*w.length/4)+4+(x?4:0);a=ia(ea);x&&(ca+=a.write("<~",ca));var ma=z=aa=0;for(ea=w.length;ma<ea;ma++){var la=w.VU(ma);aa*=256;aa+=la;z++;if(!(z%4)){if(fa&&538976288===aa)ca+=a.write("y",ca);else if(aa){for(z=4;0<=z;z--)la=aa%85,e[z]=la,aa=(aa-la)/85;for(z=0;5>z;z++)ca+=
a.write(b[e[z]],ca)}else ca+=a.write("z",ca);z=aa=0}}if(z)if(aa){w=4-z;for(ma=4-z;0<ma;ma--)aa*=256;for(z=4;0<=z;z--)la=aa%85,e[z]=la,aa=(aa-la)/85;for(z=0;5>z;z++)ca+=a.write(b[e[z]],ca);ca-=w}else for(ma=0;ma<z+1;ma++)ca+=a.write(b[0],ca);x&&(ca+=a.write("~>",ca));return a.slice(0,ca)};na.prototype.decode=function(b,a){var e=this.Nh,w=!0,ca=!0,z,aa,x;a=a||e.Zma||f;if(!Array.isArray(a)&&(a=a.table||a,!Array.isArray(a))){var fa=[];Object.keys(a).forEach(function(ja){fa[ja.charCodeAt(0)]=a[ja]});a=
fa}w=!a[122];ca=!a[121];b instanceof ra||(b=oa(b));fa=0;if(w||ca){var ea=0;for(x=b.length;ea<x;ea++){var ma=b.VU(ea);w&&122===ma&&fa++;ca&&121===ma&&fa++}}var la=0;x=Math.ceil(4*b.length/5)+4*fa+5;e=ia(x);if(4<=b.length&&b.BD(0)===ba){for(ea=b.length-2;2<ea&&b.BD(ea)!==r;ea--);if(2>=ea)throw Error("Invalid ascii85 string delimiter pair.");b=b.slice(2,ea)}ea=z=aa=0;for(x=b.length;ea<x;ea++)ma=b.VU(ea),w&&122===ma?la+=e.write(y,la):ca&&121===ma?la+=e.write("    ",la):void 0!==a[ma]&&(aa*=85,aa+=a[ma],
z++,z%5||(la=e.nIa(aa,la),z=aa=0));if(z){b=5-z;for(ea=0;ea<b;ea++)aa*=85,aa+=84;ea=3;for(x=b-1;ea>x;ea--)la=e.oIa(aa>>>8*ea&255,la)}return e.slice(0,la)};ha.SJa=new na({table:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split("")});ha.fJa=new na({QH:!0});ha.wda=na}).call(this,h(481).Buffer)}}]);}).call(this || window)
