'use strict';

function test_shorthand_value(property, value, longhands) {
    const stringifiedValue = JSON.stringify(value);

    test(function(){
        var div = document.getElementById('target') || document.createElement('div');
        div.style[property] = "";
        div.style[property] = value;

        for (let longhand of Object.keys(longhands).sort()) {
            const readValue = div.style[longhand];
            assert_equals(readValue, longhands[longhand], longhand + " should be canonical");

            div.style[longhand] = "";
            div.style[longhand] = readValue;
            assert_equals(div.style[longhand], readValue, "serialization should round-trip");
        }
    }, "e.style['" + property + "'] = " + stringifiedValue + " should set the longhand values");
}
