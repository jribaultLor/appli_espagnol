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
        { id: 'c1-l1-w7', es: 'comer', fr: 'manger', exEs: 'Comemos en casa.', exFr: 'Nous mangeons à la maison.' },
        { id: 'c1-l1-w8', es: 'escuchar', fr: 'écouter', exEs: 'Escucho la radio.', exFr: 'J\'écoute la radio.' },
        { id: 'c1-l1-w9', es: 'la casa', fr: 'la maison', exEs: 'Estoy en casa.', exFr: 'Je suis à la maison.' },
        { id: 'c1-l1-w10', es: 'el día', fr: 'le jour, la journée', exEs: 'Es un día importante.', exFr: 'C\'est un jour important.' }
      ],
      expressions: [
        { id: 'c1-l1-e1', es: 'siempre', fr: 'toujours', exEs: 'Siempre leo las noticias.', exFr: 'Je lis toujours les nouvelles.' },
        { id: 'c1-l1-e2', es: 'nunca', fr: 'jamais', exEs: 'Nunca trabajo el domingo.', exFr: 'Je ne travaille jamais le dimanche.' },
        { id: 'c1-l1-e3', es: 'a veces', fr: 'parfois', exEs: 'A veces como en casa.', exFr: 'Parfois je mange à la maison.' }
      ],
      passive: [
        ['la familia', 'la famille'], ['la radio', 'la radio'], ['la televisión', 'la télévision'],
        ['el teléfono', 'le téléphone'], ['la información', 'l\'information'], ['importante', 'important'],
        ['nacional', 'national'], ['internacional', 'international'], ['la política', 'la politique'],
        ['la economía', 'l\'économie'], ['la oficina', 'le bureau'], ['el país', 'le pays']
      ],
      reading: {
        title: 'Lucía, periodista',
        text: 'Lucía es periodista. Es española y vive en Madrid, pero su familia está en Sevilla. Trabaja en un periódico nacional. Por la mañana, siempre lee las noticias en el teléfono y escucha la radio. A veces come en la oficina con sus compañeros. Nunca trabaja el domingo: ese día está en casa y habla por teléfono con su madre. Para Lucía, la información es muy importante.',
        help: [
          ['periodista', 'journaliste'], ['pero', 'mais'], ['por la mañana', 'le matin'], ['escucha', 'elle écoute'],
          ['come', 'elle mange'], ['sus compañeros', 'ses collègues'], ['el domingo', 'le dimanche'],
          ['ese día', 'ce jour-là'], ['su madre', 'sa mère'], ['muy', 'très']
        ],
        questions: [
          { q: 'Où vit Lucía ?', choices: ['À Séville', 'À Madrid', 'À Barcelone'], answer: 1, why: '« Vive en Madrid ». C\'est sa famille qui est à Séville.' },
          { q: 'Que fait-elle toujours le matin ?', choices: ['Elle lit les nouvelles', 'Elle mange au bureau', 'Elle téléphone à sa mère'], answer: 0, why: '« Por la mañana, siempre lee las noticias ».' },
          { q: 'Quel jour ne travaille-t-elle jamais ?', choices: ['Le lundi', 'Le samedi', 'Le dimanche'], answer: 2, why: '« Nunca trabaja el domingo ».' }
        ]
      },
      grammar: [
        '<h3>On ne dit pas le sujet</h3>',
        '<p>En espagnol, la terminaison du verbe suffit : <b>Trabajo</b> = je travaille. On ajoute <i>yo, tú, ella…</i> seulement pour insister.</p>',
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
        '<p><b>Nunca</b> placé avant le verbe remplace « ne… jamais » à lui seul : <i><b>Nunca</b> trabajo el domingo.</i> Pas de <i>no</i>.</p>'
      ].join(''),
      listening: [
        { id: 'c1-l1-o1', es: 'Vivo en Francia y trabajo en una oficina.', fr: ['Je vis en France et je travaille dans un bureau.', 'J\'habite en France et je travaille dans un bureau.'] },
        { id: 'c1-l1-o2', es: 'Lucía siempre lee las noticias por la mañana.', fr: ['Lucía lit toujours les nouvelles le matin.', 'Lucía lit toujours les informations le matin.', 'Lucía lit toujours les infos le matin.', 'Lucía lit toujours les actualités le matin.', 'Le matin, Lucía lit toujours les nouvelles.'] },
        { id: 'c1-l1-o3', es: 'A veces comemos en casa.', fr: ['Parfois nous mangeons à la maison.', 'Parfois on mange à la maison.', 'Nous mangeons parfois à la maison.', 'On mange parfois à la maison.', 'Quelquefois nous mangeons à la maison.', 'Parfois nous mangeons chez nous.'] }
      ],
      writing: [
        { id: 'c1-l1-x1', fr: 'Je travaille à Paris.', es: ['Trabajo en París.', 'Yo trabajo en París.'], hint: '« À » + ville se dit « en ».' },
        { id: 'c1-l1-x2', fr: 'Nous lisons le journal.', es: ['Leemos el periódico.', 'Nosotros leemos el periódico.', 'Nosotras leemos el periódico.'] },
        { id: 'c1-l1-x3', fr: 'Je suis français et je vis en France.', es: ['Soy francés y vivo en Francia.', 'Soy francesa y vivo en Francia.', 'Yo soy francés y vivo en Francia.', 'Yo soy francesa y vivo en Francia.'], hint: 'Au féminin : « francesa ».' },
        { id: 'c1-l1-x4', fr: 'Parfois, je lis les nouvelles.', es: ['A veces leo las noticias.', 'Leo las noticias a veces.', 'A veces yo leo las noticias.', 'Yo leo las noticias a veces.', 'Yo a veces leo las noticias.'] }
      ],
      speaking: [
        { id: 'c1-l1-p1', fr: 'Je vis en France.', es: ['Vivo en Francia.', 'Yo vivo en Francia.'] },
        { id: 'c1-l1-p2', fr: 'Je ne travaille jamais le dimanche.', es: ['Nunca trabajo el domingo.', 'No trabajo nunca el domingo.', 'Nunca trabajo los domingos.', 'No trabajo nunca los domingos.', 'Yo nunca trabajo el domingo.'] },
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
        ['la universidad', 'l\'université'], ['el restaurante', 'le restaurant'], ['normalmente', 'normalement'],
        ['el programa', 'le programme'], ['el gimnasio', 'la salle de sport'], ['la reunión', 'la réunion']
      ],
      reading: {
        title: 'Un día de Pablo',
        text: 'Pablo tiene treinta años y vive en Valencia. Todos los días se levanta temprano, a las siete de la mañana. Hace café y va al trabajo en metro. Tiene una reunión una vez a la semana, el lunes. Por la tarde, a veces va al gimnasio. Por la noche hace la cena y escucha las noticias en la radio. A las once ya está en la cama. Durante la semana, nunca tiene tiempo para leer el periódico.',
        help: [
          ['treinta años', 'trente ans'], ['se levanta', 'il se lève'], ['a las siete', 'à sept heures'],
          ['el lunes', 'le lundi'], ['por la tarde', 'l\'après-midi'], ['la cena', 'le dîner'],
          ['a las once', 'à onze heures'], ['la cama', 'le lit'], ['durante', 'pendant'], ['tiempo para', 'le temps de']
        ],
        questions: [
          { q: 'À quelle heure Pablo se lève-t-il ?', choices: ['À six heures', 'À sept heures', 'À onze heures'], answer: 1, why: '« Se levanta temprano, a las siete de la mañana ».' },
          { q: 'Comment va-t-il au travail ?', choices: ['En métro', 'En train', 'En bus'], answer: 0, why: '« Va al trabajo en metro ».' },
          { q: 'À quelle fréquence a-t-il une réunion ?', choices: ['Tous les jours', 'Jamais', 'Une fois par semaine'], answer: 2, why: '« Una vez a la semana, el lunes ».' }
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
        '<p>Comme en français, le pronom se place avant le verbe : <b>levantarse</b> = se lever.</p>',
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
        { id: 'c1-l2-x1', fr: 'Je vais au travail tous les jours.', es: ['Voy al trabajo todos los días.', 'Todos los días voy al trabajo.', 'Yo voy al trabajo todos los días.'] },
        { id: 'c1-l2-x2', fr: 'Je me lève tôt le matin.', es: ['Me levanto temprano por la mañana.', 'Por la mañana me levanto temprano.', 'Yo me levanto temprano por la mañana.'], hint: '« Le matin » = por la mañana.' },
        { id: 'c1-l2-x3', fr: 'Elle a une réunion cette semaine.', es: ['Tiene una reunión esta semana.', 'Ella tiene una reunión esta semana.', 'Esta semana tiene una reunión.', 'Esta semana ella tiene una reunión.'], hint: '« Cette » = esta.' },
        { id: 'c1-l2-x4', fr: 'Qu\'est-ce que tu fais ce soir ?', es: ['¿Qué haces esta noche?', '¿Qué haces tú esta noche?', '¿Tú qué haces esta noche?'], hint: '« Qu\'est-ce que » = qué.' }
      ],
      speaking: [
        { id: 'c1-l2-p1', fr: 'Je vais à Madrid une fois par semaine.', es: ['Voy a Madrid una vez a la semana.', 'Voy a Madrid una vez por semana.', 'Yo voy a Madrid una vez a la semana.'] },
        { id: 'c1-l2-p2', fr: 'Tu te lèves tôt ?', es: ['¿Te levantas temprano?', '¿Tú te levantas temprano?'] },
        { id: 'c1-l2-p3', fr: 'Je fais du café tous les jours.', es: ['Hago café todos los días.', 'Todos los días hago café.', 'Yo hago café todos los días.'] }
      ]
    },
    { id: 'c1-l3', title: 'Lire les titres de la presse', grammarTitle: 'Les verbes à diphtongue, hay et está', soon: true },
    { id: 'c1-l4', title: 'Projets et météo', grammarTitle: 'Le futur proche : ir a + infinitif', soon: true },
    { id: 'c1-l5', title: 'Ce que j\'ai fait aujourd\'hui', grammarTitle: 'Le passé composé', soon: true },
    { id: 'c1-l6', title: 'Comprendre une brève d\'actualité', grammarTitle: 'Le passé composé, reconnaître le passé simple', soon: true },
    { id: 'c1-l7', title: 'Donner son avis et bilan', grammarTitle: 'Gustar, creo que, révision générale', soon: true }
  ]
};
