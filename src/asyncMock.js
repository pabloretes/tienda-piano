const products = [
    {
        id: '1', 
        marca: 'Steiwey & Sons', 
        modelo: 'Modelo A',
        categoria: 'Piano de Cola',
        stock: 3,
        precio: 5000,
        miniDescripcion: 'Con 188 cm, el Modelo A es conocido por ofrecer un sonido grandioso en un instrumento de escala media.',
        descripcion: 'Este grandioso ofrece potencia y calidez, con un diseño que permite que la caja de resonancia de abeto sólido resuene de forma libre y eficiente , como sus contrapartes más grandes.',
        img: 'https://images.squarespace-cdn.com/content/v1/5c86b8eeebfc7fade3aa9854/1552490555607-GXOEFTB2TGW1BN83DZIC/Captura+de+pantalla+2019-03-13+a+la%28s%29+9.20.38.png?format=500w'
    },
    {
        id: '2', 
        marca: 'Steiwey & Sons', 
        modelo: 'Modelo B',
        categoria: 'Piano de Cola',
        stock: 5,
        precio: 4000,
        miniDescripcion: 'Este magnífico piano de cola de 211 cm es a menudo llamado por los pianistas el piano perfecto.',
        descripcion: 'Es un instrumento maravillosamente equilibrado y versátil que funciona muy bien en hogares refinados, estudios de enseñanza y lugares de tamaño medio. también está disponible como STEINWAY SPIRIO, el mejor reproductor de piano de alta resolución del mundo.',
        img: 'https://images.squarespace-cdn.com/content/v1/5c86b8eeebfc7fade3aa9854/1552491055766-GSNKNZPZSKAOCZNZDTYS/Captura+de+pantalla+2019-03-13+a+la%28s%29+9.28.31.png?format=500w'
    },
    {
        id: '3', 
        marca: 'Steiwey & Sons', 
        modelo: 'Modelo D',
        categoria: 'Piano de Cola',
        stock: 2,
        precio: 9000,
        miniDescripcion: 'Con una longitud de 274 cm, este majestuoso instrumento musical, es la elección de los mejores.',
        descripcion: 'Sus costillas están hechas de pino de azúcar resistente y resinoso para asegurar un soporte firme y constante de la cuerda hacia abajo en la caja de resonancia; los extremos de las costillas son ajustados a mano',
        img: 'https://images.squarespace-cdn.com/content/v1/5c86b8eeebfc7fade3aa9854/1552490526131-E0I2D9X0MXC04PS09LBI/Captura+de+pantalla+2019-03-13+a+la%28s%29+9.20.23.png?format=500w'
    }
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products)
    },500)
  })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.find(prod => prod.id === id))
      },500)
    })
  }
