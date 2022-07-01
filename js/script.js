$(function() {
	var gW = $('.custom-gallery').width();
	var pW = gW * 0.2;
	var pH = pW * $('.custom-gallery img').height() / $('.custom-gallery img').width();
	var p = [];
	var number = 0;
	var lastRow = false;
	$('.custom-gallery img').css('width', pW + 'px');
	$('.custom-gallery img').each(function(i) {
		p[i] = {};
	});
	var lG = function() {
		var counter = -1;
		var lastRowLength = (p.length % 5) ? (p.length % 5) : 5;
		if ((p.length - number) <= lastRowLength) {
			lastRow = true;
		} else {
			lastRow = false;
		}
		for (var i = 0; i < p.length; i++) {
			if ((number % 5) != 4) {
				if (i == number + 1) {counter = counter + 2}
				else if (i == number + 4) {counter = counter + 3}
				else counter++;
				p[i].pos = counter;
			} else {
				if (i == number - 1) {
					counter = counter + 3;
					p[i].pos = counter;
				} else if (i == number) {
					p[i].pos = counter - 2;
				} else if (i == number + 3) {
					counter = counter + 3;
					p[i].pos = counter;
				} else {
					counter++;
					p[i].pos = counter;
				}
			}
		}
		if (lastRow) {
			if (!((p.length % 5 == 0) && (number % 5 == 0))) {
				if ((number % 5) != 4) {
					p[number - 5].pos = p.length + 1;
					p[number - 4].pos = p.length + 2;
				} else {
					p[number - 6].pos = p.length + 1;
					p[number - 5].pos = p.length + 2;
				}
			}
		}
//		var fullRows = (p.length - (p.length % 5)) % 5;
	}

	var layout = function() {
		var positions = [];
		$('.custom-gallery img').each(function(i) {
			positions[i] = {};
			positions[i].x = (p[i].pos % 5) * pW;
			positions[i].y = (p[i].pos - (p[i].pos % 5)) / 5 * pH;
		});
		if (lastRow) {
			if (!((p.length % 5 == 0) && (number % 5 == 0))) { // megacrutch
				positions[number].y = positions[number].y - pH;
			}
		}
		$('.custom-gallery img').each(function(i) {
			$('.custom-gallery img').css('width', pW + 'px');
			$('.custom-gallery img').eq(number).css('width', pW * 2 + 'px');
			$('.custom-gallery img').eq(i).css('left', positions[i].x + 'px');
			$('.custom-gallery img').eq(i).css('top', positions[i].y + 'px');
		});
	}

	$('.custom-gallery img').click(function(e) {
		$('.custom-gallery img').each(function(i) {
			if (this == e.target) {
				number = i;
			}
		});
		lG();
		layout();
	});

	lG();

	layout();
});

