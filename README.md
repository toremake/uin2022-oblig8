# uin2022-oblig8
Samarbeidsprosjekt, oblig 8.
Deltagere: Håkon S. Strøm, Ann-Charlott B. Karlsen, Tore Marius Akerbæk

# Struktur
Selve prosjektet ligger i mappen /movielibrary. `npm run start` kjøres herfra. Sanity-relatert materiale ligger i /moviedatabase. `sanity start` kjøres herfra. Nødvendige koder for Sanity-oppkobling ligger i /codes.txt.

# Sass
Prosjektet er satt opp med en sass-compiler og bruker /movielibrary/sass som mappe for alle partials, og movielibrary/css for css-komponenter og hovedfilen MovieApp.css.

## Oppbygning og kjøring
Laget med følgende packages: sass, concat, postcss-cli, autoprefixer, css-minify og npm-run-all.

Bruker `npm run watch:sass` for prosess som sjekker og kompilerer endringer as-we-go, eller `npm run build` for å kjøre prosess manuelt etter endringer i sass-filene.

## Sass variabler
Farger tilgjengelig: 
* $black (#3A3845)
* $sand (#F7CCAC)
* $brown (#C69B7B)
* $coffee (#826F66)

Stjålet uhemmet fra [colorhunt.co](https://colorhunt.co/palette/3a3845f7ccacc69b7b826f66)
