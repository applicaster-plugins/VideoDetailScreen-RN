import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import BodyText from '../src/components/BodyText';

jest.mock('../src/utils/zappConfig');

const style = {
  borderBottomWidth: 1,
  borderBottomColor: 'rgb(224,224,224)',
  paddingBottom: 20
};

it('BodyText renders correctly', () => {
  const toggleCollapseText = jest.fn();
  const tree = renderer
    .create(
      <BodyText
        style={style}
        collapseText={true}
        toggleCollapseText={toggleCollapseText}
      >
        Test text
      </BodyText>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
