$(document).ready(function(){

    $("#theButton").click(function(){
        msg = $("#msg").val();
        $("#blah").append("<li class='list-group-item'>"+msg+"</li>");
    });
});