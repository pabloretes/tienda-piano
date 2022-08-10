const products = [
    {
        id: '1', 
        marca: 'Steiwey & Sons', 
        modelo: 'Modelo A',
        category: 'Piano de Cola',
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
        category: 'Piano de Cola',
        stock: 5,
        precio: 8000,
        miniDescripcion: 'Este magnífico piano de cola de 211 cm es a menudo llamado por los pianistas el piano perfecto.',
        descripcion: 'Es un instrumento maravillosamente equilibrado y versátil que funciona muy bien en hogares refinados, estudios de enseñanza y lugares de tamaño medio. también está disponible como STEINWAY SPIRIO, el mejor reproductor de piano de alta resolución del mundo.',
        img: 'https://images.squarespace-cdn.com/content/v1/5c86b8eeebfc7fade3aa9854/1552491055766-GSNKNZPZSKAOCZNZDTYS/Captura+de+pantalla+2019-03-13+a+la%28s%29+9.28.31.png?format=500w'
    },
    {
        id: '3', 
        marca: 'Steiwey & Sons', 
        modelo: 'Modelo D',
        category: 'Piano de Cola',
        stock: 2,
        precio: 15000,
        miniDescripcion: 'Con una longitud de 274 cm, este majestuoso instrumento musical, es la elección de los mejores.',
        descripcion: 'Sus costillas están hechas de pino de azúcar resistente y resinoso para asegurar un soporte firme y constante de la cuerda hacia abajo en la caja de resonancia; los extremos de las costillas son ajustados a mano',
        img: 'https://images.squarespace-cdn.com/content/v1/5c86b8eeebfc7fade3aa9854/1552490526131-E0I2D9X0MXC04PS09LBI/Captura+de+pantalla+2019-03-13+a+la%28s%29+9.20.23.png?format=500w'
    },
    {
      id: '4', 
      marca: 'Steiwey & Sons', 
      modelo: 'Boston Upright',
      category: 'Piano Vertical',
      stock: 2,
      precio: 6000,
      miniDescripcion: 'Diseñada por STEINWAY & SONS, empleando las patentes y la experiencia únicas que han hecho que el patrimonio de STEINWAY sea sinónimo de excelencia',
      descripcion: 'El estuche de estilo europeo de Boston encarna el aspecto clásico, con un panel superior que se abre, lo que permite que el tono se escape y proporciona una gran superficie plana para las partituras. El estuche de estilo europeo viene con un llavero de caída lenta y un riel de silenciamiento del pedal central.',
      img: 'https://salachopin.com.mx/wp-content/uploads/2019/02/boston-up-case.jpg'
    },
    {
      id: '5', 
      marca: 'Yamaha', 
      modelo: 'Nippon Gakki',
      category: 'Minipiano',
      stock: 2,
      precio: 5000,
      miniDescripcion: 'Un modelo clasico de Yamaha en su version quiza mas delicada y mas hogareña el M1A pensado para espacios reducidos y con una terminacion y carpinteria Japonesas en Caoba claro finisimos',
      descripcion: 'La ingeniería de precisión junto con la artesanía de alto nivel ha cimentado la reputación de Yamaha como fabricante de pianos premium en todo el mundo. El Nippon Gakki de Yamaha es un instrumento fantástico que combina asequibilidad con un rendimiento de alto nivel. La sala de exhibición de pianos del servicio de piano de BrunoPianos cuenta con este y muchos otros pianos usados ​​de calidad para que usted elija',
      img: 'https://brunobrunopianos.com/wp-content/uploads/2022/04/PIANO-YAMAHA-M5J-TAPA-320x320.jpg'
    },
    {
      id: '6', 
      marca: 'Kawai', 
      modelo: 'CX-5H',
      category: 'Economico',
      stock: 1,
      precio: 1000,
      miniDescripcion: 'Un piano moderno de primerísima calidad fabricado con la paciencia, el cuidado y la destreza renombrada de Kawai. El CX-5H ofrece un sonido sofisticado e inigualable junto a una pulsación delicada y precisa ',
      descripcion: 'Se trata de un piano vertical Kawai CX-5H del año 2000 en un estado inmejorable, 100% original y como nuevo. A diferencia de los pianos verticales Kawai más nuevos, este piano se fabricó en la famosa planta de Hamamatsu, Japón (no en Indonesia) y por lo tanto, es un piano de mucha mayor calidad y un instrumento muy superior.',
      img: 'http://www.pianosbrinkmann.com.ar/pianos/IMG_9924.jpg'
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
