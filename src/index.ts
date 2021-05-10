import { FileDataSource } from './B.concrete-components/FileDataSource'
import { CompressionDecorator, EncryptionDecorator } from './C.decorators'

console.log('Decorator pattern')

const source = new FileDataSource('somefile.dat')
source.writeData('some plain data')

const compressedSource = new CompressionDecorator(source)
compressedSource.writeData(
	'some plain data that will be written with compression'
)

const encyptedSource = new EncryptionDecorator(source)
encyptedSource.writeData('Add another layer with some encryption')
