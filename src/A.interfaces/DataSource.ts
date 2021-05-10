// The component interface defines operations that can be
// altered by decorators.

export interface DataSource {
	writeData(data: string): void
	readData(): string
}
