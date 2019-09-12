/** Forms
 **************************************************************** **/

$(document).ready(function () {
    $('.building_type').hide();

    $('#selectMe').change(function () {
        $('.building_type').hide();
        $('#' + $(this).val()).show();
    })
});


function Residentes() {
    console.log("yessssssssss")
    var resident1 = $("#ress1").val();
    var resident2 = $("#ress2").val();
    var resident3 = $("#ress3").val();

    var x = Math.ceil(resident1 / (resident2 * 6));
    var y = Math.ceil(resident2 / 20);
    console.log(z)
    var z = x * y;
    if (true) {
        $("#answer").val(z);

    }
    else {
    }
};


function alltheshit() {
    var standard = $("#std").is(":checked");
    var premium = $("#prm").is(":checked");
    var excelium = $("#exc").is(":checked");
    var shaftneeded = parseFloat($("#answer").val());

    console.log(standard);
    console.log(premium);
    console.log(excelium);
    if (standard == true) {
        var subtotal = shaftneeded*7565;
        var totalcost = (shaftneeded*7565*1.1).toFixed(2);
        var servtotal = (shaftneeded*7565*0.1).toFixed(2);

        $("#totalserv").val(servtotal);
        $("#totalwo").val(subtotal);
        $("#totalus").val(totalcost);

    } else if (premium == true) {
        var subtotal = shaftneeded*12345;
        var totalcost = (shaftneeded*12345*1.13).toFixed(2);
        var servtotal = (shaftneeded*12345*0.13).toFixed(2);

        $("#totalserv").val(servtotal);
        $("#totalus").val(totalcost);
        $("#totalwo").val(subtotal);
        

    } else if (excelium == true) {
        var subtotal = shaftneeded*15400;
        var totalcost = (shaftneeded*15400*1.16).toFixed(2);
        var servtotal = (shaftneeded*15400*0.16).toFixed(2);

        $("#totalserv").val(servtotal);
        $("#totalus").val(totalcost);
        $("#totalwo").val(subtotal);
    }
    else{
        $("#totalus").val(0)
    }
};

  function Commerciales(){
var commer4 = $("#commer4").val();

    var x = Math.ceil(commer4);
    if (true) {
        $("#answer").val(x);
    }
    else {
    }
};



function Corporates() {
    var corpo4 = parseFloat($("#corpshafts").val());
    var corpo2 = parseFloat($("#corpfloors").val());
    var corpo3 = parseFloat($("#corpbasements").val());
    var corpo1 = parseFloat($("#corprental").val());
    var corpo5 = parseFloat($("#corpmxpeople").val());


    var u = Math.ceil(corpo5 * (corpo3 + corpo2));
    console.log(u)

    var w = Math.ceil(u / 1000)

    console.log(w)

    $("#answer").val(w);


};

function Hybrides() {
    var hybrid1 = parseFloat($("#hbusiness").val());
    var hybrid2 = parseFloat($("#hfloors").val());
    var hybrid3 = parseFloat($("#hbasements").val());
    var hybrid4 = parseFloat($("#hparkings").val());
    var hybrid5 = parseFloat($("#hmxpeople").val());
    var hybrid6 = parseFloat($("#hhours").val());

    var u = (hybrid5 * (hybrid3 + hybrid2));
    console.log(u)

    var w = Math.ceil(u / 1000)
    console.log(w)
    $("#answer").val(w);


};


