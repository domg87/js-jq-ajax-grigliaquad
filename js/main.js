// Griglia 6x6, ad ogni click sul quadrato parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.


$(document).ready(function(){

    $(".quadrato").click(function() {
        var quadratoSelezionato = $(this);


        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/random/int",
            method: "GET",
            success: function(data, stato) {
                console.log(data);
                $(quadratoSelezionato).html(data.response);
                if (data.response <= 5) {
                    $(quadratoSelezionato).addClass("yellow");
                } else if (data.response > 5) {
                    $(quadratoSelezionato).addClass("green");
                }
            },
            error: function(richiesta, stato, errore) {
                alert("Attenzione" + errore);
            }
        });

    });

});