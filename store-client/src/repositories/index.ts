import { BookRepository } from './BookRepository'
import { CategoryRepository } from './CategoryRepository'

const repositorise = {
    books: new BookRepository(),
    categorise: new CategoryRepository()
}

export default repositorise