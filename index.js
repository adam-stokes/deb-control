'use strict';

const fs = require('mz/fs');

class DebControl {
    constructor(controlPath) {
        this.controlPath = controlPath;
    }

    readFile() {
        return fs.readFile(this.controlPath)
            .then((data) => {
                return data.toString().split('\n');
            });
    }
}

module.exports = DebControl;
