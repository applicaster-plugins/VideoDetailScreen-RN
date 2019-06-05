/* eslint import/prefer-default-export: 0 */
import { pipe, prop, head, unless, isNil, trim } from 'ramda';
import { ZappPipesService } from 'react-native-zapp-bridge';
import { parameters } from './zappConfig';

export const getVideoEntry = async ({
  extra_props: { data_source_model, assetId } = {}
}) => {
  if (data_source_model) {
    const { type, src } = data_source_model;
    if (type !== 'feed') return data_source_model;
    const feedResponse = await ZappPipesService.getDataSourceData(src);
    return pipe(
      JSON.parse,
      prop('entry'),
      head
    )(feedResponse);
  }
  if (!assetId) throw new Error('No Video Entry provided');
  const { videoUrlScheme } = parameters;
  const videoEntryUrl = unless(isNil, trim)(videoUrlScheme);
  if (!videoEntryUrl) throw new Error('Video url scheme parameter is required');
  const feedResponse = await ZappPipesService.getDataSourceData(
    `${videoEntryUrl}${assetId}`
  );
  return pipe(
    JSON.parse,
    prop('entry'),
    head
  )(feedResponse);
};

export const getRelatedFeed = async ({ id }) => {
  const { relatedUrlScheme } = parameters;
  const relatedFeedUrl = unless(isNil, trim)(relatedUrlScheme);
  if (!relatedFeedUrl)
    throw new Error('Related videos url scheme parameter is required');
  const feedResponse = await ZappPipesService.getDataSourceData(
    `${relatedFeedUrl}${id}`
  );
  return pipe(
    JSON.parse,
    prop('entry')
  )(feedResponse);
};
