!function(n){"function"==typeof define?define(["jquery"],n):n(jQuery)}(function(n){n.fn.spinner=function(t){return this.each(function(){function i(){return"function"==n.type(c.unit)?~~c.unit():c.unit}function u(){return e.data("max")||"function"==n.type(c.max)?~~c.max():c.max}function a(n){var t=i(),a=u();/^\d*$/.test(n)||(n=t),n>a&&(n=a),n%t>0&&(n=~~n-~~n%t+t,n>a&&(n-=~~t)),t>n&&(n=t,t>n&&(n=t)),e.val(n),"function"==typeof c.callback&&c.callback(n,e)}var c=n.extend({input:".J_Input",add:".J_Add",minus:".J_Del",unit:1,max:100,callback:null},t),e=n(c.input,this),o=n(c.add,this),f=n(c.minus,this);e.val(c.unit),o.on("click",function(){var n=e.val(),t=~~n+i();t>u()||a(t)}),f.on("click",function(){var n=e.val(),t=i(),u=n-t;t>u||a(u)}),e.on("change",function(){a(n(this).val())}).on("keydown",function(t){return 13==t.keyCode?(a(n(this).val()),!1):void 0})})}});