import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
	let pipe: SearchPipe;

	beforeEach(() => {
		pipe = new SearchPipe();
	});

	it('create an instance', () => {
		const pipe = new SearchPipe();
		expect(pipe).toBeTruthy();
	});

	it('Return the same list if the "list" is invalid', () => {
		expect(pipe.transform(null, 'hello')).toBe(null);
		expect(pipe.transform(undefined, 'hello')).toBe(undefined);
	});

	it('Filter the elements', () => {
		const list = [ { a: 'b' }, { a: 'c' } ];
		expect(pipe.transform(list, 'b')).toEqual([ { a: 'b' } ]);
	});

	it('Filter the nested object', () => {
		const list = [ { a: 'e' }, { a: { b: 'e', c: { b: 'd' } } } ];
		expect(pipe.transform(list, 'd')).toEqual([ { a: { b: 'e', c: { b: 'd' } } } ]);
	});

	it('Ignore the property in the search', () => {
		const list = [ { a: 'e' }, { a: { b: 'e', c: { b: 'd' } } } ];
		expect(pipe.transform(list, 'e', [ 'b' ])).toEqual([ { a: 'e' } ]);
	});
});
