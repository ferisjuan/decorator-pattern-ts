"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileDataSource_1 = require("./B.concrete-components/FileDataSource");
var C_decorators_1 = require("./C.decorators");
console.log('Decorator pattern');
var source = new FileDataSource_1.FileDataSource('somefile.dat');
source.writeData('some plain data');
var compressedSource = new C_decorators_1.CompressionDecorator(source);
compressedSource.writeData('some plain data that will be written with compression');
var encyptedSource = new C_decorators_1.EncryptionDecorator(source);
encyptedSource.writeData('Add another layer with some encryption');
//# sourceMappingURL=index.js.map