$(document).ready(function() {
  console.log("Script included!");
});

// This makes the button hide the images
$(function() {
    $('#button').click(function() {
        if ($('img').hasClass('hidden')) {
            $('img').removeClass('hidden').fadeIn(500);
            $('#button').css('background-color', '#0CF5A7');
        }
        else {
            $('img').addClass('hidden').fadeOut(500);
            $('#button').css('background-color', '#D5F505');
        }
    });
});

// Adds strikethough on checkbox click
$(function () {
    $('input:checkbox').on('change', function () {
        var input = $(this).next('span');
        if (this.checked) {
            $(input).css('textDecoration', 'line-through');
        } else {
            $(input).css('textDecoration', 'none');
        }
    })
})