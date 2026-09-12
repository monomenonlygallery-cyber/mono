// ============================================================
// СОДЕРЖИМОЕ САЙТА MONÓ — редактируемые тексты
// Меняйте только значения после двоеточия, внутри обратных кавычек ` `.
// Не трогайте названия полей слева и структуру { } , : `
// Подробности и что можно/нельзя менять: см. README-EDITING.md
// ============================================================
window.MONO_CONTENT = {

  // NAV — меню в шапке сайта
  nav: {
    services: `Leistungen`,
    prices: `Preise`,
    results: `Ergebnisse`,
    contact: `Kontakt`,
    bookButton: `Termin buchen`
  },

  // HERO — первый экран: заголовок, подзаголовок, кнопка, бейдж с ценой 25 €
    // ⚠️ Поля title/subtitle содержат теги <strong>/<small> для жирного текста —
    // не удаляйте сами теги, меняйте только слова вокруг них.
  hero: {
    title: `Haut, die sich <strong>gut anfühlt.</strong>`,
    tagline: `Laser-Haarentfernung · Glockenbach, München`,
    ctaButton: `Book via WhatsApp`,
    badgeLabel: `Beratung + Testschuss`,
    badgeSubtitle: `Spür den Laser, bevor du dich entscheidest.`,
    subtitle: `Keine Stoppeln am dritten Tag, keine eingewachsenen Haare, kein Rasieren vor dem Date. Beim Testschuss für 25 € spürst du, wie sich der Laser anfühlt.<small>Beratung + Probeschuss, ca. 30 Minuten.</small>`,
    bullet1: `Wir schauen uns deine Haut an und sagen ehrlich, was realistisch ist`,
    bullet2: `Du spürst selbst: ein kurzes, warmes Zwicken, mehr nicht`,
    bullet3: `Du gehst mit einem Plan nach Hause: Sitzungen, Abstände, Preis`,
    perk1: `Weiche Haut ohne Stoppeln und Rasurpickel`,
    perk2: `Privates Studio, beheizte Liege, Matcha`,
    perk3: `Preise offen, keine Überraschungen`
  },

  // PRICES — таблица цен по зонам, комби-пакеты, текст под ценами
    // Цены — тоже здесь (price1 = 1 сеанс, price3 = пакет 3, price5 = пакет 5)
  prices: {
    testShotButton: `Testschuss buchen`,
    sectionLabel: `preise`,
    title: `offen, <strong>für jede zone.</strong>`,
    intro: `Einzelsitzung oder Paket: 3 Sitzungen −10 %, 5 Sitzungen −15 %. Kombinationen aus mehreren Zonen rechnen wir dir per WhatsApp aus.`,
    columnZone: `Zone`,
    column1Session: `1 Sitzung`,
    column3Pack: `3er-Paket<small>−10 %</small>`,
    column5Pack: `5er-Paket<small>−15 %</small>`,
    zones: {
      upperLip: {
        name: `Oberlippe`,
        price1: `45 €`,
        price3: `122 €`,
        price5: `191 €`
      },
      armpits: {
        name: `Achseln`,
        price1: `59 €`,
        price3: `159 €`,
        price5: `251 €`
      },
      bikiniArea: {
        name: `Bikinizone`,
        price1: `85 €`,
        price3: `229 €`,
        price5: `361 €`
      },
      fullIntim: {
        name: `Intim komplett`,
        price1: `109 €`,
        price3: `294 €`,
        price5: `463 €`
      },
      forearms: {
        name: `Unterarme`,
        price1: `109 €`,
        price3: `294 €`,
        price5: `463 €`
      },
      thighsOrCalves: {
        name: `Ober- oder Unterschenkel`,
        price1: `125 €`,
        price3: `337 €`,
        price5: `531 €`
      },
      fullLegs: {
        name: `Beine komplett`,
        price1: `178 €`,
        price3: `480 €`,
        price5: `756 €`
      }
    },
    comboTitle: `Kombi-Pakete`,
    comboSubtitle: `pro Sitzung, mehrere Zonen an einem Termin`,
    combos: {
      combo1: {
        name: `Oberlippe + Kinn`,
        price: `55 €`
      },
      combo2: {
        name: `Achseln + Intim komplett`,
        price: `139 €`
      },
      combo3: {
        name: `Achseln + Intim komplett + Unterschenkel`,
        price: `259 €`
      },
      combo4: {
        name: `Achseln + Intim komplett + Beine komplett`,
        price: `279 €`
      }
    },
    customZoneTitle: `Deine Zone ist nicht dabei?`,
    customZoneText: `Kinn, Wangen, Bauch, Rücken, Po, Ganzkörper: fast alles ist möglich. Schreib uns kurz, wir schicken dir den Preis.`,
    customZoneButton: `Preis anfragen`,
    note: `Alle Preise inkl. MwSt.`
  },

  // OFFER — короткий заголовок блока-предложения под hero (содержит <strong>)
  offer: {
    title: `Erst <strong>spüren,</strong> dann <strong>entscheiden.</strong>`
  },

  // BENEFITS — тёмный блок "что мы умеем лучше всего"
  benefits: {
    resultCaption: `sichtbar glattere haut<br><small data-i18n="bd.over2" data-content="benefits.resultSubcaption">nach 6 behandlungen</small>`,
    resultSubcaption: `nach 6 behandlungen`,
    sectionLabel: `Was wir am besten können`,
    text: `Laser-Haarentfernung für jede Zone von Gesicht und Körper. Weiche Haut ohne Stoppeln, eingewachsene Haare und Rasurpickel.`
  },

  // TRUST STRIP — полоска доверия под тёмным блоком (рейтинг, адрес, тип лазера)
  trust: {
    rating: `5,0 auf Google`,
    location: `15 Gehminuten vom Viktualienmarkt`,
    laserType: `Deutscher Diodenlaser, medizinischer Standard`
  },

  // COMPARISON — таблица "лазер vs бритьё vs воск" (title содержит <strong>)
  comparison: {
    sectionLabel: `ehrlich verglichen`,
    title: `rasieren, waxing oder laser: <strong>was deine haut davon hat</strong>`,
    intro: `Nicht nur Zeit und Geld. Auch Stoppeln, Rötungen und eingewachsene Haare. Ehrlich verglichen.`,
    columnLaser: `Laser bei monó`,
    columnShave: `Rasieren`,
    columnWax: `Waxing`,
    rows: {
      duration: {
        label: `Wie lange glatt`,
        laser: `Dauerhaft nach dem Kurs`,
        shave: `1 bis 3 Tage`,
        wax: `2 bis 4 Wochen`
      },
      pain: {
        label: `Schmerz`,
        laser: `Kurzes warmes Zwicken`,
        shave: `Keiner, aber Schnitte & Reizung`,
        wax: `Deutlich, jedes Mal`
      },
      frequency: {
        label: `Wie oft`,
        laser: `6 bis 8 Sitzungen, dann selten`,
        shave: `Alle 2 bis 3 Tage, für immer`,
        wax: `Alle 3 bis 4 Wochen, für immer`
      },
      cost: {
        label: `Kosten über 5 Jahre (Beine komplett)`,
        laser: `ca. 900 € im ersten Jahr`,
        shave: `ca. 600 € + 150 Stunden`,
        wax: `ca. 3.000 € (60 Termine)`
      },
      ingrownHairs: {
        label: `Eingewachsene Haare`,
        laser: `Verschwinden mit der Zeit`,
        shave: `Häufig`,
        wax: `Häufig`
      },
      irritation: {
        label: `Rasurpickel & Rötungen`,
        laser: `Keine, die Haut beruhigt sich`,
        shave: `Regelmäßig`,
        wax: `Nach jedem Termin`
      },
      skinFeel: {
        label: `Wie fühlt sich die Haut an`,
        laser: `Weich, jeden Tag`,
        shave: `Glatt für einen Tag, dann rau`,
        wax: `Weich, bis es nachwächst`
      }
    }
  },

  // PROCESS — блок "как это происходит" (4 шага)
  process: {
    sectionLabel: `so läuft es ab`,
    title: `vier schritte <strong>bis zu der haut,</strong> die du dir wünschst.`,
    intro: `Kein Rasierer im Reisegepäck, kein Waxing-Termin vor dem Sommer. Ein Kurs, dann ist Ruhe.`,
    step1Title: `Schreib uns`,
    step1Text: `Kurze WhatsApp-Nachricht, wir antworten persönlich und finden einen Termin.`,
    step2Title: `Beratung & Testschuss`,
    step2Text: `25 €. Wir schauen uns Haut und Haar an, klären Fragen und machen einen Probeschuss (optional, du kannst diesen Schritt überspringen).`,
    step3Title: `Behandlung`,
    step3Text: `Je nach Zone 10 bis 45 Minuten. Danach kannst du direkt weiter in deinen Tag.`,
    step4Title: `Alle 6 bis 8 Wochen`,
    step4Text: `Meist 6 bis 8 Sitzungen. Danach keine Stoppeln, keine Pickel, einfach weiche Haut. Ein Unterschied oft schon nach der dritten.`
  },

  // SUITABILITY — блок "кому подходит / когда лучше подождать" (title содержит <strong>)
  suitability: {
    sectionLabel: `für wen`,
    title: `passt es <strong>zu dir?</strong>`,
    goodFitTitle: `Passt gut, wenn du…`,
    goodFit1: `…keine Lust mehr hast, vor jedem Date, Urlaub oder Sporttermin zu rasieren`,
    goodFit2: `…eingewachsene Haare, Rasurpickel oder Rötungen kennst`,
    goodFit3: `…einen Laser suchst, der für jeden Hautton geeignet ist: wir arbeiten mit dem Premium-Diodenlaser MeDioStar`,
    goodFit4: `…dich in der Bikinizone, an den Achseln oder an der Oberlippe endlich sicher fühlen willst`,
    goodFit5: `…dir ein ruhiges, privates Studio wünschst statt einer Kette`,
    waitTitle: `Bitte warte noch, wenn du…`,
    wait1: `…schwanger bist oder stillst`,
    wait2: `…frisch gebräunt bist, Solarium oder Selbstbräuner (2 Wochen)`,
    wait3: `…eine aktive Hautinfektion oder offene Wunden in der Zone hast`,
    wait4: `…lichtsensibilisierende Medikamente nimmst (z. B. Retinoide, bestimmte Antibiotika)`,
    wait5: `…sehr helles, graues oder rotes Haar hast: hier beraten wir ehrlich`
  },

  // RESULTS — блок до/после (title содержит <strong>)
  results: {
    sectionLabel: `vorher / nachher`,
    title: `ergebnisse <strong>unserer kundinnen</strong>`,
    intro: `Echte Haut unserer Kundinnen, echte Sitzungen. Mit ihrem Einverständnis.`,
    item1Title: `Achseln`,
    item1Subtitle: `nach 6 Behandlungen`,
    item2Title: `Unterarme`,
    item2Subtitle: `nach 6 Behandlungen`,
    item3Title: `Bikinizone`,
    item3Subtitle: `nach 6 Behandlungen`,
    swipeHint: `← wischen zum Blättern`
  },

  // CTA BAND — жёлтая полоса-призыв "ещё не уверены?"
  ctaBand: {
    title: `noch unsicher? <strong>fang mit dem testschuss an.</strong>`,
    text: `25 €, 30 Minuten, deine Zone. Du spürst es selbst und entscheidest in Ruhe.`,
    button: `Testschuss buchen`
  },

  // ABOUT — блок про студию (title содержит <strong>)
  about: {
    sectionLabel: `das studio`,
    title: `ein ort im glockenbach, <strong>der sich gut anfühlt</strong>`,
    text1: `We follow one rule: treat people the way you'd want to be treated. That's why monó isn't just about removing hair — it's about feeling important and taken care of.`,
    text2: `— Anna & Alexandra, Monó`
  },

  // STUDIO — блок с фотогалереей студии (title содержит <strong>)
  studio: {
    sectionLabel: `Das Studio`,
    title: `Westermühlstraße 21, <strong>Glockenbach.</strong>`,
    swipeHint: `← wischen`
  },

  // REVIEWS — блок отзывов Google (4 отзыва: цитата + автор)
  reviews: {
    sectionLabel: `Google-Bewertungen`,
    items: {
      review1: {
        quote: `„Ich war als Modell zur Laser Haarentfernung bei Monó (Beine & Achseln) und bin sehr begeistert! Alexandra hat die Behandlung unglaublich sorgfältig und einfühlsam durchgeführt. Alles wurde individuell angepasst, sogar die Liege war beheizt. Das Ergebnis war schon nach der ersten Sitzung sichtbar. Und die Matcha ist übrigens auch richtig gut.“`,
        author: `— Polina S. / Google-Bewertung`
      },
      review2: {
        quote: `„Das Studio ist wunderschön eingerichtet – schon beim Ankommen fühlt man sich wohl und willkommen. Die Laser-Haarentfernung hat bei mir hervorragend funktioniert: Bereits nach der ersten Behandlung waren deutliche Ergebnisse zu erkennen. Besonders positiv fand ich, dass sehr darauf geachtet wurde, die Behandlung angenehm und schmerzfrei zu gestalten.“`,
        author: `— Anna V. / Google-Bewertung`
      },
      review3: {
        quote: `„Das Team war vom ersten Moment super freundlich und aufmerksam, all meine Fragen wurden ausführlich beantwortet. Während der Behandlung wurde sehr auf mein Wohlergehen geachtet, vor allem was die Schmerzen angeht. Nach fast zwei Wochen wachsen meine Haare deutlich langsamer und feiner nach.“`,
        author: `— Aldin Z. / Google-Bewertung`
      },
      review4: {
        quote: `„Anna und Alexandra gehen total auf meine individuellen Bedürfnisse ein, versuchen nicht zu erzwingen und geben ehrliches Feedback. Die Umgebung ist sehr angenehm und ich habe mich immer wohl gefühlt. Bereits nach zwei Behandlungen bin ich begeistert vom Ergebnis.“`,
        author: `— Georg M. / Google-Bewertung`
      }
    }
  },

  // BOOKING — блок записи, правая колонка с адресом (title содержит <strong>)
  booking: {
    sectionLabel: `termin`,
    title: `deine haut <strong>ist einen termin</strong> entfernt.`,
    intro: `Kein Formular, kein Rückruf. Eine WhatsApp-Nachricht reicht, wir melden uns meist innerhalb weniger Stunden. Erster Termin: Beratung + Testschuss für 25 €.`,
    ctaButton: `Jetzt per WhatsApp buchen`
  },

  // CONTACT — адрес и Instagram.
    // ⚠️ Телефон и WhatsApp-сообщение здесь НЕТ — см. README-EDITING.md, раздел "Что нельзя менять здесь"
  contact: {
    street: `Westermühlstraße 21`,
    postalCityBooking: `80469 München, Glockenbach`,
    postalCity: `80469 München`,
    instagramLabel: `Instagram @mono.men.gallery`,
    instagramUrl: `https://www.instagram.com/mono.men.gallery`
  },

  // FAQ — вопросы и ответы (title содержит <strong>)
  faq: {
    sectionLabel: `faq`,
    title: `häufige <strong>fragen</strong>`,
    items: {
      q1: {
        question: `Wie funktioniert Laser-Haarentfernung und was ist der Unterschied zu Rasieren oder Waxing?`,
        answer: `Rasieren, Waxing und Sugaring entfernen nur den sichtbaren Teil des Haares. Der Laser wirkt auf die eigentliche Ursache: den Haarfollikel. Er dringt in die Haut ein und setzt den Follikel gezielt außer Gefecht, sodass er kein neues Haar mehr produziert.`
      },
      q2: {
        question: `Wie sicher ist das Verfahren, kann es die Haut schädigen?`,
        answer: `Bei korrekt gewählten Einstellungen ist Laser-Haarentfernung sicher. Wir stellen den Laser bei jeder Sitzung individuell auf deinen Haut- und Haartyp ein, damit die Haut nicht beschädigt wird.`
      },
      q3: {
        question: `Tut es weh, was spüre ich während der Sitzung?`,
        answer: `Die meisten beschreiben es als Wärme mit einem leichten Kribbeln, kein starker Schmerz. Das ist eine normale Hautreaktion und ein Zeichen, dass der Laser den Follikel erreicht. Beim Testschuss für 25 € spürst du es selbst.`
      },
      qTestShot: {
        question: `What happens at the €25 test shot?`,
        answer: `In 30 minutes you get two things: an honest consultation about what to expect, and a live test shot on small area so you can feel the sensation and see a visible before/after on a small patch. Then — your personal plan with number of sessions and price.`
      },
      q4: {
        question: `Gibt es Kontraindikationen, für wen ist es nicht geeignet?`,
        answer: `Während Schwangerschaft und bei bestimmten Erkrankungen führen wir keine Behandlung durch. Frische Sonnenbräune, Solarium, Selbstbräuner und manche Medikamente können vorübergehende Gründe sein zu warten. Vor dem Kurs klären wir das in einer Beratung und Anamnese ab.`
      },
      q5: {
        question: `Geht Laser auch auf oder in der Nähe von Tattoos?`,
        answer: `Direkt auf einem Tattoo wird nicht behandelt. Wir halten mindestens 3 cm Abstand und decken das Tattoo zusätzlich mit einem weißen Marker ab, damit die Behandlung in der Nähe sicher bleibt.`
      },
      q6: {
        question: `Wie bereite ich mich auf die erste Sitzung vor?`,
        answer: `Rasiere die Zone etwa 24 Stunden vorher und vermeide Sonne. Verzichte einige Wochen vorher auf Waxing, Sugaring und Solarium. Am Tag der Behandlung bitte keine Selbstbräuner oder aggressive Pflegeprodukte.`
      },
      q7: {
        question: `Was passiert danach mit der Haut, wie pflege ich sie?`,
        answer: `Die Haut kann kurz leicht empfindlich oder gerötet sein. In den ersten Tagen meide direkte Sonne, nutze Sonnenschutz und verzichte auf Sauna und schweißtreibendes Training, damit sich die Haut erholen kann.`
      },
      q8: {
        question: `Wie viele Sitzungen brauche ich für ein stabiles Ergebnis?`,
        answer: `Meist 6 bis 8 Sitzungen. Der Laser wirkt nur auf Haare in der aktiven Wachstumsphase, und da sich immer nur ein Teil der Haare in dieser Phase befindet, braucht es einen Kurs, um alle Haare nach und nach zu erfassen.`
      },
      q9: {
        question: `Wann sehe ich die ersten Ergebnisse?`,
        answer: `Oft schon nach der ersten Sitzung. Innerhalb von 1 bis 2 Wochen fallen behandelte Haare aus, und das nachwachsende Haar wird langsamer und weniger dicht.`
      },
      q10: {
        question: `Welche Zonen können behandelt werden?`,
        answer: `Fast jede Körperstelle. Am häufigsten behandeln wir Gesicht, Achseln, Arme, Beine, Rücken und Bikinizone.`
      },
      q11: {
        question: `Geht Laser auch im Sommer oder auf gebräunter Haut?`,
        answer: `Ja, das ganze Jahr über. Am angenehmsten sind Herbst, Winter und Frühling, weil die Sonneneinstrahlung geringer ist. Im Sommer ist es ebenfalls möglich, wichtig ist nur, frische Bräune zu vermeiden und ausreichend Sonnenschutz zu nutzen.`
      },
      q13: {
        question: `Wie lange hält das Ergebnis nach dem vollständigen Kurs?`,
        answer: `Nach dem vollständigen Kurs ist das Haarwachstum um etwa 80 bis 90 % reduziert, verbleibende Haare wachsen feiner und langsamer nach. Meist reichen 1 bis 2 Auffrischungssitzungen pro Jahr, um das Ergebnis zu halten.`
      },
      q14: {
        question: `Darf ich zwischen den Sitzungen rasieren?`,
        answer: `Ja, das ist ausdrücklich erlaubt und beeinträchtigt die Wirksamkeit der Behandlung nicht.`
      }
    }
  },

  // FOOTER — подвал сайта
  footer: {
    text: `A calm space to feel taken care of. Munich, Glockenbach, Westermühlstraße 21, 80469 München`,
    ctaButton: `Termin per WhatsApp`,
    contactTitle: `Kontakt`,
    hoursTitle: `Öffnungszeiten`,
    hoursText: `Termine nach Vereinbarung<br>Di – Sa`,
    copyright: `© 2026 MONÓ Contemporary Men's Studio GmbH`
  }
};