define(["modules/default/defaultview","src/util/color","jquery-ui/progressbar"],function(a,b){function c(){}return $.extend(!0,c.prototype,a,{init:function(){this.total=0,this.curr=0,this.tpl=this.module.getConfiguration("tpl",":current / :total");var a=this.progressBar=$("<div>").css({position:"relative"}),c=this.progressDiv=$("<div>").css({position:"absolute",left:"50%",top:"4px",fontWeight:"bold"});a.append(c),a.progressbar({value:0}),a.find(".ui-progressbar-value").css({background:b.getColor(this.module.getConfiguration("barcolor"))}),this.module.getDomContent().html(a),this.resolveReady()},blank:{total:function(){this.total=0,this.curr=0,this.render()}},update:{total:function(a){this.total=a.get(),this.start=Date.now(),this.render()}},onActionReceive:{inc:function(a){0!==a&&(a=a||1),this.curr+=+a,this.render()},set:function(a){this.onActionReceive.inc.call(this,+a-this.curr)},total:function(a){this.total=+a,this.render()}},render:function(){var a=this.curr/this.total;a=Math.min(Math.max(a,0),1);var b=100*a;0===this.curr&&(this.start=Date.now());var c=Date.now()-this.start,d=100==b?0:c*(this.total/this.curr-1),e=this.tpl.replace(":current",this.curr).replace(":total",this.total).replace(":elapsed",isNaN(c)?"0.0":(c/1e3).toFixed(1)).replace(":eta",isNaN(d)||!isFinite(d)?"0.0":(d/1e3).toFixed(1)).replace(":percent",b.toFixed(1)+"%");this.progressBar.progressbar("value",b),this.progressDiv.text(e)}}),c});