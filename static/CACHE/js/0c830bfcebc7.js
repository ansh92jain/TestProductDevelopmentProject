$(document).ready(function(){$("#available_company").text(" ")
var win=$(window);arr=[]
$.ajax({type:"GET",url:"/"+lang+"/upperlayer/available-company-list",data:{page_num:1},contentType:"application/json; charset=utf-8",dataType:"json",success:function(result){var jposts=result;var dataTab=$.parseJSON(JSON.stringify(jposts));var arr=[];$('#max_page').val(dataTab.max_page)
$.each(dataTab.companies,function(index,value){if(value.image){image=value.image}
else{image='/media/pictures/None/no-image.png/'}
if(value.invite==false){$("#available_company").append('<ul id="sortable"><li class="ui-sortable-handle"  data-provider-id='+value.id+' >\
                            <div class="questionsection contact-routine-task">\
                            <div class="col-md-1 col-sm-2 col-xs-12 pd-none">\
                            <a class="fancybox"  href="{{ image.picture.url }}"><img class="img-responsive img-circle" src='+image+'></a>\
                            </div><div class="col-md-8 col-sm-9 col-xs-8"><div class="first-head"><h4 class="contact-name"><strong>Company Name : </strong>'+value.name+'</h4>\
                            <span><strong>Company Profile : </strong>'+value.contact_type+'</span></div>\
                            <div class="seond-head"><label><strong>Address : </strong>'+value.address+'</label><label class="company_email"><strong>Email : </strong>'+value.email+'</label></div></div>\
                            <div class="join_email"><b>succcessfuly send join email</b></div>\<div class="clearfix"></div></div><hr></li>\
                            </ul>')}else{$("#available_company").append('<ul id="sortable"><li class="ui-sortable-handle"  data-provider-id='+value.id+' >\
                            <div class="questionsection contact-routine-task">\
                            <div class="col-md-1 col-sm-2 col-xs-12 pd-none">\
                            <a class="fancybox"  href="{{ image.picture.url }}"><img class="img-responsive img-circle" src='+image+'></a>\
                            </div><div class="col-md-8 col-sm-9 col-xs-8"><div class="first-head"><h4 class="contact-name"><strong>Company Name : </strong>'+value.name+'</h4>\
                            <span><strong>Company Profile : </strong>'+value.contact_type+'</span></div>\
                            <div class="seond-head"><label><strong>Address : </strong>'+value.address+'</label><label class="company_email"><strong>Email : </strong>'+value.email+'</label></div></div>\
                            <div class="join_email"><a href="javascript:void(0);" data-id='+value.id+'\
                            class="col-sm-1 btn default btn-xs green"><i class=""></i>Join</a></div>\<div class="clearfix"></div></div><hr></li>\
                            </ul>')}});},error:function(){},});$(window).scroll(function(){if($(document).height()-win.height()==win.scrollTop()){var page_num=parseInt($("#page_num").val());var max_page=parseInt($('#max_page').val());$.ajax({type:"GET",url:"/"+lang+"/upperlayer/available-company-list",data:{page_num:page_num+1},contentType:"application/json; charset=utf-8",dataType:"json",success:function(result){var jposts=result;var dataTab=$.parseJSON(JSON.stringify(jposts));var arr=[];$('#max_page').val(dataTab.max_page)
$.each(dataTab.companies,function(index,value){if(value.image){image=value.image}
else{image='/media/pictures/None/no-image.png/'}
if(value.invite==false){$("#available_company").append('<ul id="sortable"><li class="ui-sortable-handle"  data-provider-id='+value.id+' >\
                            <div class="questionsection contact-routine-task">\
                            <div class="col-md-1 col-sm-2 col-xs-12 pd-none">\
                            <a class="fancybox"  href="{{ image.picture.url }}"><img class="img-responsive img-circle" src='+image+'></a>\
                            </div><div class="col-md-8 col-sm-9 col-xs-8"><div class="first-head"><h4 class="contact-name"><strong>Company Name : </strong>'+value.name+'</h4>\
                            <span><strong>Company Profile : </strong>'+value.contact_type+'</span></div>\
                            <div class="seond-head"><label><strong>Address : </strong>'+value.address+'</label><label class="company_email"><strong>Email : </strong>'+value.email+'</label></div></div>\
                            <div class="join_email"><b>succcessfuly send join email</b></div>\<div class="clearfix"></div></div><hr></li>\
                            </ul>')}else{$("#available_company").append('<ul id="sortable"><li class="ui-sortable-handle"  data-provider-id='+value.id+' >\
                            <div class="questionsection contact-routine-task">\
                            <div class="col-md-1 col-sm-2 col-xs-12 pd-none">\
                            <a class="fancybox"  href="{{ image.picture.url }}"><img class="img-responsive img-circle" src='+image+'></a>\
                            </div><div class="col-md-8 col-sm-9 col-xs-8"><div class="first-head"><h4 class="contact-name"><strong>Company Name : </strong>'+value.name+'</h4>\
                            <span><strong>Company Profile : </strong>'+value.contact_type+'</span></div>\
                            <div class="seond-head"><label><strong>Address : </strong>'+value.address+'</label><label class="company_email"><strong>Email : </strong>'+value.email+'</label></div></div>\
                            <div class="join_email"><a href="javascript:void(0);" data-id='+value.id+'\
                            class="col-sm-1 btn default btn-xs green"><i class=""></i>Join</a></div>\<div class="clearfix"></div></div><hr></li>\
                            </ul>')}});},error:function(){},});$("#page_num").attr('value',page_num+1);}});})
