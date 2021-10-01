const sentences = [
  {
    name: "손흥민",
    image:
      "https://resources.premierleague.com/premierleague/photo/2020/09/07/bdecdff6-354c-4d04-8d2e-92004a72cf1e/GettyImages-1267679968.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/k3Q_mKE98Dnohrcea0JFgQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/kr.png",
  },
  {
    name: "뤼디거",
    image:
      "https://therealchamps.com/wp-content/uploads/getty-images/2018/08/1340380765-1.jpeg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/fhBITrIlbQxhVB6IjxUO6Q_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/de.png",
  },
  {
    name: "알라바",
    image:
      "https://noblesportnews.com/wp-content/uploads/2021/05/Alaba-explains-why-hes-leaving-Bayern-Munich-comfort-zone-with-a-tear-in-his-eye-800x445.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/at.png",
  },
  {
    name: "아놀드",
    image:
      "https://rushthekop.com/wp-content/uploads/getty-images/2020/04/1190521396.jpeg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/gb-eng.png",
  },
  {
    name: "알렉시스 산체스",
    image:
      "https://cdn.theathletic.com/app/uploads/2020/09/05122729/ALEXIS-SANCHEZ-scaled-e1599325606595-1024x684.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/l2-icwsMhIvsbRw8AwC1yg_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/cl.png",
  },
  {
    name: "알리송",
    image:
      "https://rushthekop.com/wp-content/uploads/getty-images/2017/07/1227738716.jpeg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/br.png",
  },
  {
    name: "아센시오",
    image:
      "https://ronaldo.com/wp-content/uploads/2020/05/GettyImages-832835620.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/es.png",
  },
  {
    name: "오바메양",
    image:
      "https://www.nbcsports.com/sites/nbcsports.com/files/2020/03/17/yt_pl_everyaubameyanggoal_200317.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/4us2nCgl6kgZc0t3hpW75Q_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/ga.png",
  },
  {
    name: "아스필리쿠에타",
    image:
      "https://resources.premierleague.com/premierleague/photo/2020/04/11/99565824-08f0-431e-9a07-05b29ff5b3cf/Cesar-Azpilicueta.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/fhBITrIlbQxhVB6IjxUO6Q_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/es.png",
  },
  {
    name: "바카요코",
    image:
      "https://www.thechelseachronicle.com/static/uploads/17/2021/08/GettyImages-1332501439-2.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/VoKsJ6RitaHGhsM62e6AXQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/fr.png",
  },
  {
    name: "가레스 베일",
    image:
      "https://lastwordonsports.com/football/wp-content/uploads/sites/4/2020/09/Gareth-Bale-10.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/gb-wls.png",
  },
  {
    name: "벤제마",
    image:
      "https://acefootball.com/wp-content/uploads/2021/08/GettyImages-1334159654.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/fr.png",
  },
  {
    name: "브루노 페르난데스",
    image:
      "https://acefootball.com/wp-content/uploads/2021/01/GettyImages-1293172886.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/pt.png",
  },
  {
    name: "브라이언 힐",
    image:
      "https://resources.premierleague.com/premierleague/photo/2021/07/26/5ed1705a-6e99-4040-8818-f7e5bda3e75a/Bryan-Gil-Spain.png",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/k3Q_mKE98Dnohrcea0JFgQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/es.png",
  },
  {
    name: "부카요 사카",
    image:
      "https://arsenaltruefans.com/wp-content/uploads/2021/06/60b7f16ae9466-1200x800.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/4us2nCgl6kgZc0t3hpW75Q_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/gb-eng.png",
  },
  {
    name: "부스케츠",
    image:
      "https://1401700980.rsc.cdn77.org/data/images/full/98983/fifa-2021-guide-requirements-and-how-to-unlock-sergio-busquets-player-moment-sbc-in-fut.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/paYnEE8hcrP96neHRNofhQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/es.png",
  },
  {
    name: "카마빙가",
    image: "https://images5.alphacoders.com/117/1176929.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/fr.png",
  },
  {
    name: "카바니",
    image:
      "https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2021/09/edinson-cavani-manchester-united-photo-by-michael-regan-getty-images-3.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/uy.png",
  },
  {
    name: "키엘리니",
    image:
      "https://cdn.24.co.za/files/Cms/General/d/11355/5dd78fe6bd424be89f060a7af58244b7.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/Lv6xmBlUIpN3GAFhtf6nqQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/it.png",
  },
  {
    name: "쿠르투아",
    image:
      "https://therealchamps.com/wp-content/uploads/getty-images/2017/07/1209750470.jpeg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/be.png",
  },
  {
    name: "쿠티뉴",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtVA4KKw1_mGYMMdhoHEarGQPdKwSsji7iyg&usqp=CAU",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/paYnEE8hcrP96neHRNofhQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/br.png",
  },
  {
    name: "다르미안",
    image:
      "https://content.fantacalcio.it/web/img/medium/darmian-d4c595f4-1ab6-43a4-8861-f4b5c88564bd.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/l2-icwsMhIvsbRw8AwC1yg_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/it.png",
  },
  {
    name: "데 리흐트",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEQbu5SOGKx-FVXz4_yLnbLnOz8uSTJZoAFw&usqp=CAU",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/Lv6xmBlUIpN3GAFhtf6nqQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/nl.png",
  },
  {
    name: "델레 알리",
    image:
      "https://sportshub.cbsistatic.com/i/r/2021/02/24/cdf24582-b9ff-40b4-886c-f9cdea78be90/thumbnail/1200x675/d80681b467685626df399636fe1482c7/gettyimages-1303884657.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/k3Q_mKE98Dnohrcea0JFgQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/gb-eng.png",
  },
  {
    name: "디발라",
    image:
      "https://cdn.cnn.com/cnnnext/dam/assets/200608205827-dybala-celebration.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/Lv6xmBlUIpN3GAFhtf6nqQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/ar.png",
  },
  {
    name: "에딘 제코",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbQ6Kvc81-4O733yIFepR16cGLYIp9_WayWQ&usqp=CAU",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/l2-icwsMhIvsbRw8AwC1yg_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/ba.png",
  },
  {
    name: "에데르송",
    image:
      "https://www.sportspundit.com/system/data/7979/new_article_main/13168-virgil-van-dijk-praises-manchester-city-goalkeeper-ederson.jpg?1615389045",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/z44l-a0W1v5FmgPnemV6Xw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/br.png",
  },
  {
    name: "에릭 다이어",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTokuXF62fzb7j5bylg5fWxSnuOdU6ITtzW7A&usqp=CAU",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/k3Q_mKE98Dnohrcea0JFgQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/gb-eng.png",
  },
  {
    name: "에릭센",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F06%2F12%2Fchristian-erikson-2.jpg&q=85",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/l2-icwsMhIvsbRw8AwC1yg_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/dk.png",
  },
  {
    name: "엘링 홀란드",
    image: "https://i.inews.co.uk/content/uploads/2021/04/SEI_76079633.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/FZnTSH2rbHFos4BnlWAItw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/no.png",
  },
  {
    name: "키에사",
    image:
      "https://lastwordonsports.com/football/wp-content/uploads/sites/4/2021/07/gettyimages-1327339824-594x594-1.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/Lv6xmBlUIpN3GAFhtf6nqQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/it.png",
  },
  {
    name: "피르미누",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Ewq23DhLtX8HQKtfUcqL0FcyDNMMRdpmAA&usqp=CAU",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/br.png",
  },
  {
    name: "프랭키 데용",
    image:
      "https://acefootball.com/wp-content/uploads/2021/04/GettyImages-1264725005.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/paYnEE8hcrP96neHRNofhQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/nl.png",
  },
  {
    name: "가브리엘 제수스",
    image:
      "https://tbrfootball.com/static/uploads/27/2021/05/GettyImages-1317012213.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/z44l-a0W1v5FmgPnemV6Xw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/br.png",
  },
  {
    name: "그리즈만",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmVkMZiHggmkV-Zb9kn7xKekLMw9CGNkeKIQ&usqp=CAU",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/srAAE0bOnCppUrlbJpFiHQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/fr.png",
  },
  {
    name: "하키미",
    image:
      "https://www.milanlive.it/wp-content/uploads/2021/05/Hakimi-Achraf-1.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/mcpMspef1hwHwi9qrfp4YQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/ma.png",
  },
  {
    name: "해리 케인",
    image:
      "https://mancitysquare.com/wp-content/uploads/getty-images/2017/07/1319694984.jpeg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/k3Q_mKE98Dnohrcea0JFgQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/gb-eng.png",
  },
  {
    name: "베예린",
    image:
      "https://www.onlyfreetube.com/wp-content/uploads/2021/05/GettyImages-1307822834.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/S0fDZjYYytbZaUt0f3cIhg_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/es.png",
  },
  {
    name: "요리스",
    image:
      "https://thetopflight.com/wp-content/uploads/getty-images/2018/08/1308937445.jpeg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/k3Q_mKE98Dnohrcea0JFgQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/fr.png",
  },
  {
    name: "이카르디",
    image:
      "https://thetopflight.com/wp-content/uploads/getty-images/2017/07/1205693768.jpeg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/mcpMspef1hwHwi9qrfp4YQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/ar.png",
  },
  {
    name: "이스코",
    image:
      "https://tbrfootball.com/static/uploads/27/2020/10/GettyImages-1227706630.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/es.png",
  },
  {
    name: "제임스 밀너",
    image:
      "https://images.daznservices.com/di/library/GOAL/c5/48/james-milner-liverpool-2019-20_hbefqq4y6jz31ovn8p7o4xd34.jpg?t=2091439395&quality=100",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/gb-eng.png",
  },
  {
    name: "주앙 펠릭스",
    image:
      "https://acefootball.com/wp-content/uploads/2020/08/GettyImages-1195572322.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/srAAE0bOnCppUrlbJpFiHQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/pt.png",
  },
  {
    name: "헨더슨",
    image:
      "https://rushthekop.com/wp-content/uploads/getty-images/2017/07/1282659020.jpeg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/gb-eng.png",
  },
  {
    name: "호르디 알바",
    image:
      "https://us.123rf.com/450wm/laristo1/laristo11602/laristo1160200400/53269102-jordi-alba-during-the-match-fc-barcelona-liga-atletico-madrid-january-30-2016-at-the-camp-nou-barcel.jpg?ver=6",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/paYnEE8hcrP96neHRNofhQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/es.png",
  },
  {
    name: "조르지뉴",
    image:
      "https://www.thechelseachronicle.com/static/uploads/17/2021/08/GettyImages-1318712401.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/fhBITrIlbQxhVB6IjxUO6Q_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/it.png",
  },
  {
    name: "카이 하베르츠",
    image:
      "https://ftw.usatoday.com/wp-content/uploads/sites/90/2021/05/1320702819.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/fhBITrIlbQxhVB6IjxUO6Q_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/de.png",
  },
  {
    name: "캉테",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyg0HKU9HPBeKOgJR_E88crUfFWjpDDaVKg&usqp=CAU",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/fhBITrIlbQxhVB6IjxUO6Q_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/fr.png",
  },
  {
    name: "케파",
    image:
      "https://www.thechelseachronicle.com/static/uploads/17/2020/09/GettyImages-1228516774.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/fhBITrIlbQxhVB6IjxUO6Q_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/es.png",
  },
  {
    name: "케빈 데 브라이너",
    image:
      "https://www.arsenalinsider.com/static/uploads/19/2021/01/GettyImages-1196809610-1140x767.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/z44l-a0W1v5FmgPnemV6Xw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/be.png",
  },
  {
    name: "나바스",
    image:
      "https://sportshub.cbsistatic.com/i/r/2021/04/13/71209400-3ea1-4fdf-bee1-633d32dab856/thumbnail/1200x675/13e63b1309e434d37cdd6c0dc0bbad18/gettyimages-1311336339.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/mcpMspef1hwHwi9qrfp4YQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/cr.png",
  },
  {
    name: "키미히",
    image:
      "https://acefootball.com/wp-content/uploads/2020/08/GettyImages-1186579962.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/-_cmntP5q_pHL7g5LfkRiw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/de.png",
  },
  {
    name: "코케",
    image:
      "https://cdn.theathletic.com/app/uploads/2020/11/18073003/Koke-Atletico-Real-Madrid-scaled-e1605708155348-1024x683.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/srAAE0bOnCppUrlbJpFiHQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/be.png",
  },
  {
    name: "토니 크로스",
    image:
      "https://therealchamps.com/wp-content/uploads/getty-images/2017/07/1290730161.jpeg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/de.png",
  },
  {
    name: "디 마리아",
    image: "https://t1.daumcdn.net/cfile/tistory/99962E4B5FC0FD1D12",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/mcpMspef1hwHwi9qrfp4YQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/ar.png",
  },
  {
    name: "라카제트",
    image:
      "https://acefootball.com/wp-content/uploads/2020/09/GettyImages-1206682225.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/4us2nCgl6kgZc0t3hpW75Q_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/fr.png",
  },
  {
    name: "라멜라",
    image:
      "https://www.vbetnews.com/wp-content/uploads/2021/03/GettyImages-1300850608-1.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/hCTs5EX3WjCMC5Jl3QE4Rw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/ar.png",
  },
  {
    name: "레노",
    image: "https://dailypost.ng/wp-content/uploads/2021/09/Bernd-Leno.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/4us2nCgl6kgZc0t3hpW75Q_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/de.png",
  },
  {
    name: "사네",
    image:
      "https://media.gettyimages.com/photos/leroy-sane-of-fc-bayern-muenchen-celebrates-after-scoring-his-teams-picture-id1284439258",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/-_cmntP5q_pHL7g5LfkRiw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/de.png",
  },
  {
    name: "레반도프스키",
    image:
      "https://bayernstrikes.com/wp-content/uploads/getty-images/2017/07/1316991140.jpeg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/-_cmntP5q_pHL7g5LfkRiw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/pl.png",
  },
  {
    name: "루카스 모우라",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHsC3hmsas4gHm5c_0w0_yrVGuH_Owg7GJQ&usqp=CAU",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/k3Q_mKE98Dnohrcea0JFgQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/br.png",
  },
  {
    name: "루카쿠",
    image:
      "https://images.daznservices.com/di/library/GOAL/4/19/romelu-lukaku-inter-2020-21_fvf3yck8eaam10b6tj0y4x7xd.jpg?t=871552375&quality=100",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/fhBITrIlbQxhVB6IjxUO6Q_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/be.png",
  },
  {
    name: "루크 쇼",
    image: "https://i.inews.co.uk/content/uploads/2021/02/PRI_181350960.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/gb-eng.png",
  },
  {
    name: "마르셀루",
    image:
      "https://therealchamps.com/wp-content/uploads/getty-images/2018/08/1211213587.jpeg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/br.png",
  },
  {
    name: "마르코스 알론소",
    image:
      "https://resources.premierleague.com/premierleague/photo/2021/02/02/43cef885-5371-4036-8477-c5925672a21a/Marcos-Alonso.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/fhBITrIlbQxhVB6IjxUO6Q_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/es.png",
  },
  {
    name: "마샬",
    image:
      "https://manunitedcore.com/wp-content/uploads/2021/07/GettyImages-1231068548.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/fr.png",
  },
  {
    name: "메이슨 마운트",
    image:
      "https://acefootball.com/wp-content/uploads/2021/01/GettyImages-1298154103.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/fhBITrIlbQxhVB6IjxUO6Q_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/gb-eng.png",
  },
  {
    name: "음바페",
    image:
      "https://therealchamps.com/wp-content/uploads/getty-images/2018/08/1230171123.jpeg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/mcpMspef1hwHwi9qrfp4YQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/fr.png",
  },
  {
    name: "데파이",
    image:
      "https://sportshub.cbsistatic.com/i/r/2021/08/12/595d6acb-a6a7-4197-8e81-e700fa7888d1/thumbnail/1200x675/aafda275fcde92f93598d234cac49b2f/memphis-depay.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/paYnEE8hcrP96neHRNofhQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/nl.png",
  },
  {
    name: "메시",
    image:
      "https://kvia.b-cdn.net/2021/08/hypatia-h_eb3796fea6cb23d2b84565b82a0e6f93-h_831ec50205d1f49b8f0688b8fbf99424-300-scaled.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/mcpMspef1hwHwi9qrfp4YQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/ar.png",
  },
  {
    name: "모드리치",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTC9mN17be1Pxz1vkeh-Fiy0isjyzmM4C5kg&usqp=CAU",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/hr.png",
  },
  {
    name: "모라타",
    image:
      "https://oldjuve.com/wp-content/uploads/getty-images/2018/08/1305698389-850x560.jpeg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/Lv6xmBlUIpN3GAFhtf6nqQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/es.png",
  },
  {
    name: "노이어",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVneHhDNTIcYTGt11SMkJmIHzkn-eyOKG2PQ&usqp=CAU",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/-_cmntP5q_pHL7g5LfkRiw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/de.png",
  },
  {
    name: "네이마르",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN1f7PM3DoqEPhKvsFVkvJx8vG3QxAe5KPjg&usqp=CAU",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/mcpMspef1hwHwi9qrfp4YQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/br.png",
  },
  {
    name: "필 포든",
    image:
      "https://ronaldo.com/wp-content/uploads/2020/08/GettyImages-1253923281.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/z44l-a0W1v5FmgPnemV6Xw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/gb-eng.png",
  },
  {
    name: "포그바",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoP33b76z2LY2XA8NQ9oBHt0ydD8qVUwhJxw&usqp=CAU",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/fr.png",
  },
  {
    name: "라모스",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq9pNtz0hJL3GXvAJb9MqjlMJVCllXpjzjxw&usqp=CAU",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/mcpMspef1hwHwi9qrfp4YQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/es.png",
  },
  {
    name: "래쉬포드",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZyQcJb7Dmgpn4EfoYQPDDQPRY2eQjBMo1w&usqp=CAU",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/gb-eng.png",
  },
  {
    name: "로이스",
    image:
      "https://images.daznservices.com/di/library/GOAL/d4/78/marco-reus-evonik_o1381x9a4qb31tcab4dp7hhrc.jpg?t=209762389&quality=100",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/FZnTSH2rbHFos4BnlWAItw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/de.png",
  },
  {
    name: "로버트슨",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQctVPXCKDy-MPvzVTJQsS0cGiMTL916wnO-w&usqp=CAU",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/gb-sct.png",
  },
  {
    name: "호날두",
    image:
      "https://media.gettyimages.com/photos/cristiano-ronaldo-of-real-madrid-celebrate-after-scoring-reals-3rd-picture-id624403438",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/pt.png",
  },
  {
    name: "후벵 디아스",
    image:
      "https://www.rousingthekop.com/static/uploads/4/2021/01/GettyImages-1295005178.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/z44l-a0W1v5FmgPnemV6Xw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/pt.png",
  },
  {
    name: "사디오 마네",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTT2dVqiRjVmSKKgBBl-PGGvzABwLdGR92Ig&usqp=CAU",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/sn.png",
  },
  {
    name: "살라",
    image:
      "https://www.nbcsports.com/sites/nbcsports.com/files/2020/03/19/yt_pl_everysalahgoal_200319.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/eg.png",
  },
  {
    name: "아구에로",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzkA6XyCUqWww9SDuvDM2CCfo6sQ4qf6dXTQ&usqp=CAU",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/paYnEE8hcrP96neHRNofhQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/ar.png",
  },
  {
    name: "레길론",
    image:
      "https://images.daznservices.com/di/library/GOAL/4/8a/sergio-reguilon-sevilla-2019-20_1vqnzjrqle1o71ketbguv27p4m.jpg?t=-1543741100&quality=100",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/k3Q_mKE98Dnohrcea0JFgQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/es.png",
  },
  {
    name: "스털링",
    image:
      "https://lastwordonsports.com/football/wp-content/uploads/sites/4/2021/08/Raheem-Sterlingf.jpeg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/z44l-a0W1v5FmgPnemV6Xw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/gb-eng.png",
  },
  {
    name: "수아레즈",
    image:
      "https://the18.com/sites/default/files/feature-images/20200521-The18-Image-Luis-Suarez-Giorgio-Chiellini-GettyImages-452070444.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/srAAE0bOnCppUrlbJpFiHQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/uy.png",
  },
  {
    name: "테어 슈테겐",
    image:
      "https://madaboutepl.net/wp-content/uploads/2020/07/Marc-Andre-ter-Stegen-getty-scaled-e1595934354362.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/paYnEE8hcrP96neHRNofhQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/de.png",
  },
  {
    name: "피케",
    image:
      "https://acefootball.com/wp-content/uploads/2021/07/GettyImages-1318346796.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/paYnEE8hcrP96neHRNofhQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/es.png",
  },
  {
    name: "티아고 알칸타라",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGyTbAal5uGqqSUgnxx1CCCs_K9uQfG2pAHg&usqp=CAU",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/es.png",
  },
  {
    name: "티아고 실바",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftIKegVntlXPnxF7Slpo78ilu7W6U2lr_1g&usqp=CAU",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/fhBITrIlbQxhVB6IjxUO6Q_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/br.png",
  },
  {
    name: "토마스 뮐러",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHyLgpc7VTHm7yq8rvJwdOxykI9-4SRxOCLQ&usqp=CAU",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/-_cmntP5q_pHL7g5LfkRiw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/de.png",
  },
  {
    name: "티모 베르너",
    image:
      "https://resources.premierleague.com/premierleague/photo/2020/11/07/944b6e35-abf7-4ae6-b01b-392f0f5f57a4/Werner-CHESHU.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/fhBITrIlbQxhVB6IjxUO6Q_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/de.png",
  },
  {
    name: "트리피어",
    image:
      "https://cdn.theathletic.com/app/uploads/2021/01/05162810/GettyImages-1287836236-2-1024x682.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/srAAE0bOnCppUrlbJpFiHQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/gb-eng.png",
  },
  {
    name: "움티티",
    image:
      "https://paininthearsenal.com/wp-content/uploads/getty-images/2017/07/1207996487.jpeg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/paYnEE8hcrP96neHRNofhQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/fr.png",
  },
  {
    name: "우파메카노",
    image:
      "https://bayernstrikes.com/wp-content/uploads/getty-images/2017/07/1292133160.jpeg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/-_cmntP5q_pHL7g5LfkRiw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/fr.png",
  },
  {
    name: "반 더 비크",
    image:
      "https://d3vlf99qeg6bpx.cloudfront.net/content/uploads/2021/02/10071759/PA.57994831.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/nl.png",
  },
  {
    name: "반 데이크",
    image: "https://i.inews.co.uk/content/uploads/2021/05/SEI_78559302.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/nl.png",
  },
  {
    name: "바란",
    image:
      "https://images.daznservices.com/di/library/GOAL/2c/d1/raphael-varane-man-utd-2021-22_1twywl45avbk71lii1t72vp6vr.jpg?t=1426653163&quality=100",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/fr.png",
  },
  {
    name: "베라티",
    image:
      "https://thumbs.dreamstime.com/b/marco-verratti-italy-gestures-nations-league-match-portugal-end-tie-193714281.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/mcpMspef1hwHwi9qrfp4YQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/it.png",
  },
  {
    name: "비니시우스 주니오르",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZqc-8v3pBScdyA-5et5AGOlgd9HP0yOdP_w&usqp=CAU",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/br.png",
  },
  {
    name: "자카",
    image:
      "https://www.vbetnews.com/wp-content/uploads/2020/12/1253696496.jpeg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/4us2nCgl6kgZc0t3hpW75Q_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/ch.png",
  },
  {
    name: "진첸코",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcubRKw_cs6v4cugPfFfKOJIIYH5Dm14YFSQ&usqp=CAU",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/z44l-a0W1v5FmgPnemV6Xw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/ua.png",
  },
  {
    name: "즐라탄 이브라히모비치",
    image:
      "https://sportshub.cbsistatic.com/i/r/2021/09/12/d1bff8b8-3496-4717-b8eb-6914a28622cf/thumbnail/1200x675/e3f60d2534c95fe655f07e457f2054fe/ac-milan-zlatan-ibrahimovic.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/VoKsJ6RitaHGhsM62e6AXQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/se.png",
  },
  {
    name: "그릴리쉬",
    image:
      "https://www.footballinsider247.com/static/uploads/1/2020/10/Grealish-sad.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/z44l-a0W1v5FmgPnemV6Xw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/gb-eng.png",
  },
  {
    name: "린가드",
    image:
      "https://cdn.theathletic.com/app/uploads/2021/02/21160410/GettyImages-1231302276-1.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/gb-eng.png",
  },
  {
    name: "마샬",
    image:
      "https://manunitedcore.com/wp-content/uploads/2021/07/GettyImages-1231068548.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/fr.png",
  },
  {
    name: "제이든 산초",
    image:
      "https://resources.premierleague.com/premierleague/photo/2021/07/23/d75398a1-f8c2-4e42-bd39-101582a52f9c/Jadon-Sancho-Man-Utd-2.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/gb-eng.png",
  },
  {
    name: "올리비에 지루",
    image:
      "https://acefootball.com/wp-content/uploads/2020/12/GettyImages-1289095665.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/VoKsJ6RitaHGhsM62e6AXQ_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/fr.png",
  },
  {
    name: "고레츠카",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsAAvhxtGkPKrHx_x9gq0WqxQHFv8d9s73Fw&usqp=CAU",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/-_cmntP5q_pHL7g5LfkRiw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/de.png",
  },
  {
    name: "그나브리",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhm-H0HqZhUWbAqpumksKXzGvZUP0N53HrcA&usqp=CAU",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/-_cmntP5q_pHL7g5LfkRiw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/de.png",
  },
  {
    name: "매과이어",
    image:
      "https://reddevilarmada.com/wp-content/uploads/getty-images/2017/07/1342432757.jpeg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/gb-eng.png",
  },
  {
    name: "에덴 아자르",
    image:
      "https://www.thechelseachronicle.com/static/uploads/17/2021/03/GettyImages-1146882304.jpg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/be.png",
  },
  {
    name: "데 헤아",
    image:
      "https://thetopflight.com/wp-content/uploads/getty-images/2018/08/1310779015.jpeg",
    club: "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
    country: "https://flagpedia.net/data/flags/w1160/be.png",
  },
];

