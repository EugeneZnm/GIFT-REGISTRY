$(document).ready(function() {
    $("p").hide();
    $("#btn").click(function(event) {
        event.preventDefault();
        if ($("p").is(":hidden") == true) {
            $("p").show();
            $("#btn").val("Purchase");
        } else {
            $("p").hide();
            $("#btn").val("Purchase");
        };
        if ($("container-2").is(show()) == true) {
            $("container-2").hide();
            $("#btn").val("Purchase");

        } else {
            $("container-2").show();
            $("#btn").val("Purchase");
        }
    });
});