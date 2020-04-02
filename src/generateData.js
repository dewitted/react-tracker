const { random, commerce } = require('faker')
const fs = require('fs')

const generateCategories = () =>
  [...Array(5)].map(() => ({
    title: random.word()
  }))

const init = () => {
  const categories = { categories: generateCategories() }
  fs.writeFileSync('./db.json', JSON.stringify(categories, null, 2))
}

init()
