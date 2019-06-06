import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import PrimaryTitle from '../src/components/PrimaryTitle';

jest.mock('../src/utils/zappConfig');

it('PrimaryTitle renders correctly', () => {
  const tree = renderer
    .create(<PrimaryTitle>Test Title</PrimaryTitle>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
