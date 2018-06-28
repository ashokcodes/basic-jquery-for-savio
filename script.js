$(document).ready(function(){

    $("#theButton").click(function(){
        items = ["Apple","Mango","Pineapple"];
        dom = "";
        for(i=0;i < items.length; i++){
            dom+= "<li class='list-group-item'>"+ items[i] +"</li>";
        }
        $("#blah").append(dom);  
    });
});