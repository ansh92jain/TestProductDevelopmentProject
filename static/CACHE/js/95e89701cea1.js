$(document).ready(function(){$("#comapny-staff").text("")
var win=$(window);arr=[]
page_num=1
alert("Hello! I am an alert box!!");debugger
$.ajax({type:"GET",url:"/"+lang+"/upperlayer/available-post",data:{page_num:page_num},contentType:"application/json; charset=utf-8",dataType:"json",success:function(result){var jposts=result;var dataTab=$.parseJSON(JSON.stringify(jposts));var arr=[];$('#max_page').val(dataTab.max_page)
$.each(dataTab.providers,function(index,value){$("#comapny-staff").append('<li class="ui-sortable-handle"  data-provider-id='+value.id+' >\
                        <div class="questionsection contact-routine-task">\
                        <div class="col-md-1 col-sm-2 col-xs-12 pd-none">\
                        </div><div class="col-md-8 col-sm-9 col-xs-8"><div class="first-head"><h4 class="contact-name"><strong>Contact Name : </strong>'+value.title+'</h4><span><strong>Contact Type : </strong>'+value.reason+'</span></div>\
                        <div class="seond-head"><label><strong>Address : </strong>'+value.place+'</label><label class="staff_email"><strong>Email : </strong>'+value.reason+'</label></div></div><div>\
                        <b>succcessfuly send invitation email</b></div>\<div class="clearfix"></div></div><hr></li>\
                       ')}});},error:function(){},});$(window).scroll(function(){if($(document).height()-win.height()==win.scrollTop()){var page_num=parseInt($("#page_num").val());var max_page=parseInt($('#max_page').val());$.ajax({type:"GET",url:"/"+lang+"/upperlayer/available-post",data:{page_num:page_num+1},contentType:"application/json; charset=utf-8",dataType:"json",success:function(result){var jposts=result;var dataTab=$.parseJSON(JSON.stringify(jposts));var arr=[];$('#max_page').val(dataTab.max_page)
$.each(dataTab.posts,function(index,value){$("#comapny-staff").append('<li class="ui-sortable-handle"  data-provider-id='+value.id+' >\
                            <div class="questionsection contact-routine-task">\
                            <div class="col-md-1 col-sm-2 col-xs-12 pd-none">\
                            </div><div class="col-md-8 col-sm-9 col-xs-8"><div class="first-head"><h4 class="contact-name"><strong>Contact Name : </strong>'+value.title+'</h4><span><strong>Contact Type : </strong>'+value.reason+'</span></div>\
                            <div class="seond-head"><label><strong>Address : </strong>'+value.place+'</label><label class="staff_email"><strong>Email : </strong>'+value.reason+'</label></div></div><div>\
                            <b>succcessfuly send invitation email</b></div>\<div class="clearfix"></div></div><hr></li>\
                           ')}});},error:function(){},});$("#page_num").attr('value',page_num+1);}});});