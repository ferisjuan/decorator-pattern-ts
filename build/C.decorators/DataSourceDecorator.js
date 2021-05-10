"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSourceDecorator = void 0;
// The base decorator class follows the same interface as the
// other components. The primary purpose of this class is to
// define the wrapping interface for all concrete decorators.
// The default implementation of the wrapping code might include
// a field for storing a wrapped component and the means to
// initialize it.
var DataSourceDecorator = /** @class */ (function () {
    function DataSourceDecorator(source) {
        this.source = source;
        this.wrappee = source;
    }
    // The base decorator simply delegates all work to the
    // wrapped component. Extra behaviors can be added in
    // concrete decorators.
    DataSourceDecorator.prototype.writeData = function (data) {
        this.wrappee.writeData(data);
    };
    // Concrete decorators may call the parent implementation of
    // the operation instead of calling the wrapped object
    // directly. This approach simplifies extension of decorator
    // classes.
    DataSourceDecorator.prototype.readData = function () {
        return this.wrappee.readData();
    };
    return DataSourceDecorator;
}());
exports.DataSourceDecorator = DataSourceDecorator;
//# sourceMappingURL=DataSourceDecorator.js.map