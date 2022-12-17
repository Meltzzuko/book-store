import db from './db'

async function loadFixtures(clearData = false){
    if(clearData){
        console.warn('clearing data')
        await db('book').del()
        await db('category').del()
    }
    await db.batchInsert('category', [
        {id: 1, title: 'Romance'},
        {id: 2, title: 'Fantasy'},
        {id: 3, title: 'Sci-fi'},
        {id: 4, title: 'manga'}
    ])
    await db.batchInsert('book', [
        { id: 1, title: 'Harry Potter', price: 490, stockAmount: 10, categoryId: 2 },
        { id: 2, title: 'AVATAR', price: 299, stockAmount: 6, categoryId: 3 },
        { id: 3, title: 'Titanic', price: 399, stockAmount: 4, categoryId: 1 },
        { id: 4, title: 'Fantastic beast', price: 490, stockAmount: 7, categoryId: 2},
        { id: 5, title: 'Attack on Titan', price: 100, stockAmount: 20, categoryId: 4},
        { id: 6, title: 'One piece', price: 100, stockAmount: 30, categoryId: 4}
    ])
}
export default loadFixtures
