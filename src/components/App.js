import React, { Component } from 'react';
import Nav from './Nav'
import SearchArea from './SearchArea'
import NewsList from './NewsList'
import Pagination from './Pagination'

class App extends Component {
  constructor(){
    super()
    this.state = {
      news: [],
      searchTerm: '',
      currentPage: 1,
      totalPages: 0
    }
    this.apiKey = '1608a221-3887-40b9-be08-b111fe2a92d7'
  }

  componentDidMount() {
    fetch(`https://content.guardianapis.com/search?api-key=${this.apiKey}&show-fields=thumbnail`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({
        news: data.response.results,
        totalPages: data.response.pages
      })
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://content.guardianapis.com/search?api-key=${this.apiKey}&q=${this.state.searchTerm}&show-fields=thumbnail`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({
        news: data.response.results,
        totalPages: data.response.pages
      })
    })
  }

  handleChange = (e) => {
      this.setState({
        searchTerm: e.target.value
      })
  }

  nextPage = (pageNumber) => {
    fetch(`https://content.guardianapis.com/search?api-key=${this.apiKey}&q=${this.state.searchTerm}&show-fields=thumbnail&page=${pageNumber}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({
        news: data.response.results,
        currentPage: pageNumber
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <NewsList news={this.state.news}/>
        <Pagination pages={this.state.totalPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/>
      </div>
    )
  }
}

export default App;