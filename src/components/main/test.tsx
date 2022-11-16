import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main/>',() => {
  it('should render the heading',() => {
    render (<main />)

    expect(screen.getByRole('heading', { name: /react avancado/i})
    ).toBeInTheDocument()
  });
});
