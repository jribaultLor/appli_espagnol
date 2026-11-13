/* Contenu du cycle 1. Chaque identifiant (c1-l1-w1...) est stable : la progression
   enregistrée s'appuie dessus, ne pas les renuméroter. */
window.COURSE = {
  cycle: 1,
  title: 'Cycle 1',
  lessons: [
    {
      id: 'c1-l1',
      title: 'Se présenter et parler de sa journée',
      grammarTitle: 'Le présent régulier, ser et estar',
      canDo: 'Je peux me présenter et dire ce que je fais d\'habitude.',
      words: [
        { id: 'c1-l1-w1', es: 'trabajar', fr: 'travailler', exEs: 'Trabajo en una oficina.', exFr: 'Je travaille dans un bureau.' },
        { id: 'c1-l1-w2', es: 'vivir', fr: 'vivre, habiter', exEs: 'Vivimos en Francia.', exFr: 'Nous vivons en France.' },
        { id: 'c1-l1-w3', es: 'leer', fr: 'lire', exEs: 'Lees mucho.', exFr: 'Tu lis beaucoup.' },
        { id: 'c1-l1-w4', es: 'la noticia', fr: 'la nouvelle, l\'information', exEs: 'Es una noticia importante.', exFr: 'C\'est une nouvelle importante.' },
        { id: 'c1-l1-w5', es: 'el periódico', fr: 'le journal (la presse)', exEs: 'Leo el periódico en casa.', exFr: 'Je lis le journal à la maison.' },
        { id: 'c1-l1-w6', es: 'hablar', fr: 'parler', exEs: 'Hablo un poco de español.', exFr: 'Je parle un peu espagnol.' },
        { id: 'c1-l1-w7', es: 'comer', fr: 'manger, déjeuner', exEs: 'Comemos en casa.', exFr: 'Nous mangeons à la maison.' },
        { id: 'c1-l1-w8', es: 'escuchar', fr: 'écouter', exEs: 'Escucho la radio.', exFr: 'J\'écoute la radio.' },
        { id: 'c1-l1-w9', es: 'la casa', fr: 'la maison', exEs: 'Estoy en casa.', exFr: 'Je suis à la maison.' },
        { id: 'c1-l1-w10', es: 'el día', fr: 'le jour, la journée', exEs: 'Es un día importante.', exFr: 'C\'est un jour important.' }
      ],
      expressions: [
        { id: 'c1-l1-e1', es: 'siempre', fr: 'toujours', exEs: 'Siempre leo las noticias.', exFr: 'Je lis toujours les nouvelles.' },
        { id: 'c1-l1-e2', es: 'nunca', fr: 'jamais', exEs: 'Nunca trabajo los domingos.', exFr: 'Je ne travaille jamais le dimanche.' },
        { id: 'c1-l1-e3', es: 'a veces', fr: 'parfois', exEs: 'A veces como en casa.', exFr: 'Parfois je mange à la maison.' }
      ],
      passive: [
        ['la familia', 'la famille'], ['la radio', 'la radio'], ['la televisión', 'la télévision'],
        ['el teléfono', 'le téléphone'], ['la información', 'l\'information'], ['importante', 'important'],
        ['nacional', 'national'], ['internacional', 'international'], ['la política', 'la politique'],
        ['la economía', 'l\'économie'], ['la oficina', 'le bureau']
      ],
      reading: {
        title: 'Lucía, periodista',
        text: 'Lucía es periodista. Es española y vive en Madrid, pero su familia está en Sevilla. Trabaja en un periódico nacional. Por la mañana, siempre lee las noticias en el teléfono y escucha la radio. A veces come en la oficina con sus compañeros. Nunca trabaja los domingos: ese día está en casa y habla por teléfono con su madre. Para Lucía, la información es muy importante.',
        help: [
          ['periodista', 'journaliste'], ['pero', 'mais'], ['por la mañana', 'le matin'], ['escucha', 'elle écoute'],
          ['come', 'elle mange'], ['sus compañeros', 'ses collègues'], ['los domingos', 'le dimanche (tous les dimanches)'], ['con', 'avec'], ['para', 'pour'],
          ['ese día', 'ce jour-là'], ['su madre', 'sa mère'], ['muy', 'très']
        ],
        questions: [
          { q: 'Où vit Lucía ?', choices: ['À Séville', 'À Madrid', 'À Barcelone'], answer: 1, why: '« Vive en Madrid ». C\'est sa famille qui est à Séville.' },
          { q: 'Que fait-elle toujours le matin ?', choices: ['Elle lit les nouvelles', 'Elle mange au bureau', 'Elle téléphone à sa mère'], answer: 0, why: '« Por la mañana, siempre lee las noticias ».' },
          { q: 'Quel jour ne travaille-t-elle jamais ?', choices: ['Le lundi', 'Le samedi', 'Le dimanche'], answer: 2, why: '« Nunca trabaja los domingos ».' }
        ]
      },
      grammar: [
        '<h3>On ne dit pas le sujet</h3>',
        '<p>En espagnol, la terminaison du verbe suffit : <b>Trabajo</b> = je travaille. On ajoute <i>yo, tú, ella…</i> seulement pour insister.</p><p>Pour vouvoyer : <b>usted</b> (une personne) et <b>ustedes</b> (plusieurs), avec les formes de <i>él</i> et de <i>ellos</i>.</p>',
        '<h3>Le présent des verbes réguliers</h3>',
        '<div class="tablewrap"><table><thead><tr><th></th><th>hablar<br><small>parler</small></th><th>comer<br><small>manger</small></th><th>vivir<br><small>vivre</small></th></tr></thead><tbody>',
        '<tr><td>yo</td><td>habl<b>o</b></td><td>com<b>o</b></td><td>viv<b>o</b></td></tr>',
        '<tr><td>tú</td><td>habl<b>as</b></td><td>com<b>es</b></td><td>viv<b>es</b></td></tr>',
        '<tr><td>él, ella</td><td>habl<b>a</b></td><td>com<b>e</b></td><td>viv<b>e</b></td></tr>',
        '<tr><td>nosotros</td><td>habl<b>amos</b></td><td>com<b>emos</b></td><td>viv<b>imos</b></td></tr>',
        '<tr><td>vosotros</td><td>habl<b>áis</b></td><td>com<b>éis</b></td><td>viv<b>ís</b></td></tr>',
        '<tr><td>ellos, ellas</td><td>habl<b>an</b></td><td>com<b>en</b></td><td>viv<b>en</b></td></tr>',
        '</tbody></table></div>',
        '<h3>Deux verbes « être »</h3>',
        '<div class="tablewrap"><table><thead><tr><th></th><th>ser<br><small>ce qu\'on est</small></th><th>estar<br><small>où et comment on est</small></th></tr></thead><tbody>',
        '<tr><td>yo</td><td>soy</td><td>estoy</td></tr><tr><td>tú</td><td>eres</td><td>estás</td></tr>',
        '<tr><td>él, ella</td><td>es</td><td>está</td></tr><tr><td>nosotros</td><td>somos</td><td>estamos</td></tr>',
        '<tr><td>vosotros</td><td>sois</td><td>estáis</td></tr><tr><td>ellos, ellas</td><td>son</td><td>están</td></tr>',
        '</tbody></table></div>',
        '<p><b>Ser</b> pour l\'identité, la nationalité, le métier : <i>Lucía <b>es</b> periodista.</i><br><b>Estar</b> pour le lieu et l\'état du moment : <i>Lucía <b>está</b> en Madrid.</i></p>',
        '<h3>Le piège du jour</h3>',
        '<p><b>Nunca</b> placé avant le verbe remplace « ne… jamais » à lui seul : <i><b>Nunca</b> trabajo los domingos.</i> Pas de <i>no</i>. Placé après le verbe, il en faut un : <i><b>No</b> trabajo <b>nunca</b>.</i></p>'
      ].join(''),
      listening: [
        { id: 'c1-l1-o1', es: 'Vivo en Francia y trabajo en una oficina.', fr: ['Je vis en France et je travaille dans un bureau.', 'J\'habite en France et je travaille dans un bureau.'] },
        { id: 'c1-l1-o2', es: 'Lucía siempre lee las noticias por la mañana.', fr: ['Lucía lit toujours les nouvelles le matin.', 'Lucía lit toujours les informations le matin.', 'Lucía lit toujours les infos le matin.', 'Lucía lit toujours les actualités le matin.', 'Le matin, Lucía lit toujours les nouvelles.', 'Le matin, Lucía lit toujours les informations.', 'Le matin, Lucía lit toujours les infos.', 'Le matin, Lucía lit toujours les actualités.'] },
        { id: 'c1-l1-o3', es: 'A veces comemos en casa.', fr: ['Parfois nous mangeons à la maison.', 'Parfois on mange à la maison.', 'Nous mangeons parfois à la maison.', 'On mange parfois à la maison.', 'Quelquefois nous mangeons à la maison.', 'Parfois nous mangeons chez nous.'] }
      ],
      writing: [
        { id: 'c1-l1-x1', fr: 'Je travaille à Paris.', es: ['Trabajo en París.', 'Yo trabajo en París.'], hint: 'Pour dire où l\'on est ou où l\'on travaille : « en » (en París).' },
        { id: 'c1-l1-x2', fr: 'Nous lisons le journal.', es: ['Leemos el periódico.', 'Nosotros leemos el periódico.', 'Nosotras leemos el periódico.'] },
        { id: 'c1-l1-x3', fr: 'Je suis français et je vis en France.', es: ['Soy francés y vivo en Francia.', 'Soy francesa y vivo en Francia.', 'Yo soy francés y vivo en Francia.', 'Yo soy francesa y vivo en Francia.'], hint: 'Français = francés ; française = francesa.' },
        { id: 'c1-l1-x4', fr: 'Parfois, je lis les nouvelles.', es: ['A veces leo las noticias.', 'Leo las noticias a veces.', 'A veces yo leo las noticias.', 'Yo leo las noticias a veces.', 'Yo a veces leo las noticias.'] }
      ],
      speaking: [
        { id: 'c1-l1-p1', fr: 'Je vis en France.', es: ['Vivo en Francia.', 'Yo vivo en Francia.'] },
        { id: 'c1-l1-p2', fr: 'Je ne travaille jamais le dimanche.', es: ['Nunca trabajo los domingos.', 'Nunca trabajo el domingo.', 'No trabajo nunca los domingos.', 'No trabajo nunca el domingo.', 'Yo nunca trabajo los domingos.', 'Yo nunca trabajo el domingo.', 'Yo no trabajo nunca los domingos.', 'Yo no trabajo nunca el domingo.'] },
        { id: 'c1-l1-p3', fr: 'Le journal est important.', es: ['El periódico es importante.'] }
      ]
    },
    {
      id: 'c1-l2',
      title: 'Ma routine et mes horaires',
      grammarTitle: 'Tener, ir, hacer et les verbes pronominaux',
      canDo: 'Je peux décrire ma journée et dire à quelle fréquence je fais les choses.',
      words: [
        { id: 'c1-l2-w1', es: 'la mañana', fr: 'le matin', exEs: 'Trabajo por la mañana.', exFr: 'Je travaille le matin.' },
        { id: 'c1-l2-w2', es: 'la noche', fr: 'le soir, la nuit', exEs: 'Leo por la noche.', exFr: 'Je lis le soir.' },
        { id: 'c1-l2-w3', es: 'temprano', fr: 'tôt', exEs: 'Me levanto temprano.', exFr: 'Je me lève tôt.' },
        { id: 'c1-l2-w4', es: 'la semana', fr: 'la semaine', exEs: 'Esta semana tengo mucho trabajo.', exFr: 'Cette semaine j\'ai beaucoup de travail.' },
        { id: 'c1-l2-w5', es: 'la hora', fr: 'l\'heure', exEs: '¿Qué hora es?', exFr: 'Quelle heure est-il ?' },
        { id: 'c1-l2-w6', es: 'levantarse', fr: 'se lever', exEs: 'Me levanto a las siete.', exFr: 'Je me lève à sept heures.' },
        { id: 'c1-l2-w7', es: 'el trabajo', fr: 'le travail', exEs: 'Voy al trabajo en metro.', exFr: 'Je vais au travail en métro.' },
        { id: 'c1-l2-w8', es: 'el tiempo', fr: 'le temps (qui passe)', exEs: 'No tengo tiempo.', exFr: 'Je n\'ai pas le temps.' },
        { id: 'c1-l2-w9', es: 'la tarde', fr: 'l\'après-midi', exEs: 'Por la tarde voy al gimnasio.', exFr: 'L\'après-midi, je vais à la salle de sport.' },
        { id: 'c1-l2-w10', es: 'el año', fr: 'l\'an, l\'année', exEs: 'Tengo treinta años.', exFr: 'J\'ai trente ans.' }
      ],
      expressions: [
        { id: 'c1-l2-e1', es: 'una vez', fr: 'une fois', exEs: 'Voy a Madrid una vez a la semana.', exFr: 'Je vais à Madrid une fois par semaine.' },
        { id: 'c1-l2-e2', es: 'todos los días', fr: 'tous les jours', exEs: 'Hago café todos los días.', exFr: 'Je fais du café tous les jours.' },
        { id: 'c1-l2-e3', es: 'ya', fr: 'déjà', exEs: 'Pablo ya está en casa.', exFr: 'Pablo est déjà à la maison.' }
      ],
      passive: [
        ['la rutina', 'la routine'], ['el minuto', 'la minute'], ['el momento', 'le moment'],
        ['el metro', 'le métro'], ['el autobús', 'l\'autobus'], ['el tren', 'le train'],
        ['la universidad', 'l\'université'], ['el restaurante', 'le restaurant'], ['normalmente', 'd\'habitude'],
        ['el programa', 'le programme'], ['el gimnasio', 'la salle de sport'], ['la reunión', 'la réunion']
      ],
      reading: {
        title: 'Un día de Pablo',
        text: 'Pablo tiene treinta años y vive en Valencia. Todos los días se levanta temprano, a las siete de la mañana. Hace café y va al trabajo en metro. Tiene una reunión una vez a la semana, los lunes. Por la tarde, a veces va al gimnasio. Por la noche hace la cena y escucha las noticias en la radio. A las once ya está en la cama. Durante la semana, nunca tiene tiempo para leer el periódico.',
        help: [
          ['treinta años', 'trente ans'], ['se levanta', 'il se lève'], ['a las siete', 'à sept heures'],
          ['los lunes', 'le lundi (tous les lundis)'], ['por la tarde', 'l\'après-midi'], ['la cena', 'le dîner'],
          ['a las once', 'à onze heures'], ['la cama', 'le lit'], ['durante', 'pendant'], ['tiempo para', 'le temps de']
        ],
        questions: [
          { q: 'À quelle heure Pablo se lève-t-il ?', choices: ['À six heures', 'À sept heures', 'À onze heures'], answer: 1, why: '« Se levanta temprano, a las siete de la mañana ».' },
          { q: 'Comment va-t-il au travail ?', choices: ['En métro', 'En train', 'En bus'], answer: 0, why: '« Va al trabajo en metro ».' },
          { q: 'À quelle fréquence a-t-il une réunion ?', choices: ['Tous les jours', 'Jamais', 'Une fois par semaine'], answer: 2, why: '« Una vez a la semana, los lunes ».' }
        ]
      },
      grammar: [
        '<h3>Trois verbes irréguliers indispensables</h3>',
        '<div class="tablewrap"><table><thead><tr><th></th><th>tener<br><small>avoir</small></th><th>ir<br><small>aller</small></th><th>hacer<br><small>faire</small></th></tr></thead><tbody>',
        '<tr><td>yo</td><td><b>tengo</b></td><td><b>voy</b></td><td><b>hago</b></td></tr>',
        '<tr><td>tú</td><td>tienes</td><td>vas</td><td>haces</td></tr>',
        '<tr><td>él, ella</td><td>tiene</td><td>va</td><td>hace</td></tr>',
        '<tr><td>nosotros</td><td>tenemos</td><td>vamos</td><td>hacemos</td></tr>',
        '<tr><td>vosotros</td><td>tenéis</td><td>vais</td><td>hacéis</td></tr>',
        '<tr><td>ellos, ellas</td><td>tienen</td><td>van</td><td>hacen</td></tr>',
        '</tbody></table></div>',
        '<p>Avec <b>ir</b>, on dit <b>a</b> + lieu : <i>Voy <b>a</b> Madrid.</i> Devant <i>el</i>, « a + el » devient <b>al</b> : <i>Voy <b>al</b> trabajo.</i></p>',
        '<h3>Les verbes pronominaux</h3>',
        '<p><b>Levantarse</b> = se lever. Comme en français, le pronom se place avant le verbe conjugué (<i>me levanto</i>) ; à l\'infinitif, il se colle à la fin (<i>levantarse</i>).</p>',
        '<div class="tablewrap"><table><tbody>',
        '<tr><td>yo</td><td><b>me</b> levanto</td><td>nosotros</td><td><b>nos</b> levantamos</td></tr>',
        '<tr><td>tú</td><td><b>te</b> levantas</td><td>vosotros</td><td><b>os</b> levantáis</td></tr>',
        '<tr><td>él, ella</td><td><b>se</b> levanta</td><td>ellos, ellas</td><td><b>se</b> levantan</td></tr>',
        '</tbody></table></div>',
        '<h3>Les pièges du jour</h3>',
        '<p>« Le matin », « le soir » se disent <b>por la</b> mañana, <b>por la</b> noche.<br>« Une fois <i>par</i> semaine » se dit una vez <b>a la</b> semana.</p>'
      ].join(''),
      listening: [
        { id: 'c1-l2-o1', es: 'Todos los días me levanto temprano.', fr: ['Tous les jours je me lève tôt.', 'Je me lève tôt tous les jours.', 'Chaque jour je me lève tôt.', 'Je me lève tôt chaque jour.'] },
        { id: 'c1-l2-o2', es: 'Tengo una reunión una vez a la semana.', fr: ['J\'ai une réunion une fois par semaine.'] },
        { id: 'c1-l2-o3', es: 'Pablo ya está en casa.', fr: ['Pablo est déjà à la maison.', 'Pablo est déjà chez lui.'] }
      ],
      writing: [
        { id: 'c1-l2-x1', fr: 'Je vais au travail tous les jours.', es: ['Voy al trabajo todos los días.', 'Todos los días voy al trabajo.', 'Yo voy al trabajo todos los días.', 'Yo todos los días voy al trabajo.', 'Cada día voy al trabajo.', 'Voy al trabajo cada día.'] },
        { id: 'c1-l2-x2', fr: 'Je me lève tôt le matin.', es: ['Me levanto temprano por la mañana.', 'Por la mañana me levanto temprano.', 'Yo me levanto temprano por la mañana.', 'Me levanto pronto por la mañana.', 'Por la mañana me levanto pronto.'], hint: '« Le matin » = por la mañana.' },
        { id: 'c1-l2-x3', fr: 'Elle a une réunion cette semaine.', es: ['Tiene una reunión esta semana.', 'Ella tiene una reunión esta semana.', 'Esta semana tiene una reunión.', 'Esta semana ella tiene una reunión.'], hint: '« Cette » = esta.' },
        { id: 'c1-l2-x4', fr: 'Qu\'est-ce que tu fais ce soir ?', es: ['¿Qué haces esta noche?', '¿Qué haces tú esta noche?', '¿Tú qué haces esta noche?'], hint: '« Qu\'est-ce que » = qué ; « ce soir » = esta noche.' }
      ],
      speaking: [
        { id: 'c1-l2-p1', fr: 'Je vais à Madrid une fois par semaine.', es: ['Voy a Madrid una vez a la semana.', 'Voy a Madrid una vez por semana.', 'Yo voy a Madrid una vez a la semana.'] },
        { id: 'c1-l2-p2', fr: 'Tu te lèves tôt ?', es: ['¿Te levantas temprano?', '¿Tú te levantas temprano?'] },
        { id: 'c1-l2-p3', fr: 'Je fais du café tous les jours.', es: ['Hago café todos los días.', 'Todos los días hago café.', 'Yo hago café todos los días.'] }
      ]
    },
    {
      id: 'c1-l3',
      title: 'Lire les titres de la presse',
      grammarTitle: 'Les verbes à diphtongue, hay et está',
      canDo: "Je peux comprendre l'essentiel d'un titre de presse simple.",
      words: [
        { id: 'c1-l3-w1', es: 'el gobierno', fr: "le gouvernement", exEs: 'El Gobierno quiere un cambio.', exFr: "Le gouvernement veut un changement." },
        { id: 'c1-l3-w2', es: 'el país', fr: "le pays", exEs: 'España es un país de Europa.', exFr: "L'Espagne est un pays d'Europe." },
        { id: 'c1-l3-w3', es: 'la ciudad', fr: "la ville", exEs: 'Vivo en una ciudad grande.', exFr: "Je vis dans une grande ville." },
        { id: 'c1-l3-w4', es: 'el precio', fr: "le prix", exEs: 'Los precios suben.', exFr: "Les prix montent." },
        { id: 'c1-l3-w5', es: 'la gente', fr: "les gens", exEs: 'La gente quiere trabajar.', exFr: "Les gens veulent travailler." },
        { id: 'c1-l3-w6', es: 'querer', fr: "vouloir", exEs: 'Quiero leer el periódico.', exFr: "Je veux lire le journal." },
        { id: 'c1-l3-w7', es: 'poder', fr: "pouvoir", exEs: 'No puedo ir.', exFr: "Je ne peux pas y aller." },
        { id: 'c1-l3-w8', es: 'empezar', fr: "commencer", exEs: 'La reunión empieza a las nueve.', exFr: "La réunion commence à neuf heures." },
        { id: 'c1-l3-w9', es: 'nuevo', fr: "nouveau", exEs: 'Hay un nuevo gobierno.', exFr: "Il y a un nouveau gouvernement." },
        { id: 'c1-l3-w10', es: 'hay', fr: "il y a", exEs: 'Hay muchas noticias.', exFr: "Il y a beaucoup de nouvelles." }
      ],
      expressions: [
        { id: 'c1-l3-e1', es: 'según', fr: "selon", exEs: 'Según el periódico, hay una crisis.', exFr: "Selon le journal, il y a une crise." },
        { id: 'c1-l3-e2', es: 'también', fr: "aussi", exEs: 'También hay elecciones.', exFr: "Il y a aussi des élections." },
        { id: 'c1-l3-e3', es: 'todavía', fr: "encore (toujours)", exEs: 'Todavía vivo en Madrid.', exFr: "Je vis encore à Madrid." }
      ],
      passive: [
        ['el presidente', "le président"], ['la ministra', "la ministre"], ['la crisis', "la crise"],
        ['las elecciones', "les élections"], ['el parlamento', "le parlement"], ['el problema', "le problème"],
        ['la solución', "la solution"], ['la situación', "la situation"], ['el conflicto', "le conflit"],
        ['europeo', "européen"], ['público', "public"], ['la decisión', "la décision"]
      ],
      reading: {
        title: 'La vivienda en los titulares',
        source: "Idealista (prix des loyers, octobre 2026) ; décret sur les loyers validé par le Congrès (novembre 2026) ; prévisions de Solvia (novembre 2026).",
        text: 'Hay muchas noticias sobre la vivienda en el periódico. Según el portal Idealista, el precio medio del alquiler en España es de 15,1 euros por metro cuadrado en octubre, un 5,6 % más que hace un año. Hay un nuevo decreto: el alquiler de un contrato de vivienda habitual solo puede subir un 2 % al año hasta finales de 2027. El Congreso aprueba el decreto. Según la empresa Solvia, los precios del alquiler todavía pueden subir entre un 5 % y un 8 % en un año.',
        help: [
          ['los titulares', "les titres (de la presse)"], ['sobre', "sur, au sujet de"], ['la vivienda', "le logement"],
          ['el portal', "le site (portail immobilier)"], ['medio', "moyen"], ['el alquiler', "le loyer"],
          ['por metro cuadrado', "par mètre carré"], ['más que hace un año', "de plus qu'il y a un an"],
          ['vivienda habitual', "résidence principale"], ['solo', "seulement"], ['subir', "augmenter"], ['al año', "par an"],
          ['hasta finales de', "jusqu'à la fin de"], ['el Congreso', "le Congrès (la chambre des députés)"],
          ['aprueba', "approuve"], ['la empresa', "l'entreprise"]
        ],
        questions: [
          { q: "Quel est le prix moyen du loyer en Espagne, selon Idealista ?", choices: ["15,1 euros par mètre carré", "5,6 euros par mètre carré", "2 euros par mètre carré"], answer: 0, why: "« El precio medio del alquiler en España es de 15,1 euros por metro cuadrado ». Le 5,6 % est la hausse sur un an." },
          { q: "Que prévoit le nouveau décret ?", choices: ["Les loyers vont baisser de 2 %", "Le loyer d'un contrat ne peut augmenter que de 2 % par an", "Les loyers ne peuvent plus augmenter du tout"], answer: 1, why: "« Solo puede subir un 2 % al año hasta finales de 2027 »." },
          { q: "Que prévoit l'entreprise Solvia ?", choices: ["Les prix des loyers vont baisser", "Les prix des loyers ne vont plus bouger", "Les prix des loyers peuvent encore augmenter"], answer: 2, why: "« Los precios del alquiler todavía pueden subir entre un 5 % y un 8 % en un año »." }
        ]
      },
      grammar: `
<h3>Les verbes à diphtongue</h3>
<p>Dans certains verbes, la voyelle du radical se dédouble quand elle porte l'accent : <b>e → ie</b>, <b>o → ue</b>. Les formes <i>nosotros</i> et <i>vosotros</i> ne changent pas.</p>
<div class="tablewrap"><table><thead><tr><th></th><th>querer<br><small>vouloir</small></th><th>poder<br><small>pouvoir</small></th><th>empezar<br><small>commencer</small></th></tr></thead><tbody>
<tr><td>yo</td><td>qu<b>ie</b>ro</td><td>p<b>ue</b>do</td><td>emp<b>ie</b>zo</td></tr>
<tr><td>tú</td><td>qu<b>ie</b>res</td><td>p<b>ue</b>des</td><td>emp<b>ie</b>zas</td></tr>
<tr><td>él, ella</td><td>qu<b>ie</b>re</td><td>p<b>ue</b>de</td><td>emp<b>ie</b>za</td></tr>
<tr><td>nosotros</td><td>queremos</td><td>podemos</td><td>empezamos</td></tr>
<tr><td>vosotros</td><td>queréis</td><td>podéis</td><td>empezáis</td></tr>
<tr><td>ellos, ellas</td><td>qu<b>ie</b>ren</td><td>p<b>ue</b>den</td><td>emp<b>ie</b>zan</td></tr>
</tbody></table></div>
<p>Même modèle : <i>pensar</i> (pienso), <i>volver</i> (vuelvo), <i>encontrar</i> (encuentro).</p>
<h3>Hay ou está ?</h3>
<p><b>Hay</b> = « il y a ». Il ne change jamais et annonce quelque chose de nouveau : <i><b>Hay</b> un problema. <b>Hay</b> elecciones.</i></p>
<p><b>Está / están</b> situe quelque chose de précis, déjà connu : <i>El problema <b>está</b> en las ciudades.</i></p>
<h3>Le piège du jour</h3>
<p><b>La gente</b> est un singulier : <i>La gente <b>quiere</b> una solución</i> (les gens veulent).</p>`,
      listening: [
        { id: 'c1-l3-o1', es: 'El Gobierno quiere una solución.', fr: ["Le gouvernement veut une solution."] },
        { id: 'c1-l3-o2', es: 'Hay elecciones en el país esta semana.', fr: ["Il y a des élections dans le pays cette semaine.", "Cette semaine il y a des élections dans le pays.", "Il y a des élections cette semaine dans le pays."] },
        { id: 'c1-l3-o3', es: 'La gente todavía no puede pagar.', fr: ["Les gens ne peuvent pas encore payer.", "Les gens ne peuvent toujours pas payer.", "Les gens ne peuvent encore pas payer."] }
      ],
      writing: [
        { id: 'c1-l3-x1', fr: "Il y a un nouveau gouvernement.", es: ['Hay un nuevo gobierno.', 'Hay un gobierno nuevo.'] },
        { id: 'c1-l3-x2', fr: "Je veux lire le journal.", es: ['Quiero leer el periódico.', 'Yo quiero leer el periódico.'] },
        { id: 'c1-l3-x3', fr: "Les prix sont aussi un problème.", es: ['Los precios también son un problema.', 'Los precios son también un problema.', 'También los precios son un problema.'] },
        { id: 'c1-l3-x4', fr: "Nous ne pouvons pas commencer.", es: ['No podemos empezar.', 'Nosotros no podemos empezar.', 'Nosotras no podemos empezar.'], hint: "Avec nosotros, pas de diphtongue." }
      ],
      speaking: [
        { id: 'c1-l3-p1', fr: "Selon le journal, il y a une crise.", es: ['Según el periódico, hay una crisis.'] },
        { id: 'c1-l3-p2', fr: "Tu peux commencer ?", es: ['¿Puedes empezar?', '¿Tú puedes empezar?'] },
        { id: 'c1-l3-p3', fr: "Les gens veulent une solution.", es: ['La gente quiere una solución.'] }
      ]
    },
    {
      id: 'c1-l4',
      title: 'Projets et météo',
      grammarTitle: 'Le futur proche : ir a + infinitif',
      canDo: "Je peux parler de mes projets et dire le temps qu'il va faire.",
      words: [
        { id: 'c1-l4-w1', es: 'llover', fr: "pleuvoir", exEs: 'Mañana va a llover.', exFr: "Demain il va pleuvoir." },
        { id: 'c1-l4-w2', es: 'el calor', fr: "la chaleur", exEs: 'Hace mucho calor.', exFr: "Il fait très chaud." },
        { id: 'c1-l4-w3', es: 'el frío', fr: "le froid", exEs: 'En el norte hace frío.', exFr: "Dans le nord il fait froid." },
        { id: 'c1-l4-w4', es: 'el sol', fr: "le soleil", exEs: 'Hace sol.', exFr: "Il y a du soleil." },
        { id: 'c1-l4-w5', es: 'viajar', fr: "voyager", exEs: 'Vamos a viajar a Sevilla.', exFr: "Nous allons voyager à Séville." },
        { id: 'c1-l4-w6', es: 'llegar', fr: "arriver", exEs: 'El tren llega a las diez.', exFr: "Le train arrive à dix heures." },
        { id: 'c1-l4-w7', es: 'salir', fr: "sortir, partir", exEs: 'Salgo de casa temprano.', exFr: "Je pars de la maison tôt." },
        { id: 'c1-l4-w8', es: 'el viaje', fr: "le voyage", exEs: 'Es un viaje largo.', exFr: "C'est un long voyage." },
        { id: 'c1-l4-w9', es: 'el fin de semana', fr: "le week-end", exEs: 'El fin de semana no trabajo.', exFr: "Le week-end je ne travaille pas." },
        { id: 'c1-l4-w10', es: 'próximo', fr: "prochain", exEs: 'La próxima semana voy a Madrid.', exFr: "La semaine prochaine je vais à Madrid." }
      ],
      expressions: [
        { id: 'c1-l4-e1', es: 'mañana', fr: "demain", exEs: 'Mañana voy a trabajar.', exFr: "Demain je vais travailler." },
        { id: 'c1-l4-e2', es: 'luego', fr: "ensuite, plus tard", exEs: 'Luego vamos a comer.', exFr: "Ensuite nous allons manger." },
        { id: 'c1-l4-e3', es: 'no pasa nada', fr: "ça ne fait rien", exEs: 'Si llueve, no pasa nada.', exFr: "S'il pleut, ça ne fait rien." }
      ],
      passive: [
        ['la temperatura', "la température"], ['el grado', "le degré"], ['la región', "la région"],
        ['el norte', "le nord"], ['el sur', "le sud"], ['la costa', "la côte"], ['el clima', "le climat"],
        ['el plan', "le plan, le projet"], ['las vacaciones', "les vacances"], ['el aeropuerto', "l'aéroport"],
        ['el turista', "le touriste"], ['visitar', "visiter"]
      ],
      reading: {
        title: 'El tiempo y los planes',
        text: 'Según la televisión, este fin de semana va a hacer mucho calor en el sur del país: las temperaturas van a llegar a los cuarenta grados. En el norte va a llover el sábado, pero el domingo va a hacer sol. Marta y su familia van a viajar a la costa en tren. Van a salir mañana temprano y van a llegar por la tarde. «Si llueve, no pasa nada», dice Marta. «Vamos a visitar la ciudad y luego vamos a comer en un buen restaurante».',
        help: [
          ['este', "ce"], ['cuarenta grados', "quarante degrés"], ['el sábado', "samedi"],
          ['si llueve', "s'il pleut"], ['dice', "dit"], ['buen', "bon"]
        ],
        questions: [
          { q: "Quel temps va-t-il faire dans le sud ce week-end ?", choices: ["Il va pleuvoir", "Il va faire très chaud", "Il va faire froid"], answer: 1, why: "« Va a hacer mucho calor en el sur del país »." },
          { q: "Comment Marta et sa famille vont-elles voyager ?", choices: ["En train", "En avion", "En voiture"], answer: 0, why: "« Van a viajar a la costa en tren »." },
          { q: "Que vont-elles faire s'il pleut ?", choices: ["Rester à la maison", "Rentrer plus tôt", "Visiter la ville et aller au restaurant"], answer: 2, why: "« Vamos a visitar la ciudad y luego vamos a comer en un buen restaurante »." }
        ]
      },
      grammar: `
<h3>Parler du futur : ir a + infinitif</h3>
<p>Comme « aller + infinitif » en français, mais avec un <b>a</b> qu'il ne faut pas oublier.</p>
<div class="tablewrap"><table><tbody>
<tr><td>yo</td><td><b>voy a</b> viajar</td><td>je vais voyager</td></tr>
<tr><td>tú</td><td><b>vas a</b> viajar</td><td>tu vas voyager</td></tr>
<tr><td>él, ella</td><td><b>va a</b> viajar</td><td>il, elle va voyager</td></tr>
<tr><td>nosotros</td><td><b>vamos a</b> viajar</td><td>nous allons voyager</td></tr>
<tr><td>vosotros</td><td><b>vais a</b> viajar</td><td>vous allez voyager</td></tr>
<tr><td>ellos, ellas</td><td><b>van a</b> viajar</td><td>ils, elles vont voyager</td></tr>
</tbody></table></div>
<h3>Dire le temps qu'il fait</h3>
<p>Avec <b>hacer</b> : <i>hace calor</i> (il fait chaud), <i>hace frío</i> (il fait froid), <i>hace sol</i> (il y a du soleil), <i>hace buen tiempo</i> (il fait beau).<br>La pluie a son verbe : <i>llueve</i> (il pleut), <i>va a llover</i> (il va pleuvoir).</p>
<h3>Les pièges du jour</h3>
<p><b>Mañana</b> = demain, <b>la mañana</b> = le matin. « Demain matin » se dit <i>mañana por la mañana</i>.</p>
<p><b>Salir</b> est irrégulier à la première personne : <i>sal<b>g</b>o</i>.</p>
<p>Faux ami : <b>largo</b> veut dire « long », pas « large ».</p>
<p><b>El tiempo</b> a deux sens, comme en français : le temps qui passe (<i>no tengo tiempo</i>) et le temps qu'il fait (<i>hace buen tiempo</i>).</p>`,
      listening: [
        { id: 'c1-l4-o1', es: 'Mañana va a llover en el norte.', fr: ["Demain il va pleuvoir dans le nord.", "Demain il va pleuvoir au nord.", "Il va pleuvoir demain dans le nord.", "Il va pleuvoir dans le nord demain.", "Il va pleuvoir demain au nord.", "Il va pleuvoir au nord demain."] },
        { id: 'c1-l4-o2', es: 'Vamos a viajar el próximo fin de semana.', fr: ["Nous allons voyager le week-end prochain.", "On va voyager le week-end prochain.", "Nous allons voyager le prochain week-end.", "Nous allons voyager le weekend prochain.", "On va voyager le weekend prochain."] },
        { id: 'c1-l4-o3', es: 'Hace mucho calor, pero no pasa nada.', fr: ["Il fait très chaud, mais ça ne fait rien.", "Il fait très chaud mais ce n'est pas grave.", "Il fait très chaud mais cela ne fait rien.", "Il fait très chaud mais ce n'est rien.", "Il fait très chaud mais c'est pas grave."] }
      ],
      writing: [
        { id: 'c1-l4-x1', fr: "Je vais voyager demain.", es: ['Voy a viajar mañana.', 'Mañana voy a viajar.', 'Yo voy a viajar mañana.'] },
        { id: 'c1-l4-x2', fr: "Il va faire froid ce week-end.", es: ['Va a hacer frío este fin de semana.', 'Este fin de semana va a hacer frío.'], hint: "« Ce » = este." },
        { id: 'c1-l4-x3', fr: "Nous allons arriver tôt.", es: ['Vamos a llegar temprano.', 'Nosotros vamos a llegar temprano.', 'Nosotras vamos a llegar temprano.', 'Vamos a llegar pronto.', 'Nosotros vamos a llegar pronto.'] },
        { id: 'c1-l4-x4', fr: "Qu'est-ce que tu vas faire ensuite ?", es: ['¿Qué vas a hacer luego?', '¿Qué vas a hacer después?', '¿Luego qué vas a hacer?', '¿Qué vas a hacer tú luego?', '¿Y luego qué vas a hacer?', '¿Qué vas a hacer tú después?', '¿Después qué vas a hacer?'] }
      ],
      speaking: [
        { id: 'c1-l4-p1', fr: "Il fait très chaud.", es: ['Hace mucho calor.'] },
        { id: 'c1-l4-p2', fr: "Je vais partir tôt demain.", es: ['Voy a salir temprano mañana.', 'Mañana voy a salir temprano.', 'Voy a salir mañana temprano.', 'Yo voy a salir temprano mañana.', 'Mañana voy a salir pronto.', 'Voy a salir pronto mañana.'] },
        { id: 'c1-l4-p3', fr: "Ça ne fait rien.", es: ['No pasa nada.'] }
      ]
    },
    {
      id: 'c1-l5',
      title: "Ce que j'ai fait aujourd'hui",
      grammarTitle: 'Le passé composé',
      canDo: "Je peux raconter ce que j'ai fait aujourd'hui ou cette semaine.",
      words: [
        { id: 'c1-l5-w1', es: 'ver', fr: "voir", exEs: 'He visto una película.', exFr: "J'ai vu un film." },
        { id: 'c1-l5-w2', es: 'decir', fr: "dire", exEs: '¿Qué has dicho?', exFr: "Qu'est-ce que tu as dit ?" },
        { id: 'c1-l5-w3', es: 'escribir', fr: "écrire", exEs: 'He escrito un mensaje.', exFr: "J'ai écrit un message." },
        { id: 'c1-l5-w4', es: 'comprar', fr: "acheter", exEs: 'Hemos comprado el periódico.', exFr: "Nous avons acheté le journal." },
        { id: 'c1-l5-w5', es: 'terminar', fr: "finir, terminer", exEs: 'Todavía no he terminado.', exFr: "Je n'ai pas encore fini." },
        { id: 'c1-l5-w6', es: 'el mensaje', fr: "le message", exEs: 'Tengo un mensaje nuevo.', exFr: "J'ai un nouveau message." },
        { id: 'c1-l5-w7', es: 'el amigo', fr: "l'ami", exEs: 'He comido con un amigo.', exFr: "J'ai mangé avec un ami." },
        { id: 'c1-l5-w8', es: 'la película', fr: "le film", exEs: 'La película empieza a las ocho.', exFr: "Le film commence à huit heures." },
        { id: 'c1-l5-w9', es: 'mucho', fr: "beaucoup", exEs: 'He trabajado mucho.', exFr: "J'ai beaucoup travaillé." },
        { id: 'c1-l5-w10', es: 'cansado', fr: "fatigué", exEs: 'Estoy cansado.', exFr: "Je suis fatigué." }
      ],
      expressions: [
        { id: 'c1-l5-e1', es: 'hoy', fr: "aujourd'hui", exEs: 'Hoy he trabajado mucho.', exFr: "Aujourd'hui j'ai beaucoup travaillé." },
        { id: 'c1-l5-e2', es: 'esta semana', fr: "cette semaine", exEs: 'Esta semana he ido al cine.', exFr: "Cette semaine je suis allé au cinéma." },
        { id: 'c1-l5-e3', es: 'todavía no', fr: "pas encore", exEs: 'Todavía no he comido.', exFr: "Je n'ai pas encore mangé." }
      ],
      passive: [
        ['el proyecto', "le projet"], ['el documento', "le document"], ['el cine', "le cinéma"],
        ['el concierto', "le concert"], ['el museo', "le musée"], ['el supermercado', "le supermarché"],
        ['la visita', "la visite"], ['interesante', "intéressant"], ['el teatro', "le théâtre"],
        ['excelente', "excellent"], ['la directora', "la directrice"], ['preparar', "préparer"]
      ],
      reading: {
        title: 'El día de Carmen',
        text: 'Hoy Carmen ha trabajado mucho. Por la mañana ha tenido dos reuniones y ha escrito muchos mensajes. Ha comido con una amiga en un restaurante cerca de la oficina. Por la tarde ha terminado un proyecto importante y su directora le ha dicho: «¡Excelente trabajo!». Luego ha ido al supermercado y ha comprado la cena. Esta semana todavía no ha ido al cine, pero esta noche ha visto una película en casa. Ahora está muy cansada, pero contenta.',
        help: [
          ['ha tenido', "elle a eu"], ['cerca de', "près de"], ['le ha dicho', "lui a dit"], ['ha ido', "elle est allée"],
          ['la cena', "le dîner"], ['ahora', "maintenant"], ['contenta', "contente"]
        ],
        questions: [
          { q: "Avec qui Carmen a-t-elle déjeuné ?", choices: ["Avec sa directrice", "Avec une amie", "Seule"], answer: 1, why: "« Ha comido con una amiga »." },
          { q: "Qu'a-t-elle terminé l'après-midi ?", choices: ["Un projet important", "Un film", "Ses courses"], answer: 0, why: "« Por la tarde ha terminado un proyecto importante »." },
          { q: "Où a-t-elle vu un film ?", choices: ["Au cinéma", "Au bureau", "À la maison"], answer: 2, why: "« Esta noche ha visto una película en casa ». Elle n'est pas encore allée au cinéma cette semaine." }
        ]
      },
      grammar: `
<h3>Le passé composé : haber + participe</h3>
<div class="tablewrap"><table><tbody>
<tr><td>yo</td><td><b>he</b> trabajado</td><td>j'ai travaillé</td></tr>
<tr><td>tú</td><td><b>has</b> trabajado</td><td>tu as travaillé</td></tr>
<tr><td>él, ella</td><td><b>ha</b> trabajado</td><td>il, elle a travaillé</td></tr>
<tr><td>nosotros</td><td><b>hemos</b> trabajado</td><td>nous avons travaillé</td></tr>
<tr><td>vosotros</td><td><b>habéis</b> trabajado</td><td>vous avez travaillé</td></tr>
<tr><td>ellos, ellas</td><td><b>han</b> trabajado</td><td>ils, elles ont travaillé</td></tr>
</tbody></table></div>
<p>Le participe : verbes en -ar → <b>-ado</b> (hablar → hablado) ; verbes en -er et -ir → <b>-ido</b> (comer → comido, vivir → vivido). Attention à l'accent de <i>leer → le<b>í</b>do</i>.</p>
<h3>Trois différences avec le français</h3>
<p><b>Toujours haber, jamais « être »</b> : <i><b>He</b> ido</i> = je suis allé.</p>
<p><b>Le participe ne s'accorde pas</b> : <i>Carmen ha id<b>o</b></i> (elle est allée).</p>
<p><b>Rien entre haber et le participe</b> : <i>Todavía no he comido</i> (je n'ai pas encore mangé).</p>
<h3>Les participes irréguliers à connaître</h3>
<div class="tablewrap"><table><tbody>
<tr><td>hacer</td><td><b>hecho</b></td><td>fait</td></tr>
<tr><td>decir</td><td><b>dicho</b></td><td>dit</td></tr>
<tr><td>ver</td><td><b>visto</b></td><td>vu</td></tr>
<tr><td>escribir</td><td><b>escrito</b></td><td>écrit</td></tr>
<tr><td>volver</td><td><b>vuelto</b></td><td>revenu</td></tr>
<tr><td>abrir</td><td><b>abierto</b></td><td>ouvert</td></tr>
</tbody></table></div>
<p>On emploie ce temps quand la période n'est pas terminée : <i>hoy, esta semana, este año, todavía no, ya</i>.</p>`,
      listening: [
        { id: 'c1-l5-o1', es: 'Hoy he trabajado mucho.', fr: ["Aujourd'hui j'ai beaucoup travaillé.", "J'ai beaucoup travaillé aujourd'hui."] },
        { id: 'c1-l5-o2', es: 'Todavía no hemos comido.', fr: ["Nous n'avons pas encore mangé.", "On n'a pas encore mangé.", "Nous n'avons toujours pas mangé.", "On n'a toujours pas mangé.", "Nous n'avons pas encore déjeuné.", "On n'a pas encore déjeuné."] },
        { id: 'c1-l5-o3', es: '¿Has visto la película?', fr: ["As-tu vu le film ?", "Tu as vu le film ?", "Est-ce que tu as vu le film ?"] }
      ],
      writing: [
        { id: 'c1-l5-x1', fr: "J'ai écrit un message.", es: ['He escrito un mensaje.', 'Yo he escrito un mensaje.'] },
        { id: 'c1-l5-x2', fr: "Elle est allée au travail.", es: ['Ha ido al trabajo.', 'Ella ha ido al trabajo.'], hint: "Toujours haber, et le participe ne s'accorde pas." },
        { id: 'c1-l5-x3', fr: "Nous n'avons pas encore terminé.", es: ['Todavía no hemos terminado.', 'No hemos terminado todavía.', 'Aún no hemos terminado.', 'No hemos terminado aún.', 'Nosotros todavía no hemos terminado.', 'Nosotras todavía no hemos terminado.', 'Todavía no hemos acabado.'] },
        { id: 'c1-l5-x4', fr: "Qu'est-ce que tu as fait aujourd'hui ?", es: ['¿Qué has hecho hoy?', '¿Qué has hecho tú hoy?', '¿Hoy qué has hecho?'], hint: "Participe de hacer : hecho." }
      ],
      speaking: [
        { id: 'c1-l5-p1', fr: "J'ai acheté le journal.", es: ['He comprado el periódico.', 'Yo he comprado el periódico.'] },
        { id: 'c1-l5-p2', fr: "Cette semaine, j'ai vu un film.", es: ['Esta semana he visto una película.', 'He visto una película esta semana.'] },
        { id: 'c1-l5-p3', fr: "Je suis fatigué.", es: ['Estoy cansado.', 'Estoy cansada.'] }
      ]
    },
    {
      id: 'c1-l6',
      title: "Comprendre une brève d'actualité",
      grammarTitle: 'Le passé composé, reconnaître le passé simple',
      canDo: "Je peux comprendre une brève d'actualité simple et repérer ce qui s'est passé.",
      words: [
        { id: 'c1-l6-w1', es: 'subir', fr: "monter, augmenter", exEs: 'Los precios han subido este año.', exFr: "Les prix ont augmenté cette année." },
        { id: 'c1-l6-w2', es: 'bajar', fr: "baisser, descendre", exEs: 'El paro ha bajado.', exFr: "Le chômage a baissé." },
        { id: 'c1-l6-w3', es: 'anunciar', fr: "annoncer", exEs: 'El Gobierno ha anunciado un plan.', exFr: "Le gouvernement a annoncé un plan." },
        { id: 'c1-l6-w4', es: 'ganar', fr: "gagner", exEs: 'La empresa ha ganado mucho dinero.', exFr: "L'entreprise a gagné beaucoup d'argent." },
        { id: 'c1-l6-w5', es: 'perder', fr: "perdre", exEs: 'He perdido el tren.', exFr: "J'ai raté le train." },
        { id: 'c1-l6-w6', es: 'la empresa', fr: "l'entreprise", exEs: 'Trabajo en una empresa grande.', exFr: "Je travaille dans une grande entreprise." },
        { id: 'c1-l6-w7', es: 'el dinero', fr: "l'argent", exEs: 'No tengo dinero.', exFr: "Je n'ai pas d'argent." },
        { id: 'c1-l6-w8', es: 'el paro', fr: "le chômage", exEs: 'El paro es un problema importante.', exFr: "Le chômage est un problème important." },
        { id: 'c1-l6-w9', es: 'el mundo', fr: "le monde", exEs: 'Viajan por todo el mundo.', exFr: "Ils voyagent dans le monde entier." },
        { id: 'c1-l6-w10', es: 'más', fr: "plus (davantage)", exEs: 'Quiero leer más.', exFr: "Je veux lire plus." }
      ],
      expressions: [
        { id: 'c1-l6-e1', es: 'sin embargo', fr: "cependant, pourtant", exEs: 'Sin embargo, hay problemas.', exFr: "Cependant, il y a des problèmes." },
        { id: 'c1-l6-e2', es: 'por eso', fr: "c'est pourquoi", exEs: 'Llueve, por eso no salgo.', exFr: "Il pleut, c'est pourquoi je ne sors pas." },
        { id: 'c1-l6-e3', es: 'casi', fr: "presque", exEs: 'Casi he terminado.', exFr: "J'ai presque fini." }
      ],
      passive: [
        ['la economía', "l'économie"], ['el banco', "la banque"], ['el euro', "l'euro"], ['el millón', "le million"],
        ['por ciento', "pour cent"], ['el sector', "le secteur"], ['la industria', "l'industrie"],
        ['la energía', "l'énergie"], ['la inflación', "l'inflation"], ['el resultado', "le résultat"],
        ['el experto', "l'expert"], ['positivo', "positif"]
      ],
      reading: {
        title: 'Empleo y precios: los datos de octubre',
        source: "Ministerio de Trabajo / SEPE (chômage d'octobre 2026, publié le 4 novembre) ; Seguridad Social (affiliation d'octobre 2026) ; INE (inflation d'octobre 2026).",
        text: 'El 4 de noviembre, el Ministerio de Trabajo anunció los datos de empleo de octubre. El paro registrado subió en 43.128 personas: ahora hay 2,4 millones de parados. Sin embargo, es la cifra más baja en un mes de octubre desde 2007. Además, la Seguridad Social ganó 186.612 afiliados en octubre y hay más de 22,6 millones de afiliados, un nuevo récord. Los precios también han subido este año: según el INE, la inflación fue del 4,9 % en octubre, igual que en septiembre.',
        help: [
          ['anunció', "a annoncé"], ['los datos de empleo', "les chiffres de l'emploi"], ['el paro registrado', "le chômage enregistré"],
          ['subió', "a augmenté"], ['ahora', "maintenant"], ['parados', "chômeurs"], ['la cifra más baja', "le chiffre le plus bas"],
          ['desde', "depuis"], ['además', "de plus"], ['ganó', "a gagné"], ['afiliados', "affiliés (cotisants à la Sécurité sociale)"],
          ['el INE', "l'Institut national de statistique (l'équivalent de l'INSEE)"], ['fue', "a été"], ['igual que', "comme, le même qu'en"]
        ],
        questions: [
          { q: "Qu'est-il arrivé au chômage en octobre ?", choices: ["Il a augmenté de 43 128 personnes", "Il a baissé de 43 128 personnes", "Il n'a pas changé"], answer: 0, why: "« El paro registrado subió en 43.128 personas ». Subir = augmenter." },
          { q: "Que dit le texte du nombre total de chômeurs (2,4 millions) ?", choices: ["C'est le plus haut depuis 2007", "C'est le plus bas pour un mois d'octobre depuis 2007", "Il est identique à celui de septembre"], answer: 1, why: "« Es la cifra más baja en un mes de octubre desde 2007 »." },
          { q: "Quelle a été l'inflation en octobre ?", choices: ["2,4 %", "22,6 %", "4,9 %"], answer: 2, why: "« La inflación fue del 4,9 % en octubre, igual que en septiembre »." }
        ]
      },
      grammar: `
<h3>Deux passés dans la presse</h3>
<p><b>Le passé composé</b> (<i>ha subido</i>), quand la période n'est pas finie : <i>hoy, este año, esta semana</i>.</p>
<p><b>Le passé simple</b> (<i>subió</i>), quand le moment est terminé : <i>ayer</i> (hier), <i>la semana pasada</i> (la semaine dernière), <i>en 2020</i>. C'est le temps le plus fréquent dans les journaux.</p>
<p>Pour l'instant, il suffit de <b>le reconnaître</b>. Vous apprendrez à le conjuguer au prochain cycle.</p>
<h3>Les formes à reconnaître</h3>
<div class="tablewrap"><table><thead><tr><th>verbe</th><th>il, elle…</th><th>ils, elles…</th><th></th></tr></thead><tbody>
<tr><td>anunciar</td><td><b>anunció</b></td><td>anunciaron</td><td>a annoncé</td></tr>
<tr><td>subir</td><td><b>subió</b></td><td>subieron</td><td>a augmenté</td></tr>
<tr><td>decir</td><td><b>dijo</b></td><td>dijeron</td><td>a dit</td></tr>
<tr><td>ser, ir</td><td><b>fue</b></td><td>fueron</td><td>a été, est allé</td></tr>
<tr><td>hacer</td><td><b>hizo</b></td><td>hicieron</td><td>a fait</td></tr>
<tr><td>tener</td><td><b>tuvo</b></td><td>tuvieron</td><td>a eu</td></tr>
<tr><td>haber</td><td><b>hubo</b></td><td></td><td>il y a eu</td></tr>
</tbody></table></div>
<h3>L'indice qui ne trompe pas</h3>
<p>Un <b>-ó</b> accentué à la fin du verbe signale presque toujours le passé : <i>anunci<b>ó</b></i> = il a annoncé, alors que <i>anuncio</i> = j'annonce. Les irréguliers (<i>dijo, hizo, tuvo, fue</i>) n'ont pas cet accent : il faut les reconnaître par cœur.</p>
<h3>Relier les idées</h3>
<p><b>Sin embargo</b> oppose (cependant), <b>por eso</b> explique la conséquence (c'est pourquoi).</p>`,
      listening: [
        { id: 'c1-l6-o1', es: 'Los precios han subido este año.', fr: ["Les prix ont augmenté cette année.", "Les prix ont monté cette année.", "Cette année les prix ont augmenté.", "Cette année les prix ont monté."] },
        { id: 'c1-l6-o2', es: 'Sin embargo, el paro ha bajado.', fr: ["Cependant, le chômage a baissé.", "Pourtant le chômage a baissé.", "Toutefois le chômage a baissé.", "Néanmoins le chômage a baissé.", "Le chômage a cependant baissé."] },
        { id: 'c1-l6-o3', es: 'La empresa ha perdido casi todo el dinero.', fr: ["L'entreprise a perdu presque tout l'argent.", "L'entreprise a perdu presque tout son argent.", "La société a perdu presque tout l'argent.", "La société a perdu presque tout son argent."] }
      ],
      writing: [
        { id: 'c1-l6-x1', fr: "Le gouvernement a annoncé un plan.", es: ['El Gobierno ha anunciado un plan.'] },
        { id: 'c1-l6-x2', fr: "Les prix ont baissé cette semaine.", es: ['Los precios han bajado esta semana.', 'Esta semana los precios han bajado.', 'Esta semana han bajado los precios.', 'Han bajado los precios esta semana.'] },
        { id: 'c1-l6-x3', fr: "J'ai presque terminé.", es: ['Casi he terminado.', 'Ya casi he terminado.', 'Casi he acabado.'], hint: "« Casi » se place avant haber." },
        { id: 'c1-l6-x4', fr: "L'entreprise a gagné plus d'argent.", es: ['La empresa ha ganado más dinero.'] }
      ],
      speaking: [
        { id: 'c1-l6-p1', fr: "Le chômage a baissé.", es: ['El paro ha bajado.', 'Ha bajado el paro.'] },
        { id: 'c1-l6-p2', fr: "J'ai perdu de l'argent.", es: ['He perdido dinero.', 'Yo he perdido dinero.'] },
        { id: 'c1-l6-p3', fr: "Cependant, les prix ont augmenté.", es: ['Sin embargo, los precios han subido.', 'Sin embargo, han subido los precios.'] }
      ]
    },
    {
      id: 'c1-l7',
      title: 'Donner son avis et bilan',
      grammarTitle: 'Gustar, creo que, révision générale',
      canDo: "Je peux donner mon avis simplement et dire ce que j'aime ou non.",
      words: [
        { id: 'c1-l7-w1', es: 'gustar', fr: "plaire, aimer", exEs: 'Me gusta leer.', exFr: "J'aime lire." },
        { id: 'c1-l7-w2', es: 'creer', fr: "croire", exEs: 'Creo que es verdad.', exFr: "Je crois que c'est vrai." },
        { id: 'c1-l7-w3', es: 'pensar', fr: "penser", exEs: '¿Qué piensas?', exFr: "Qu'en penses-tu ?" },
        { id: 'c1-l7-w4', es: 'la idea', fr: "l'idée", exEs: 'Es una buena idea.', exFr: "C'est une bonne idée." },
        { id: 'c1-l7-w5', es: 'la verdad', fr: "la vérité", exEs: 'Quiero decir la verdad.', exFr: "Je veux dire la vérité." },
        { id: 'c1-l7-w6', es: 'bueno', fr: "bon", exEs: 'Es un buen periódico.', exFr: "C'est un bon journal." },
        { id: 'c1-l7-w7', es: 'malo', fr: "mauvais", exEs: 'Es una mala noticia.', exFr: "C'est une mauvaise nouvelle." },
        { id: 'c1-l7-w8', es: 'difícil', fr: "difficile", exEs: 'El español no es difícil.', exFr: "L'espagnol n'est pas difficile." },
        { id: 'c1-l7-w9', es: 'fácil', fr: "facile", exEs: 'No es fácil.', exFr: "Ce n'est pas facile." },
        { id: 'c1-l7-w10', es: 'porque', fr: "parce que", exEs: 'No voy porque estoy cansado.', exFr: "Je n'y vais pas parce que je suis fatigué." }
      ],
      expressions: [
        { id: 'c1-l7-e1', es: 'me da igual', fr: "ça m'est égal", exEs: '¿Cine o teatro? Me da igual.', exFr: "Cinéma ou théâtre ? Ça m'est égal." },
        { id: 'c1-l7-e2', es: 'depende', fr: "ça dépend", exEs: 'Depende del día.', exFr: "Ça dépend du jour." },
        { id: 'c1-l7-e3', es: 'de acuerdo', fr: "d'accord", exEs: 'Estoy de acuerdo.', exFr: "Je suis d'accord." }
      ],
      passive: [
        ['la opinión', "l'opinion"], ['el debate', "le débat"], ['el argumento', "l'argument"],
        ['la cultura', "la culture"], ['la música', "la musique"], ['el arte', "l'art"],
        ['la ciencia', "la science"], ['la tecnología', "la technologie"], ['la educación', "l'éducation"],
        ['posible', "possible"], ['diferente', "différent"], ['el artículo', "l'article"]
      ],
      reading: {
        title: '¿Qué piensas de las noticias?',
        text: 'Ana y Luis hablan de las noticias.\n—¿Has leído el periódico hoy? —pregunta Ana.\n—Sí, pero no me gustan las noticias de política. Creo que siempre dicen lo mismo —dice Luis.\n—Depende. A mí me gusta la información internacional, porque quiero comprender el mundo.\n—De acuerdo, pero es difícil: hay demasiadas malas noticias.\n—Es verdad. Sin embargo, esta semana he leído un artículo muy bueno sobre ciencia. ¿Vamos a ver el debate esta noche?\n—Me da igual. Si quieres, lo vemos.',
        help: [
          ['pregunta', "demande"], ['dicen lo mismo', "ils disent la même chose"], ['a mí', "moi"],
          ['comprender', "comprendre"], ['demasiadas', "trop de"], ['sobre', "sur"],
          ['si quieres', "si tu veux"], ['lo vemos', "on le regarde"]
        ],
        questions: [
          { q: "Qu'est-ce que Luis n'aime pas ?", choices: ["Les nouvelles internationales", "Les nouvelles politiques", "Les articles de science"], answer: 1, why: "« No me gustan las noticias de política »." },
          { q: "Pourquoi Ana aime-t-elle l'information internationale ?", choices: ["Parce qu'elle veut comprendre le monde", "Parce que c'est facile", "Parce qu'elle voyage beaucoup"], answer: 0, why: "« Porque quiero comprender el mundo »." },
          { q: "Sur quel sujet porte le très bon article lu cette semaine ?", choices: ["La politique", "L'économie", "La science"], answer: 2, why: "« He leído un artículo muy bueno sobre ciencia »." }
        ]
      },
      grammar: `
<h3>Gustar : « ça me plaît »</h3>
<p><i>Me gusta el café</i> se construit comme « le café me plaît ». Le verbe s'accorde avec <b>ce qu'on aime</b>, pas avec la personne.</p>
<div class="tablewrap"><table><tbody>
<tr><td>une chose, un verbe</td><td>Me <b>gusta</b> la música. Me <b>gusta</b> leer.</td></tr>
<tr><td>plusieurs choses</td><td>Me <b>gustan</b> las noticias.</td></tr>
</tbody></table></div>
<div class="tablewrap"><table><tbody>
<tr><td>à moi</td><td><b>me</b> gusta</td><td>à nous</td><td><b>nos</b> gusta</td></tr>
<tr><td>à toi</td><td><b>te</b> gusta</td><td>à vous</td><td><b>os</b> gusta</td></tr>
<tr><td>à lui, à elle</td><td><b>le</b> gusta</td><td>à eux, à elles</td><td><b>les</b> gusta</td></tr>
</tbody></table></div>
<p>À la forme négative : <i><b>No</b> me gusta.</i> On ne dit jamais <i>yo gusto</i>.</p>
<h3>Donner son avis</h3>
<p><b>Creo que…</b> (je crois que), <b>Pienso que…</b> (je pense que), <b>Para mí…</b> (pour moi), <b>Estoy de acuerdo</b> / <b>No estoy de acuerdo</b>.</p>
<p>Devant un nom masculin singulier, <i>bueno</i> et <i>malo</i> perdent leur -o : <i>un <b>buen</b> artículo, un <b>mal</b> día</i>.</p>
<p>Après <i>es difícil, es fácil, es importante</i>, l'infinitif suit directement, sans « de » : <i>Es difícil comprender.</i></p>
<h3>Bilan du cycle : trois temps</h3>
<div class="tablewrap"><table><tbody>
<tr><td>présent</td><td><b>Trabajo</b> todos los días.</td></tr>
<tr><td>futur proche</td><td>Mañana <b>voy a trabajar</b>.</td></tr>
<tr><td>passé composé</td><td>Hoy <b>he trabajado</b> mucho.</td></tr>
</tbody></table></div>`,
      listening: [
        { id: 'c1-l7-o1', es: 'Me gusta leer el periódico por la mañana.', fr: ["J'aime lire le journal le matin.", "Le matin j'aime lire le journal.", "J'aime bien lire le journal le matin.", "Le matin j'aime bien lire le journal."] },
        { id: 'c1-l7-o2', es: 'Creo que es una buena idea.', fr: ["Je crois que c'est une bonne idée.", "Je pense que c'est une bonne idée."] },
        { id: 'c1-l7-o3', es: 'No me gustan las malas noticias.', fr: ["Je n'aime pas les mauvaises nouvelles.", "Les mauvaises nouvelles ne me plaisent pas."] },
        { id: 'c1-l7-o4', es: 'Mañana vamos a ver una película, ¿de acuerdo?', fr: ["Demain nous allons voir un film, d'accord ?", "Demain on va voir un film, d'accord ?", "Demain nous allons regarder un film, d'accord ?", "Demain on va regarder un film, d'accord ?"] }
      ],
      writing: [
        { id: 'c1-l7-x1', fr: "J'aime voyager.", es: ['Me gusta viajar.', 'A mí me gusta viajar.'] },
        { id: 'c1-l7-x2', fr: "Je crois que c'est difficile.", es: ['Creo que es difícil.', 'Yo creo que es difícil.', 'Pienso que es difícil.', 'Yo pienso que es difícil.'] },
        { id: 'c1-l7-x3', fr: "Je n'aime pas les nouvelles.", es: ['No me gustan las noticias.', 'A mí no me gustan las noticias.'], hint: "Plusieurs choses : gustan." },
        { id: 'c1-l7-x4', fr: "Aujourd'hui j'ai lu le journal.", es: ['Hoy he leído el periódico.', 'He leído el periódico hoy.', 'Hoy yo he leído el periódico.'] },
        { id: 'c1-l7-x5', fr: "Demain je vais travailler parce que j'ai une réunion.", es: ['Mañana voy a trabajar porque tengo una reunión.', 'Voy a trabajar mañana porque tengo una reunión.'] }
      ],
      speaking: [
        { id: 'c1-l7-p1', fr: "Ça dépend.", es: ['Depende.'] },
        { id: 'c1-l7-p2', fr: "Ça m'est égal.", es: ['Me da igual.'] },
        { id: 'c1-l7-p3', fr: "Je crois que c'est vrai.", es: ['Creo que es verdad.', 'Yo creo que es verdad.'] },
        { id: 'c1-l7-p4', fr: "J'aime cette idée.", es: ['Me gusta esta idea.', 'Me gusta esa idea.'] }
      ]
    }
  ]
};
