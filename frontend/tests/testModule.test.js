import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import dummyTestSum from '../tests/testModule';
import Intro from '../src/components/Intro';
import Checkout from '../src/components/Checkout';

// initial dummy test
test("adds 2 + 2 and equals 4", () => {
    expect(dummyTestSum(2, 2)).toBe(4);
});

// render test, to see if a component loads when the app starts
test("renders the Intro component on the main screen", () => {
    render(<Intro />);

    // search for text that appears on the homescreen
    const word = screen.getByText(/Trailblazing/i);

    expect(word).toBeInTheDocument();
});

// test to see if the button has its intended functionality
test("simulates a click of a button", () => {
    render(<Checkout amount={499} />);

    const button = screen.getByRole('link'); // the role of the button is 'link'
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
});