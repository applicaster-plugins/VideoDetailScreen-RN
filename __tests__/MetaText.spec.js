import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import MetaText from '../src/components/MetaText';

jest.mock('../src/utils/zappConfig');

it('MetaText renders correctly', () => {
  const tree = renderer.create(<MetaText>Test Meta Text</MetaText>).toJSON();

  expect(tree).toMatchSnapshot();
});
