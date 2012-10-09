
var $ct = jQuery.noConflict(); 

            
$ct(document).ready(function() {

/* $ct(document).keydown(function(evt){alert(evt.keyCode);});   抓按鍵keyCode*/

$ct('#des_5').addClass('active');

countSecond();
function countSecond(){　
	var a = parseInt($ct('#nows').attr('sta'));
	var a = a + 1;
	var val = $ct('#nows').attr('val');
	if(val == 'prev'){
		var val = $ct('#nows').attr('val','');
		var a = a - 2;
	}
	if(a == 5){
		a = 0
	}
	if(a == -1){
		a = 4
	}
	$ct('.crop').removeClass('active');
	$ct('.word_block' + a).addClass('active');
	$ct('.stage_ot').attr('class','stage_ot');
	$ct('.stage_ot').addClass('set_' + a);
	$ct('#nows').attr( 'sta' , a );
    $ct('.control_panel div').removeClass('active');
    $ct('.control_panel').find('.cal_set' + a).addClass('active');
　 	meter1 = setTimeout(countSecond, 5000);
}

var $csb1 = $ct(".cal_set1");
var $csb2 = $ct(".cal_set2");
var $csb3 = $ct(".cal_set3");
var $csb4 = $ct(".cal_set4");
var $csbR = $ct(".cal_set0");
var $next = $ct(".next");
var $prev = $ct(".prev");

with ($csb1) {
        click(function () {
        	clearTimeout(meter1);
        	countSecond(); 
       	 	$ct('#nows').attr('sta','1');
        	$ct('.stage_ot').removeClass('set_0');
        	$ct('.stage_ot').removeClass('set_2');
        	$ct('.stage_ot').removeClass('set_3');
        	$ct('.stage_ot').removeClass('set_4');
        	$ct('.stage_ot').addClass('set_1');
        	$ct('.word_block0').removeClass('active');
        	$ct('.word_block2').removeClass('active');
        	$ct('.word_block3').removeClass('active');
        	$ct('.word_block4').removeClass('active');
        	$ct('.word_block1').addClass('active');
        	$ct('#des_5').removeClass('active');
        	$ct('.control_panel div').removeClass('active');
        	$ct('.control_panel').find('.cal_set1').addClass('active');
        });
}

with ($csb2) {
        click(function () {
        	clearTimeout(meter1);
        	countSecond(); 
       	 	$ct('#nows').attr('sta','2');
        	$ct('.stage_ot').removeClass('set_0');
        	$ct('.stage_ot').removeClass('set_1');
        	$ct('.stage_ot').removeClass('set_3');
        	$ct('.stage_ot').removeClass('set_4');
        	$ct('.stage_ot').addClass('set_2');
        	$ct('.word_block0').removeClass('active');
        	$ct('.word_block1').removeClass('active');
        	$ct('.word_block3').removeClass('active');
        	$ct('.word_block4').removeClass('active');
        	$ct('.word_block2').addClass('active');
        	$ct('#des_5').removeClass('active');
        	$ct('.control_panel div').removeClass('active');
        	$ct('.control_panel').find('.cal_set2').addClass('active');
        });
}

with ($csb3) {
        click(function () {
        	clearTimeout(meter1);
        	countSecond(); 
       	 	$ct('#nows').attr('sta','3');
        	$ct('.stage_ot').removeClass('set_0');
        	$ct('.stage_ot').removeClass('set_1');
        	$ct('.stage_ot').removeClass('set_2');
        	$ct('.stage_ot').removeClass('set_4');
        	$ct('.stage_ot').addClass('set_3');
        	$ct('.word_block0').removeClass('active');
        	$ct('.word_block1').removeClass('active');
        	$ct('.word_block2').removeClass('active');
        	$ct('.word_block4').removeClass('active');
        	$ct('.word_block3').addClass('active');
        	$ct('#des_5').removeClass('active');
        	$ct('.control_panel div').removeClass('active');
        	$ct('.control_panel').find('.cal_set3').addClass('active');
        });
}

with ($csb4) {
        click(function () {
        	clearTimeout(meter1);
        	countSecond(); 
       	 	$ct('#nows').attr('sta','4');
        	$ct('.stage_ot').removeClass('set_0');
        	$ct('.stage_ot').removeClass('set_1');
        	$ct('.stage_ot').removeClass('set_2');
        	$ct('.stage_ot').removeClass('set_3');
        	$ct('.stage_ot').addClass('set_4');
        	$ct('.word_block0').removeClass('active');
        	$ct('.word_block1').removeClass('active');
        	$ct('.word_block2').removeClass('active');
        	$ct('.word_block3').removeClass('active');
        	$ct('.word_block4').addClass('active');
        	$ct('#des_5').removeClass('active');
        	$ct('.control_panel div').removeClass('active');
        	$ct('.control_panel').find('.cal_set4').addClass('active');
        });
}
with ($csbR) {
        click(function () {
        	clearTimeout(meter1);
        	countSecond(); 
       	 	$ct('#nows').attr('sta','0');
        	$ct('.stage_ot').removeClass('set_1');
        	$ct('.stage_ot').removeClass('set_2');
        	$ct('.stage_ot').removeClass('set_3');
        	$ct('.stage_ot').removeClass('set_4');
        	$ct('.stage_ot').addClass('set_0');
        	$ct('.word_block1').removeClass('active');
        	$ct('.word_block2').removeClass('active');
        	$ct('.word_block3').removeClass('active');
        	$ct('.word_block4').removeClass('active');
        	$ct('.word_block0').addClass('active');
        	$ct('#des_5').removeClass('active');
        	$ct('.control_panel div').removeClass('active');
        	$ct('.control_panel').find('.cal_set0').addClass('active');
        });
}

with ($next) {
        click(function () {
        	clearTimeout(meter1);
        	countSecond(); 
			
			
        });
}

with ($prev) {
        click(function () {
        	clearTimeout(meter1);
       	 	$ct('#nows').attr('val','prev');
        	countSecond(); 
			
			
        });
}

$ct(document).keydown(function(e){
  if (e.keyCode == 37) {
        	clearTimeout(meter1);
       	 	$ct('#nows').attr('val','prev');
        	countSecond(); 
  }
});
$ct(document).keydown(function(e){
  if (e.keyCode == 39) {
        	clearTimeout(meter1);
        	countSecond(); 
			
  }
});



});             

