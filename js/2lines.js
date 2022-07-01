function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

window.addToCartCustom = function(event)
{
    event.preventDefault();
    $.fancybox.showLoading();

    const response = $.post('/local/ajax/addGiftToCart.php', {
        id: event.target.dataset.id,
        quantity: event.target.dataset.quantity
    });

    event.target.disabled = true;

    response.done((msg) => {
        $.get('?AJAX=Y').done((msg) => {
            $('.kor').html(msg);
            $.fancybox.hideLoading();
        })
    });
}

function goToStep(n) {
    // if ($('#ORDER_FORM').valid()) {


    var valid = true;
    if ($('#ORDER_PROP_1').val()){
        $('#ORDER_PROP_1-error').hide();
    }else {
        $('#ORDER_PROP_1-error').show();
        valid = false;
    }
    if ($('#ORDER_PROP_3').val()){
        $('#ORDER_PROP_3-error').hide();
    }else {
        $('#ORDER_PROP_3-error').show();
        valid = false;
    }
    if (validateEmail($('#ORDER_PROP_2').val())){
        $('#ORDER_PROP_2-error').hide();
    }else {
        $('#ORDER_PROP_2-error').show();
        valid = false;
    }

    if ($('#ORDER_PROP_23').val()){
        $('#ORDER_PROP_23-error').hide();
    }else {
        $('#ORDER_PROP_23-error').show();
        valid = false;
    }
    if ($('[name=ORDER_PROP_6]').val()){
        $('#ORDER_PROP_6-error').hide();
    }else {
        $('#ORDER_PROP_6-error').show();
        valid = false;
    }

    if ($('#ORDER_PROP_20').val()){
        $('#ORDER_PROP_20-error').hide();
    }else {
        $('#ORDER_PROP_20-error').show();
        valid = false;
    }
    if ($('#ORDER_PROP_21').val()){
        $('#ORDER_PROP_21-error').hide();
    }else {
        $('#ORDER_PROP_21-error').show();
        valid = false;
    }

    if (valid) {
        $('#step').val(n);
        $('.limiter').hide();
        $('.step' + n).show();
        $('#fio').html($('[name=ORDER_PROP_1]').val());
        $('#town').html($('.bx-ui-sls-fake').attr('title'));
        $('#adress').html($('#ORDER_PROP_20').val() + ' ' + $('#ORDER_PROP_21').val() + ' ' + $('#ORDER_PROP_22').val());
        var destination = $('.page-title').offset().top;
        $('html, body').animate({scrollTop: destination}, 500);
    }
}
$(document).ready(function () {

    /* $('#ORDER_FORM').validate({
     rules: {
     'ORDER_PROP_1': "required",
     'ORDER_PROP_3': "required",
     'ORDER_PROP_2': "required email",
     'ORDER_PROP_23': "required",
     'CITY': "required",
     'LOCATION': 'required',
     'ORDER_PROP_20': "required",
     'ORDER_PROP_21': "required"
     },
     messages: {
     'ORDER_PROP_1': "Введите Ваше имя",
     'ORDER_PROP_3': "Введите Ваш телефон",
     'ORDER_PROP_2': "Введите корректный e-mail",
     'ORDER_PROP_23': "Введите страну",
     'CITY':          "Введите город",
     'LOCATION': "Выберите местоположение",
     'ORDER_PROP_20': "Введите улицу",
     'ORDER_PROP_21': "Введите дом"
     },
     errorPlacement: function(error, element){
     if(element.attr("name") == "CITY"){
     error.appendTo(element.parent().parent());
     }else{
     error.appendTo( element.parent() );
     }
     }
     });*/
  /*  $(document).on('dbclick','#basket_form .quantity',function(e){
        e.preventDefault();
        return false;
    });*/


    $(document).on('click','#basket_form .plus, #basket_form .minus', function(){
        if ($(this).hasClass('plus')) {
            $(this).parent().find('input').val(parseInt($(this).parent().find('input').val())+1).trigger('change');
        }else {
            $(this).parent().find('input').val(parseInt($(this).parent().find('input').val())-1).trigger('change');
        }
    });
    $(document).on('change','#basket_form .quantity',function(){
        var id = $(this).data('id');
        var quantity = $(this).val();
        $.fancybox.showLoading();
        $.ajax({
            type: "POST",
            url: "/local/ajax/updateCart.php",
            data: 'PRODUCT_ID='+id+'&QUANTITY='+quantity,
            beforeSend: function(){
                
            },
            success : function(msg){

                $.ajax({
                    type: "POST",
                    url: "?AJAX=Y",
                    data: 'PRODUCT_ID='+id+'&QUANTITY='+quantity,
                    success : function(msg){
                        $('.kor').html(msg);
                        $.fancybox.hideLoading();
                    }
                });
            }
        });

    });
    /*
     $('.submit').on('click',function(){
     $('#orderForm').submit();
     });
     $('[name=DELIVERY_ID]').change(function () {


     var deliveryPrice = $(this).data('price');
     var sum = $('[data-total-price]').data('total-price');
     //console.log(deliveryPrice);
     $('[data-total-delivery]').data('total-delivery', deliveryPrice);
     $('[data-total-delivery]').html(deliveryPrice + ' руб.');
     $('[data-all-sum]').html(deliveryPrice + sum + ' руб.');

     if ($(this).val()==18){
     $('[name=PAY_SYSTEM_ID]').parent().parent().parent().hide();
     $('[name=PAY_SYSTEM_ID][value="4"]').parent().parent().parent().show();
     $('[name=PAY_SYSTEM_ID][value="1"]').parent().parent().parent().show();
     $('[name=PAY_SYSTEM_ID][value="10"]').parent().parent().parent().show();
     $('[name=PAY_SYSTEM_ID][value="4"]').click();
     }
     else
     {
     $('[name=PAY_SYSTEM_ID]').parent().parent().parent().hide();
     $('[name=PAY_SYSTEM_ID][value="4"]').parent().parent().parent().show();

     $('[name=PAY_SYSTEM_ID][value="10"]').parent().parent().parent().show();
     $('[name=PAY_SYSTEM_ID][value="4"]').click();
     }
     });

     */
});
