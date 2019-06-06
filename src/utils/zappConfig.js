import { path, test } from 'ramda';
import { Dimensions, NativeModules } from 'react-native';
import { DEFAULT_PARAMS } from '../config';
import getConnectionInfo from './getConnectionInfo';

const { ZappPlugin } = NativeModules;

export const styles = {};

export const localization = {};

export const parameters = {};

export const layout = {};

export const labels = {};

export const initZappConfig = async props => {
  Object.assign(styles, props.styles || {});

  layout.isTablet = props.is_tablet;
  layout.isPhone = !props.is_tablet;
  layout.deviceWidth = Dimensions.get('window').width;

  const currentLocale = path(['settings', 'APCurrentLanguage'], props);
  Object.assign(localization, path(['localization', currentLocale], props));

  const {
    presentation,
    theme,
    playInline,
    autoPlay,
    hideLiveBar,
    compactDescription,
    locale
  } = DEFAULT_PARAMS;

  parameters.presentation = props.extra_props.presentation || presentation;
  parameters.theme = theme;
  parameters.playInline = playInline;
  parameters.autoPlay = autoPlay;
  parameters.hideLiveBar = hideLiveBar;
  parameters.compactDescription = compactDescription;
  parameters.locale = locale;

  if (!ZappPlugin) return true;
  const pluginConfig = await ZappPlugin.getConfiguration('VideoDetailScreen');

  if (pluginConfig.presentation)
    parameters.presentation = pluginConfig.presentation;
  layout.isFullScreen = test(/NoNavigation/, parameters.presentation);
  if (pluginConfig.theme) parameters.theme = pluginConfig.theme;
  if (pluginConfig.play_inline)
    parameters.playInline = pluginConfig.play_inline;
  if (pluginConfig.auto_play)
    parameters.autoPlay = pluginConfig.auto_play === '1';
  if (pluginConfig.hide_live_bar)
    parameters.hideLiveBar = pluginConfig.hide_live_bar === '1';
  if (pluginConfig.compact_description)
    parameters.compactDescription = pluginConfig.compact_description === '1';
  if (pluginConfig.locale) parameters.locale = pluginConfig.locale;
  parameters.relatedUrlScheme = pluginConfig.related_url_scheme;
  parameters.videoUrlScheme = pluginConfig.video_url_scheme;

  let type = '';
  switch (parameters.playInline) {
    case 'always':
      parameters.inlinePlayer = true;
      break;
    case 'wifi':
      ({ type } = await getConnectionInfo());
      parameters.inlinePlayer = type === 'wifi';
      break;
    default:
      parameters.inlinePlayer = false;
  }

  labels.more = pluginConfig.lbl_more;
  labels.fewer = pluginConfig.lbl_fewer;
  labels.days = pluginConfig.lbl_days;
  labels.hours = pluginConfig.lbl_hours;
  labels.minutes = pluginConfig.lbl_minutes;
  labels.seconds = pluginConfig.lbl_seconds;
  labels.relatedVideos = pluginConfig.lbl_related_videos;
  labels.liveNow = pluginConfig.lbl_live_now;
  labels.eventStartsIn = pluginConfig.lbl_event_starts_in;

  return true;
};
