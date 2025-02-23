import { expect } from 'chai';
import fs from 'fs/promises';
import path from 'path';
import { createTypeFromMetadata } from '../../lib/createTypeFromMetadata';

describe('Create type from metadata', () => {
	it('should create type for User metadata', async () => {
		// Arrange
		const userMetadata = await import('../fixtures/MetaObjects/User.json');
		const expectedTypeCode = await fs.readFile(path.join(__dirname, '../fixtures/types/User.ts'), 'utf8');

		// Act
		const type = createTypeFromMetadata(userMetadata);

		// Assert
		expect(type).to.equal(expectedTypeCode);
	});

	it('should create type for Group metadata', async () => {
		// Arrange
		const userMetadata = await import('../fixtures/MetaObjects/Group.json');
		const expectedTypeCode = await fs.readFile(path.join(__dirname, '../fixtures/types/Group.ts'), 'utf8');

		// Act
		const type = createTypeFromMetadata(userMetadata);

		// Assert
		expect(type).to.equal(expectedTypeCode);
	});

	it('should create type for Role metadata', async () => {
		// Arrange
		const userMetadata = await import('../fixtures/MetaObjects/Role.json');
		const expectedTypeCode = await fs.readFile(path.join(__dirname, '../fixtures/types/Role.ts'), 'utf8');

		// Act
		const type = createTypeFromMetadata(userMetadata);

		// Assert
		expect(type).to.equal(expectedTypeCode);
	});

	it('should create type for Queue metadata', async () => {
		// Arrange
		const userMetadata = await import('../fixtures/MetaObjects/Queue.json');
		const expectedTypeCode = await fs.readFile(path.join(__dirname, '../fixtures/types/Queue.ts'), 'utf8');

		// Act
		const type = createTypeFromMetadata(userMetadata);

		// Assert
		expect(type).to.equal(expectedTypeCode);
	});

	it('should create type for Campaign metadata', async () => {
		// Arrange
		const userMetadata = await import('../fixtures/MetaObjects/Campaign.json');
		const expectedTypeCode = await fs.readFile(path.join(__dirname, '../fixtures/types/Campaign.ts'), 'utf8');

		// Act
		const type = createTypeFromMetadata(userMetadata);

		// Assert
		expect(type).to.equal(expectedTypeCode);
	});
	it('should create type for Contact metadata', async () => {
		// Arrange
		const userMetadata = await import('../fixtures/MetaObjects/Contact.json');
		const expectedTypeCode = await fs.readFile(path.join(__dirname, '../fixtures/types/Contact.ts'), 'utf8');

		// Act
		const type = createTypeFromMetadata(userMetadata);

		// Assert
		expect(type).to.equal(expectedTypeCode);
	});
	it('should create type for Product metadata', async () => {
		// Arrange
		const userMetadata = await import('../fixtures/MetaObjects/Product.json');
		const expectedTypeCode = await fs.readFile(path.join(__dirname, '../fixtures/types/Product.ts'), 'utf8');

		// Act
		const type = createTypeFromMetadata(userMetadata);

		// Assert
		expect(type).to.equal(expectedTypeCode);
	});
	it('should create type for Template metadata', async () => {
		// Arrange
		const userMetadata = await import('../fixtures/MetaObjects/Template.json');
		const expectedTypeCode = await fs.readFile(path.join(__dirname, '../fixtures/types/Template.ts'), 'utf8');

		// Act
		const type = createTypeFromMetadata(userMetadata);

		// Assert
		expect(type).to.equal(expectedTypeCode);
	});
	it('should create type for WebElement metadata', async () => {
		// Arrange
		const userMetadata = await import('../fixtures/MetaObjects/WebElement.json');
		const expectedTypeCode = await fs.readFile(path.join(__dirname, '../fixtures/types/WebElement.ts'), 'utf8');

		// Act
		const type = createTypeFromMetadata(userMetadata);

		// Assert
		expect(type).to.equal(expectedTypeCode);
	});
	it('should create type for Channel metadata', async () => {
		// Arrange
		const userMetadata = await import('../fixtures/MetaObjects/Channel.json');
		const expectedTypeCode = await fs.readFile(path.join(__dirname, '../fixtures/types/Channel.ts'), 'utf8');

		// Act
		const type = createTypeFromMetadata(userMetadata);

		// Assert
		expect(type).to.equal(expectedTypeCode);
	});
});
