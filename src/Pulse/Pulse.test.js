import React from 'react'
import renderer from 'react-test-renderer'
import { Pulse } from '..'

it('renders correctly', () => {
  const tree = renderer.create(<Pulse />).toJSON()
  expect(tree).toMatchSnapshot()
})
