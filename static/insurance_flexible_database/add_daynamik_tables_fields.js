var lang = window.location.pathname.split('/')[1];
$(document).ready(function () {
 
    function updateElementIndex(el, prefix, ndx, action) {
        var id_regex, replacement;
        if (action == 'add') {
            id_regex = new RegExp('-__prefix__-');
            replacement =  '-' + ndx + '-';
        }else{
            id_regex = new RegExp('(' + prefix + '-\\d+-)');
            replacement = prefix + '-' + ndx + '-';
        }
        if ($(el).attr("for")) $(el).attr("for", $(el).attr("for").replace(id_regex,
        replacement));
        if (el.id) el.id = el.id.replace(id_regex, replacement);
        if (el.name) el.name = el.name.replace(id_regex, replacement);
    }

    function deleteForm(btn, prefix) {

        var formCount = parseInt($('#id_' + prefix + '-TOTAL_FORMS').val());
        // Delete the item/form
        $(btn).parents('.item').remove();
        var forms = $('.item').not(':first'); // Get all the forms  
        // Update the total number of forms (1 less than before)
        $('#id_' + prefix + '-TOTAL_FORMS').val(forms.length);
        var i = 0;
        // Go through the forms and set their indices, names and IDs
        for (formCount = forms.length; i < formCount; i++) {
            // $(forms.get(i)).children().children().children().children().children().each(function () {
            //     if ($(this).attr('type') == 'text') updateElementIndex(this, prefix, i, 'del');
            // });
            $(forms.get(i)).children().find('.post-sub-categry').children().children().children().children().children().each(function () {
                if ($(this).attr('type') == 'text') updateElementIndex(this, prefix, i, 'del');
            });

            $(forms.get(i)).children().children().first().children().children().children().each(function () {
                if ($(this).attr('type') == 'text') updateElementIndex(this, prefix, i, 'del');
            });

            $(forms.get(i)).find('input[type=hidden]').each(function(){
              if ($(this).attr('type') == 'hidden') updateElementIndex(this, prefix, i, 'del');  
            })
        }
        return false;
    }

    function addForm(btn, prefix) {
        var formCount = parseInt($("#fiels-form-count").val())
        // var formCount = parseInt($('#id_' + prefix + '-TOTAL_FORMS').val());
        // You can only submit a maximum of 10 todo items 
        if (formCount < 10) {
            // Clone a form (without event handlers) from the first form
            var row = $(".item:first").clone(false).get(0);
            $(row).removeClass('hide');
            // Insert it after the last form
            $(row).removeAttr('id').hide().insertAfter(".item:last").slideDown(300);

            // Remove the bits we don't want in the new row/form
            // e.g. error messages
            $(".errorlist", row).remove();
            $(row).children().children().children().removeClass("has-error");

            // Relabel or rename all the relevant bits
            // $(row).children().children().children().children().children().each(function () {
            // $(row).find('.post-sub-categry').children().children().updateElementIndex(this, prefix, formCount, 'add')
            $(row).find('.post-sub-categry').children().children().each(function () {
                updateElementIndex(this, prefix, formCount, 'add');
                $(this).val("");
            });

            $(row).children().children().first().children().children().children().each(function () {
                updateElementIndex(this, prefix, formCount, 'add');
                $(this).val("");
            });


            // Add an event handler for the delete item/form link 
            $(row).find(".delete").click(function () {
                return deleteForm(this, prefix);
            });
            // Update the total form count
            $("#fiels-form-count").val(formCount + 1);
        } // End if
        else {
            alert("Sorry, you can only enter a maximum of ten items.");
        }
        return false;
    }
    // Register the click event handlers
    $("#add-subcategory").click(function () {
        return addForm(this, "table_fields");
    });

    $(".delete").click(function () {
        var add_id = $($(this).data('addid')).val();
        if (add_id === undefined) {
            return deleteForm(this, "sub_category");
        }else{
            return deleteCategory(add_id, deleteForm(this, "sub_category"));
        }
    });

    function deleteCategory(add_id, callback){
        csrfmiddlewaretoken = $("input[name]").val();
        $.ajax({
            type: 'POST',
            url: '/' + lang +'/client/delete-post-subcategory/' + add_id +'/',
            data: {'csrfmiddlewaretoken': csrfmiddlewaretoken },
            dataType: 'json',
            success: function(res) {
                        if (res.success == "success"){
                            alert("Sub category deleted successfully");
                        }
                        else{
                            alert(res.error);
                        }
                    },
            error:  function(xhr, status, error) {
                       console.log(error);
                    },
        });
    }
});

$(document).on("submit", "#client-requirment", function(event){

    if ($('#id_name_en').val()==""){
        $("#id_name_en").addClass("custom-has-error")
        return false
    }

    for(i=0; i<10;i++){
        if ($('#id_sub_category-'+i+'-name_en').val() == ''){
            $('#id_sub_category-'+i+'-name_en').addClass("custom-has-error")
            return false
        }
    }
    
})



// $(document).on("click", ".categry_link", function(event){
//     $(this).closest(".row").next(".sub_categry").toggle();
    
// })
