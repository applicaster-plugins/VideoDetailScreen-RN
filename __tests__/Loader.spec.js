import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Loader from '../src/components/Loader';

jest.mock('../src/utils/zappConfig');

it('Loader renders correctly', () => {
  const tree = renderer.create(<Loader color="red" />).toJSON();

  expect(tree).toMatchSnapshot();
});
