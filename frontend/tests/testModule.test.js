import React from 'react';
import { render, screen } from '@testing-library/react';
import Intro from '../src/components/Intro';
import dummyTestSum from '../tests/testModule';

test("adds 2 + 2 and equals 4", () => {
    expect(dummyTestSum(2, 2)).toBe(4);
});

test("renders the Intro component on the main screen", () => {
    render(<Intro />);

    // search for text that appears on the homescreen
    const word = screen.getByText(/Trailblazing/i);

    expect(word).toBeInTheDocument();
});