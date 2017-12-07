$(document).ready(function(){$("#comapny-staff").text("")
var win=$(window);arr=[]
page_num=1
$.ajax({type:"GET",url:"/"+lang+"/upperlayer/available-post",data:{page_num:page_num},contentType:"application/json; charset=utf-8",dataType:"json",success:function(result){var jposts=result;var dataTab=$.parseJSON(JSON.stringify(jposts));var arr=[];$('#max_page').val(dataTab.max_page)
$.each(dataTab.providers,function(index,value){if(value.image){image=value.image}
else{image='/media/pictures/None/no-image.png/'}
if(value.invite==true){$("#comapny-staff").append('<li class="ui-sortable-handle"  data-provider-id='+value.id+' >\
                        <div class="questionsection contact-routine-task">\
                        <div class="col-md-1 col-sm-2 col-xs-12 pd-none">\
                        <a class="fancybox"  href="{{ image.picture.url }}"><img class="img-responsive img-circle" src='+image+'></a>\
                        </div><div class="col-md-8 col-sm-9 col-xs-8"><div class="first-head"><h4 class="contact-name"><strong>Contact Name : </strong>'+value.name+'</h4><span><strong>Contact Type : </strong>'+value.contact_type+'</span></div>\
                        <div class="seond-head"><label><strong>Address : </strong>'+value.address+'</label><label class="staff_email"><strong>Email : </strong>'+value.email+'</label></div></div><div>\
                        <b>succcessfuly send invitation email</b></div>\<div class="clearfix"></div></div><hr></li>\
                       ')}else{$("#comapny-staff").append('<li class="ui-sortable-handle"  data-provider-id='+value.id+' >\
                        <div class="questionsection contact-routine-task">\
                        <div class="col-md-1 col-sm-2 col-xs-12 pd-none">\
                        <a class="fancybox"  href="{{ image.picture.url }}"><img class="img-responsive img-circle" src='+image+'></a>\
                        </div><div class="col-md-8 col-sm-9 col-xs-8"><div class="first-head"><h4 class="contact-name"><strong>Contact Name : </strong>'+value.name+'</h4><span><strong>Contact Type : </strong>'+value.contact_type+'</span></div>\
                        <div class="seond-head"><label><strong>Address : </strong>'+value.address+'</label><label class="staff_email"><strong>Email : </strong>'+value.email+'</label></div></div><div class="invite_massage"><a href="javascript:void(0);" data-id='+value.id+'\
                        class="col-sm-1 resume-btn btn default btn-xs green"><i class=""></i>invite</a></div><div class="see-resume"><a href="/en/upperlayer/display-resume/'+value.id+'/" class="btn default btn-xs green">See Resume</a></div>\<div class="clearfix"></div></div><hr></li>\
                        ')}});},error:function(){},});$(window).scroll(function(){if($(document).height()-win.height()==win.scrollTop()){var page_num=parseInt($("#page_num").val());var max_page=parseInt($('#max_page').val());$.ajax({type:"GET",url:"/"+lang+"/upperlayer/available-providers-list",data:{page_num:page_num+1},contentType:"application/json; charset=utf-8",dataType:"json",success:function(result){var jposts=result;var dataTab=$.parseJSON(JSON.stringify(jposts));var arr=[];$('#max_page').val(dataTab.max_page)
$.each(dataTab.providers,function(index,value){if(value.image){image=value.image}
else{image='/media/pictures/None/no-image.png/'}
if(value.invite==false){$("#comapny-staff").append('<li class="ui-sortable-handle"  data-provider-id='+value.id+' >\
                                <div class="questionsection contact-routine-task">\
                                <div class="col-md-1 col-sm-2 col-xs-12 pd-none">\
                                <a class="fancybox"  href="{{ image.picture.url }}"><img class="img-responsive img-circle" src='+image+'></a>\
                                </div><div class="col-md-8 col-sm-9 col-xs-8"><div class="first-head"><h4 class="contact-name"><strong>Contact Name : </strong>'+value.name+'</h4><span><strong>Contact Type : </strong>'+value.contact_type+'</span></div>\
                                <div class="seond-head"><label><strong>Address : </strong>'+value.address+'</label><label class="staff_email"><strong>Email : </strong>'+value.email+'</label></div></div><div>\
                                <b>succcessfuly send invitation email</b></div>\<div class="clearfix"></div></div><hr></li>\
                                ')}else{$("#comapny-staff").append('<li class="ui-sortable-handle"  data-provider-id='+value.id+' >\
                                <div class="questionsection contact-routine-task">\
                                <div class="col-md-1 col-sm-2 col-xs-12 pd-none">\
                                <a class="fancybox"  href="{{ image.picture.url }}"><img class="img-responsive img-circle" src='+image+'></a>\
                                </div><div class="col-md-8 col-sm-9 col-xs-8"><div class="first-head"><h4 class="contact-name"><strong>Contact Name : </strong>'+value.name+'</h4><span><strong>Contact Type : </strong>'+value.contact_type+'</span></div>\
                                <div class="seond-head"><label><strong>Address : </strong>'+value.address+'</label><label class="staff_email"><strong>Email : </strong>'+value.email+'</label></div></div><div class="invite_massage"><a href="javascript:void(0);" data-id='+value.id+'\
                                class="col-sm-1 resume-btn btn default btn-xs green"><i class=""></i>invite</a></div><div><a href="/en/upperlayer/display-resume/'+value.id+'/" class="btn default btn-xs green">See Resume</a></div>\<div class="clearfix"></div></div><hr></li>\
                                ')}});},error:function(){},});$("#page_num").attr('value',page_num+1);}});});$(document).on("click",".invite_massage",function(){inv=$(this)
$.ajax({type:"GET",url:"/"+lang+"/upperlayer/send-invitation-email",data:{'company_id':$("#company_id").val(),'staff_id':$(this).find('a').data('id')},contentType:"application/json; charset=utf-8",dataType:"json",success:function(result){if(result.status==201){inv.html("<b>succcessfuly send invitation email</b>")
inv.parent().find('div.see-resume').css('display','none')}},error:function(){},});});