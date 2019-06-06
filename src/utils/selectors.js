import {
  addIndex,
  reject,
  reduce,
  compose,
  equals,
  head,
  contains,
  __,
  when,
  gt,
  length,
  drop,
  over,
  lensIndex,
  concat,
  join,
  reverse,
  map,
  invoker,
  split,
  path,
  prop,
  unless,
  isNil,
  pipe,
  toString
} from 'ramda';
import { Platform } from 'react-native';

import moment from 'moment-timezone';

const getDate = dateStr => {
  const timezone = moment.tz.guess();
  return (
    dateStr &&
    moment(dateStr)
      .locale('de')
      .tz(timezone)
      .format('ddd D MMM YYYY • HH:mm zz')
  );
};

const formatTime = (duration = '') => {
  const names = ['s', 'min', 'h'];
  const reduceIndexed = addIndex(reduce);
  const removeIfValueIsZero = reject(
    compose(
      equals('0'),
      head
    )
  );
  const remomveEmptyFields = reject(contains(__, names));
  const removeSecondsIfHours = when(
    compose(
      gt(__, 2),
      length
    ),
    drop(1)
  );
  const zipWithText = textArr =>
    reduceIndexed(
      (acc, val, index) => over(lensIndex(index), concat(val))(acc),
      textArr
    );

  return compose(
    join(' '),
    reverse,
    removeIfValueIsZero,
    removeSecondsIfHours,
    remomveEmptyFields,
    zipWithText(names),
    reverse,
    map(invoker(0, 'toString')),
    map(parseInt),
    split(':')
  )(duration);
};

const convertMsToLabel = ms => {
  const duration = moment.duration(ms);
  const timeUnits = [duration.hours(), duration.minutes(), duration.seconds()];
  return pipe(
    map(
      pipe(
        toString,
        invoker(2, 'padStart')(2, '0')
      )
    ),
    join(':')
  )(timeUnits);
};

export const getVideoProps = ({
  media_group: [{ media_item: [{ src }] = [] } = {}] = [],
  extensions: { start_time, is_live, badge_text } = {}
}) => ({
  image: src,
  startTS: start_time && new Date(start_time).getTime(),
  isLive: is_live,
  showBanner: start_time && moment(start_time).isValid(),
  badgeText: badge_text,
  isPlayable: start_time ? moment().isAfter(start_time) : true
});

export const getDetailProps = ({
  title,
  summary,
  extensions: { start_time, duration_label, duration, body_text } = {}
}) => ({
  title,
  meta:
    (duration_label &&
      duration_label !== 'LIVE' &&
      formatTime(duration_label)) ||
    (duration && convertMsToLabel(duration)) ||
    getDate(start_time),
  body: body_text || summary
});

const getRelatedData = item => ({
  id: prop('id', item),
  imageUri: path(['media_group', 0, 'media_item', 0, 'src'], item),
  title: prop('title', item),
  dateTime: prop('summary', item),
  duration: false,
  label: path(['extensions', 'badge_text'], item),
  sportLabel: path(['extensions', 'section'], item),
  data: item
});

export const getRelatedList = unless(isNil, map(getRelatedData));

/* eslint no-confusing-arrow: 0 */
export const getPlayable = playable =>
  Platform.OS === 'ios' ? playable : JSON.stringify(playable);
