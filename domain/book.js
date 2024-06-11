class Book {
  #title;
  #author;
  #pages;
  #words;

  constructor(title, author, pages) {
    this.setTitle(title);
    this.setAuthor(author);
    this.setPages(pages);
  }

  getTitle() {
    return this.#title;
  }

  getAuthor() {
    return this.#author;
  }

  getPages() {
    return this.#pages;
  }

  getWords() {
    return this.#words;
  }

  setTitle(title) {
    if (typeof title !== 'string') {
      throw new Error();
    }
    title = title.trim();
    if (title.length === 0) {
      throw new Error();
    }
    this.#title = title;
  }

  setAuthor(author) {
    if (typeof author !== 'string') {
      throw new Error();
    }
    author = author.trim();
    if (author.length === 0) {
      author = 'Anónimo';
    }
    this.#author = author;
  }

  setPages(pages) {
    if (typeof pages !== 'number' || isNaN(pages)) {
      throw new Error();
    }
    if (pages < 1) {
      throw new Error();
    }
    pages = Math.trunc(pages);
    this.#pages = pages;
  }

  setWords(words) {
    if (typeof words !== 'number' || isNaN(words)) {
      throw new Error();
    }
    this.#words = words;
  }

  wordsPerPage() {
    let paginasPromedio = this.getWords() / this.getPages();
    return paginasPromedio;
  }

  toString() {
    return `Título: ${this.#title} Autor: ${this.#author} Páginas: ${
      this.#pages
    } Palabras: ${this.#words}`;
  }
}

export default Book;
