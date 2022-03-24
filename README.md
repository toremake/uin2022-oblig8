# uin2022-oblig8
Samarbeidsprosjekt, oblig 8.
Deltagere: Håkon S. Strøm, Ann-Charlott B. Karlsen, Tore Marius Akerbæk

# Struktur
Selve prosjektet ligger i mappen /movielibrary. `npm run start` kjøres herfra. Sanity-relatert materiale ligger i /moviedatabase. `sanity start` kjøres herfra. Nødvendige koder for Sanity-oppkobling ligger i /codes.txt.

# Sass
Prosjektet er satt opp med en sass-compiler og bruker /movielibrary/sass som mappe for alle partials, og movielibrary/css for css-komponenter og hovedfilen MovieApp.css.

**NB** Ikke gjør endringer i /movielibrary/css/MovieApp.css! Denne blir overskrevet av kompilert sass.

## Oppbygning og kjøring
Laget med følgende packages: sass, concat, postcss-cli, autoprefixer, css-minify og npm-run-all.

Har en build-prosess som kan kjøres på `npm run build` for å kompilere oppdateringer til MovieApp.css

## Sass variabler og mixins/helpers
Farger tilgjengelig (Stjålet uhemmet fra [colorhunt.co](https://colorhunt.co/palette/3a3845f7ccacc69b7b826f66)): 
* $black (#3A3845)
* $sand (#F7CCAC)
* $brown (#C69B7B)
* $coffee (#826F66)

`@include bp(size)` brukes for å gjøre responsive endringer. CSS-struktur er bygget mobile-first, og endringer skjer etter skalering opp til større skjermer. Tilgjengelige størrelser for parameteren size er small (767px), medium (992px) og large (1200px). Mixin hentet fra [CSS-tricks.com](https://css-tricks.com/snippets/sass/mixin-manage-breakpoints/)
