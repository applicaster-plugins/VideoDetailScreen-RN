import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Badge from '../src/components/Badge';

jest.mock('../src/utils/zappConfig');

const style = {
  position: 'absolute',
  zIndex: 0,
  right: 0,
  bottom: 0,
  padding: 7,
  fontFamily: 'Apertura-Medium',
  color: '#FFFFFF',
  fontSize: 11,
  backgroundColor: 'rgba(231, 199, 108, .7)'
};

it('Badge renders correctly', () => {
  const tree = renderer
    .create(<Badge style={style} labelText="Badge Text" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
