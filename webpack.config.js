"use strict";

const path = require('path');

const devModel = false;

module.exports = {
    mode: devModel ? 'development' : 'production',
    entry: './js/image-preview.js',
    output: {
        filename: "image-preview.js"
    }
}
