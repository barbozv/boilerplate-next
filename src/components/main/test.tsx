import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main/>',() => {
  it('should render the heading',() => {
    const {container} = render (<Main />)
    screen.logTestingPlaygroundURL()

    expect(screen.getByRole('heading', { name: /react avancado/i})
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  });
});
