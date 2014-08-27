/*global requirejs */

// Ensure any request for this webjar brings in jQuery.
requirejs.config({
    shim: {
        "FlexSlider": ['webjars!jquery.js' ]
    }
});
