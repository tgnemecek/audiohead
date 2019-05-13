import React from 'react';

import aldoThumbnail from 'images/works/thumbnails/aldo-thumbnail.jpg';
import carrossel1Thumbnail from 'images/works/thumbnails/carrossel-1-thumbnail.jpg';
import carrossel2Thumbnail from 'images/works/thumbnails/carrossel-2-thumbnail.jpg';
import cblolThumbnail from 'images/works/thumbnails/cblol-thumbnail.jpg';
import cognitiveThumbnail from 'images/works/thumbnails/cognitive-thumbnail.jpg';
import dpa1Thumbnail from 'images/works/thumbnails/dpa-1-thumbnail.png';
import economiaThumbnail from 'images/works/thumbnails/economia-thumbnail.jpg';
import estacaoDaLuzThumbnail from 'images/works/thumbnails/estacao-da-luz-thumbnail.jpg';
import geniusThumbnail from 'images/works/thumbnails/genius-thumbnail.jpg';
import gogosThumbnail from 'images/works/thumbnails/gogos-thumbnail.png';
import hexrideThumbnail from 'images/works/thumbnails/hexride-thumbnail.png';
import hifiThumbnail from 'images/works/thumbnails/hifi-thumbnail.jpg';
import lifelongThumbnail from 'images/works/thumbnails/lifelong-thumbnail.jpg';
import reencontroThumbnail from 'images/works/thumbnails/reencontro-thumbnail.png';
import repairedThumbnail from 'images/works/thumbnails/repaired-thumbnail.jpg';
import sosThumbnail from 'images/works/thumbnails/sos-thumbnail.jpg';
import theyDecideThumbnail from 'images/works/thumbnails/they-decide-thumbnail.jpg';
import tomsThumbnail from 'images/works/thumbnails/toms-thumbnail.jpg';

// import aldoBackground from 'images/works/backgrounds/aldo-background.jpg';
import carrossel1Background from 'images/works/backgrounds/carrossel-1-background.jpg';
// import carrossel2Background from 'images/works/backgrounds/carrossel-2-background.jpg';
// import cblolBackground from 'images/works/backgrounds/cblol-background.jpg';
// import cognitiveBackground from 'images/works/backgrounds/cognitive-background.jpg';
// import dpa1Background from 'images/works/backgrounds/dpa-1-background.png';
// import economiaBackground from 'images/works/backgrounds/economia-background.jpg';
import estacaoDaLuzBackground from 'images/works/backgrounds/estacao-da-luz-background.jpg';
// import geniusBackground from 'images/works/backgrounds/genius-background.jpg';
// import gogosBackground from 'images/works/backgrounds/gogos-background.png';
// import hexrideBackground from 'images/works/backgrounds/hexride-background.png';
// import hifiBackground from 'images/works/backgrounds/hifi-background.jpg';
// import lifelongBackground from 'images/works/backgrounds/lifelong-background.jpg';
// import reencontroBackground from 'images/works/backgrounds/reencontro-background.png';
// import repairedBackground from 'images/works/backgrounds/repaired-background.jpg';
// import sosBackground from 'images/works/backgrounds/sos-background.jpg';
// import theyDecideBackground from 'images/works/backgrounds/they-decide-background.jpg';
// import tomsBackground from 'images/works/backgrounds/toms-background.jpg';

