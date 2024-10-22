//Here we are running all the tests from the assignment sheet as well as a few edge cases
import { modThree } from '../src/modThree';

describe('modThree FSM', () => {
    test('should return 1 for binary 1101 (13)', () => {
        expect(modThree('1101')).toBe(1);
    });

    test('should return 2 for binary 1110 (14)', () => {
        expect(modThree('1110')).toBe(2);
    });

    test('should return 0 for binary 1111 (15)', () => {
        expect(modThree('1111')).toBe(0);
    });

    test('should return 0 for binary 0 (0)', () => {
        expect(modThree('0')).toBe(0);
    });

    test('should return 1 for binary 1 (1)', () => {
        expect(modThree('1')).toBe(1);
    });

    test('should throw error for invalid input', () => {
        expect(() => modThree('102')).toThrow(Error);
    });
});
