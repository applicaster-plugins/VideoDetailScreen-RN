import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Countdown from '../src/components/Countdown';

jest.mock('../src/utils/zappConfig');

it('Countdown renders correctly', () => {
  const startTS = new Date('2019-05-01T00:00:00Z').getTime();
  const tree = renderer.create(<Countdown startTS={startTS} />).toJSON();

  expect(tree).toMatchSnapshot();
});
