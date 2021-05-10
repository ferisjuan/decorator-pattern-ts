import { DataSource } from '../A.interfaces/DataSource'

// Concrete components provide default implementations for the
// operations. There might be several variations of these
// classes in a program.
export class FileDataSource implements DataSource {
	constructor(private filename: string) {}

	writeData(data: string): void {
		console.log(data)
	}
	readData(): string {
		return ''
	}
}
