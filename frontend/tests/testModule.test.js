// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import HomeScreen from '../src/screens/HomeScreen';

const dummyTestSum = require('./testModule');
// import dummyTestSum from './testModule';

test("adds 2 + 2 and equals 4", () => {
    expect(dummyTestSum(2, 2)).toBe(4);
});

// test("renders the main screen when visiting the application", () => {
//     render(<HomeScreen />);

//     // search for text that appears on the homescreen
//     const word = screen.getByText(/Founder/i);

//     expect(word).toBeInTheDocument();
// });