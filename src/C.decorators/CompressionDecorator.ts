import { DataSourceDecorator } from './DataSourceDecorator'

// You can wrap objects in several layers of decorators.
export class CompressionDecorator extends DataSourceDecorator {
	data = ''
	writeData(_data: string) {
		// 1. Compress passed data.
		// 2. Pass compressed data to the wrappee's writeData
		// method.
		console.log('data compressed')
	}

	readData() {
		// 1. Get data from the wrappee's readData method.
		// 2. Try to decompress it if it's compressed.
		// 3. Return the result.
		console.log('Decrypted data')

		return this.data
	}
}
