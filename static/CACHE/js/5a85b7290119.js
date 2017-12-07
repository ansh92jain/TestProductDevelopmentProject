var lang=window.location.pathname.split('/')[1];$(document).ready(function(){var map=''
$.ajax({type:'GET',url:"/"+lang+"/tour/show-tour-route-map/"+parseInt($("#tour-id").val())+"",success:function(result){$(".get_complete_tour, .tour_distance").removeClass('hide')
$(".route-message-error, .route-overview").addClass('hide')
$(".get_complete_tour").empty();var tour_result="";if(result.login_user_add){map=new GMaps({el:'#map',zoom:12,lat:result.login_user_add.start_lat_lng.lat,lng:result.login_user_add.start_lat_lng.lng,});map.addMarker({lat:result.login_user_add.start_lat_lng.lat,lng:result.login_user_add.start_lat_lng.lng,title:result.login_user_add.source_contact,Icon:'/static/img/map_current_user.png'});map.addMarker({lat:result.login_user_add.end_lat_lng.lat,lng:result.login_user_add.end_lat_lng.lng,title:result.login_user_add.destination_contact,});map.drawRoute({origin:[result.login_user_add.start_lat_lng.lat,result.login_user_add.start_lat_lng.lng],destination:[result.login_user_add.end_lat_lng.lat,result.login_user_add.end_lat_lng.lng],travelMode:'driving',strokeColor:'#36c6d3',strokeOpacity:0.9,strokeWeight:3});complete_tour_details(result.login_user_add.source_contact,result.login_user_add.destination_contact,result.login_user_add.start_address,result.login_user_add.end_address,result.login_user_add.distance,result.login_user_add.duration)}
var arr=[]
arr.push(result.login_user_add.distance)
$.each(result.contact_add,function(key,value){map.addMarker({lat:value.end_lat_lng.lat,lng:value.end_lat_lng.lng,title:value.destination_contact,});map.addMarker({lat:value.start_lat_lng.lat,lng:value.start_lat_lng.lng,title:value.source_contact,});map.drawRoute({origin:[value.start_lat_lng.lat,value.start_lat_lng.lng],destination:[value.end_lat_lng.lat,value.end_lat_lng.lng],travelMode:'driving',strokeColor:'#36c6d3',strokeOpacity:0.9,strokeWeight:3});arr.push(value.distance)
complete_tour_details(value.source_contact,value.destination_contact,value.start_address,value.end_address,value.distance,value.duration)});var distance=0;$.each(arr,function(key,value){distance+=parseInt(value.replace(/[^\d.]/g,''))})
tour_total_distance(distance)
map.fitZoom()}})
$("#source-destination").on('submit',function(e){e.preventDefault()
var source=parseInt($("#source-contacts").val())
var destination=parseInt($("#destination-contacts").val())
$(".route-detials").text('')
$(".route-overview").addClass('hide')
if(source&&destination&&(source!=destination)){$(".route-message-error").addClass('hide')
$(".tour_distance, .get_complete_tour").text('')
$.ajax({type:'GET',url:"/"+lang+"/tour/get-map-tour-sourec-to-destination",data:{'source':source,'destination':destination},success:function(result){if(result.status==404){map.cleanRoute()
$(".route-message-error").removeClass('hide')
$(".route-message").text(result.message)}else{$(".route-message-error").addClass('hide')
$(".route-overview").removeClass('hide')
$(".start_point").text(result.results[0].legs[0].start_address)
$(".end_point").text(result.results[0].legs[0].end_address)
$(".distance").text(result.results[0].legs[0].distance.text)
$(".duration").text(result.results[0].legs[0].duration.text)
html=''
$.each(result.results[0].legs[0].steps,function(key,value){html+="<li style='margin-left:20px;'> "+value.html_instructions+"<strong>Distance:</strong> \
                                "+value.distance.text+" and <strong>Duration: </strong>"+value.duration.text+" </li> "});$(".route-detials").html(html)
map=new GMaps({el:'#map',zoom:12,lat:result.results[0].legs[0].start_location.lat,lng:result.results[0].legs[0].start_location.lng,});map.drawRoute({origin:[result.results[0].legs[0].start_location.lat,result.results[0].legs[0].start_location.lng],destination:[result.results[0].legs[0].end_location.lat,result.results[0].legs[0].end_location.lng],travelMode:'driving',strokeColor:'#36c6d3',strokeOpacity:0.9,strokeWeight:3});map.addMarker({lat:result.results[0].legs[0].start_location.lat,lng:result.results[0].legs[0].start_location.lng,title:result.source_user_name,Icon:'/static/img/map_current_user.png'});map.addMarker({lat:result.results[0].legs[0].end_location.lat,lng:result.results[0].legs[0].end_location.lng,title:result.distination_contact_name,});map.fitZoom()}}})}else{$(".route-message-error").removeClass('hide')
if(source==destination){$(".route-message").text(" Source contact and Destination contact are same")}
if(isNaN(source)&&isNaN(destination)){$(".route-message").text(" Please select Source contact and Destination contact from drop down")}else{if(isNaN(source)){$(".route-message").text(" Please select Source contact from drop down")}
if(isNaN(destination)){$(".route-message").text(" Please Select Destination contact from drop down")}}}})});function complete_tour_details(source_contact,destination_contact,start_address,end_address,distance,duration){var tour_result=''
tour_result="<div class='questionsection tour-map'> \
            <div class='col-md-10 col-sm-10 col-xs-12'> \
                <h4> \
                    <strong>Source Contact: </strong><span class='map-point'>"+source_contact+"</span> \
                    <span><strong>Destination Contact: </strong>"+destination_contact+"</span> \
                </h4> \
                <h4> \
                    <strong>Start Point: </strong><span class='map-point'>"+start_address+"</span> \
                </h4> \
                <h4> \
                    <strong>End Point: </strong><span class='map-point'>"+end_address+"</span> \
                </h4> \
                <h4> \
                    <strong>Distance: </strong><span class='map-point'>"+distance+"</span> \
                </h4> \
                <h4> \
                    <strong>Duration: </strong><span class='map-point'>"+duration+"</span> \
                </h4> \
            </div> \
            <div class='clearfix'></div> \
        </div>"
$(".get_complete_tour").append(tour_result);}
function tour_total_distance(distance){tour_distance="<div class='questionsection tour-map'> \
            <div class='col-md-10 col-sm-10 col-xs-12'> \
                <h4> \
                    <strong>Total Tour Distance: </strong><span class='map-point'>"+distance+" KM</span> \
                </h4> \
            </div> <div class='clearfix'></div> </div>";$(".tour_distance").append(tour_distance);}
$("#source-contacts").select2({placeholder:'Select Source Contact',allowClear:true,language:{noResults:function(){return'<button type="button" class="btn add-contact-btn"> No Contact found </button>';}},escapeMarkup:function(markup){return markup;}});$("#destination-contacts").select2({placeholder:'Select Destination Contact',allowClear:true,language:{noResults:function(){return'<button type="button" class="btn add-contact-btn"> No Contact found </button>';}},escapeMarkup:function(markup){return markup;}});