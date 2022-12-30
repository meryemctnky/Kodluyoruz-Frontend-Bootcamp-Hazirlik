import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import App from './App'

describe("App Tests", () => {
  let header, testImage, items, searchInput, button;

  beforeEach(() => {
    render(<App />)
    searchInput = screen.getByLabelText("search-input")
    header = screen.getByText(/emoji search/i)
    testImage = screen.getAllByRole("img");
    items = screen.getAllByText('Click to copy emoji');
  })

test('Header component should be render', () => {
  expect(header).toBeInTheDocument();
  expect(header).toHaveTextContent('Emoji Search')
})

test('The header should have images on the right and left.', () => {
  expect(testImage[0]).toHaveAccessibleName("smile-cat");
  expect(testImage[1]).toHaveAccessibleName("cat-smiley");
})

test('Emoji List should be rendered successfully', () => {
  expect(items.length).toEqual(20);
})

test('The emoji list should be rerendered according to the filter', () => {
  fireEvent.change(searchInput, {
     target: { value: 'cat' },
 });
  expect(searchInput.value).toBe('cat')
})

test('Copying emoji should work successfully ', () => {
  userEvent.click(items);
  userEvent.paste(searchInput, items)
  expect(searchInput === 1)
})

})