$(document).on("click",".join_email",function(){inv=$(this)
$.ajax({type:"GET",url:"/"+lang+"/upperlayer/send-join-email",data:{'contact_id':$("#contact_id").val(),'company_id':$(this).find('a').data('id')},contentType:"application/json; charset=utf-8",dataType:"json",success:function(result){if(result.status==201){inv.html("<b>succcessfuly send join email</b>")}},error:function(){},});});$("#company_search").on("keyup",function(){if($(this).val()==""){$("#available_company").text(" ")
var win=$(window);arr=[]
$.ajax({type:"GET",url:"/"+lang+"/upperlayer/available-company-list",data:{page_num:1},contentType:"application/json; charset=utf-8",dataType:"json",success:function(result){var jposts=result;var dataTab=$.parseJSON(JSON.stringify(jposts));var arr=[];$('#max_page').val(dataTab.max_page)
$.each(dataTab.companies,function(index,value){if(value.image){image=value.image}
else{image='/media/pictures/None/no-image.png/'}
if(value.invite==false){$("#available_company").append('<ul id="sortable"><li class="ui-sortable-handle"  data-provider-id='+value.id+' >\
                                <div class="questionsection contact-routine-task">\
                                <div class="col-md-1 col-sm-2 col-xs-12 pd-none">\
                                <a class="fancybox"  href="{{ image.picture.url }}"><img class="img-responsive img-circle" src='+image+'></a>\
                                </div><div class="col-md-8 col-sm-9 col-xs-8"><div class="first-head"><h4 class="contact-name"><strong>Company Name : </strong>'+value.name+'</h4>\
                                <span><strong>Company Profile : </strong>'+value.contact_type+'</span></div>\
                                <div class="seond-head"><label><strong>Address : </strong>'+value.address+'</label><label class="company_email"><strong>Email : </strong>'+value.email+'</label></div></div>\
                                <div class="join_email"><b>succcessfuly send join email</b></div>\<div class="clearfix"></div></div><hr></li>\
                                </ul>')}else{$("#available_company").append('<ul id="sortable"><li class="ui-sortable-handle"  data-provider-id='+value.id+' >\
                                <div class="questionsection contact-routine-task">\
                                <div class="col-md-1 col-sm-2 col-xs-12 pd-none">\
                                <a class="fancybox"  href="{{ image.picture.url }}"><img class="img-responsive img-circle" src='+image+'></a>\
                                </div><div class="col-md-8 col-sm-9 col-xs-8"><div class="first-head"><h4 class="contact-name"><strong>Company Name : </strong>'+value.name+'</h4>\
                                <span><strong>Company Profile : </strong>'+value.contact_type+'</span></div>\
                                <div class="seond-head"><label><strong>Address : </strong>'+value.address+'</label><label class="company_email"><strong>Email : </strong>'+value.email+'</label></div></div>\
                                <div class="join_email"><a href="javascript:void(0);" data-id='+value.id+'\
                                class="col-sm-1 btn default btn-xs green"><i class=""></i>Join</a></div>\<div class="clearfix"></div></div><hr></li>\
                                </ul>')}});},error:function(){},});}
if($('#company_search').val().length>=3){$.ajax({type:"GET",url:"/"+lang+"/upperlayer/company-available-for-join",data:{'search_value':$('#company_search').val()},contentType:"application/json; charset=utf-8",dataType:"json",success:function(result){if(result.status==404){$("#available_company").text("No company found")}
else{$("#available_company").text("")
var jposts=result;var dataTab=$.parseJSON(JSON.stringify(jposts));$.each(dataTab.companies,function(index,value){if(value.image){image=value.image}
else{image='/media/pictures/None/no-image.png/'}
if(value.invite==false){$("#available_company").append('<ul id="sortable"><li class="ui-sortable-handle"  data-provider-id='+value.id+' >\
                            <div class="questionsection contact-routine-task">\
                            <div class="col-md-1 col-sm-2 col-xs-12 pd-none">\
                            <a class="fancybox"  href="{{ image.picture.url }}"><img class="img-responsive img-circle" src='+image+'></a>\
                            </div><div class="col-md-8 col-sm-9 col-xs-8"><div class="first-head"><h4 class="contact-name"><strong>Company Name : </strong>'+value.name+'</h4>\
                            <span><strong>Company Profile : </strong>'+value.contact_type+'</span></div>\
                            <div class="seond-head"><label><strong>Address : </strong>'+value.address+'</label><label class="company_email"><strong>Email : </strong>'+value.email+'</label></div></div>\
                            <div class="join_email"><b>succcessfuly send join email</b></div>\<div class="clearfix"></div></div><hr></li>\
                            </ul>')}else{$("#available_company").append('<ul id="sortable"><li class="ui-sortable-handle"  data-provider-id='+value.id+' >\
                            <div class="questionsection contact-routine-task">\
                            <div class="col-md-1 col-sm-2 col-xs-12 pd-none">\
                            <a class="fancybox"  href="{{ image.picture.url }}"><img class="img-responsive img-circle" src='+image+'></a>\
                            </div><div class="col-md-8 col-sm-9 col-xs-8"><div class="first-head"><h4 class="contact-name"><strong>Company Name : </strong>'+value.name+'</h4>\
                            <span><strong>Company Profile : </strong>'+value.contact_type+'</span></div>\
                            <div class="seond-head"><label><strong>Address : </strong>'+value.address+'</label><label class="company_email"><strong>Email : </strong>'+value.email+'</label></div></div>\
                            <div class="join_email"><a href="javascript:void(0);" data-id='+value.id+'\
                            class="col-sm-1 btn default btn-xs green"><i class=""></i>Join</a></div>\<div class="clearfix"></div></div><hr></li>\
                            </ul>')}});}},error:function(){},});}})