import { randomUUID } from "node:crypto";

export const personajesDB = [
    {
      id: randomUUID(),
      nombre: "goku",
      edad: 44,
      descripcion:
        "Goku es un personaje ficticio y el protagonista principal de la famosa serie de anime y manga Dragon Ball. Es un guerrero Saiyan, una raza de poderosos luchadores con habilidades extraordinarias. Goku es conocido por su insaciable sed de desafíos y su inquebrantable determinación para volverse más fuerte. A lo largo de la historia, se embarca en numerosas aventuras, combate a enemigos formidables y se convierte en uno de los luchadores más poderosos del universo. Además de su fuerza sobresaliente, Goku es conocido por su naturaleza amable y su sentido del honor en la batalla.",
      imagen: "",
      poder:  9,
    },
    {
      id: randomUUID(),
      nombre: "naruto",
      edad: 30,
      descripcion:
        "Naruto es un personaje ficticio y el protagonista del popular anime y manga japonés titulado Naruto. Creado por Masashi Kishimoto, la historia sigue la vida de Naruto Uzumaki, un joven ninja con el sueño de convertirse en el líder más poderoso de su aldea, conocido como el Hokage. Naruto es reconocido por ser el anfitrión de Kurama, un inmenso zorro de nueve colas con un gran poder destructivo",
      imagen: "https://picsum.photos/200/300",
      poder: 7,
    },
    {
      id: randomUUID(),
      nombre: "subaru",
      edad: 18,
      descripcion:
        " Subaru Natsuki es el protagonista del anime y novela ligera Re:Zero - Starting Life in Another World (Re:Zero kara Hajimeru Isekai Seikatsu). Es un joven normal que un día es transportado a un mundo de fantasía mientras regresaba de una tienda. Allí, descubre que tiene la habilidad de regresar en el tiempo cada vez que muere, lo que le permite enfrentar y superar situaciones difíciles",
      imagen: "https://picsum.photos/200/300",
      poder: 5,
    },
    {
      id: randomUUID(),
      nombre: "baki",
      edad: 50,
      descripcion:
        "se basa en el manga de lucha japonés Baki the Grappler creado por Keisuke Itagaki. Hay varias adaptaciones animadas de la serie, cada una cubriendo diferentes partes de la historia. Aquí te proporciono un resumen de las principales adaptaciones de anime de Baki:",
      imagen: "https://picsum.photos/200/300",
      poder: 9,
    },
    {
      id: randomUUID(),
      nombre: "saitama",
      edad: 21,
      descripcion:
        "Saitama es el personaje principal de la serie de anime y manga One Punch Man. Es un superhéroe extremadamente poderoso que es capaz de derrotar a cualquier oponente con un solo golpe. Su apodo, One Punch Man (Hombre Un Puñetazo), refleja esta habilidad.",
      imagen: "https://picsum.photos/200/300",
      stock: 10,
    },
  ];