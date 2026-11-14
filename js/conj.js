/* Révisions de conjugaison du cycle 1.
   Un élément = un verbe (ou une notion) à un temps donné, avec 4 phrases à trou
   qui font tourner les personnes. Les identifiants (c1-k01...) sont stables.
   Dans une phrase : ___ marque le trou, (yo) / (tú)... indique la personne quand
   le sujet n'est pas exprimé. p = rang de la personne dans le tableau (0 = yo ... 5 = ellos). */
(function () {
  'use strict';
  var ENDINGS = {
    ar: ['o', 'as', 'a', 'amos', 'áis', 'an'],
    er: ['o', 'es', 'e', 'emos', 'éis', 'en'],
    ir: ['o', 'es', 'e', 'imos', 'ís', 'en']
  };
  function reg(inf) {
    var root = inf.slice(0, -2);
    return ENDINGS[inf.slice(-2)].map(function (e) { return root + e; });
  }
  var HABER = ['he', 'has', 'ha', 'hemos', 'habéis', 'han'];
  function perf(participle) { return HABER.map(function (h) { return h + ' ' + participle; }); }

  var SER = ['soy', 'eres', 'es', 'somos', 'sois', 'son'];
  var ESTAR = ['estoy', 'estás', 'está', 'estamos', 'estáis', 'están'];
  var TENER = ['tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen'];
  var IR = ['voy', 'vas', 'va', 'vamos', 'vais', 'van'];
  var HACER = ['hago', 'haces', 'hace', 'hacemos', 'hacéis', 'hacen'];
  var LEVANTARSE = ['me levanto', 'te levantas', 'se levanta', 'nos levantamos', 'os levantáis', 'se levantan'];
  var QUERER = ['quiero', 'quieres', 'quiere', 'queremos', 'queréis', 'quieren'];
  var PODER = ['puedo', 'puedes', 'puede', 'podemos', 'podéis', 'pueden'];
  var EMPEZAR = ['empiezo', 'empiezas', 'empieza', 'empezamos', 'empezáis', 'empiezan'];
  var IR_A = ['voy a', 'vas a', 'va a', 'vamos a', 'vais a', 'van a'];
  var SALIR = ['salgo', 'sales', 'sale', 'salimos', 'salís', 'salen'];

  window.CONJ = [
    // ----- Leçon 1
    {
      id: 'c1-k01', lesson: 'c1-l1', tense: 'present', title: 'Présent des verbes en -ar',
      rule: "Terminaisons : -o, -as, -a, -amos, -áis, -an.",
      cards: [
        { es: 'Nosotros ___ español en casa.', a: 'hablamos', inf: 'hablar', fr: "Nous parlons espagnol à la maison.", p: 3, forms: reg('hablar') },
        { es: '(yo) ___ en una oficina.', a: 'trabajo', inf: 'trabajar', fr: "Je travaille dans un bureau.", p: 0, forms: reg('trabajar') },
        { es: 'Lucía ___ la radio por la mañana.', a: 'escucha', inf: 'escuchar', fr: "Lucía écoute la radio le matin.", p: 2, forms: reg('escuchar') },
        { es: '¿(tú) ___ los domingos?', a: 'trabajas', inf: 'trabajar', fr: "Tu travailles le dimanche ?", p: 1, forms: reg('trabajar') }
      ]
    },
    {
      id: 'c1-k02', lesson: 'c1-l1', tense: 'present', title: 'Présent des verbes en -er',
      rule: "Terminaisons : -o, -es, -e, -emos, -éis, -en.",
      cards: [
        { es: '(yo) siempre ___ el periódico.', a: 'leo', inf: 'leer', fr: "Je lis toujours le journal.", p: 0, forms: reg('leer') },
        { es: 'Ellos ___ en casa.', a: 'comen', inf: 'comer', fr: "Ils mangent à la maison.", p: 5, forms: reg('comer') },
        { es: '¿Qué ___ (tú)?', a: 'lees', inf: 'leer', fr: "Qu'est-ce que tu lis ?", p: 1, forms: reg('leer') },
        { es: 'A veces (nosotros) ___ en la oficina.', a: 'comemos', inf: 'comer', fr: "Parfois nous mangeons au bureau.", p: 3, forms: reg('comer') }
      ]
    },
    {
      id: 'c1-k03', lesson: 'c1-l1', tense: 'present', title: 'Présent des verbes en -ir',
      rule: "Terminaisons : -o, -es, -e, -imos, -ís, -en.",
      cards: [
        { es: '(yo) ___ en Francia.', a: 'vivo', inf: 'vivir', fr: "Je vis en France.", p: 0, forms: reg('vivir') },
        { es: 'Mi familia ___ en Sevilla.', a: 'vive', inf: 'vivir', fr: "Ma famille vit à Séville.", p: 2, forms: reg('vivir') },
        { es: 'Nosotros ___ en Madrid.', a: 'vivimos', inf: 'vivir', fr: "Nous vivons à Madrid.", p: 3, forms: reg('vivir') },
        { es: '¿Dónde ___ (vosotros)?', a: 'vivís', inf: 'vivir', fr: "Où habitez-vous ? (à plusieurs personnes que l'on tutoie)", p: 4, forms: reg('vivir') }
      ]
    },
    {
      id: 'c1-k04', lesson: 'c1-l1', tense: 'present', title: 'Ser',
      rule: "Ser dit ce qu'on est : identité, nationalité, origine (ser de), métier.",
      cards: [
        { es: '(yo) ___ francés.', a: 'soy', inf: 'ser', fr: "Je suis français.", p: 0, forms: SER },
        { es: 'Lucía ___ periodista.', a: 'es', inf: 'ser', fr: "Lucía est journaliste.", p: 2, forms: SER },
        { es: 'Nosotros ___ de París.', a: 'somos', inf: 'ser', fr: "Nous sommes de Paris.", p: 3, forms: SER },
        { es: '¿(tú) ___ español?', a: 'eres', inf: 'ser', fr: "Tu es espagnol ?", p: 1, forms: SER }
      ]
    },
    {
      id: 'c1-k05', lesson: 'c1-l1', tense: 'present', title: 'Estar',
      rule: "Estar dit où l'on est et comment on va.",
      cards: [
        { es: '(yo) ___ en casa.', a: 'estoy', inf: 'estar', fr: "Je suis à la maison.", p: 0, forms: ESTAR },
        { es: 'Mi familia ___ en Sevilla.', a: 'está', inf: 'estar', fr: "Ma famille est à Séville.", p: 2, forms: ESTAR },
        { es: '¿Dónde ___ (tú)?', a: 'estás', inf: 'estar', fr: "Où es-tu ?", p: 1, forms: ESTAR },
        { es: 'Ellos ___ en la oficina.', a: 'están', inf: 'estar', fr: "Ils sont au bureau.", p: 5, forms: ESTAR }
      ]
    },
    {
      id: 'c1-k06', lesson: 'c1-l1', tense: 'present', title: 'Ser ou estar ?',
      rule: "Ser pour ce qu'on est (identité, métier, qualité) ; estar pour le lieu et l'état du moment.",
      cards: [
        { es: 'Madrid ___ en España.', a: 'está', inf: 'ser ou estar', fr: "Madrid est en Espagne." },
        { es: 'La noticia ___ importante.', a: 'es', inf: 'ser ou estar', fr: "La nouvelle est importante." },
        { es: '(yo) ___ periodista.', a: 'soy', inf: 'ser ou estar', fr: "Je suis journaliste." },
        { es: 'Nosotros ___ en Madrid.', a: 'estamos', inf: 'ser ou estar', fr: "Nous sommes à Madrid." }
      ]
    },
    // ----- Leçon 2
    {
      id: 'c1-k07', lesson: 'c1-l2', tense: 'present', title: 'Tener',
      rule: "Irrégulier : tengo, puis tienes, tiene, tienen avec la diphtongue.",
      cards: [
        { es: '(yo) ___ una reunión.', a: 'tengo', inf: 'tener', fr: "J'ai une réunion.", p: 0, forms: TENER },
        { es: 'Pablo ___ treinta años.', a: 'tiene', inf: 'tener', fr: "Pablo a trente ans.", p: 2, forms: TENER },
        { es: '¿(tú) ___ tiempo?', a: 'tienes', inf: 'tener', fr: "Tu as le temps ?", p: 1, forms: TENER },
        { es: 'Nosotros no ___ tiempo.', a: 'tenemos', inf: 'tener', fr: "Nous n'avons pas le temps.", p: 3, forms: TENER }
      ]
    },
    {
      id: 'c1-k08', lesson: 'c1-l2', tense: 'present', title: 'Ir',
      rule: "Ir + a + lieu ; « a + el » devient « al ».",
      cards: [
        { es: '(yo) ___ al trabajo en metro.', a: 'voy', inf: 'ir', fr: "Je vais au travail en métro.", p: 0, forms: IR },
        { es: 'Pablo ___ al gimnasio por la tarde.', a: 'va', inf: 'ir', fr: "Pablo va à la salle de sport l'après-midi.", p: 2, forms: IR },
        { es: '¿Adónde ___ (tú)?', a: 'vas', inf: 'ir', fr: "Où vas-tu ?", p: 1, forms: IR },
        { es: 'Nosotros ___ a Madrid una vez a la semana.', a: 'vamos', inf: 'ir', fr: "Nous allons à Madrid une fois par semaine.", p: 3, forms: IR }
      ]
    },
    {
      id: 'c1-k09', lesson: 'c1-l2', tense: 'present', title: 'Hacer',
      rule: "Irrégulier à la première personne : hago.",
      cards: [
        { es: '(yo) ___ café todos los días.', a: 'hago', inf: 'hacer', fr: "Je fais du café tous les jours.", p: 0, forms: HACER },
        { es: '¿Qué ___ (tú) esta noche?', a: 'haces', inf: 'hacer', fr: "Qu'est-ce que tu fais ce soir ?", p: 1, forms: HACER },
        { es: 'Pablo ___ la cena por la noche.', a: 'hace', inf: 'hacer', fr: "Pablo fait le dîner le soir.", p: 2, forms: HACER },
        { es: 'Ellos ___ la cena.', a: 'hacen', inf: 'hacer', fr: "Ils font le dîner.", p: 5, forms: HACER }
      ]
    },
    {
      id: 'c1-k10', lesson: 'c1-l2', tense: 'present', title: 'Verbes pronominaux',
      rule: "Le pronom (me, te, se, nos, os, se) se place avant le verbe conjugué.",
      cards: [
        { es: '(yo) ___ temprano.', a: 'me levanto', inf: 'levantarse', fr: "Je me lève tôt.", p: 0, forms: LEVANTARSE },
        { es: 'Pablo ___ a las siete.', a: 'se levanta', inf: 'levantarse', fr: "Pablo se lève à sept heures.", p: 2, forms: LEVANTARSE },
        { es: '¿A qué hora ___ (tú)?', a: 'te levantas', inf: 'levantarse', fr: "À quelle heure te lèves-tu ?", p: 1, forms: LEVANTARSE },
        { es: 'Nosotros ___ temprano todos los días.', a: 'nos levantamos', inf: 'levantarse', fr: "Nous nous levons tôt tous les jours.", p: 3, forms: LEVANTARSE }
      ]
    },
    // ----- Leçon 3
    {
      id: 'c1-k11', lesson: 'c1-l3', tense: 'present', title: 'Querer (e → ie)',
      rule: "Le e devient ie, sauf à nosotros et vosotros.",
      cards: [
        { es: '(yo) ___ leer el periódico.', a: 'quiero', inf: 'querer', fr: "Je veux lire le journal.", p: 0, forms: QUERER },
        { es: 'El Gobierno ___ una solución.', a: 'quiere', inf: 'querer', fr: "Le gouvernement veut une solution.", p: 2, forms: QUERER },
        { es: 'Nosotros ___ vivir en la ciudad.', a: 'queremos', inf: 'querer', fr: "Nous voulons vivre en ville.", p: 3, forms: QUERER },
        { es: '¿Qué ___ (tú)?', a: 'quieres', inf: 'querer', fr: "Que veux-tu ?", p: 1, forms: QUERER }
      ]
    },
    {
      id: 'c1-k12', lesson: 'c1-l3', tense: 'present', title: 'Poder (o → ue)',
      rule: "Le o devient ue, sauf à nosotros et vosotros.",
      cards: [
        { es: '(yo) no ___ ir.', a: 'puedo', inf: 'poder', fr: "Je ne peux pas y aller.", p: 0, forms: PODER },
        { es: 'Mucha gente no ___ pagar el alquiler.', a: 'puede', inf: 'poder', fr: "Beaucoup de gens ne peuvent pas payer le loyer.", p: 2, forms: PODER, note: "« La gente » est un singulier : la gente puede." },
        { es: '¿(tú) ___ empezar?', a: 'puedes', inf: 'poder', fr: "Tu peux commencer ?", p: 1, forms: PODER },
        { es: 'Nosotros no ___ empezar.', a: 'podemos', inf: 'poder', fr: "Nous ne pouvons pas commencer.", p: 3, forms: PODER }
      ]
    },
    {
      id: 'c1-k13', lesson: 'c1-l3', tense: 'present', title: 'Empezar (e → ie)',
      rule: "Le e du radical devient ie (empezar → empiezo), sauf à nosotros et vosotros.",
      cards: [
        { es: 'La reunión ___ a las nueve.', a: 'empieza', inf: 'empezar', fr: "La réunion commence à neuf heures.", p: 2, forms: EMPEZAR },
        { es: '(yo) ___ a trabajar temprano.', a: 'empiezo', inf: 'empezar', fr: "Je commence à travailler tôt.", p: 0, forms: EMPEZAR },
        { es: 'Nosotros ___ esta semana.', a: 'empezamos', inf: 'empezar', fr: "Nous commençons cette semaine.", p: 3, forms: EMPEZAR },
        { es: 'Las elecciones ___ esta semana.', a: 'empiezan', inf: 'empezar', fr: "Les élections commencent cette semaine.", p: 5, forms: EMPEZAR }
      ]
    },
    {
      id: 'c1-k14', lesson: 'c1-l3', tense: 'present', title: 'Hay ou está ?',
      rule: "Hay annonce qu'une chose existe (il y a) ; está et están situent une chose précise.",
      cards: [
        { es: '___ un nuevo decreto.', a: 'hay', inf: 'hay ou estar', fr: "Il y a un nouveau décret." },
        { es: 'El problema ___ en las ciudades.', a: 'está', inf: 'hay ou estar', fr: "Le problème est dans les villes." },
        { es: '___ muchas noticias en el periódico.', a: 'hay', inf: 'hay ou estar', fr: "Il y a beaucoup de nouvelles dans le journal." },
        { es: 'Los periódicos ___ en la oficina.', a: 'están', inf: 'hay ou estar', fr: "Les journaux sont au bureau." }
      ]
    },
    // ----- Leçon 4
    {
      id: 'c1-k15', lesson: 'c1-l4', tense: 'futur', title: 'Futur proche : ir a + infinitif',
      rule: "Ir conjugué + a + infinitif. Le « a » est obligatoire.",
      cards: [
        { es: 'Mañana (yo) ___ trabajar.', a: 'voy a', inf: 'ir a', fr: "Demain je vais travailler.", p: 0, forms: IR_A },
        { es: 'Mañana ___ llover.', a: 'va a', inf: 'ir a', fr: "Demain il va pleuvoir.", p: 2, forms: IR_A },
        { es: 'Nosotros ___ viajar el próximo fin de semana.', a: 'vamos a', inf: 'ir a', fr: "Nous allons voyager le week-end prochain.", p: 3, forms: IR_A },
        { es: '¿Qué ___ hacer (tú) luego?', a: 'vas a', inf: 'ir a', fr: "Qu'est-ce que tu vas faire ensuite ?", p: 1, forms: IR_A }
      ]
    },
    {
      id: 'c1-k16', lesson: 'c1-l4', tense: 'present', title: 'Salir',
      rule: "Irrégulier à la première personne : salgo.",
      cards: [
        { es: '(yo) ___ de casa temprano.', a: 'salgo', inf: 'salir', fr: "Je pars tôt de la maison.", p: 0, forms: SALIR },
        { es: 'El tren ___ a las diez.', a: 'sale', inf: 'salir', fr: "Le train part à dix heures.", p: 2, forms: SALIR },
        { es: 'Nosotros ___ de casa a las ocho.', a: 'salimos', inf: 'salir', fr: "Nous partons de la maison à huit heures.", p: 3, forms: SALIR },
        { es: '¿A qué hora ___ (tú)?', a: 'sales', inf: 'salir', fr: "À quelle heure pars-tu ?", p: 1, forms: SALIR }
      ]
    },
    // ----- Leçon 5
    {
      id: 'c1-k17', lesson: 'c1-l5', tense: 'passe', title: 'Passé composé régulier',
      rule: "Haber (he, has, ha, hemos, habéis, han) + participe en -ado ou -ido.",
      cards: [
        { es: 'Hoy (yo) ___ mucho.', a: 'he trabajado', inf: 'trabajar', fr: "Aujourd'hui j'ai beaucoup travaillé.", p: 0, forms: perf('trabajado') },
        { es: 'Carmen ___ con una amiga.', a: 'ha comido', inf: 'comer', fr: "Carmen a mangé avec une amie.", p: 2, forms: perf('comido') },
        { es: 'Nosotros todavía no ___.', a: 'hemos terminado', inf: 'terminar', fr: "Nous n'avons pas encore terminé.", p: 3, forms: perf('terminado') },
        { es: '¿(tú) ___ el periódico?', a: 'has comprado', inf: 'comprar', fr: "Tu as acheté le journal ?", p: 1, forms: perf('comprado') }
      ]
    },
    {
      id: 'c1-k18', lesson: 'c1-l5', tense: 'passe', title: 'Participes irréguliers',
      rule: "hacer → hecho, decir → dicho, ver → visto, escribir → escrito, volver → vuelto, abrir → abierto.",
      cards: [
        { es: '¿Qué ___ (tú) hoy?', a: 'has hecho', inf: 'hacer', fr: "Qu'est-ce que tu as fait aujourd'hui ?", p: 1, forms: perf('hecho') },
        { es: '(yo) ___ un mensaje.', a: 'he escrito', inf: 'escribir', fr: "J'ai écrit un message.", p: 0, forms: perf('escrito') },
        { es: 'Nosotros ___ una película esta semana.', a: 'hemos visto', inf: 'ver', fr: "Nous avons vu un film cette semaine.", p: 3, forms: perf('visto') },
        { es: 'La directora ___: «¡Excelente trabajo!».', a: 'ha dicho', inf: 'decir', fr: "La directrice a dit : « Excellent travail ! »", p: 2, forms: perf('dicho') }
      ]
    },
    {
      id: 'c1-k19', lesson: 'c1-l5', tense: 'passe', title: 'Toujours haber : « je suis allé »',
      rule: "Jamais « être » comme auxiliaire, et le participe ne s'accorde pas.",
      cards: [
        { es: 'Hoy (yo) ___ al trabajo.', a: 'he ido', inf: 'ir', fr: "Aujourd'hui je suis allé au travail.", p: 0, forms: perf('ido') },
        { es: 'Carmen ___ al supermercado.', a: 'ha ido', inf: 'ir', fr: "Carmen est allée au supermarché.", p: 2, forms: perf('ido') },
        { es: 'Nosotros no ___ al cine esta semana.', a: 'hemos ido', inf: 'ir', fr: "Nous ne sommes pas allés au cinéma cette semaine.", p: 3, forms: perf('ido') },
        { es: 'Mis amigos ___ temprano.', a: 'han llegado', inf: 'llegar', fr: "Mes amis sont arrivés tôt.", p: 5, forms: perf('llegado') }
      ]
    },
    // ----- Leçon 6
    {
      id: 'c1-k20', lesson: 'c1-l6', tense: 'passe', title: 'Passé composé : les verbes de la presse',
      rule: "Haber + participe : ha subido, ha bajado, ha anunciado.",
      cards: [
        { es: 'Los precios ___ este año.', a: 'han subido', inf: 'subir', fr: "Les prix ont augmenté cette année.", p: 5, forms: perf('subido') },
        { es: 'El Gobierno ___ un plan.', a: 'ha anunciado', inf: 'anunciar', fr: "Le gouvernement a annoncé un plan.", p: 2, forms: perf('anunciado') },
        { es: 'La empresa ___ mucho dinero.', a: 'ha ganado', inf: 'ganar', fr: "L'entreprise a gagné beaucoup d'argent.", p: 2, forms: perf('ganado') },
        { es: '(yo) ___ el tren.', a: 'he perdido', inf: 'perder', fr: "J'ai raté le train.", p: 0, forms: perf('perdido') }
      ]
    },
    // ----- Leçon 7
    {
      id: 'c1-k21', lesson: 'c1-l7', tense: 'present', title: 'Gusta ou gustan ?',
      rule: "Gusta devant une chose ou un verbe ; gustan devant plusieurs choses.",
      cards: [
        { es: 'Me ___ leer.', a: 'gusta', inf: 'gustar', fr: "J'aime lire." },
        { es: 'No me ___ las malas noticias.', a: 'gustan', inf: 'gustar', fr: "Je n'aime pas les mauvaises nouvelles." },
        { es: '¿Te ___ la música?', a: 'gusta', inf: 'gustar', fr: "Tu aimes la musique ?" },
        { es: 'Nos ___ los periódicos.', a: 'gustan', inf: 'gustar', fr: "Nous aimons les journaux." }
      ]
    },
    {
      id: 'c1-k22', lesson: 'c1-l7', tense: 'mix', title: 'Les trois temps du cycle',
      rule: "Présent pour l'habitude, ir a + infinitif pour demain, passé composé pour aujourd'hui et cette semaine.",
      cards: [
        { es: 'Todos los días (yo) ___ en casa.', a: 'como', inf: 'comer', fr: "Tous les jours je mange à la maison.", p: 0, forms: reg('comer') },
        { es: 'Mañana (yo) ___ en un restaurante.', a: ['voy a comer', 'como'], inf: 'comer', fr: "Demain je vais manger au restaurant.", p: 0, forms: IR_A.map(function (f) { return f + ' comer'; }) },
        { es: 'Hoy (yo) ya ___ con un amigo.', a: 'he comido', inf: 'comer', fr: "Aujourd'hui j'ai déjà mangé avec un ami.", p: 0, forms: perf('comido') },
        { es: 'Esta semana Luis ___ un artículo muy bueno.', a: 'ha leído', inf: 'leer', fr: "Cette semaine Luis a lu un très bon article.", p: 2, forms: perf('leído') }
      ]
    }
  ];
})();
