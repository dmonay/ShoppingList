/*jslint browser: true*/
/*global $, jQuery*/



$(document).ready(function () {
    
    
    
    var addItem = function () {
        var currentItem = $("#item").val();
        if (!currentItem || !currentItem.trim()) {alert("Enter something!");}
        else {
        $("#the_list").append("<li class='new_item'> <input type='checkbox' class='box'/>" + currentItem + "</li>");
        }
    };
    

    
    
    var clickity = function () {
        if (this.checked) {
            $(this).parent().addClass("checked"); 
        }
        else {$(this).parent().removeClass("checked");
             }
    };
    
    var clear = function() {
        $("#the_list").empty();
    };
    
    var editThis = function() {       
        $(this).attr('contentEditable',true);
        $(this).addClass('editable');        
    };
    
    // add the input to the list:
    $('#add').click(addItem);
    
    // cross out the item when checkbox is checked:
    $(document).on("click", ":checkbox", clickity);
    
    // allow the enter key to act as a button click:
    $("#item").keyup(function(event){
        if (event.which === 13) {
            $("#add").trigger("click");
        }  
    });
    
    // clear existing shopping list without reloding page:    
    $("#new").click(clear);
    
    // make the item editable on click
    $(document).on("click", "li", editThis);
});


