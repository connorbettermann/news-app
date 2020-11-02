import React, { Component } from 'react';
import Nav from './Nav'
import SearchArea from './SearchArea'
import NewsList from './NewsList'
import Pagination from './Pagination'
import SideBar from './SideBar'

class App extends Component {
  constructor(){
    super()
    this.state = {
      news: [],
      searchTerm: '',
      sectionTerm: '',
      sectionTitle: 'Recent News',
      currentPage: 1,
      totalPages: 0,
    };
    this.apiKey = '1608a221-3887-40b9-be08-b111fe2a92d7'
    this.nextPage = this.nextPage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    console.log(`componentDidMount() Fetch: https://content.guardianapis.com/search?api-key=${this.apiKey}&show-fields=thumbnail`);
    await fetch(`https://content.guardianapis.com/search?api-key=${this.apiKey}&show-fields=thumbnail`)
    .then(data => data.json())
    .then(data => {
      this.setState({
        news: data.response.results,
        totalPages: data.response.pages
      })
      console.log(this.state.totalPages);
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  handleSubmit = async(e) => {
    e.preventDefault();
    console.log(`handleSubmit() Fetch: https://content.guardianapis.com/search?api-key=${this.apiKey}${this.state.searchTerm}&show-fields=thumbnail`);

    await fetch(`https://content.guardianapis.com/search?api-key=${this.apiKey}${this.state.searchTerm}&show-fields=thumbnail`)
    .then(data => data.json())
    .then(data => {
      this.setState({
        news: data.response.results,
        totalPages: data.response.pages,
        sectionTitle: this.state.searchTerm.replace('&q=', '')
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  handleChange = (e) => {
      this.setState({
        searchTerm: `&q=${e.target.value}`

      })
  }

  nextPage = async (pageNumber) => {
    console.log(`nextPage() Fecth: https://content.guardianapis.com/search?api-key=${this.apiKey}${this.state.searchTerm}&show-fields=thumbnail&page=${pageNumber}`);
    await fetch(`https://content.guardianapis.com/search?api-key=${this.apiKey}${this.state.searchTerm}&show-fields=thumbnail&page=${pageNumber}${this.state.sectionTerm}`)
    .then(data => data.json())
    .then(data => {
      this.setState({
        news: data.response.results,
        currentPage: pageNumber,
        totalPages: data.response.pages
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  handleSection = async (searchString, sectionLabel) => {
    await fetch(`https://content.guardianapis.com/search?api-key=${this.apiKey}${searchString}&show-fields=thumbnail&page=1`)
    .then(data => data.json())
    .then(data => {
      this.setState({
        news: data.response.results,
        currentPage: 1,
        totalPages: data.response.pages,
        sectionTerm: searchString,
        sectionTitle: sectionLabel
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="App blue-grey lighten-2">
        <Nav />
        <div className="row">
          <SideBar handleSection={this.handleSection}/>
          <div className="col s9 blue-grey lighten-5">
            <SearchArea currentSection={this.state.sectionTitle} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
            <NewsList news={this.state.news}/>
            <Pagination pages={this.state.totalPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;