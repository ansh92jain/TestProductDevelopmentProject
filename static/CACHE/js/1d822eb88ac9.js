var lang=window.location.pathname.split('/')[1];$(document).ready(function(){$("#comapny-employee").text("")
var win=$(window);arr=[]
page_num=1
$.ajax({type:"GET",url:"/"+lang+"/upperlayer/all-company-employee",data:{page_num:page_num},contentType:"application/json; charset=utf-8",dataType:"json",success:function(result){var jposts=result;var dataTab=$.parseJSON(JSON.stringify(jposts));var arr=[];$('#max_page').val(dataTab.max_page)
$.each(dataTab.employee,function(index,value){if(value.image){image=value.image}
else{image='/media/pictures/None/no-image.png/'}
$("#comapny-employee").append('<ul id="sortable"><li class="ui-sortable-handle"  data-provider-id='+value.id+' >\
                <div class="questionsection contact-routine-task">\
                <div class="col-md-1 col-sm-2 col-xs-12 pd-none">\
                <a class="fancybox"  href="{{ image.picture.url }}"><img class="img-responsive img-circle" src='+image+'></a>\
                </div><div class="col-md-8 col-sm-9 col-xs-8"><div class="first-head"><h4 class="contact-name"><strong>Contact Name : </strong>'+value.name+'</h4><span><strong>Contact Type : </strong>'+value.contact_type+'</span></div>\
                <div class="seond-head"><label><strong>Address : </strong>'+value.address+'</label><label class="staff_email"><strong>Email : </strong>'+value.email+'</label></div></div>\
                <div class="terminate_employe"><a href="javascript:void(0);"data-id='+value.id+' class="col-sm-1resume-btn btn default btn-xs green"><i class=""></i>terminate</a></div>\<div class="clearfix"></div></div><hr></li>\
                </ul>')});},error:function(){},});$(window).scroll(function(){if($(document).height()-win.height()==win.scrollTop()){var page_num=parseInt($("#page_num").val());var max_page=parseInt($('#max_page').val());$.ajax({type:"GET",url:"/"+lang+"/upperlayer/all-company-employee",data:{page_num:page_num+1},contentType:"application/json; charset=utf-8",dataType:"json",success:function(result){var jposts=result;var dataTab=$.parseJSON(JSON.stringify(jposts));var arr=[];$('#max_page').val(dataTab.max_page)
$.each(dataTab.employee,function(index,value){if(value.image){image=value.image}
else{image='/media/pictures/None/no-image.png/'}
$("#comapny-employee").append('<ul id="sortable"><li class="ui-sortable-handle"  data-provider-id='+value.id+' >\
                            <div class="questionsection contact-routine-task">\
                            <div class="col-md-1 col-sm-2 col-xs-12 pd-none">\
                            <a class="fancybox"  href="{{ image.picture.url }}"><img class="img-responsive img-circle" src='+image+'></a>\
                            </div><div class="col-md-8 col-sm-9 col-xs-8"><div class="first-head"><h4 class="contact-name"><strong>Contact Name : </strong>'+value.name+'</h4><span><strong>Contact Type : </strong>'+value.contact_type+'</span></div>\
                            <div class="seond-head"><label><strong>Address : </strong>'+value.address+'</label><label class="staff_email"><strong>Email : </strong>'+value.email+'</label></div></div>\
                            <div class="terminate_employe"><a href="javascript:void(0);"data-id='+value.id+' class="col-sm-1resume-btn btn default btn-xs green"><i class=""></i>terminate</a></div>\<div class="clearfix"></div></div><hr></li>\
                            </ul>')});},error:function(){},});$("#page_num").attr('value',page_num+1);}});});var terminate_emp=""
$(document).on('click',".terminate_employe",function(e){terminate_emp=$(this)
var employee_id=$(this).find('a').data('id')
ter=$(this)
$.ajax({type:"GET",url:"/"+lang+"/upperlayer/terminate-company-employee",data:{},contentType:"application/json; charset=utf-8",success:function(result){$('.terminate-resion-form').html(result.html)
$('#employee-remove-modal').modal('toggle');$("#employee_id").val(employee_id)
$("#organization_id").val($("#company_id").val())}})})
$(document).on('submit',"#employe_terminate_form",function(event){event.preventDefault()
if($("#id_title").val()!=""&&$("#id_description").val()!="")
{$("#id_title,#id_description").removeClass("custom-has-error")
$("#error-text").text("")
$.ajax({type:"POST",url:"/"+lang+"/upperlayer/terminate-company-employee/",data:$(this).serializeArray(),headers:{'X-CSRFToken':Cookies.get('csrftoken')},success:function(result){if(result.status==201){$(".terminate-close").click()
swal({title:"Success",text:"Successfully terminate employee.",type:"success",showCancelButton:true,showConfirmButton:false,timer:2000,});terminate_emp.html("<b>succcessfuly terminate employee</b>")}
else{}}})}
else{$("#id_title").addClass('custom-has-error')
$("#id_description").addClass('custom-has-error')
$("#error-text").text("All fields are menditary").css("color","red")}})