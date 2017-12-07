var lang=window.location.pathname.split('/')[1];$("#provider_search").on("keyup",function(){if($(this).val().length>=3){$("#available_provider").text(" ")
$.ajax({type:"GET",url:"/"+lang+"/client/all-providers",data:{'search_value':$(this).val(),'page_num':1},contentType:"application/json; charset=utf-8",dataType:"json",success:function(result){if(result.status!=404){var jposts=result;var dataTab=$.parseJSON(JSON.stringify(jposts));var arr=[];$('#max_page').val(dataTab.max_page)
put_value(dataTab)}
else{$("#available_provider").text("No Match Found")}},error:function(){},});}
if($(this).val().length==0){$.ajax({type:"GET",url:"/"+lang+"/client/all-providers",data:{'search_value':$('#provider_search').val(),'page_num':page_num},contentType:"application/json; charset=utf-8",dataType:"json",success:function(result){var jposts=result;var dataTab=$.parseJSON(JSON.stringify(jposts));var arr=[];$('#max_page').val(dataTab.max_page)
put_value(dataTab)},error:function(){},});}})
$(document).ready(function(){$("#available_provider").text("")
var win=$(window);arr=[]
page_num=1
$.ajax({type:"GET",url:"/"+lang+"/client/all-providers",data:{'search_value':$('#provider_search').val(),'page_num':page_num},contentType:"application/json; charset=utf-8",dataType:"json",success:function(result){var jposts=result;var dataTab=$.parseJSON(JSON.stringify(jposts));var arr=[];$('#max_page').val(dataTab.max_page)
put_value(dataTab)},error:function(){},});$(window).scroll(function(){if($(document).height()-win.height()==win.scrollTop()){var page_num=parseInt($("#page_num").val());var max_page=parseInt($('#max_page').val());$.ajax({type:"GET",url:"/"+lang+"/client/all-providers",data:{'page_num':page_num+1},contentType:"application/json; charset=utf-8",dataType:"json",success:function(result){var jposts=result;var dataTab=$.parseJSON(JSON.stringify(jposts));var arr=[];$('#max_page').val(dataTab.max_page)
put_value(dataTab)},error:function(){},});$("#page_num").attr('value',page_num+1);}});})
function put_value(dataTab){$.each(dataTab.individual_provider,function(index,value){if(value.image){image=value.image}
else{image='/media/pictures/None/no-image.png/'}
$("#available_provider").append('<li class="ui-sortable-handle"  data-provider-id='+value.id+' >\
            <div class="questionsection contact-routine-task">\
            <div class="col-md-1 col-sm-2 col-xs-12 pd-none">\
            <a class="fancybox"  href="{{ image.picture.url }}"><img class="img-responsive img-circle" src='+image+'></a>\
            </div><div class="col-md-8 col-sm-9 col-xs-8"><div class="first-head"><h4 class="contact-name"><strong>Name : </strong>'+value.name+'</h4><span><strong>Country: </strong>'+value.country+'</span></div>\
            <div class="seond-head"><label><strong>Profession : </strong>'+value.contact_type+'</label><label class="staff_email"><strong>Skills : </strong></label></div></div>\</div>\
            \<div class="chat pull-right"><a href="javascript:void(0)" data-id='+value.id+' class="btn default btn-xs red pulish-post">Chat</a></div><div class="see-resume pull-right"><a href="/en/upperlayer/display-resume/'+value.id+'/" \
            class="btn default btn-xs green">See Resume</a></div>\
            <a href="javascript:void(0)" data-id='+value.id+' class="btn default btn-xs green more_info"  role="button" aria-haspopup="true" aria-expanded="false">\
            More Info</a>\
            <div class="clearfix"></div></div>\
            <hr></li>\
            ')});$.each(dataTab.company_provider,function(index,value){if(value.image){image=value.image}
else{image='/media/pictures/None/no-image.png/'}
$("#available_provider").append('<li class="ui-sortable-handle"  data-provider-id='+value.id+' >\
        <div class="questionsection contact-routine-task">\
        <div class="col-md-1 col-sm-2 col-xs-12 pd-none">\
        <a class="fancybox"  href="{{ image.picture.url }}"><img class="img-responsive img-circle" src='+image+'></a>\
        </div><div class="col-md-8 col-sm-9 col-xs-8"><div class="first-head"><h4 class="contact-name"><strong>Name : </strong>'+value.name+'</h4>\
        <span><strong>Country : </strong>'+value.country+'</span></div>\
        <div class="seond-head"><label><strong>Profession : </strong>'+value.profile+'</label><label class="company_email"><strong>Skills : </strong></label></div></div>\
        <div class="chat pull-right"><a href="javascript:void(0)" data-id='+value.id+' class="btn default btn-xs red pull-right">Chat</a></div>\
        <div class="more-info pull-right"><a href="javascript:void(0)" data-id='+value.id+' class="btn default btn-xs green more-info-company">More Info</a></div>\
        <div class="clearfix"></div></div><hr></li>\
        ')});}
$(document).on("click",".more-info-company",function(){var id=$(this).data("id");$.ajax({type:"GET",url:"/"+lang+"/client/all-info-company/",data:{'id':id},contentType:"application/json; charset=utf-8",dataType:"json",success:function(result){$(".provider-info").text("")
$(".provider-info").html(result.html)
$("#todo-task-modal").modal('toggle');},error:function(){},});})
$(document).on("click",".more_info",function(){var id=$(this).data("id");$.ajax({type:"GET",url:"/"+lang+"/client/all-info/",data:{'id':id},contentType:"application/json; charset=utf-8",dataType:"json",success:function(result){$(".provider-info").text("")
$(".provider-info").html(result.html)
$("#todo-task-modal").modal('toggle');},error:function(){},});})