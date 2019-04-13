import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {withBookstoreService} from '../hoc';
import {booksLoaded, booksRequested} from "../../actions";
import {compose} from '../../utils';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './book-list.css';

class BookList extends Component {

  componentDidMount() {
    const {bookstoreService, booksLoaded, booksRequested} = this.props;
    booksRequested();

    // bookstoreService.getBooks()
    //   .then((data) => {
    //     console.log('data:', data);
    //     booksLoaded(data);
    //   });
    
    bookstoreService.getBooks()
      .then((data) => booksLoaded(data));
  }

  render() {
    const {books, loading} = this.props;

    if (loading) {
      return <Spinner />;
    }
    
    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItem book={book} /></li>
            )
          })
        }
      </ul>
    );
  }
}

// const mapStateToProps = (state) => {
const mapStateToProps = ({books, loading}) => {
  return {
    // books: state.books
    books,
    loading
  }
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);

// export default withBookstoreService()(
//   connect(mapStateToProps, mapDispatchToProps)(BookList)
// );