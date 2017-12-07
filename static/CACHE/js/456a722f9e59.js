function checkfile(sender){var validExts=new Array(".xlsx");var fileExt=sender.value;fileExt=fileExt.substring(fileExt.lastIndexOf('.'));if(validExts.indexOf(fileExt)<0){alert("Invalid file selected, valid files are of "+
validExts.toString()+" types.");return false;}
else return true;}
$(document).ready(function(){$('#button').click(function(){$("input[type='file']").trigger('click');})
$("input[type='file']").change(function(){$('#val').text(this.value.replace(/C:\\fakepath\\/i,''))})});$(document).on('submit','#upload_excel',function(){if($("input[type='file']").val()==''){alert('Please upload excel file')
return false}else{var filefrmt=$("input[type='file']").val().substring($("input[type='file']").val().lastIndexOf('.'));if(filefrmt!='.xlsx'){alert("Invalid file selected, valid files are of .xlsx types.");return false}else{return true}}})