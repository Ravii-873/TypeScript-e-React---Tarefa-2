export interface Movie {
  id: number;
  name: string;
  genre: string;
  image: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    name: "Homem Aranha",
    genre: "ação",
    image: "https://upload.wikimedia.org/wikipedia/pt/thumb/1/14/Spide-Man_Poster.jpg/250px-Spide-Man_Poster.jpg"
  },
  {
    id: 2,
    name: "Super Marios Bros. - O Filme",
    genre: "animação",
    image: "https://upload.wikimedia.org/wikipedia/pt/4/44/The_Super_Mario_Bros._Movie_poster.jpg"
  },
  {
    id: 3,
    name: "Luther: O Cair da Noite",
    genre: "drama",
    image: "https://media.fstatic.com/87P3OkthYv-KtfdxMSwqH-eSB2g=/322x478/smart/filters:format(webp)/media/movies/covers/2023/01/321313250_699300278290829_1479258747461748433_n.jpg"
  },
  {
    id: 4,
    name: "O Beco do Pesadelo",
    genre: "suspense",
    image: "https://br.web.img3.acsta.net/pictures/21/11/22/17/54/4745407.jpg"
  },
  {
    id: 5,
    name: "Guardiães da Galáxia",
    genre: "aventura",
    image: "https://upload.wikimedia.org/wikipedia/pt/b/b2/Guardiansgalaxyposter.jpg"
  },
  {
    id: 6,
    name: "Tudo em Todo o Lugar ao Mesmo Tempo",
    genre: "comédia",
    image: "https://cinepop.com.br/wp-content/uploads/2022/06/tudoemtodolugar_2.jpg"
  }
]