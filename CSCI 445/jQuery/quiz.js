$(document).ready(function () {
    var fordButton = true;
    var ferrariButton = true;
    var swissButton = true;
    var nissanButton = true;
    $("button.ford").click(function () {
        if (fordButton && ferrariButton && swissButton && nissanButton) {
            fordButton = false;
            $(this).prop('disabled', true);
            $("#true").prop('checked', false);
            $("#false").prop('checked', false);
            $("p.questionDisplayed").text("Ford is a Canadian vehicle manufacturer.");
            $("p.subNotice").text("");
            $("button.checkResult").click(function () {
                var value = $("input[name=result]:checked").val();
                if (value == null) {
                    alert("Please Select True or False");
                }
                else if (value == 0) {
                    $("p.subNotice").text("That is Correct!!").css("color", "green");
                    fordButton = true;
                    if ($("button.ford").prop('disabled') == true && $("button.ferrari").prop('disabled') == true && $("button.koenigsegg").prop('disabled') == true && $("button.nissan").prop('disabled') == true) {
                        $("p.gameStatus").text("Game Over!!").css("color", "red").slideUp(3000);
                        $("p.gameStatus").hide("slow", function () {
                            alert("Game Over");
                        });
                    }
                }
                else if (value == 1) {
                    $("p.subNotice").text("That is not Correct!!").css("color", "red");
                    fordButton = true;
                    if ($("button.ford").prop('disabled') == true && $("button.ferrari").prop('disabled') == true && $("button.koenigsegg").prop('disabled') == true && $("button.nissan").prop('disabled') == true) {
                        $("p.gameStatus").text("Game Over!!").css("color", "red").slideUp(3000);
                        $("p.gameStatus").hide("slow", function () {
                            alert("Game Over");
                        });
                    }
                }
            });
            $("#attempted").append('<li>Ford</li>');
        } else {
            alert("Please Answer Question Before Moving On");
        }
    });
    $("button.ferrari").click(function () {
        if (fordButton && ferrariButton && swissButton && nissanButton) {
            ferrariButton = false;
            $(this).prop('disabled', true);
            $("#true").prop('checked', false);
            $("#false").prop('checked', false);
            $("p.questionDisplayed").text("Ferrari is a French vehicle manufacturer.");
            $("p.subNotice").text("");
            $("button.checkResult").click(function () {
                var value = $("input[name=result]:checked").val();
                if (value == null) {
                    alert("Please Select True or False");
                }
                else if (value == 0) {
                    $("p.subNotice").text("That is Correct!!").css("color", "green");
                    ferrariButton = true;
                    if ($("button.ford").prop('disabled') == true && $("button.ferrari").prop('disabled') == true && $("button.koenigsegg").prop('disabled') == true && $("button.nissan").prop('disabled') == true) {
                        $("p.gameStatus").text("Game Over!!").css("color", "red").slideUp(3000);
                        $("p.gameStatus").hide("slow", function () {
                            alert("Game Over");
                        });
                    }
                }
                else if (value == 1) {
                    $("p.subNotice").text("That is not Correct!!").css("color", "red");
                    ferrariButton = true;
                    if ($("button.ford").prop('disabled') == true && $("button.ferrari").prop('disabled') == true && $("button.koenigsegg").prop('disabled') == true && $("button.nissan").prop('disabled') == true) {
                        $("p.gameStatus").text("Game Over!!").css("color", "red").slideUp(3000);
                        $("p.gameStatus").hide("slow", function () {
                            alert("Game Over");
                        });
                    }
                }
            });
            $("#attempted").append('<li>Ferrari</li>');
        } else {
            alert("Please Answer Question Before Moving On");
        }
    });
    $("button.koenigsegg").click(function () {
        if (fordButton && ferrariButton && swissButton && nissanButton) {
            swissButton = false;
            $(this).prop('disabled', true);
            $("#true").prop('checked', false);
            $("#false").prop('checked', false);
            $("p.questionDisplayed").text("The Koenigsegg One:1 is named after it's power to weight ratio (horsepower to kg).");
            $("p.subNotice").text("");
            $("button.checkResult").click(function () {
                var value = $("input[name=result]:checked").val();
                if (value == null) {
                    alert("Please Select True or False");
                }
                else if (value == 0) {
                    $("p.subNotice").text("That is not Correct!!").css("color", "red");
                    swissButton = true;
                    if ($("button.ford").prop('disabled') == true && $("button.ferrari").prop('disabled') == true && $("button.koenigsegg").prop('disabled') == true && $("button.nissan").prop('disabled') == true) {
                        $("p.gameStatus").text("Game Over!!").css("color", "red").slideUp(3000);
                        $("p.gameStatus").hide("slow", function () {
                            alert("Game Over");
                        });
                    }
                }
                else if (value == 1) {
                    $("p.subNotice").text("That is Correct!!").css("color", "green");
                    swissButton = true;
                    if ($("button.ford").prop('disabled') == true && $("button.ferrari").prop('disabled') == true && $("button.koenigsegg").prop('disabled') == true && $("button.nissan").prop('disabled') == true) {
                        $("p.gameStatus").text("Game Over!!").css("color", "red").slideUp(3000);
                        $("p.gameStatus").hide("slow", function () {
                            alert("Game Over");
                        });
                    }
                }
            });
            $("#attempted").append('<li>Koenigsegg</li>');
        } else {
            alert("Please Answer Question Before Moving On");
        }
    });
    $("button.nissan").click(function () {
        if (fordButton && ferrariButton && swissButton && nissanButton) {
            nissanButton = false;
            $(this).prop('disabled', true);
            $("#true").prop('checked', false);
            $("#false").prop('checked', false);
            $("p.questionDisplayed").text("The Nissan R32 GTR is known as Godzilla.");
            $("p.subNotice").text("");
            $("button.checkResult").click(function () {
                var value = $("input[name=result]:checked").val();
                if (value == null) {
                    alert("Please Select True or False");
                }
                else if (value == 0) {
                    $("p.subNotice").text("That is not Correct!!").css("color", "red");
                    nissanButton = true;
                    if ($("button.ford").prop('disabled') == true && $("button.ferrari").prop('disabled') == true && $("button.koenigsegg").prop('disabled') == true && $("button.nissan").prop('disabled') == true) {
                        $("p.gameStatus").text("Game Over!!").css("color", "red").slideUp(3000);
                        $("p.gameStatus").hide("slow", function () {
                            alert("Game Over");
                        });
                    }
                }
                else if (value == 1) {
                    $("p.subNotice").text("That is Correct!!").css("color", "green");
                    nissanButton = true;
                    if ($("button.ford").prop('disabled') == true && $("button.ferrari").prop('disabled') == true && $("button.koenigsegg").prop('disabled') == true && $("button.nissan").prop('disabled') == true) {
                        $("p.gameStatus").text("Game Over!!").css("color", "red").slideUp(3000);
                        $("p.gameStatus").hide("slow", function () {
                            alert("Game Over");
                        });
                    }
                }
            });
            $("#attempted").append('<li>Nissan</li>');
        } else {
            alert("Please Answer Question Before Moving On")
        }
    });
});