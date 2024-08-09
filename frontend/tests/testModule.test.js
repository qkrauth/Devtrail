const dummyTestSum = require('./testModule');

import { render, screen, } from '@testing-library/react';
import HomeScreen from '../src/screens/HomeScreen';

test("adds 2 + 2 and equals 4", () => {
    expect(dummyTestSum(2, 2)).toBe(4)
});
