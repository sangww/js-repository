
$(document).ready(function() {
function megaHoverOver(){
  $(this).find(&quot;.sub&quot;).stop().fadeTo(&#39;fast&#39;, 1).show();
  //Calculate width of all ul&#39;s
  (function($) {
    jQuery.fn.calcSubWidth = function() {
    rowWidth = 0;
    //Calculate row
    $(this).find(&quot;ul&quot;).each(function() {
    rowWidth += $(this).width();
  });
  };
  })(jQuery);
  if ( $(this).find(&quot;.row&quot;).length &gt; 0 ) { //If row exists...
  var biggestRow = 0;
  //Calculate each row
  $(this).find(&quot;.row&quot;).each(function() {
  $(this).calcSubWidth();
  //Find biggest row
  if(rowWidth &gt; biggestRow) {
  biggestRow = rowWidth;
  }
  });
  //Set width
  $(this).find(&quot;.sub&quot;).css({&#39;width&#39; :biggestRow});
  $(this).find(&quot;.row:last&quot;).css({&#39;margin&#39;:&#39;0&#39;});
  } else { //If row does not exist...
  $(this).calcSubWidth();
  //Set Width
  $(this).find(&quot;.sub&quot;).css({&#39;width&#39; : rowWidth});
  }
  }
  function megaHoverOut(){
  $(this).find(&quot;.sub&quot;).stop().fadeTo(&#39;fast&#39;, 0, function() {
  $(this).hide();
  });
  }
  var config = {
  sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)
  interval: 50, // number = milliseconds for onMouseOver polling interval
  over: megaHoverOver, // function = onMouseOver callback (REQUIRED)
  timeout: 300, // number = milliseconds delay before onMouseOut
  out: megaHoverOut // function = onMouseOut callback (REQUIRED)
  };
  $(&quot;ul#topnav li .sub&quot;).css({&#39;opacity&#39;:&#39;0&#39;});
  $(&quot;ul#topnav li&quot;).hoverIntent(config);
});
