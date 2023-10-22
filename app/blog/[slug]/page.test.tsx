/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Page from './page'

it('Nguyễn Trung Kiên Và Mai Thị Thanh Thúy should be in the document', () => {
  render(<Page params={{ slug: 'Test' }} />)
  expect(screen.getByText("Nguyễn Trung Kiên Và Mai Thị Thanh Thúy")).toBeInTheDocument();
})