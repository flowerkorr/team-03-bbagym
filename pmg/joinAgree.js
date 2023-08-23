var $all = $(".all");
var $inputs = $(".agreement");

$all.on('click', function(){
    if($(this).is(":checked")){
        $inputs.prop('checked', true);
    }else{
        $inputs.prop('checked', false);
    }
})

$inputs.on('click', function(){
    var check = true;
    if(!$(this).is(":checked")){
        $all.prop('checked', false);
    }
    if($inputs.filter(":checked").length == 3){
        $all.prop('checked', true);
    }
});

var checkPersonal = document.getElementsByName('personal');
var checkTos = document.getElementsByName('tos');
var checkGps = document.getElementsByName('gps');
var checkAge = document.getElementsByName('age');
var joinBtn = document.getElementsByName('join-btn');

checkPersonal.addEventListener('checked', activeEvent);
checkTos.addEventListener('checked', activeEvent);
checkGps.addEventListener('checked', activeEvent);
checkAge.addEventListener('checked', activeEvent);
joinBtn.addEventListener('click', errorEvent);

function activeEvent() {
    if (checkPersonal.value &&
        checkTos.value &&
        checkGps.value &&
        checkAge.value) {
        joinBtn.disabled = false;
    } else {
        joinBtn.disabled = true;
    }
}