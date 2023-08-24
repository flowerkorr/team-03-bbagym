var inputId = document.querySelector('#id');
var inputPw = document.querySelector('#pw');
var checkPw = document.querySelector('#pw-check');
var inputName = document.querySelector('#name');
var inputPhone = document.querySelector('#phone');
var inputEmail = document.querySelector('#email');
var radioCommon = document.querySelector('#common');
var radioRegist = document.querySelector('#registrant');
var inputBusiness = document.querySelector('#business');
var joinBtn = document.querySelector('#join-btn');

inputId.addEventListener('keyup', activeEvent);
inputPw.addEventListener('keyup', activeEvent);
checkPw.addEventListener('keyup', activeEvent);
inputName.addEventListener('keyup', activeEvent);
inputPhone.addEventListener('keyup', activeEvent);
inputEmail.addEventListener('keyup', activeEvent);
radioCommon.addEventListener('checked', activeEvent);
radioRegist.addEventListener('checked', activeEvent);
inputBusiness.addEventListener('keyup', activeEvent);
// findIdBtn.addEventListener('click', errorEvent);

function activeEvent(){
    if(radioRegist.value){
        if(inputId.value &&
            inputPw.value &&
            checkPw.value &&
            inputName.value &&
            inputPhone.value &&
            inputEmail.value &&
            inputBusiness.value) {
            joinBtn.disabled = false;
        }else{
            joinBtn.disabled = true;
        }
    }
    if(radioCommon.value) {
        if(inputId.value &&
            inputPw.value &&
            checkPw.value &&
            inputName.value &&
            inputPhone.value &&
            inputEmail.value) {
            joinBtn.disabled = false;
        }else{
            joinBtn.disabled = true;
        }
    }
}

var $inputs = $(".inform");
var $must = $(".must");
var $plus = $(".plus");
var $contain = $(".business-container");
var $common = $(".common");
var $regist = $(".regist");
var $btn = $(".join-btn");

$regist.on('click', function(){
    $contain.css('display', 'block');
    $btn.prop('disabled', true);
    $plus.val('');
});

$common.on('click', function(){
    $contain.css('display', 'none');
    $plus.val('');
});