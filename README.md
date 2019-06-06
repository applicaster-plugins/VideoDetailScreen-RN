# React Native Video Detail Screen

Fully configurable reusable react native video detail screen. Configurable through the plugin configuration.

## Features

- Multiple styling themes support
- Optionally show related videos
- Optionally show live status bar (countdown to live, `live now` status)
- Optionally embed player, with or without wifi connection constraint
- Optional toggle to expand/compact video description text
- Provide labels translations through plugin configuration fields
- Load video data either from data_source_model prop or through a dsp url scheme (usefull for search)

## Installation

```
yarn
```

## Plugin configuration

| Parameter           | Type                                                                     | Expected behaviour                                                                                                                   | Example value                              |
| ------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| backgroundViewColor | Hexadecimal rgb color with no #                                          | Screen background color while loading the plugin                                                                                     | `101116`                                   |
| presentation        | `present`\|`push`\|`presentNoNavigation`\|`pushNoNavigation`\|`asAChild` | This must be consistent with the way the plugin is presented, because it will render different layout in presence/lack of navigation | `push`                                     |
| theme               | drop down of themes unique names                                         | The plugin styles will be consistent with the selected theme                                                                         | `black`                                    |
| play_inline         | `never` \| `always` \| `wifi`                                            | When to embed the player in the video detail screen. `wifi` will embed it only if wifi connection is active                          | `wifi`                                     |
| autoplay            | Boolean                                                                  | NOT IMPLEMENTED YET. Autoplay when player is embedded. (in most cases is the player default)                                         |                                            |
| related_url_scheme  | DSP url scheme                                                           | If not empty, it will show related videos. Related content will be fetched appending the video id to this url and invoking the dsp   | `ranfighting://fetchData?type=related&id=` |
| video_url_scheme    | DSP url scheme                                                           | The video data will be fetched through this url in case no data will come from the cell (required for search plugin to work)         | `ranfighting://fetchData?type=asset&id=`   |
| hide_live_bar       | Boolean                                                                  | If checked the live banner (band showing the countdown to live or live now status) will be hidden                                    |                                            |
| compact_description | Boolean                                                                  | If checked the video description text will be compacted and there will be a toggle to expand it                                      |                                            |
| locale              | ISO country code                                                         | NOT IMPLEMENTED YET. Locale used to format all locale sensitive data (ie dates/times)                                                | `en`                                       |
| lbl\_\*             | String                                                                   | Translation to use for the \* label                                                                                                  | `Related Videos`                           |
