"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompressionDecorator = void 0;
var DataSourceDecorator_1 = require("./DataSourceDecorator");
// You can wrap objects in several layers of decorators.
var CompressionDecorator = /** @class */ (function (_super) {
    __extends(CompressionDecorator, _super);
    function CompressionDecorator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = '';
        return _this;
    }
    CompressionDecorator.prototype.writeData = function (_data) {
        // 1. Compress passed data.
        // 2. Pass compressed data to the wrappee's writeData
        // method.
        console.log('data compressed');
    };
    CompressionDecorator.prototype.readData = function () {
        // 1. Get data from the wrappee's readData method.
        // 2. Try to decompress it if it's compressed.
        // 3. Return the result.
        console.log('Decrypted data');
        return this.data;
    };
    return CompressionDecorator;
}(DataSourceDecorator_1.DataSourceDecorator));
exports.CompressionDecorator = CompressionDecorator;
//# sourceMappingURL=CompressionDecorator.js.map