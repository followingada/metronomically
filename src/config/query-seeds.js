export const tempoQuery = {
  blues: {
    limit: 20,
    min_tempo: 20,
    max_tempo: 100,
    seed_artists: "0iOVhN3tnSvgDbcg25JoJb,6iDaoPZVgxrTkndDCisX8F", //Etta James, Keb' Mo'
    seed_genres: "blues,jazz", //Blues, Jazz
    seed_tracks: "78MI7mu1LV1k4IA2HzKmHe", //Dream A Little Dream of Me
  },
  slow: {
    limit: 20,
    min_tempo: 110,
    max_tempo: 145,
    seed_artists: "47m9IPURs2aBzBDdHGsHIn,2jFZlvIea42ZvcCw4OeEdA", //Ella Fitzgerald, Count Basie
    seed_genres: "blues,jazz", //Blues, Jazz
    seed_tracks: "5nr240rHi5OjPcUceU5w4r", //Tuxedo Junction
  },
  medium: {
    limit: 20,
    min_tempo: 145,
    max_tempo: 175,
    seed_artists: "52lBOxCxbJg0ttXEW9CQpW", //Louis Prima
    seed_genres: "blues,jazz,rockabilly", //Blues, Jazz, Rockabilly
    seed_tracks: "6dZKWYSx5YBIme4SfpIHJ0", //In The Mood
  },
  fast: {
    limit: 20,
    min_tempo: 175,
    max_tempo: 235,
    seed_artists: "3cjjGuV9qbUAI2TSA7n8YU", //Giorgio Cuscito & Swing Valley Band
    seed_genres: "blues,jazz,rockabilly", //Blues, Jazz, Rockabilly
    seed_tracks: "5L8ta4ECl5zeA6bGqY7G38", //Sing Sing Sing
  },
  custom: {
    limit: 20,
    seed_artists: "47m9IPURs2aBzBDdHGsHIn,2jFZlvIea42ZvcCw4OeEdA", //Ella Fitzgerald, Count Basie
    seed_genres: "blues,jazz,rockabilly", //Blues, Jazz, Rockabilly
  },
};
