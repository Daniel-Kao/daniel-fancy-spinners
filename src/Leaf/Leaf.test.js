import React from 'react'
import renderer from 'react-test-renderer'
import { Leaf } from '..'

it('renders correctly', () => {
  const tree = renderer.create(<Leaf />).toJSON()
  expect(tree).toMatchSnapshot()
})
