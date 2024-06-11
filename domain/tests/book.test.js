import {describe, it, expect, beforeEach} from '@jest/globals';
import Book from '../book.js';

describe('Book', () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350);
  });

  it('return the correct title', () => {
    expect(myBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the correct author', () => {
    expect(myBook.getAuthor()).toBe('Horacio Quiroga');
  });

  it('return the correct number of pages', () => {
    expect(myBook.getPages()).toBe(350);
  });

  it('check title is a string', () => {
    expect(() => myBook = new Book(451, 1, 350)).toThrow();
  });

  it('check title is not empty', () => {
    expect(() => myBook = new Book('', 'Horacio Quiroga', 350)).toThrow();
  });

  it('check author is a string', () => {
    expect(() => myBook = new Book('titulo', 350, 350)).toThrow();
  });

  it('check page param is a number', () => {
    expect(() => myBook = new Book('titulo', 'autor', '350')).toThrow();
  });

  it('check pages not < 1', () => {
    expect(() => myBook = new Book('titulo', 'autor', -1)).toThrow();
  });
  it('toString()', () => {
    myBook.setWords(100);
    expect(myBook.toString()).toBe('Título: Cuentos de la Selva Autor: Horacio Quiroga Páginas: 350 Palabras: 100');
  });

  it('check words param is a number', () => {
    myBook.setAuthor('    ');
    expect(myBook.getAuthor()).toBe('Anónimo');
  });

  it('check words', () => {
    myBook.setWords(100);
    expect(myBook.getWords()).toBe(100);
  });

  it('check words wrong', () => {
    expect(() => myBook.setWords('hola')).toThrow();
  });

  it('check words', () => {
    myBook.setWords(35000);
    expect(myBook.wordsPerPage()).toBe(100);
  });

});
