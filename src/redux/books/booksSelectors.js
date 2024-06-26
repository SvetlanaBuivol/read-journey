export const getBooks = state => state.books.books;

export const getReadingBook = state => state.books.readingBook;

export const getOwnBooks = state => state.books.ownBooks;

export const getCurrentPage = state => state.books.currentPage;

export const getTotalPages = state => state.books.totalPages;

export const getIsLoading = state => state.books.isLoading;

export const getIsError = state => state.books.isError;
