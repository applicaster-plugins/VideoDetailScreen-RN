import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import moment from 'moment';

import VideoDetail from '../src/components/VideoDetail';

jest.mock('../src/utils/zappConfig');

const handleVideoChange = jest.fn();
const toggleCollapseText = jest.fn();

const entry = {
  type: {
    value: 'channel'
  },
  title: 'German Masters Series – TVM Open 2019 - Tag 3',
  id: 'a4d12b904e3a013739347054d2ab776f',
  summary: 'HEUTE / 09:00 Uhr',
  published: '',
  updated: '',
  author: {
    name: ''
  },
  media_group: [
    {
      type: 'image',
      media_item: [
        {
          src:
            'http://manager.vidibuscloud.net/mediafiles/8893/6575/6215/8eb65e3055be0136b7f5543d7edaf0a0/opener-tennis-allgemein_1024x576.jpg',
          key: 'image_base',
          type: 'image'
        }
      ]
    }
  ],
  link: {},
  extensions: {
    section: 'Tennis',
    start_time: '2019-05-09T09:00:00+00:00',
    end_time: '2019-05-09T11:00:00+00:00',
    open_with_plugin_id: 'SDVideoPage',
    is_live: true,
    body_text:
      '*Sportdeutschland.TV* zeigt die German Masters Series - TVM Open 2019 vom 07. bis zum 11.05. aus Troisdorf live und on demand.\n\nHol Dir SPORTDEUTSCHLAND.TV PLUS und genieße unser Angebot komplett werbefrei.'
  },
  content: {
    type: 'video/hls',
    src:
      'http://origin.vidibus.net/live/stream/itf-court-1.m3u8?realm=6e8cba30a0da0130491a6c626d58b44c&asset=966ef6104e3a01372994543d7edaf0a0_2&realm=6e8cba30a0da0130491a6c626d58b44c&asset=966ef6104e3a01372994543d7edaf0a0_2'
  }
};

const related = [
  {
    type: {
      value: 'channel'
    },
    title: 'German Masters Series – TVM Open 2019 - Tag 3',
    id: 'a4d12b904e3a013739347054d2ab776f',
    summary: 'HEUTE / 09:00 Uhr',
    published: '',
    updated: '',
    author: {
      name: ''
    },
    media_group: [
      {
        type: 'image',
        media_item: [
          {
            src:
              'http://manager.vidibuscloud.net/mediafiles/8893/6575/6215/8eb65e3055be0136b7f5543d7edaf0a0/opener-tennis-allgemein_1024x576.jpg',
            key: 'image_base',
            type: 'image'
          }
        ]
      }
    ],
    link: {},
    extensions: {
      section: 'Tennis',
      start_time: '2019-05-09T09:00:00+00:00',
      end_time: '2019-05-09T11:00:00+00:00',
      open_with_plugin_id: 'SDVideoPage',
      is_live: true,
      body_text:
        '*Sportdeutschland.TV* zeigt die German Masters Series - TVM Open 2019 vom 07. bis zum 11.05. aus Troisdorf live und on demand.\n\nHol Dir SPORTDEUTSCHLAND.TV PLUS und genieße unser Angebot komplett werbefrei.'
    },
    content: {
      type: 'video/hls',
      src:
        'http://origin.vidibus.net/live/stream/itf-court-1.m3u8?realm=6e8cba30a0da0130491a6c626d58b44c&asset=966ef6104e3a01372994543d7edaf0a0_2&realm=6e8cba30a0da0130491a6c626d58b44c&asset=966ef6104e3a01372994543d7edaf0a0_2'
    }
  }
];

it('VideoDetail renders correctly', () => {
  jest.spyOn(moment.tz, 'guess').mockImplementation(() => 'Europe/London');
  const tree = renderer
    .create(
      <VideoDetail
        entry={entry}
        related={related}
        relatedLoading={false}
        collapseText={true}
        handleVideoChange={handleVideoChange}
        toggleCollapseText={toggleCollapseText}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
  moment.tz.guess.mockRestore();
});
