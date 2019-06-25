window.onload=function(){
    var banner=document.getElementById('banner');
    var pre=document.getElementById('pre');
    var next=document.getElementById('next');
    var banner_imgs=document.getElementById('banner_imgs');
    var buttons_list=document.getElementsByClassName('banner_buttons');
    var buttons= buttons_list.item(0).getElementsByTagName('span');		
    var index=1;
    var animated=false;
    var timer;
    function showButtons(){
         for(var i=0;i<buttons.length;i++){
             if(buttons[i].className=='on'){
                  buttons[i].className='';
                  break;	 
            }
         }	  
         buttons[index-1].className='on';
    }
    function animate(offset){
        animated=true;
        var newList= parseInt(banner_imgs.style.left)+offset;		
        function go(){
            var time=500;
            var interval=100;
            var speed=offset/(time/interval);
            if((speed<0&&parseInt(banner_imgs.style.left)>newList)||(speed>0&&parseInt(banner_imgs.style.left)<newList)){
                 banner_imgs.style.left=parseInt(banner_imgs.style.left)+speed+'px';
                 setTimeout(go,interval);
            }
            else{
                   banner_imgs.style.left=newList+'px';
                if(newList>-520){
                    banner_imgs.style.left=-2600+'px';
                }
                if(newList<-2600){
                    banner_imgs.style.left=-520+'px';	
                }	
                animated=false;
            }

        }
        go();


    }
    pre.onclick = function(){
            if(!animated){
               if(index==1){
               index=5;	
               }
               else{
               index -= 1;
               }
               showButtons();
               animate(520);
            }			
    }
    next.onclick = function(){
        if(!animated){
            if(index==5){
               index=1;
            }
            else{
              index += 1;
            }
            showButtons();
            animate(-520);
        }
         

    }
    for(var i=0;i<buttons.length;i++){
         if(!animated){
          buttons[i].onclick=function(){
             if(this.className=='on'){
                return;	 
             }				 
             var currentIndex=parseInt(this.getAttribute('index'));
             var offset=-520*(currentIndex-index);
             
                  animate(offset);
                 
             index=currentIndex;
             showButtons();	 
           }
        }
   }
   function play(){
     timer = setInterval(function(){
              next.onclick();
           },3000);
   }
   function stop(){
      clearInterval(timer); 
   }
   banner.onmouseover=stop;
   banner.onmouseout = play;
   play(); 
}