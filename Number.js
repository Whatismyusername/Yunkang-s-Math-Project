$("document").ready(function(){
    $("button").click(function(){
        var Number = Math.floor(Math.random() * 45) + 57;
        $("#Main").text(Number);
        if( Number > 84){
            $("#Main").text("Free");
            if( Number > 99){
                $("#Main").text("Revive");
            }
        };
    });
});