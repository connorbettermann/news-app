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
      searchTerm: '', //string passed to api call for search query
      searchTitle: '', //search title to be displayed above articles
      sectionTerm: '', //section string passed to api call for search query
      sectionTitle: '', //Section search string to be displayed above articles
      currentPage: 1, 
      totalPages: 0, //Total number of pages returned by api call
    };
    this.apiKey = '1608a221-3887-40b9-be08-b111fe2a92d7'
    this.nextPage = this.nextPage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSection = this.handleSection.bind(this);
  }

  //Initial article view load
  async componentDidMount() {
    await fetch(`https://content.guardianapis.com/search?api-key=${this.apiKey}&show-fields=thumbnail`)
    .then(data => data.json()) //convert returned data to json
    .then(data => {
      this.setState({
        news: data.response.results, //set array of displayed articles
        totalPages: data.response.pages, //number of pages returned
        sectionTitle: "Recent News"
      })
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  //Handle submission from search text input
  handleSubmit = async(e) => {
    e.preventDefault();
    await fetch(`https://content.guardianapis.com/search?api-key=${this.apiKey}${this.state.searchTerm}${this.state.sectionTerm}&show-fields=thumbnail&page=1`)
    .then(data => data.json()) //convert returned data to json
    .then(data => {
      this.setState({
        news: data.response.results, //set array of displayed articles
        totalPages: data.response.pages, //number of pages returned
        searchTitle: this.state.searchTerm.replace('&q=', ''), //update section title with formatted string
        currentPage: 1 //return to first page
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  //Handle change in search text input
  handleChange = (e) => {
      this.setState({
        searchTerm: `&q=${e.target.value}` //update search term with text input in search bar

      })
  }

  //Handle transferring to another page
  nextPage = async (pageNumber) => {
    await fetch(`https://content.guardianapis.com/search?api-key=${this.apiKey}${this.state.searchTerm}&show-fields=thumbnail&page=${pageNumber}${this.state.sectionTerm}`)
    .then(data => data.json()) //convert data to json
    .then(data => {
      this.setState({
        news: data.response.results, //set array of displayed articles
        currentPage: pageNumber, //update current page being viewed
        totalPages: data.response.pages //number of pages returned
      })
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  //Handle a section option being selected in the sidebar
  handleSection = async (searchString, sectionLabel) => {
    await fetch(`https://content.guardianapis.com/search?api-key=${this.apiKey}${this.state.searchTerm}${searchString}&show-fields=thumbnail&page=1`)
    .then(data => data.json())
    .then(data => {
      this.setState({
        news: data.response.results,
        currentPage: 1, //reset current page to 1
        totalPages: data.response.pages, //number of pages returned
        sectionTerm: searchString, //sectionID to input into api call
        sectionTitle: sectionLabel //Section title to display above articles
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="App blue-grey lighten-3">
        <Nav />
        <div className="row">
          <SideBar handleSection={this.handleSection}/>
          <div className="col s10 blue-grey lighten-5">
            <SearchArea currentSearch={this.state.searchTitle} currentSection={this.state.sectionTitle} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
            <NewsList news={this.state.news}/>
            <Pagination pages={this.state.totalPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;