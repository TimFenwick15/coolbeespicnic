'use strict'

$("#megaEvolve").click(function() {
    $.get("/getFilm", function(data, status) {
        $('#pikachu').text(data)
    })
})

/*$('bulbasaur').on({
    mouseenter: function(){
        $('bulbasaur').hide()
    },
    mouseleave: function(){
        $(this).css("background-color", "lightblue")
    }
})*/

/*$(document).ready(function(){
    document.body.style.backgroundColor = 'red'
})*/
