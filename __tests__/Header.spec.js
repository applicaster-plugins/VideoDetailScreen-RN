import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../src/components/Header';

jest.mock('../src/utils/zappConfig');

it('Header renders correctly', () => {
  const tree = renderer.create(<Header />).toJSON();

  expect(tree).toMatchSnapshot();
});
