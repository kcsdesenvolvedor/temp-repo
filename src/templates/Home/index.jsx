import './Style.css';
import { Component } from 'react';
import { loadposts } from '../../Utility/load-post'
import { Post } from '../../components/Post';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export class Home extends Component {

  state = {
    posts: [],
    allPosts: [],
    page: 0,
    pagePerPosts: 10,
    searchValue: ''
  }

  loadPosts = async () => {
    const { page, pagePerPosts } = this.state;
    const loads = await loadposts();
    this.setState({
      posts: loads.slice(page, pagePerPosts),
      allPosts: loads
    });
  }

  loadMorePosts = () => {
    const {
      page,
      pagePerPosts,
      allPosts,
      posts
    } = this.state;

    const nextPage = page + pagePerPosts;
    const nextPosts = allPosts.slice(nextPage, nextPage + pagePerPosts);

    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage });
  }

  async componentDidMount() {
    await this.loadPosts();
  }

  handleCharge = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  }

  render() {
    const { posts, page, pagePerPosts, allPosts, searchValue } = this.state
    const noMorePosts = page + pagePerPosts >= allPosts.length;
    const filteredPost = !!searchValue ? allPosts.filter(
      post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      }
    )
      : posts;

    return (
      <section className="container">
        <div className="search-container">
          {!!searchValue && (
            <h1>Valor de busca: {searchValue}</h1>
          )}

          <TextInput searchValue={searchValue} handleCharge={this.handleCharge} />
        </div>

        {filteredPost.length > 0
          ? <Post posts={filteredPost} />
          : <p>Não existe posts</p>
        }

        <div className="button-container">
          {!searchValue && (
            <Button
              text='Carregar mais Posts'
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}
/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */
