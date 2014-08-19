$(function() {
	  $.fn.sweety = function(config) {		 
	  var swty = {
		  config : {
			  selectedEffect : 'Drop',			  
			  speed: 500,
			  autoSlide : false,
			  timeout : 5000,			 	  
			  },
		  options : {mode:'hide'},
		  slide_group : $(this).children(),
		  slide_group_length : $(this).children().length-1,
		  i:0,
		  init:function(config){
			  $.extend(this.config, config);
			  $(swty.slide_group[0]).show();			  
			  if(swty.config.autoSlide == true)
			  {				    
				    setTimeout(swty.runeffect,swty.config.timeout);				 
			  }
	  		   $(swty.config.left).on('click',function() {
					  swty.runeffect('left');				 
				});			 
	  		   $(swty.config.right).on('click',function() {
					  swty.runeffect('right');				 
				});			 

			  
		  },
		  runeffect : function(direct)
		  {
			 var conf = swty.config, 
			 	 effect = conf.selectedEffect,
			 	 speed = conf.speed,
			 	 options = swty.options,
			 	 slide_group = swty.slide_group,
				 slide_group_length = swty.slide_group_length;							 		 		     
				 
			 if(conf.autoSlide == true)
			 {
				 direct = "right";
				 setTimeout(swty.runeffect,conf.timeout);
				 
			 }
			 $( slide_group[swty.i] ).effect( effect, options, speed);
			 if(direct == 'left')
			 swty.i--;
			 else
			 swty.i++;		 			 
				
			if (swty.i >= slide_group_length){ swty.i = 0; } else if(swty.i<0){ swty.i=slide_group_length-1};	
			  options = {direction : direct,mode: 'show'};
			  $( slide_group[swty.i] ).effect( effect, options, speed);
		 }
	  };
	  swty.init(config);  
	  };
	  
	  $("#my-effect").sweety(
	  {
		  selectedEffect : 'fold',
		  speed:1000,		
		  left : '#test1',
		  right : '#test2',
		  timeout : 4000,	  
	  });
  });