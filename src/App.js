/* eslint camelcase: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaViewBackwardCompatible } from '@applicaster/london-rn-components';
import VideoDetail from './components/VideoDetail';
import Loader from './components/Loader';
import Header from './components/Header';
import {
  initZappConfig,
  getVideoEntry,
  getRelatedFeed,
  layout,
  parameters
} from './utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseText: false,
      relatedLoading: false,
      loading: true
    };
    this.config = initZappConfig(props).catch(e => console.log(e));
    this.handleVideoChange = this.handleVideoChange.bind(this);
    this.toggleCollapseText = this.toggleCollapseText.bind(this);
  }

  componentDidMount() {
    this.config
      .then(() => getVideoEntry(this.props))
      .then(this.handleVideoChange)
      .catch(e => {
        console.log(e);
      });
  }

  async handleVideoChange(toEntry) {
    this.setState({
      entry: toEntry,
      loading: false,
      related: null,
      relatedLoading: true
    });
    const { relatedUrlScheme } = parameters;
    if (!relatedUrlScheme) return;
    try {
      const related = await getRelatedFeed(toEntry);
      this.setState({ related, relatedLoading: false });
    } catch (e) {
      console.log(e);
    }
  }

  toggleCollapseText() {
    this.setState(({ collapseText }) => ({ collapseText: !collapseText }));
  }

  renderVideoDetail() {
    const { toggleCollapseText, handleVideoChange } = this;
    const { entry, related, relatedLoading, collapseText } = this.state;
    return (
      <VideoDetail
        key="detail"
        {...{
          entry,
          related,
          relatedLoading,
          collapseText,
          handleVideoChange,
          toggleCollapseText
        }}
      />
    );
  }

  render() {
    const { loading } = this.state;
    return [
      loading && <Loader key="loader" />,
      !loading && [
        layout.isFullScreen && (
          <SafeAreaViewBackwardCompatible key="container">
            <Header />
            {this.renderVideoDetail()}
          </SafeAreaViewBackwardCompatible>
        ),
        !layout.isFullScreen && this.renderVideoDetail()
      ]
    ];
  }
}

App.propTypes = {
  extra_props: PropTypes.object.isRequired,
  is_tablet: PropTypes.bool
};

export default App;
