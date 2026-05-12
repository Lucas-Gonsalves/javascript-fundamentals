const book = {
  title: 'Imutability objects',
  category: 'JabaScript',
  author: {
    name: 'Lucas',
    email: 'lucas@gmail.com',
  }
}

function deepFreeze(object) {
  const props = Reflect.ownKeys(object)
  console.log(props)

  for(const prop of props) {
    const
  }
}

deepFreeze(book)