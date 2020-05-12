(function(b,c){var a={getRandom:function(e,d){return Math.floor(Math.random()*(d-e+1))+e}};b.Tools=a})(window,undefined);(function(d,f){var b="absolute";var e=[];function c(g){g=g||{};this.x=g.x||0;this.y=g.y||0;this.width=g.width||20;this.height=g.height||20;this.color=g.color||"green"}c.prototype.render=function(g){a();this.x=Tools.getRandom(0,g.offsetWidth/this.width-1)*this.width;this.y=Tools.getRandom(0,g.offsetHeight/this.height-1)*this.height;var h=document.createElement("div");g.appendChild(h);e.push(h);h.style.position=b;h.style.left=this.x+"px";h.style.top=this.y+"px";h.style.width=this.width+"px";h.style.height=this.height+"px";h.style.backgroundColor=this.color};function a(){for(var g=e.length-1;g>=0;g--){e[g].parentNode.removeChild(e[g]);e.splice(g,1)}}d.Food=c})(window,undefined);(function(d,f){var b="absolute";var e=[];function c(g){g=g||{};this.width=g.width||20;this.height=g.height||20;this.direction=g.direction||"right";this.body=[{x:3,y:2,color:"red"},{x:2,y:2,color:"blue"},{x:1,y:2,color:"blue"}]}c.prototype.render=function(k){a();for(var j=0,g=this.body.length;j<g;j++){var h=this.body[j];var l=document.createElement("div");k.appendChild(l);e.push(l);l.style.width=this.width+"px";l.style.position=b;l.style.height=this.height+"px";l.style.left=h.x*this.width+"px";l.style.top=h.y*this.height+"px";l.style.backgroundColor=h.color}};function a(){for(var g=e.length-1;g>=0;g--){e[g].parentNode.removeChild(e[g]);e.splice(g,1)}}c.prototype.move=function(m,l){for(var j=this.body.length-1;j>0;j--){this.body[j].x=this.body[j-1].x;this.body[j].y=this.body[j-1].y}var h=this.body[0];switch(this.direction){case"right":h.x+=1;break;case"left":h.x-=1;break;case"top":h.y-=1;break;case"bottom":h.y+=1;break}var g=h.x*this.width;var n=h.y*this.height;if(g===m.x&&n===m.y){var k=this.body[this.body.length-1];this.body.push({x:k.x,y:k.y,color:k.color});m.render(l)}};d.Snake=c})(window,undefined);(function(d,e){var c;function f(g){this.food=new Food();this.snake=new Snake();this.map=g;c=this}f.prototype.start=function(){this.food.render(this.map);this.snake.render(this.map);b();a()};function a(){document.addEventListener("keydown",function(g){switch(g.keyCode){case 37:this.snake.direction="left";break;case 38:this.snake.direction="top";break;case 39:this.snake.direction="right";break;case 40:this.snake.direction="bottom";break}}.bind(c),false)}function b(){var g=setInterval(function(){this.snake.move(this.food,this.map);this.snake.render(this.map);var j=this.map.offsetWidth/this.snake.width;var i=this.map.offsetHeight/this.snake.height;var h=this.snake.body[0].x;var k=this.snake.body[0].y;if(h<0||h>=j){alert("Game over");clearInterval(g)}if(k<0||k>=i){alert("Game over");clearInterval(g)}}.bind(c),150)}d.Game=f})(window,undefined);(function(b,d){var c=document.getElementById("map");var a=new Game(c);a.start(c)})(window,undefined);