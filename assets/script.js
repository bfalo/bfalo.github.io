$(document).ready(function() {
    $('#compile').on('click', function(e) {
        $('#code').buffalo({
            debug: false,
            maxRecursion: 5000
        });
    });
});