var lang=window.location.href.split('/')[3]
jQuery.validator.setDefaults({debug:true,success:"valid"});$(".organization-profile-form").validate({rules:{first_name:"required",last_name:"required",name:"required",street:"required",state:"required",country:"required",city:"required",postal_code:"required",},messages:{name:"Please specify your organization name",state:"Please specify street",country:"Please specify country",city:"Please specify city",street:"Please specify street",postal_code:"Please specify postal_code",first_name:"Please specify organization frist name",last_name:"Please specify organization last name",},submitHandler:function(form){form.submit();}});$(document).ready(function(){$('#id_email').attr('readonly','readonly');});function submit_change_password_form(){$("span.pwd-message").text('').removeClass('has-error-custom','has-success-custom')
$.ajax({type:"POST",url:"/"+lang+"/upperlayer/change-password/",data:$("#change-password").serializeArray(),headers:{'X-CSRFToken':Cookies.get('csrftoken')},success:function(result){if(result.status==403){$("span.pwd-message").text(result.message).addClass('has-error-custom')}if(result.status==200){$("span.pwd-message").text(result.message).addClass('has-success-custom')
location.reload()}if(result.status==401){$("span.pwd-message").text(result.message).addClass('has-error-custom')}}})}
$("#change-password").validate({rules:{password:"required",new_password:{required:true,maxlength:16,minlength:8,},re_password:{equalTo:"#new_password"}},messages:{password:"Password field is mandatory.",new_password:"New password field is mandatory and length should be varry between 8 to 16 character",re_password:"Re enter password and New password field should be same",},submitHandler:function(form){submit_change_password_form()
console.log('fssdfsf')}});$('#logo-form').validate({rules:{image:{required:true,},},messages:{image:'image field is required and should in image formate',},submitHandler:function(form){form.submit();}});$(document).on('click','.fileinput-exists',function(){$("#id_image").val("")
$("#img-error").text("")})
$("#id_image").change(function(){var extension=this.files[0].name.split('.').pop().toUpperCase();if(extension=="PNG"||extension=="JPG"||extension=="GIF"||extension=="JPEG"){readURL(this);$("#img-error").text("")}
else{$("#upload-image").val("")
$(".img-error").text('Note: Image format should be PNG, GIF, JPG and JPEG').css("color","red")}});function readURL(input){if(input.files&&input.files[0]){var reader=new FileReader();reader.onload=function(e){$('#upload-image').attr('src',e.target.result);}
reader.readAsDataURL(input.files[0]);}}
$(document).on('click','#accept-request',function(){accept=$(this)
$.ajax({type:"GET",url:"/"+lang+"/upperlayer/accept-request/",data:{'comapny_id':$(this).data('company-id'),'contact_id':$(this).data('contact-id')},success:function(result){if(result.status==201){accept.addClass('disabled-a')
swal({title:"Success",text:"Successfully accept request.",type:"success",showCancelButton:true,showConfirmButton:false,timer:2000,});}
else{}}})})