import { curry, pipe, unless, isNil, trim } from 'ramda';
import { layout, parameters } from './zappConfig';

export const percent = curry(
  (target, percentage) => (target * percentage) / 100
);

export const wPerc = percent(layout.deviceWidth);

export const hasRelatedContent = () =>
  pipe(
    unless(isNil, trim),
    Boolean
  )(parameters.relatedUrlScheme);

export const getVideoWidth = () => {
  if (layout.isPhone) return layout.deviceWidth;
  if (hasRelatedContent()) return 494;
  return 640;
};

export const getVideoDimensions = () => {
  const width = getVideoWidth();
  return {
    height: (width / 16) * 9,
    width
  };
};

export const getCenterPosition = (containerSize, targetSize) => {
  const left = (containerSize.width - targetSize.width) / 2;
  const top = (containerSize.height - targetSize.height) / 2;

  return {
    top,
    left
  };
};

export const stickyVideo = () =>
  layout.isPhone && Boolean(parameters.inlinePlayer);
