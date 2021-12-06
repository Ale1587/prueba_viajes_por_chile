$(document).ready(function () {

    $("a").click(function () {

        var gato = this.hash

        $ ("html, body").animate({
            scrollTo: $(gato).offset().top
        },
        800
        )
    })


})


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })