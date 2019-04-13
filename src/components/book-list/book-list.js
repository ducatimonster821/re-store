import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {withBookstoreService} from '../hoc';
import {booksLoaded} from "../../actions";
import {compose} from '../../utils';

import './book-list.css';

class BookList extends Component {

  componentDidMount() {
    // 1. receive data
    const {bookstoreService} = this.props;
    const data = bookstoreService.getBooks();
    console.log(data);

    // 2. dispatch action to store
    this.props.booksLoaded(data);
  }

  render() {
    const {books} = this.props;
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
const mapStateToProps = ({books}) => {
  return {
    // books: state.books
    books
  }
};

const mapDispatchToProps = {
  booksLoaded
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);

// export default withBookstoreService()(
//   connect(mapStateToProps, mapDispatchToProps)(BookList)
// );