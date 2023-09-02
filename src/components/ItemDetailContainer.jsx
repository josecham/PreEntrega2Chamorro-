import React from 'react'
import ItemDetail from './ItemDetail'
import { Grid } from '@chakra-ui/react'

const ItemDetailContainer = () => {

  const productos = [

    {id: 1, nombre: "Dark Crisis on Infinite Earths", descripcion: "La historia comienza en Tierra-3, hogar del Sindicato del Crimen, que es destruida, junto a todo su universo, por una gigantesca ola de antimateria. En medio de la destrucción aparece Pariah, un hombre que no puede morir y que es transportado contra su voluntad de un universo a otro para ver su destrucción sin poder hacer nada al respecto. Pero en medio del caos, Lex Luthor, que en esta realidad es un héroe, y su esposa Lois colocan a su hijo Alexander en un prototipo de una nave espacial capaz de viajar entre dimensiones, con lo cual sobrevive a la destrucción de su mundo.. ", precio: 1300, pictureUrl:"img" },
    {id: 2, nombre: "Justice League Last Ride", descripcion: "Tras la muerte del Detective Marciano, la Liga de la Justicia se ha disuelto.Una llamada de emergencia de John Stewart los lleva a todos a la Atalaya. Deben trabajar junto a los Green Lantern Corps para proteger a Lobo, el que mató a los Nuevos Dioses, de sus enemigos para que pueda ser juzgado por sus numerosos crímenes,Batman no quiere ayudar, pero finalmente Superman lo convence.El Caballero Oscuro, como señala Hal Jordan, es el único que podría averiguar dónde esconder a Lobo.Por desgracia, ese lugar resulta ser el planeta Apokolips.", precio: 1300, pictureUrl:"img"},
    {id: 3, nombre: "Justice League Odyssey", descripcion:"Cuando una amenaza cósmica amenaza los mundos más allá del nuestro en el Sector Fantasma, ¡le corresponde a una nueva Liga de la Justicia responder al llamado a la batalla! Cyborg, Starfire, Green Lantern Jessica Cruz y Azrael muy fuera de su elemento, se adentran en el espacio profundo dentro de una nave calavera de Brainiac requisada. Pero mientras estos compañeros de equipo intentan evitar que Despero convierta a los refugiados de Colu en esclavos, descubren algo para lo que nada en el universo podría haberlos preparado: Darkseid... ¿quién dice que se presenta para ayudar?", precio: 1300, pictureUrl:"img"},
    {id: 4, nombre: "Batman Gotham Nights", descripcion: "Una nueva oleada de crimen en el bajo mundo ha invadido las calles de Ciudad Gótica. Ahora depende de la Batifamilia, Batichica, Ala Nocturna, Capucha Roja y Robin, proteger las calles de esta ciudad y traer esperanza a sus habitantes, disciplina a su cuerpo de policía y miedo a sus criminales. Resuelve los misterios que conectan los capítulos más oscuros de la historia de la ciudad y derrota a los villanos más infames en enfrentamientos épicos para convertirte en el nuevo Caballero Nocturno y evitar que el caos se apodere de las calles ", precio: 1400, pictureUrl:"img"},
    {id: 5, nombre: "Batman Black Mask", descripcion: "Llamado Roman Sionis, es un señor del crimen en Gotham y uno de los enemigos de Batman. Lidera sus organizaciones criminales de forma despiadada y tan efectiva como si de un negocio se tratara, habiendo tomado la mayor parte de los bajos fondos de Gotham. Su banda más destacada es la False Face Society (la Sociedad de las Caras Falsas), nombrada así por su obsesión por las máscaras como la que lleva. ", precio: 1400, pictureUrl:"img"},
    {id: 6, nombre: "Batman The Killing", descripcion: "Una noche lluviosa Batman llega al Asilo Arkham en donde ya es esperado por el Comisionado Gordon. Tras recorrer los pasillos del lugar, él se introduce en la celda de su enemigo más notorio.El Guasón se encuentra jugando a las cartas en silencio e ignora por completo las palabras que el héroe ha ido a compartir con él. Rápidamente Batman se da cuenta de que aquel payaso es un impostor lo cual significa que el verdadero Guasón ha escapado otra vez. ", precio: 1400, pictureUrl:"img"},
    {id: 7, nombre: "FlashPoint", descripcion: "Barry, ahora conocido como el súper héroe Flash, visita periódicamente la tumba de su difunta madre, en donde también se arrepiente de no haber llegado antes para salvarla, decide salir corriendo como de costumbre, es cuando vuelve al pasado y salva a su madre. Al día siguiente, Barry se despierta para descubrir que el mundo ha cambiado radicalmente: sus poderes se han ido, su madre está viva, su esposa Iris está casada con un colega y la Liga de la Justicia no existe  ", precio: 1500, pictureUrl:"img"},
    {id: 8, nombre: "Flash Zoom Triumphant", descripcion: "Zoom es un velocista de Tierra-2, cuyo objetivo es eliminar a todos los velocistas de otras tierras, para finalmente ser considerado como el hombre más rápido del mundo.Zoom es liberado del encarcelamiento por Cheetah (Dra. Barbara Minerva), que busca reclutarlo en la creciente Sociedad Secreta de Super-Villanos. Aunque los dos comparten una atracción y un romance menor, Zoom todavía se considera casado con Ashley. ", precio: 1500, pictureUrl:"img"},
    {id: 9, nombre: "Flash The Fastest Man Alive", descripcion: "Barry lucha por equilibrar su nuevo trabajo como héroe con su pasantía en el laboratorio criminalístico. La presión comienza a abrumarlo, literalmente, cuando la monstruosa amenaza fundida llamada Tar Pit aparece en Central City buscando poner fin a la interferencia del Velocista Escarlata en los negocios de su familia. La ansiedad de Barry pone en marcha sus poderes, enviándolo a través de objetos con resultados explosivos. ¿Podrá Barry controlar sus habilidades y detener a Tar Pit en seco, o será alquitranado y expulsado de Central City para siempre? ", precio: 1500, pictureUrl:"img"},    
    ];

    const mostrarProductos = new Promise((resolve, reject)  => {
      if (productos.length > 0) {
          setTimeout(()=>{
              resolve(productos)
          }, 3000)
      }else{
          reject("no hay productos para mostrar")
      }
    })
  
    mostrarProductos
    .then((resultado) =>{
      console.log(resultado)
    }) 
    .catch((error) =>{
      console.log(error)
    })

  return (
    <>
    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
      {productos.map((producto) => (
    <ItemDetail productos={productos}/>
      ))}
    </Grid>
    </>
  )
}

export default ItemDetailContainer