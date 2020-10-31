import React, { Component } from 'react';
import NewSingle from './NewSingle';


class News extends Component {
    constructor(props) {
      super(props);
      this.state = {
        news: [],
        page: 1,
      };
    }
  
    componentDidMount() {
      const url = 'https://content.guardianapis.com/search?api-key=1608a221-3887-40b9-be08-b111fe2a92d7&show-fields=thumbnail&page-size=24&page='+this.state.page;
      fetch(url)
        .then((response) => { 
          return response.json();
        })
        .then((data) => {
          this.setState({
            news: data.response.results
          })
        })
        .catch((error) => console.log(error));
    }
  
    renderItems() {
        return this.state.news.map((item) => (
            <NewSingle key={item.id} item={item} />
        ));
    }
  
    render() {
      return (
        <div>
        <div className="row">
          {this.renderItems()}
        </div>
        <ul class="pagination">
            <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
            <li class="active"><a href="#!">1</a></li>
            <li class="waves-effect"><a href="#!">2</a></li>
            <li class="waves-effect"><a href="#!">3</a></li>
            <li class="waves-effect"><a href="#!">4</a></li>
            <li class="waves-effect"><a href="#!">5</a></li>
            <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
         </ul>
        </div>
      );
    }
}

export default News;
