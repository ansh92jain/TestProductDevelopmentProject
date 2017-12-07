var lang = window.location.pathname.split('/')[1]

$(document).ready(function() {

    $(".demo").colorpicker();
})

$(document).on('click', '#outer-box-border', function(){
    $(".alert-success, .alert-error-msg").addClass("hide")
    $.ajax({
        type: "GET",
        url: "/"+lang+"/preference/set-user-border",
        data : {'border': $(this).find('input').prop('checked')},
        success: function(result) {
            if(result.status == 201){
                $(".alert-success").removeClass("hide")
                $(".pre-response").text(result.message)
            }
        },
        error: function(result){}
    })
})

$(document).on('click', '#compact-header', function(){
    $(".alert-success, .alert-error-msg").addClass("hide")
    $.ajax({
        type: "GET",
        url: "/"+lang+"/preference/set-user-header",
        data : {'header': $(this).find('input').prop('checked')},
        success: function(result){
            if(result.status == 201){
                $(".alert-success").removeClass("hide")
                $(".pre-response").text(result.message)
            }
        },
        error: function(result){}
    })
})


$(document).on('blur', '#border-color', function(){
    $(".alert-success, .alert-error-msg").addClass("hide")
    
    var color = rgb2hex($(".minicolors-swatch-color").css( "background-color" ))
    $.ajax({
        type: "GET",
        url: "/"+lang+"/preference/set-seprate-border-color",
        data : {'color_code': color},
        success: function(result){
            if(result.status == 201){
                $(".alert-success").removeClass("hide")
                $(".pre-response").text(result.message)
                $("#border-color").val(result.border_color)
            }
        },
        error: function(result){
        }
    })
})


function rgb2hex(rgb){
     rgb = rgb.match(/rgb\(\s*(-?\d+)(%?)\s*,\s*(-?\d+)(\2)\s*,\s*(-?\d+)(\2)\s*\)/);
     return "#" +
      ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[5],10).toString(16)).slice(-2);
}