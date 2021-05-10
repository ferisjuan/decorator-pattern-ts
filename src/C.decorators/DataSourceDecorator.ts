import { DataSource } from '../A.interfaces/DataSource'

// The base decorator class follows the same interface as the
// other components. The primary purpose of this class is to
// define the wrapping interface for all concrete decorators.
// The default implementation of the wrapping code might include
// a field for storing a wrapped component and the means to
// initialize it.
export class DataSourceDecorator implements DataSource {
	protected wrappee: DataSource

	constructor(private source: DataSource) {
		this.wrappee = source
	}

	// The base decorator simply delegates all work to the
	// wrapped component. Extra behaviors can be added in
	// concrete decorators.
	writeData(data: string): void {
		this.wrappee.writeData(data)
	}

	// Concrete decorators may call the parent implementation of
	// the operation instead of calling the wrapped object
	// directly. This approach simplifies extension of decorator
	// classes.
	readData(): string {
		return this.wrappee.readData()
	}
}
