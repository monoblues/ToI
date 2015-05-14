$(document).ready(function(){
              //lava style navigation movement CSS3과 관계없음. 
              var $nav=$('#navigation');
              var $current_item = $nav.find('.focus');
              var gap=20;
              var option={gap:20,speed:400,easing:'linear',reset:2000};
              
             
             $('.lava').css({
                 width:$current_item.outerWidth(),
                 height:$current_item.outerHeight()+option.gap,
                 backgroundColor:'#eee',position:'absolute',
                 top:$current_item.position().top-(option.gap/2),
                 left:$current_item.position().left
             });
              
              $nav.find('li').bind('mouseover focusin', function(){
                  $('.lava').animate({
              left:$(this).position().left, width:$(this).outerWidth()
              },{duration:option.speed, easing: option.easing, queue: false});
                  $(this).find('a').css({color: 'yellow'});
              
              }).bind('mouseout focusout',function(){
              $('.lava').animate({
              left:$current_item.position().left, width:$current_item.outerWidth()
              },{duration:option.speed, easing: option.easing, queue: false});
                  $(this).find('a').css({color: '#a49e96'});
              
              });
              //End of lava style navigation movement

              
        
          });
      