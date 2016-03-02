import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBVPFPTjLR-Y3FM239qlvF7-IPMZE8Dpx0';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
// Below is a default search of trail blazers which is temporary
    YTSearch({key: API_KEY, term: 'trail blazers'}, (videos) => {
      this.setState({ videos });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
