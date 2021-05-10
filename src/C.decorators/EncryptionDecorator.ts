import { DataSourceDecorator } from './DataSourceDecorator'

// Concrete decorators must call methods on the wrapped object,
// but may add something of their own to the result. Decorators
// can execute the added behavior either before or after the
// call to a wrapped object.
export class EncryptionDecorator extends DataSourceDecorator {
	data = ''
	writeData(_data: string) {
		// 1. Encrypt passed data.
		// 2. Pass encrypted data to the wrappee's writeData
		// method.
		console.log('data encrypted')
	}

	readData() {
		// 1. Get data from the wrappee's readData method.
		// 2. Try to decrypt it if it's encrypted.
		// 3. Return the result.
		console.log('Decrypted data')

		return this.data
	}
}
