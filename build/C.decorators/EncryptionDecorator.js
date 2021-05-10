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
exports.EncryptionDecorator = void 0;
var DataSourceDecorator_1 = require("./DataSourceDecorator");
// Concrete decorators must call methods on the wrapped object,
// but may add something of their own to the result. Decorators
// can execute the added behavior either before or after the
// call to a wrapped object.
var EncryptionDecorator = /** @class */ (function (_super) {
    __extends(EncryptionDecorator, _super);
    function EncryptionDecorator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = '';
        return _this;
    }
    EncryptionDecorator.prototype.writeData = function (_data) {
        // 1. Encrypt passed data.
        // 2. Pass encrypted data to the wrappee's writeData
        // method.
        console.log('data encrypted');
    };
    EncryptionDecorator.prototype.readData = function () {
        // 1. Get data from the wrappee's readData method.
        // 2. Try to decrypt it if it's encrypted.
        // 3. Return the result.
        console.log('Decrypted data');
        return this.data;
    };
    return EncryptionDecorator;
}(DataSourceDecorator_1.DataSourceDecorator));
exports.EncryptionDecorator = EncryptionDecorator;
//# sourceMappingURL=EncryptionDecorator.js.map