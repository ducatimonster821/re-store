export default class BookstoreService {
  getBooks() {
    return [
      { id: 1,
        title: 'Production-Ready Microservices',
        author: 'Susan J. Fowler' },
      { id: 2,
        title: 'Relese It!',
        author: 'Michael T. Nygard' },
    ];
  }
}