export const workList = [
  {
    title: "HEXRIDE",
    subtitle: "Gomi Interactive",
    thumbnail: hexrideThumbnail,

    category: "game",
    type: "Mobile Game",
    year: "2017",
    production: "Gomi Interactive",
    work: "Original Music, Sound Design",
    description: "“Travel with your paper plane through an hexagon path! Score by turning correctly and collecting coins. Collect coins to unlock new paper planes”",
    backgroundImage: carrossel1Background,
    extra: [
      {
        label: "Soundtrack Excerpt",
        options: {isIframe: true},
        value: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/342105080&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
      }
    ]
  },
  {
    title: "SOS: Switch Off Stress",
    subtitle: "The Coreporation",
    thumbnail: sosThumbnail,

    category: "game",
    type: "Mobile Game",
    year: "2017",
    production: "AudioHead, The Coreporation",
    work: "Original Music, Game Development",
    description: "The SOS app is designed for you to Switch Off Stress with one-minute techniques that include much more than just deep breathing. The techniques are based on Sharon Seivert’s book about how to stop distress in its many manifestations in our day-to-day lives so it doesn’t keep us from moving forward. The application includes music to facilitate the user to get into the state of mind they need in order to break out of stress.",
    externalLink: "https://core.coachesconsole.com/tci-home.html",
    backgroundImage: carrossel1Background,
    extra: [
      {
        label: "Soundtrack Excerpt",
        options: {isIframe: true},
        value: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/342105080&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
      }
    ]
  },
  {
    title: "Detetives do Prédio Azul: O Filme",
    subtitle: "Globo Filmes",
    thumbnail: dpa1Thumbnail,

    category: "film",
    type: "Feature Film",
    year: "2017",
    production: "Paris Entretenimento; Gloob; Globo Filmes; Telecine",
    work: "Original Music",
    description: "The Blue Building Dectectives face their biggest case ever: to save their own building from destruction. They witness an almost perfect magical crime that dooms the Blue Building to an emergency demolition. The movie has currently passed the 1 million spectators mark since its release.",
    externalLink: "http://globofilmes.globo.com/filme/detetives-do-predio-azul/",
    backgroundImage: carrossel1Background,
    extra: [
      {
        label: "Soundtrack Excerpt",
        options: {isIframe: true},
        value: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/343596222&amp;color=168d81&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
      }
    ]
  },
  {
    title: "A Cognitive VR Experience",
    subtitle: "FLAGCX & MIT",
    thumbnail: cognitiveThumbnail,

    category: "game",
    type: "VR and Immersive Technologies",
    year: "2017",
    production: "FLAGCX & MIT",
    work: "360º Dynamic Audio for VR",
    description: "“A Cognitive VR Experience is an installation concept that uses a local multi-user environment at MIT Media Lab, in a warehouse scale ‘six degree of freedom’ experience, connected transcontinentally with Lobo in São Paulo in real time. There, a piano player with body tracking played live, and people could hang out in this VR library bar with Watson, with a number of different interactions. We also used haptic feedback, custom 3D printed controllers for unique input solutions and fluid interactions between users both on the real world and in its virtual counterpart through roomsync and sensor fusion algorithms. That means people can throw objects to each other in the real and virtual world at the same time. Our goal was to stretch the limits of VR and to inspire devs that would participate of a massive hackathon that took place from saturday night throughout sunday (last day of event) with the purpose of changing the world through technology and arts”",
    externalLink: "https://www.facebook.com/flagcx/photos/a.335923743114256.79858.164674870239145/1283126031727351/?type=3&theater",
    backgroundImage: carrossel1Background,
    extra: [
      {
        label: "Watch the Video",
        options: {isIframe: true},
        value: "https://www.youtube.com/embed/4JCVxIwdt1Q"
      }
    ]
  },
  {
    title: "Gogo's Motion",
    subtitle: "Disney & Panini",
    thumbnail: gogosThumbnail,

    category: "game",
    type: "Mobile Game",
    year: "2016",
    production: "Disney & Panini",
    work: "Original Music, Sound Design",
    description: "Disney and Panini joined forces to create the Disney Collection of Gogo’s Toys and collectible cards to make you and your family remember Disney and Pixar’s most beloved moments. To follow it’s collection of toys, Gogo’s released Gogo’s Motion: an iOS/Android app that you can use to create amazing Stop Motions using your smartphone so you can record your personal experiences playing with Gogo’s toys and share it with your friends.",
    backgroundImage: carrossel1Background
  },
  {
    title: "Olympic Games 2016 - Tom's Adventures",
    subtitle: "RIO 2016",
    thumbnail: tomsThumbnail,

    category: "game",
    type: "Mobile Game",
    year: "2016",
    production: "RIO 2016",
    work: "Sound Design",
    description: "Help Tom, mascot of the Rio 2016 Paralympic Games, find the Cariocas Sisters playing hide-and-seek around Rio de Janeiro, the Wonderful City. There are 24 super challenging levels in 4 different places to discover. Use Tom’s power and throw out creatives objects from his mane to overcome obstacles and finish the game.",
    backgroundImage: carrossel1Background
  },
  {
    title: "Repaired",
    subtitle: "Moio Pictures",
    thumbnail: repairedThumbnail,

    category: "film",
    type: "Short Film",
    year: "2016",
    production: "Moio Pictures",
    work: "Original Music, Sound Design",
    description: "Repaired (2016) is a short movie about two paintings that fall in love at a restoring house. Directed and written by Marcelo Barbosa, the short won 7 awards worldwide at Film Festivals, including Best Short in the São Paulo Times Film Festival and Best Drama Short in the Hollywood International Moving Pictures Film Festival.",
    externalLink: "http://g1.globo.com/fantastico/quadros/eles-decidem/",
    backgroundImage: carrossel1Background,
    extra: [
      {
        label: "Watch the Full Movie",
        options: {isIframe: true},
        value: "https://player.vimeo.com/video/171201370"
      },
      {
        label: "Soundtrack Excerpt",
        options: {isIframe: true},
        value: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/241724471&amp;color=168d81&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
      }
    ]
  },
  {
    title: "Life-Long Play with Moleskine & Toy Story",
    subtitle: "Pixar & Moleskine",
    thumbnail: lifelongThumbnail,

    category: "film",
    type: "Advertising",
    year: "2016",
    production: "Pixar & Moleskine",
    work: "Sound Design",
    description: "This Limited Edition notebook pays homage to the behind the scenes work carried out by illustrators and animators. Images on the cover are in fact silkscreen prints based on style guides designed by Disney/Pixar in new colors. The video is dedicated to the Limited Edition and to the theme of life long play, exploring the idea of keeping the inner child alive and while you may outgrow your toys you will never be too old to draw, color and live out your fantasies on paper. Moleskine invites you to keep the story alive on paper – to infinity and beyond!",
    externalLink: "https://www.youtube.com/watch?v=i0njQuA8wzQ",
    backgroundImage: carrossel1Background
  },
  {
    title: "São Paulo in HI-FI",
    subtitle: "Cigano Filmes",
    thumbnail: hifiThumbnail,

    category: "film",
    type: "Documentary Feature Film",
    year: "2016",
    production: "Cigano Filmes",
    work: "Sound Design",
    description: "A historic documentary that recalls the golden age of the gay night in São Paulo, making a trip to the 60’s, 70’s and 80’s – through memories and testimonies of the time, bringing the night clubs that seasoned, the stars, drag queens, heroes and even villains: from the military dictatorship to the aids outburst.",
    externalLink: "https://www.facebook.com/saopauloemhifi/",
    backgroundImage: carrossel1Background
  },
  {
    title: "They Decide",
    subtitle: "TV Globo",
    thumbnail: theyDecideThumbnail,

    category: "film",
    type: "TV Show",
    year: "2016",
    production: "Rede Globo",
    work: "Sound Design",
    description: "They Decide is a series based on the English “The Audience”, in which a group of people have their say on a life-changing decision someone is going through. The audience will follow the person wherever they go for a week, trying to learn closely what the decision involves. After that they will have to choose what they think is the best choice.",
    externalLink: "http://g1.globo.com/fantastico/quadros/eles-decidem/",
    backgroundImage: carrossel1Background,
    extra: [
      {
        label: "Soundtrack Excerpt",
        options: {isIframe: true},
        value: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/255096026%3Fsecret_token%3Ds-4GcUc&amp;color=168d81&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
      }
    ]
  },
  {
    title: "CBLOL 2016",
    subtitle: "RIOT Games",
    thumbnail: cblolThumbnail,

    category: "game",
    type: "Live Concert",
    year: "2016",
    production: "RIOT Games",
    work: "Sound Design for Holographic Projection and for Live Stream Interface",
    description: "Brazil’s biggest e-sport championship, League of Legends Brazilian Championship (CBLOL), had in 2016’s edition, a huge opening to celebrate the final match, held in Ginásio do Ibirapuera. The event had it all: live music with 3D projection, cosplay fights and live stream to the whole country in other stadiums, cinema theaters and social gatherings, so fans all over the country could experience the ultimate League of Legends event.",
    externalLink: "https://www.youtube.com/watch?v=FrUcCHx5kdI&t=1s",
    backgroundImage: carrossel1Background
  },
  {
    title: "Stronger Than The World",
    subtitle: "Globo Filmes",
    thumbnail: aldoThumbnail,

    category: "film",
    type: "Feature Film",
    year: "2016",
    production: "Paris Produções",
    work: "Musical Assistance",
    description: "Based on the true story of Brazil’s leading strength in fighting, José Aldo, the feature film shows the fighter’s will of overcoming obstacles. Fighting his way up from a hard life in Manaus, Aldo passes through many hardships until he is spotted by a Jiu-Jistu teacher who sees Aldo’s potential in fighting and begins to train him.",
    externalLink: "http://www.imdb.com/title/tt3918584/",
    backgroundImage: carrossel1Background
  },
  {
    title: "Carrossel 2",
    subtitle: "SBT Filmes",
    thumbnail: carrossel2Thumbnail,

    category: "film",
    type: "Feature Film",
    year: "2016",
    production: "Paris Produções",
    work: "Original Music",
    description: "The bad guys Gonzales and Gonzalito are out of prison and they want payback. For that they kidnapped Maria Joaquina and will only return her if the kids can pass through dangerous tasks they created. Carrossel 2 was the third highest-grossing national movie in 2016 beating the 2.5 million viewers mark.",
    externalLink: "http://www.imdb.com/title/tt5804126/",
    backgroundImage: carrossel1Background,
    extra: [
      {
        label: "Soundtrack Excerpt",
        options: {isIframe: true},
        value: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/256606161&amp;color=168d81&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
      }
    ]
  },
  {
    title: "Reencontro",
    subtitle: "LATAM",
    thumbnail: reencontroThumbnail,

    category: "film",
    type: "Short Film",
    year: "2016",
    production: "LATAM, directed by J. Brivilati",
    work: "Sound Design",
    description: "“We are innovating in communicating with our consumer, that wishes to have new stimuli and styles of language. This film is a mark in this way. We present a sensible story, where LATAM’s presence is totally integrated to the narrative, which connects the characters of the short film to the realization of their dreams – reinforcing our main goal as supporters of the 2016’s Olympic Games.”, comments Daniel Aguado, senior manager of Communication and Brand of LATAM",
    externalLink: "https://www.youtube.com/embed/aZP-NWQ9fNg",
    backgroundImage: carrossel1Background
  },
  {
    title: "Economia Brasileira",
    subtitle: "Cultura Maior",
    thumbnail: economiaThumbnail,

    category: "film",
    type: "TV Show",
    year: "2015",
    production: "Cultura Maior",
    work: "Original Music",
    description: "Former Brazilian presidents, ministers and leaders of Central Bank reveal the problems they faced, the hard decisions and their consequences. With economists, historians, journalists and businessmen, the cast talks, in ten episodes, the adventures and misfortunes of Brazil since 1492 with an economic eye. In its final episode, 41 important people discuss solutions for the future of Brazilian’s economy.",
    externalLink: "https://www.facebook.com/CulturaMaior/",
    backgroundImage: carrossel1Background,
    extra: [
      {
        label: "Soundtrack Excerpt",
        options: {isIframe: true},
        value: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/255122775&amp;color=168d81&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
      }
    ]
  },
  {
    title: "Genius Line",
    subtitle: "Deep Axe",
    thumbnail: geniusThumbnail,

    category: "game",
    type: "Mobile Game",
    year: "2015",
    production: "Deep Axe",
    work: "Original Music, Sound Design",
    description: "In this game, you are a crazy black line that goes up and down without control. Time your hits to get points as everything speeds up.",
    externalLink: "https://play.google.com/store/apps/details?id=com.madeitgames.colortap",
    backgroundImage: carrossel1Background,
    extra: [
      {
        label: "Soundtrack Excerpt",
        options: {isIframe: true},
        value: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/280685268&amp;color=168d81&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
      }
    ]
  },
  {
    title: "Carrossel: O Filme",
    subtitle: "SBT Filmes",
    thumbnail: carrossel1Thumbnail,

    category: "film",
    type: "Feature Film",
    year: "2015",
    production: "Paris Produções, Directed by Alexandre Boury and Mauricio Eça",
    work: "Original Music",
    description: "Based on the generation-wide brazilian phenomenon TV Series, Carrossel: O Filme is the revamp that brings the beloved characters to the big screen. Was the highest-grossing national movie in release week and third in full-year ranking.",
    externalLink: "http://www.imdb.com/title/tt4588050/",
    backgroundImage: carrossel1Background,
    extra: [
      {
        label: "Soundtrack Excerpt",
        options: {isIframe: true},
        value: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/255105564&amp;color=168d81&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
      }
    ]
  },
  {
    title: "Estação da Luz",
    subtitle: "SENAC Produções",
    thumbnail: estacaoDaLuzThumbnail,

    category: "film",
    type: "Short Film",
    year: "2012",
    production: "SENAC Produções",
    work: "Original Music",
    description: "Estação da Luz is a short film about a boy that daydreams about São Paulo's train station as grammar plays tricks on him.",
    backgroundImage: estacaoDaLuzBackground
  }
]