"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileDataSource = void 0;
// Concrete components provide default implementations for the
// operations. There might be several variations of these
// classes in a program.
var FileDataSource = /** @class */ (function () {
    function FileDataSource(filename) {
        this.filename = filename;
    }
    FileDataSource.prototype.writeData = function (data) {
        console.log(data);
    };
    FileDataSource.prototype.readData = function () {
        return '';
    };
    return FileDataSource;
}());
exports.FileDataSource = FileDataSource;
//# sourceMappingURL=FileDataSource.js.map