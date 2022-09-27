const proto = {
    id: 00,
    ask: "¿?",
    res: "",
};

const generals = [
	{
		id: 00,
		ask: "¿Cuántas patas tiene una araña?",
		res: "8",
	},
	{
		id: 00,
		ask: "¿Cómo se llama el vaquero de juguete de Toy Story?",
		res: "Woody",
	},
	{
		id: 00,
		ask: "¿De qué color es una esmeralda?",
		res: "Verde",
	},
	{
		id: 00,
		ask: "¿Qué es algo que golpeas con un martillo?",
		res: "Clavo",
	},
	{
		id: 00,
		ask: "¿Cómo se llama un lugar al que vas para ver muchos animales?",
		res: "Zoológico",
	},
	{
		id: 00,
		ask: "¿A quién le crecía la nariz cada vez que mentía?",
		res: "Pinocho",
	},
	{
		id: 00,
		ask: "¿Cómo se llama el hada de Peter Pan?",
		res: "Campanita",
	},
	{
		id: 00,
		ask: "¿Si congelas agua, ¿qué obtienes??",
		res: "Hielo",
	},
	{
		id: 00,
		ask: "¿De qué colores son las estrellas de la bandera de Venezuela?",
		res: "Amarillo, azul y rojo",
	},
	{
		id: 00,
		ask: "¿Cuantas estrellas tiene la bandera venezolana?",
		res: "8",
	},
	{
		id: 00,
		ask: "¿Cuántos planetas hay en nuestro sistema solar?",
		res: "8",
	},
	{
		id: 00,
		ask: "¿Qué fruta dan tradicionalmente los niños a los maestros?",
		res: "Una manzana",
	},
	{
		id: 00,
		ask: "¿Dónde vive Santa Claus?",
		res: "Polo norte",
	},
	{
		id: 00,
		ask: "¿Qué tipo de pez es Nemo?",
		res: "Payaso",
	},
	{
		id: 00,
		ask: "¿En qué se convierten las orugas?",
		res: "Mariposas",
	},
	{
		id: 00,
		ask: "¿De qué color suelen ser los autobúses escolares?",
		res: "Amarillos",
	},
	{
		id: 00,
		ask: "¿Qué usas para escribir en una pizarra?",
		res: "Tiza",
	},
	{
		id: 00,
		ask: "¿Cuántos pares de alas tienen las abejas?",
		res: "Dos",
	},
	{
		id: 00,
		ask: "¿Dónde está la Gran Pirámide de Giza?",
		res: "Egipto",
	},
	{
		id: 00,
		ask: "¿Cuándo mueren las hojas?",
		res: "En otoño",
	},
	{
		id: 00,
		ask: "¿A qué tipo de gato se le considera mala suerte?",
		res: "Gatos negros",
	},
	{
		id: 00,
		ask: "¿Cuántos días tiene un año?",
		res: "365",
	},
	{
		id: 00,
		ask: "¿Cómo se llama el pirata de Peter Pan?",
		res: "Capitán Garfio",
	},
	{
		id: 00,
		ask: "¿Cuál es el animal terrestre más rápido?",
		res: "El guepardo",
	},
	{
		id: 00,
		ask: "¿Qué tipo de animal era Abu en Aladin?",
		res: "",
	},
	{
		id: 00,
		ask: "¿Quiénes construyeron las pirámides?",
		res: "Los egipcios",
	},
	{
		id: 00,
		ask: "¿De qué color son los Pitufos?",
		res: "Azules",
	},
	{
		id: 00,
		ask: "¿Cuántos lados tiene un triángulo?",
		res: "Tres",
	},
	{
		id: 00,
		ask: "¿Qué superhéroe puede escalar paredes y edificios?",
		res: "Hombre araña",
	},
	{
		id: 00,
		ask: "¿Qué planeta de nuestro Sistema Solar es conocido por tener un anillo?",
		res: "Saturno",
	},
	{
		id: 00,
		ask: "¿Por qué las cosas se caen cuando las dejas caer?",
		res: "Por la gravedad",
	},
	{
		id: 00,
		ask: "¿Cuál es el mamífero más grande del mundo?",
		res: "Ballena",
	},
	{
		id: 00,
		ask: "¿Cuántos colores hay en un arcoíris?",
		res: "7",
	},
	{
		id: 00,
		ask: "¿En qué ciudad capital de Europa encontrarías la Torre Eiffel?",
		res: "Paris",
	},
	{
		id: 00,
		ask: "¿Qué tienes que pegar en un sobre?",
		res: "Un sello",
	},
	{
		id: 00,
		ask: "¿En qué país vive el canguro?",
		res: "Australia",
	},
	{
		id: 00,
		ask: "¿Qué es lo contrario de 'barato'?",
		res: "Caro",
	},
	{
		id: 00,
		ask: "¿Qué voz de canto es el tono más alto? ¿Soprano, tenor o barítono?",
		res: "Soprano",
	},
	{
		id: 00,
		ask: "¿Cómo se llama un científico que estudia rocas?",
		res: "Geólogo",
	},
	{
		id: 00,
		ask: "¿Qué podía hacer invisible a Harry Potter?",
		res: "La capa de invisibilidad",
	},
	{
		id: 00,
		ask: "En el deporte , ¿qué es un MVP?",
		res: "Jugador mas valioso",
	},
	{
		id: 00,
		ask: "Si sufres de aracnofobia, ¿a qué animal le tienes miedo?",
		res: "A las arañas",
	},
	{
		id: 00,
		ask: "¿Qué comida comen los pandas?",
		res: "Bambu",
	},
	{
		id: 00,
		ask: "Dos de los planetas de nuestro sistema solar comienzan con la letra M, ¿puedes nombrarlos?",
		res: "Marte y Mercurio",
	},
	{
		id: 00,
		ask: "¿De qué tipo de árbol provienen las bellotas?",
		res: "Roble",
	},
	{
		id: 00,
		ask: "¿Cuántos huesos tienen los tiburones?",
		res: "0",
	},
	{
		id: 00,
		ask: "¿Cómo se llama la roca fundida después de una erupción volcánica?",
		res: "Lava",
	},
	{
		id: 00,
		ask: "¿Cual es el nombre de la estrella más cercana a la Tierra??",
		res: "El sol",
	},
	{
		id: 00,
		ask: "¿Quién pintó la Mona Lisa?",
		res: "Leonardo DaVinci",
	},
	{
		id: 00,
		ask: "¿Qué obtienes cuando hierves agua?",
		res: "Vapor",
	},
	{
		id: 00,
		ask: "¿Cómo se llama el perro mascota de Mickey Mouse?",
		res: "Pluto",
	},
	{
		id: 00,
		ask: "¿En qué película encontrarás personajes que buscan cerebro, corazón y coraje?",
		res: "El mago de oz",
	},
	{
		id: 00,
		ask: "¿?De qué película es la Princesa Fiona",
		res: "Shrek",
	},
	{
		id: 00,
		ask: "¿Cuál es el continente más grande?",
		res: "Asia",
	},
	{
		id: 00,
		ask: "¿Cuál es la montaña más alta del mundo?",
		res: "Monte Everest",
	},
	{
		id: 00,
		ask: "¿De qué tipo de árbol provienen las ciruelas pasas?",
		res: "Ciruelo",
	},
	{
		id: 00,
		ask: "¿Que es mas duro un diamante o un rubi?",
		res: "Un diamante",
	},
	{
		id: 00,
		ask: "¿Cual es la capital de Francia?",
		res: "Paris",
	},
	{
		id: 00,
		ask: "¿Quien descubrio America?",
		res: "Cristóbal Colón",
	},
	{
		id: 00,
		ask: "¿Cuántos tentáculos tiene un pulpo?",
		res: "8",
	},
	{
		id: 00,
		ask: "Los guepardos son los animales más rápidos del planeta. ¿Verdadero o falso?",
		res: "Verdadero",
	},
	{
		id: 00,
		ask: "¿Quién es el mejor amigo de Bob Esponja?",
		res: "Patricio Estrella",
	},
	{
		id: 00,
		ask: "¿Cuántos lados tiene un pentágono?",
		res: "5",
	},
	{
		id: 00,
		ask: "¿Cómo se llama el padre de Harry Potter?",
		res: "James Potter",
	},
	{
		id: 00,
		ask: "¿Dónde viven los pingüinos?",
		res: "Antártida ",
	},
	{
		id: 00,
		ask: "¿Qué película de Pixar tiene a Woody y Buzz Lightyea?",
		res: "Toy Story",
	},
	{
		id: 00,
		ask: "¿Qué mide un termómetro?",
		res: "Temperatura",
	},
	{
		id: 00,
		ask: "¿A qué temperatura se congela el agua?",
		res: "0°C o 32°F",
	},
	{
		id: 00,
		ask: "¿Cuándo es el día de la independencia de Estados Unidos?",
		res: "4 de julio",
	},
	{
		id: 00,
		ask: "¿Cómo se llama una bicicleta de tres ruedas?",
		res: "Un triciclo",
	},
	{
		id: 00,
		ask: "¿Alicia en el país de las maravillas se cayó del qué?",
		res: "Madriguera de conejo",
	},
	{
		id: 00,
		ask: "¿Qué animales son Tom & Jerry?",
		res: "Un gato y un raton",
	},
	{
		id: 00,
		ask: "¿Cómo se llama el reno de Papá Noel con la nariz roja?",
		res: "Rudolf",
	},
	{
		id: 00,
		ask: "¿Quién es la mujer malvada que quería robar a todos los dálmatas?",
		res: "Cruella De Vil",
	},
	{
		id: 00,
		ask: "¿Quién es el villano de Aladdin?",
		res: "Yafar",
	},
	{
		id: 00,
		ask: "¿Qué es Bob Esponja?",
		res: "Una esponja",
	},
	{
		id: 00,
		ask: "¿Qué “Maravilla del Mundo” se encuentra en Egipto?",
		res: "Las piramides",
	},
	{
		id: 00,
		ask: "¿Quién es el Pokémon amarillo de Ash Ketchum?",
		res: "Pikachu",
	},
	{
		id: 00,
		ask: "¿Qué viaja más rápido, la luz o el sonido?",
		res: "La luz",
	},
	{
		id: 00,
		ask: "¿Qué planeta está más cerca del sol?",
		res: "Mercurio",
	},
	{
		id: 00,
		ask: "¿Cuántos anillos hay en el logo de los Juegos Olímpicos?",
		res: "5",
	},
	{
		id: 00,
		ask: "¿Qué marca de cereal tiene un conejito marrón?",
		res: "Nesquik",
	},
	{
		id: 00,
		ask: "¿Quién es el Dios del Trueno?",
		res: "Thor",
	},
	{
		id: 00,
		ask: "¿Dónde está la Torre Inclinada de Piza?",
		res: "Italia",
	},
	{
		id: 00,
		ask: "¿Cleopatra era la reina de qué país?",
		res: "Egipto",
	},
	{
		id: 00,
		ask: "¿Cuál es el país más grande del mundo?",
		res: "Rusia",
	},
	{
		id: 00,
		ask: "¿Qué estudian los astrónomos?",
		res: "Las estrellas.",
	},
	{
		id: 00,
		ask: "Es cierto que las estrellas de mar caen del espacio ¿Verdadero o falso?",
		res: "Falso",
	},
	{
		id: 00,
		ask: "¿Qué hueso está en tu cabeza?",
		res: "El cráneo",
	},
	{
		id: 00,
		ask: "¿Cómo llamas a una vaca bebé?",
		res: "Becerro",
	},
	{
		id: 00,
		ask: "¿Qué animal era considerado sagrado en el Antiguo Egipto?",
		res: "Los gatos",
	},
	{
		id: 00,
		ask: "¿Quién fue el director del Colegio Hogwarts de Magia y Hechicería?",
		res: "Albus Dumbledore",
	},
	{
		id: 00,
		ask: "¿Cuántas horas tarda la Tierra en dar una vuelta completa?",
		res: "24",
	},
	{
		id: 00,
		ask: "¿Qué país tiene más población?",
		res: "China",
	},
	{
		id: 00,
		ask: "¿Quién era el líder de los dioses griegos?",
		res: "Zeus",
	},
	{
		id: 00,
		ask: "¿Cuáles son los tres estados de la materia?",
		res: "Sólido, gaseoso y líquido.",
	},
	{
		id: 00,
		ask: "¿Qué animal está en el logo de Twitter?",
		res: "Un pajaro",
	},
	{
		id: 00,
		ask: "¿En qué deporte se puede anotar un triple?",
		res: "Basket",
	},
	{
		id: 00,
		ask: "¿Qué animal nunca olvida?",
		res: "Elefantes",
	},
	{
		id: 00,
		ask: "¿Quién pintó “La noche estrellada”?",
		res: "Vincent Van Gogh",
	},
	{
		id: 00,
		ask: "¿Cuál es el nombre de “miedo a las arañas”?",
		res: "Aracnofobia",
	},
	{
		id: 00,
		ask: "¿Quién interpretó a Willy Wonka en Charlie y la fábrica de chocolate?",
		res: "Johnny Deep",
	},
	{
		id: 00,
		ask: "¿Quién fundó la Ford Motor Company?",
		res: "Henry Ford",
	},
	{
		id: 00,
		ask: "¿Qué criatura mítica es mitad águila y mitad león?",
		res: "Un grifo",
	},
	{
		id: 00,
		ask: "¿Qué animal puede girar la cabeza un máximo de 270 grados?",
		res: "Buho",
	},
	{
		id: 00,
		ask: "¿Qué ave es conocida por comer animales muertos?",
		res: "Buitres",
	},
	{
		id: 00,
		ask: "¿Cuál es el planeta más pequeño de nuestro sistema solar?",
		res: "Mercurio",
	},
	{
		id: 00,
		ask: "¿De qué color es un zafiro?",
		res: "Azul",
	},
	{
		id: 00,
		ask: "¿Dónde nació Jesús?",
		res: "Palestina",
	},
	{
		id: 00,
		ask: "¿Con quién peleó David en la Biblia?",
		res: "Goliat",
	},
	{
		id: 00,
		ask: "¿Cómo se llama el vecino de Andy en Toy Story?",
		res: "Sid",
	},
	{
		id: 00,
		ask: "¿Cómo se llaman las hermanastras de Cenicienta?",
		res: "Anastasia y Drizella",
	},
	{
		id: 00,
		ask: "¿Cómo se llama la hija de Ariel y el príncipe Eric?",
		res: "Princesa Melody",
	},
	{
		id: 00,
		ask: "¿Cuál es el nombre de la isla natal de Moana?",
		res: "Motunui",
	},
	{
		id: 00,
		ask: "¿Cuál es el nombre común de las ciruelas secas?",
		res: "Ciruelas pasas",
	},
	{
		id: 00,
		ask: "¿Qué país inventó el helado?",
		res: "China",
	},
	{
		id: 00,
		ask: "¿Qué país produce más café en el mundo?",
		res: "Brasil",
	},
	{
		id: 00,
		ask: "¿Qué servicio de correo electrónico es propiedad de Microsoft?",
		res: "Hotmail",
	},
	{
		id: 00,
		ask: "¿Qué canción de Luis Fonsi y Daddy Yankee tiene más vistas?",
		res: "Despacito",
	},
	{
		id: 00,
		ask: "¿Cuál es la ciudad capital de España?",
		res: "Madrid",
	},
	{
		id: 00,
		ask: "¿Cuál es el nombre más conocido del cuadro “La Gioconda”?",
		res: "Mona lisa",
	},
	{
		id: 00,
		ask: "¿Cuál es la cascada más alta del mundo?",
		res: "Salto Ángel, Venezuela",
	},
	{
		id: 00,
		ask: "¿Cuál es el tercer signo del zodíaco?",
		res: "Géminis",
	},
	{
		id: 00,
		ask: "¿Qué país inventó el té?",
		res: "China",
	},
	{
		id: 00,
		ask: "¿Quién empieza primero en el ajedrez?",
		res: "Los blancos",
	},
	{
		id: 00,
		ask: "¿Qué idioma tiene más palabras?",
		res: "Ingles",
	},
	{
		id: 00,
		ask: "¿Cuánto tiempo lleva hervir un huevo?",
		res: "7 minutos",
	},
	{
		id: 00,
		ask: "¿Cual es el océano más grande del mundo?",
		res: "Pacifico",
	},
	{
		id: 00,
		ask: "¿Cuántos corazones tiene un pulpo?",
		res: "3",
	},
	{
		id: 00,
		ask: "¿Cuantas vidas tiene un gato?",
		res: "7",
	},
	{
		id: 00,
		ask: "¿Cuál es el órgano más grande de tu cuerpo?",
		res: "La piel",
	},
	{
		id: 00,
		ask: "¿Qué mamífero no tiene cuerdas vocales?",
		res: "La jirafa",
	},
	{
		id: 00,
		ask: "¿Qué signo del horóscopo tiene un cangrejo?",
		res: "Cancer",
	},
	{
		id: 00,
		ask: "¿De qué sustancia están hechas las uñas?",
		res: "Queratina",
	},
	{
		id: 00,
		ask: "¿Cuántas semanas tiene un año?",
		res: "52",
	},
	{
		id: 00,
		ask: "¿Cuál es el hueso más grande del cuerpo humano?",
		res: "El fémur",
	},
	{
		id: 00,
		ask: "¿Qué desierto es el más grande del mundo?",
		res: "El desierto del sahara",
	},
	{
		id: 00,
		ask: "¿Cuál es el río más largo del mundo?",
		res: "Amazonas",
	},
	{
		id: 00,
		ask: "¿Cuál es la primera letra en una máquina de escribir?",
		res: "La q",
	},
	{
		id: 00,
		ask: "¿Qué planeta se conoce como el planeta rojo?",
		res: "Marte",
	},
	{
		id: 00,
		ask: "¿Cuál es el planeta más grande de nuestro sistema solar?",
		res: "Jupiter",
	},
	{
		id: 00,
		ask: "¿Cuál es el pez más rápido del océano?",
		res: "El pez vela",
	},
	{
		id: 00,
		ask: "¿Cuánto peso puede levantar una hormiga?",
		res: "50 veces su peso",
	},
	{
		id: 00,
		ask: "¿Qué animal tiene el ojo más grande del mundo?",
		res: "El calamar gigante",
	},
	{
		id: 00,
		ask: "¿Cómo se llama a alguien que herra caballos?",
		res: "Herrador",
	},
	{
		id: 00,
		ask: "¿Qué pieza de ajedrez solo puede moverse en diagonal?",
		res: "El alfil",
	},
	{
		id: 00,
		ask: "¿De que color es la luna?",
		res: "Gris",
	},
	{
		id: 00,
		ask: "¿En que pais esta la Caracas?",
		res: "Venezuela",
	},
	{
		id: 00,
		ask: "¿Porque letra empieza la palabra zorro?",
		res: "Z",
	},
	{
		id: 00,
		ask: "¿Cuanto es 5 veces 4?",
		res: "20",
	},
]