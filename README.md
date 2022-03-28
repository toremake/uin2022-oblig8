# uin2022-oblig8
Samarbeidsprosjekt, oblig 8.
Deltagere: Håkon S. Strøm, Ann-Charlott B. Karlsen, Tore Marius Akerbæk

# Struktur
Selve prosjektet ligger i mappen /movielibrary. `npm run start` kjøres herfra. Sanity-relatert materiale ligger i /moviedatabase. `sanity start` kjøres herfra. Nødvendige koder for Sanity-oppkobling ligger i /codes.txt.

# Sass
Prosjektet er satt opp med en sass-compiler og bruker /movielibrary/src/sass som mappe for alle sass-filer, og movielibrary/src/css for css-komponenter og hovedfilen MovieApp.css. Denne er .gitignored, for ikke å få problemer dersom man jobber med sass på ulike brancher, noe som vil skape mange unødvendige merge conflicts (siden MovieApp.css kompileres og vil være nesten uleselig). Dette er løst ved å legge til en kompilator som kjører før `react-scripts start` når man kjører `npm run start`, slik at MovieApp.css alltid kompileres når prosjektet starter opp.

## Oppbygning og kjøring
Laget med følgende packages: sass, concat, postcss-cli, autoprefixer, css-minify og npm-run-all.

Bruker `npm run watch:sass` for prosess som sjekker og kompilerer endringer as-we-go (anbefales ikke, da dette kan bli kokos om man hopper mellom brancher), eller `npm run build` for å kjøre prosess manuelt etter endringer i sass-filene.

## Sass variabler og mixins/helpers
Farger tilgjengelig (Stjålet uhemmet fra [colorhunt.co](https://colorhunt.co/palette/3a3845f7ccacc69b7b826f66)): 
* $black (#3A3845)
* $sand (#F7CCAC)
* $brown (#C69B7B)
* $coffee (#826F66)

`@include bp(size)` brukes for å gjøre responsive endringer. CSS-struktur er bygget mobile-first, og endringer skjer etter skalering opp til større skjermer. Tilgjengelige størrelser for parameteren size er small (767px), medium (992px) og large (1200px). Mixin hentet fra [CSS-tricks.com](https://css-tricks.com/snippets/sass/mixin-manage-breakpoints/) NB: Responsivitet er ok, men ikke vært primærfokus i denne oppgaven da vi har fokusert på å utforske Routing og Sanity-spørringer.

# Sanity-GROQ-challenge
Oppgaven spør ikke etter dette (siden det var en rotete jobb), men vi la også inn en "reversert referanse"-spørring, slik at vi kan vise alle skuespillere som er referert i en film, og alle filmer en skuespiller har spilt i.

Fordi vi satt opp referansen til skuespiller i movie-document-schemaet som en array med referanser, måtte vi grave lenge for å finne en spørring som klarte å returnere en fornuftig array med skuespiller-objekter når vi hentet en bestemt film (basert på filmens slug). Etter mange timers prøving fant vi løsningen med følgende GROQ:
```
^'*[_type == "movie" && slug.current == $slug]{
    _id,
    title,
    "poster": poster.asset->url,
    "slug": slug.current,
    "cast": *[_type == "actor" && _id in ^.actors[]._ref]{
            full_name, 
            "slug": slug.current,
            "image": profile_image.asset->url
        }
}',{slug}
```
Hvor "cast"-feltet henter actors hvis _id befinner seg i parentens actors-arrays _ref-felt.