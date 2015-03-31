$(function () {

	'use strict';

    var values = [0, 19.1, 48, 98],
        slider = $('#slider').slider ({
        value: 48,
        slide: function (event, ui) {
            var includeLeft = event.keyCode !== $.ui.keyCode.RIGHT,
                includeRight = event.keyCode !== $.ui.keyCode.LEFT;
            slider.slider('option', 'value', findNearest(includeLeft, includeRight, ui.value));
            return false;
        }
    });
    function findNearest(includeLeft, includeRight, value) {
        var nearest = null,
            diff = null;
        for (var i = 0; i < values.length; i++) {
            if ((includeLeft && values[i] <= value) || (includeRight && values[i] >= value)) {
                var newDiff = Math.abs(value - values[i]);
                if (diff == null || newDiff < diff) {
                    nearest = values[i];
                    diff = newDiff;
                }
            }
        }
        return nearest;
    }


    $('.bl-chk__column-item').click(function () {
        $(this).toggleClass('checked');
    });

    $('#date').inputmask('d.m.y');
});