const URL = "https://teachablemachine.withgoogle.com/models/NRgnrzlTw/";

let model, container, labelContainer, maxPredictions;

async function init() {
  const modelURL = `${URL}model.json`;
  const metadataURL = `${URL}metadata.json`;

  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  container = document.querySelector("#container");
  container.appendChild(document.createElement("div"));
  labelContainer = document.getElementById("label-container");
  for (let i = 0; i < 4; i++) {
    labelContainer.appendChild(document.createElement("div"));
  }
}

async function predict() {
  var myData = [];
  var myLabel = [];

  const uploadedImage = await document.getElementById("face-image");
  const prediction = await model.predict(uploadedImage, false);
  prediction.sort(
    (a, b) => parseFloat(b.probability) - parseFloat(a.probability)
  );
  let name = `${prediction[0].className}`;
  if (name == "마샬") {
    name = "앙토니 마샬";
  }

  const classPrediction = `${name}`;
  container.childNodes[0].innerHTML = classPrediction;

  function findName(element) {
    if (element.name === name) {
      return true;
    }
  }

  const correctName = sentences.find(findName);
  const club = correctName.club;
  const country = correctName.country;
  const player = correctName.image;

  document.querySelector(".file-upload-image").src = player;
  document.getElementById("club").src = club;
  document.getElementById("country").src = country;

  let num = 0;
  for (let i = 0; i < 3; i++) {
    const name = `${prediction[i].className}`;
    myLabel.push(name);
    const number = Math.round(
      Number(prediction[i].probability.toFixed(4) * 100)
    );

    num += Number(number);

    myData.push(number);
    const classPrediction = `${name}:${number}%`;
    labelContainer.childNodes[i].innerHTML = classPrediction;
  }
  const etc = 100 - num;
  console.log(etc);
  labelContainer.childNodes[3].innerHTML = `기타:${etc}%`;
  myLabel.push("기타 ");
  myData.push(etc);

  var myColor = ["#39ca74", "#e54d42", "#f0c330", "#3999d8", "#35485d"];

  function getTotal() {
    var myTotal = 0;
    for (var j = 0; j < myData.length; j++) {
      myTotal += typeof myData[j] == "number" ? myData[j] : 0;
    }
    return myTotal;
  }

  function plotData() {
    var canvas;
    var ctx;
    var lastend = 0;
    var myTotal = getTotal();
    var doc;
    canvas = document.getElementById("canvas");
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var r = 150;

    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < myData.length; i++) {
      ctx.fillStyle = myColor[i];
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.arc(
        x,
        y,
        r,
        lastend,
        lastend + Math.PI * 2 * (myData[i] / myTotal),
        false
      );
      ctx.lineTo(x, y);
      ctx.fill();

      // Now the pointers
      ctx.beginPath();
      var start = [];
      var end = [];
      var last = 0;
      var flip = 0;
      var textOffset = 0;
      start = getPoint(
        x,
        y,
        r - 20,
        lastend + (Math.PI * 2 * (myData[i] / myTotal)) / 2
      );
      end = getPoint(
        x,
        y,
        r + 20,
        lastend + (Math.PI * 2 * (myData[i] / myTotal)) / 2
      );
      if (start[0] <= x) {
        flip = -1;
        textOffset = -(myLabel[i].length + 3) * 20;
      } else {
        flip = 1;
        textOffset = 10;
      }
      ctx.moveTo(start[0], start[1]);
      ctx.lineTo(end[0], end[1]);
      ctx.lineTo(end[0] + 120 * flip, end[1]);
      ctx.strokeStyle = "#bdc3c7";
      ctx.lineWidth = 2;
      ctx.stroke();
      // The labels
      ctx.font = "24px Arial";
      ctx.fillText(
        myLabel[i] + myData[i] + "%",
        end[0] + textOffset,
        end[1] - 4
      );
      // Increment Loop
      lastend += Math.PI * 2 * (myData[i] / myTotal);
    }
  }
  // Find that magical point
  function getPoint(c1, c2, radius, angle) {
    return [c1 + Math.cos(angle) * radius, c2 + Math.sin(angle) * radius];
  }
  // The drawing
  plotData();
}

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      const wait = document.getElementById("wait");
      $(".image-upload-wrap").hide();
      $(".image-upload-wrap-hovered").hide();
      $(".image-upload-wrap-blackbg").hide();
      $(".container").hide();
      $(".cc").hide();
      $(".label-container").hide();
      $(".graph").hide();

      $(".file-upload-image").attr("src", e.target.result);
      $(".file-upload-content").show();

      $(".image-title").html(input.files[0].name);

      $(".image-title-wrap").show();

      wait.innerHTML = "잠시만 기다려주세요...";
    };
    reader.readAsDataURL(input.files[0]);
    setTimeout(() => {
      predict();
      wait.innerHTML = "";
      $(".container").show();
      $(".cc").show();
      $(".label-container").show();
      $(".graph").show();
    }, 3000);
  }
}
init();

$(".image-upload-wrap").bind("dragover", function () {
  $(".image-upload-wrap").addClass("image-dropping");
});
$(".image-upload-wrap").bind("dragleave", function () {
  $(".image-upload-wrap").removeClass("image-dropping");
});
$(".image-title-wrap").hide();
