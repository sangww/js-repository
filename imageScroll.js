
//<![CDATA[
$(function(){
  var 
      div = $('#body-wrapper'),
      divX = div.width(),
      backgroundX, backgroundPos;

  // hint
  //  mouse on the right background position for x img = 100%
  //  mouse on the left background position for x img = 0
  //  center background position for x img = 50%

  //  mouse on the top background position for y img = 0
  //  mouse on the bottom background position for y img = 100%
  //  center background position for y img = 50%

  // now if
  //  divX       = 100%
  //  ev.clientX = x%
  //  divY       = 100%
  //  ev.clientY = y%
  // is what we need

  $(div).mousemove(function(ev){
    backgroundX = 1/divX*ev.clientX*100;
    if(backgroundX < 0) backgroundX = 0;
    if(backgroundX > 100) backgroundX = 100;
    backgroundPos = backgroundX + '%' + ' ' + '0%';
    $('#header-wrapper').css('background-position', backgroundPos);
  });
})(jQuery);
//]]>