$(document).ready(function(){
				$(".images a, .cert-img, .its a").colorbox({rel:'group3', transition:"none", width:"95%", height:"95%"});
				$(".objects-photo-list a").colorbox({rel:'group3', transition:"fade"});
				$(".feedback .mf-captcha input").attr("placeholder", "Введите символы");
				
				$(document).on('click','.personal-content-agree',function(){
						
					if ($('.personal-content-notagree').is(':visible')) { 
						//alert('активно');
						$('.personal-content-notagree').css('display','none');
					} else {
						//alert('неактивно');
						$('.personal-content-notagree').css('display','block');
					}
				});
				
				$(document).on('change','.last-agree input',function(){
						
					if ($(this).prop('checked')) { 
						//alert('активно');
						//alert($(this).prop('checked'));
						$('.g-button.b-contact-info__button.g-button-inactive.last-step-notagree').css('display','none');
					} else {
						//alert('неактивно');
						$('.g-button.b-contact-info__button.g-button-inactive.last-step-notagree').css('display','block');
					}
				});
				
				$('.last-step-agree').click(function(){

					if ($('.last-step-notagree').is(':visible')) { 
						//alert('активно');
						$('.last-step-notagree').css('display','none');
					} else {
						//alert('неактивно');
						$('.last-step-notagree').css('display','block');
					}
				});
				
				$('.personal-content-notagree').click(function(){
					alert('Для того чтобы продолжить оформление заказа нужно согласится на обработку персональных данных');
				});
				
				$('.last-step-notagree').click(function(){
					alert('Для того чтобы продолжить нужно согласится с условиями договра');
				});
				
				$(".inline").colorbox({inline:true, width:"1000px", height:"600px"});
				$(".iframe").colorbox({iframe:true, width:"60%", height:"60%"});
				
				$(".feed").colorbox({inline:true, width:"380px"});
				
				jQuery.extend(jQuery.colorbox.settings, {
			    current: "Изображение {current} из {total}",
			    previous: "Предыдущее",
			    next: "Следущее",
			    close: "Закрыть",
			    xhrError: "Ошибка.",
			    imgError: "Нет картинки."
});
				
				$(document).on('cbox_open',function(){
				  $(document.body).css('overflow','hidden');
				}).on('cbox_closed',function(){
				  $(document.body).css('overflow','');
				});
				
				if ($('.active').parent().parent().is('li')) {
					$('.active').parent().parent().addClass('active-parent');
				}
				
				$('.currentdepth_2').each(function(){
				  if ($(this).find('ul').length) {$(this).addClass('have-child');}
				});
				
				$('.inner-list-cat').each(function(){
				  if ($(this).length) {$('.modern-page-navigation').remove();}
				});
				
				$('.in-stock-off').each(function(){
				  if ($(this).length) {$('.bx_cart').remove();}
				});
				
				// $('.bx_price, .item_current_price, .catalog-recommends .bx_price').each(function(){
				  // var strInt = $(this).html();
				  // $(this).html(strInt.substr(0, strInt.length - 4));
				// });
				


				//$('.bx_fwb').click(function(){
				  //var strInt = $('.item_current_price').html();
				  //$('.item_current_price').html(strInt.substr(0, strInt.length - 4));
				//});

				$('.catalog-body .item .bx_bt_button').click(function(){
				  $(this).parent().find('.modal-b-w').fadeIn('fast').delay(1000).fadeOut('fast');
				});
				
				$('.item-detail .title-and-price .shoping-cart-and-price .item_info_section .bx_cart').click(function(){
				  $(this).parent().parent().find('.modal-b-w-big').fadeIn('fast').delay(1000).fadeOut('fast');
				});
				
				$('.tac').change(function(){
				   if ($('.tav').val() == 1) {
				      $('.minus-icon').hide();
				   } else {
				      $('.minus-icon').show();
				   }
				});
				
				$('.delivery-selector .rupost').click(function(){
				  $('.delivery-selector .item').removeClass('active');
				  $(this).addClass('active');
				  $('.delivery-body .item').removeClass('active');
				  $('.delivery-body .rupost').addClass('active');
				});
				
				$('.delivery-selector .ems').click(function(){
				  $('.delivery-selector .item').removeClass('active');
				  $(this).addClass('active');
				  $('.delivery-body .item').removeClass('active');
				  $('.delivery-body .ems').addClass('active');
				});

				$('.delivery-selector .coureer').click(function(){
				  $('.delivery-selector .item').removeClass('active');
				  $(this).addClass('active');
				  $('.delivery-body .item').removeClass('active');
				  $('.delivery-body .coureer').addClass('active');
				});
				

				
				$('.tabs-headers li').first().addClass( "active" );
				$('.tabs-content li').first().addClass( "active" );

				
				$('.tabs-headers li').click(function(){
					$('.tabs-headers li').removeClass('active');
					$(this).addClass('active');
				});
				
				$('.tab-description').click(function(){
					$('.tabs-content li').removeClass('active');
					$('.tabs-content .content-description').addClass('active');
				});
				
				$('.tab-acomps').click(function(){
					$('.tabs-content li').removeClass('active');
					$('.tabs-content .content-acomps').addClass('active');
				});
				
				$('.tab-asostav').click(function(){
					$('.tabs-content li').removeClass('active');
					$('.tabs-content .content-asostav').addClass('active');
				});
				
				$('.tab-sposob').click(function(){
					$('.tabs-content li').removeClass('active');
					$('.tabs-content .content-sposob').addClass('active');
				});
				$('.tab-otzivy').click(function(){
					$('.tabs-content li').removeClass('active');
					$('.tabs-content .content-otzivy').addClass('active');
				});
				$('.tab-certificate').click(function(){
					$('.tabs-content li').removeClass('active');
					$('.tabs-content .content-certificate').addClass('active');
				});
				
				$('.switch .button').click(function(){
					$('.switch .button').removeClass('active-button');
					$(this).addClass('active-button');
				});
				
				$('.gde-kupit-page .filter .sub .city-select-container .city-list .item').click(function(){
					var thisAmount = $(this).find('.name').html();
					$('.gde-kupit-page .filter .sub .main-name').html(thisAmount);
				});
				
				var thisAmount = $('.item_buttons_counter_block .transparent_input').val();
				if(thisAmount==1) {
				$('.minus-dis').css('z-index','6'); }
				
				$('.minus-icon').click(function(){
					var thisAmount = $('.item_buttons_counter_block .transparent_input').val();
					if(thisAmount==1) {
						$('.minus-dis').css('z-index','6');
					} 
				

					
				});
				
				$('.plus-icon').click(function(){
					var thisAmount = $('.item_buttons_counter_block .transparent_input').val();
					if(thisAmount>1) {
						$('.minus-dis').css('z-index','-1');
					} });
					
$(function() {

	$('.city-list .contry').each(function() {

		var cities = [],
			letters = {},
			lettersArray = [],
			source = $(this).find('.item');
			

		for (var i = 0; i < source.length; i++) {
			source.eq(i).addClass('letter_' + source.eq(i).find('.name').html().charAt(0));
//			cities[i] = source.eq(i).find('.name').html();
			letters[source.eq(i).find('.name').html().charAt(0)] = '';
		}

		var c = 0;
		for (var key in letters) {
			lettersArray[c] = key;
			c++;
		}

		for (var i = 0; i < lettersArray.length; i++) {
			$(this).find('.letter_' + lettersArray[i]).wrapAll("<div class='block_letter block_letter_" + lettersArray[i] + "'>");
			$(this).find('.block_letter_' + lettersArray[i]).prepend("<div class='letterHeader'>" + lettersArray[i] + "</div>");
		}

	});

});
				
								
});


