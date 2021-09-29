const sentences = [
  {
    name: "손흥민",
    sentences: "당신은 ~~~",
  },
  {
    name: "뤼디거",
    sentences: "당신은 ~~~",
  },
  {
    name: "알라바",
    sentences: "당신은 ~~~",
  },
  {
    name: "아놀드",
    sentences: "당신은 ~~~",
  },
  {
    name: "알렉시스 산체스",
    sentences: "당신은 ~~~",
  },
  {
    name: "알리송",
    sentences: "당신은 ~~~",
  },
  {
    name: "아센시오",
    sentences: "당신은 ~~~",
  },
  {
    name: "오바메양",
    sentences: "당신은 ~~~",
  },
  {
    name: "아스필리쿠에타",
    sentences: "당신은 ~~~",
  },
  {
    name: "바카요코",
    sentences: "당신은 ~~~",
  },
  {
    name: "가레스 베일",
    sentences: "당신은 ~~~",
  },
  {
    name: "벤제마",
    sentences: "당신은 ~~~",
  },
  {
    name: "브루노 페르난데스",
    sentences: "당신은 ~~~",
  },
  {
    name: "브라이언 힐",
    sentences: "당신은 ~~~",
  },
  {
    name: "부카요 샤카",
    sentences: "당신은 ~~~",
  },
  {
    name: "부스케츠",
    sentences: "당신은 ~~~",
  },
  {
    name: "카미빙가",
    sentences: "당신은 ~~~",
  },
  {
    name: "카바니",
    sentences: "당신은 ~~~",
  },
  {
    name: "키엘리니",
    sentences: "당신은 ~~~",
  },
  {
    name: "쿠르투아",
    sentences: "당신은 ~~~",
  },
  {
    name: "쿠티뉴",
    sentences: "당신은 ~~~",
  },
  {
    name: "다르미안",
    sentences: "당신은 ~~~",
  },
  {
    name: "데 리흐트",
    sentences: "당신은 ~~~",
  },
  {
    name: "델레 알리",
    sentences: "당신은 ~~~",
  },
  {
    name: "디발라",
    sentences: "당신은 ~~~",
  },
  {
    name: "에딘 제코",
    sentences: "당신은 ~~~",
  },
  {
    name: "에데르송",
    sentences: "당신은 ~~~",
  },
  {
    name: "에릭 다이어",
    sentences: "당신은 ~~~",
  },
  {
    name: "에릭센",
    sentences: "당신은 ~~~",
  },
  {
    name: "엘링 홀란드",
    sentences: "당신은 ~~~",
  },
  {
    name: "키에사",
    sentences: "당신은 ~~~",
  },
  {
    name: "피르미누",
    sentences: "당신은 ~~~",
  },
  {
    name: "프랭키 데용",
    sentences: "당신은 ~~~",
  },
  {
    name: "가브리엘 제수스",
    sentences: "당신은 ~~~",
  },
  {
    name: "그리즈만",
    sentences: "당신은 ~~~",
  },
  {
    name: "하키미",
    sentences: "당신은 ~~~",
  },
  {
    name: "해리 케인",
    sentences: "당신은 ~~~",
  },
  {
    name: "베예린",
    sentences: "당신은 ~~~",
  },
  {
    name: "요리스",
    sentences: "당신은 ~~~",
  },
  {
    name: "이카르디",
    sentences: "당신은 ~~~",
  },
  {
    name: "이스코",
    sentences: "당신은 ~~~",
  },
  {
    name: "제임스 밀너",
    sentences: "당신은 ~~~",
  },
  {
    name: "주앙 펠릭스",
    sentences: "당신은 ~~~",
  },
  {
    name: "헨더슨",
    sentences: "당신은 ~~~",
  },
  {
    name: "호르디 알바",
    sentences: "당신은 ~~~",
  },
  {
    name: "조르지뉴",
    sentences: "당신은 ~~~",
  },
  {
    name: "카이 하베르츠",
    sentences: "당신은 ~~~",
  },
  {
    name: "캉테",
    sentences: "당신은 ~~~",
  },
  {
    name: "케파",
    sentences: "당신은 ~~~",
  },
  {
    name: "케빈 데 브라이너",
    sentences: "당신은 ~~~",
  },
  {
    name: "나바스",
    sentences: "당신은 ~~~",
  },
  {
    name: "키미히",
    sentences: "당신은 ~~~",
  },
  {
    name: "코케",
    sentences: "당신은 ~~~",
  },
  {
    name: "토니 크로스",
    sentences: "당신은 ~~~",
  },
  {
    name: "디 마리아",
    sentences: "당신은 ~~~",
  },
  {
    name: "라카제트",
    sentences: "당신은 ~~~",
  },
  {
    name: "라멜라",
    sentences: "당신은 ~~~",
  },
  {
    name: "레노",
    sentences: "당신은 ~~~",
  },
  {
    name: "사네",
    sentences: "당신은 ~~~",
  },
  {
    name: "레반도프스키",
    sentences: "당신은 ~~~",
  },
  {
    name: "루카스 모우라",
    sentences: "당신은 ~~~",
  },
  {
    name: "루카쿠",
    sentences: "당신은 ~~~",
  },
  {
    name: "루크 쇼",
    sentences: "당신은 ~~~",
  },
  {
    name: "마르셀루",
    sentences: "당신은 ~~~",
  },
  {
    name: "마르코스 알론소",
    sentences: "당신은 ~~~",
  },
  {
    name: "마샬",
    sentences: "당신은 ~~~",
  },
  {
    name: "메이슨 마운트",
    sentences: "당신은 ~~~",
  },
  {
    name: "음바페",
    sentences: "당신은 ~~~",
  },
  {
    name: "데파이",
    sentences: "당신은 ~~~",
  },
  {
    name: "메시",
    sentences: "당신은 ~~~",
  },
  {
    name: "모드리치",
    sentences: "당신은 ~~~",
  },
  {
    name: "모라타",
    sentences: "당신은 ~~~",
  },
  {
    name: "노이어",
    sentences: "당신은 ~~~",
  },
  {
    name: "네이마르",
    sentences: "당신은 ~~~",
  },
  {
    name: "필 포든",
    sentences: "당신은 ~~~",
  },
  {
    name: "포그바",
    sentences: "당신은 ~~~",
  },
  {
    name: "라모스",
    sentences: "당신은 ~~~",
  },
  {
    name: "래쉬포드",
    sentences: "당신은 ~~~",
  },
  {
    name: "로이스",
    sentences: "당신은 ~~~",
  },
  {
    name: "로버트슨",
    sentences: "당신은 ~~~",
  },
  {
    name: "호날두",
    sentences: "당신은 ~~~",
  },
  {
    name: "후벵 디아스",
    sentences: "당신은 ~~~",
  },
  {
    name: "사디오 마네",
    sentences: "당신은 ~~~",
  },
  {
    name: "살라",
    sentences: "당신은 ~~~",
  },
  {
    name: "아구에로",
    sentences: "당신은 ~~~",
  },
  {
    name: "레길론",
    sentences: "당신은 ~~~",
  },
  {
    name: "스털링",
    sentences: "당신은 ~~~",
  },
  {
    name: "수아레즈",
    sentences: "당신은 ~~~",
  },
  {
    name: "테어 슈테겐",
    sentences: "당신은 ~~~",
  },
  {
    name: "피케",
    sentences: "당신은 ~~~",
  },
  {
    name: "티아고 알칸타라",
    sentences: "당신은 ~~~",
  },
  {
    name: "티아고 실바",
    sentences: "당신은 ~~~",
  },
  {
    name: "토마스 뮐러",
    sentences: "당신은 ~~~",
  },
  {
    name: "티모 베르너",
    sentences: "당신은 ~~~",
  },
  {
    name: "트리피어",
    sentences: "당신은 ~~~",
  },
  {
    name: "움티티",
    sentences: "당신은 ~~~",
  },
  {
    name: "우파메카노",
    sentences: "당신은 ~~~",
  },
  {
    name: "반 더 비크",
    sentences: "당신은 ~~~",
  },
  {
    name: "반 데이크",
    sentences: "당신은 ~~~",
  },
  {
    name: "바란",
    sentences: "당신은 ~~~",
  },
  {
    name: "베라티",
    sentences: "당신은 ~~~",
  },
  {
    name: "비니시우스 주니오르",
    sentences: "당신은 ~~~",
  },
  {
    name: "자카",
    sentences: "당신은 ~~~",
  },
  {
    name: "진첸코",
    sentences: "당신은 ~~~",
  },
  {
    name: "즐라탄 이브라히모비치",
    sentences: "당신은 ~~~",
  },
  {
    name: "그릴리쉬",
    sentences: "당신은 ~~~",
  },
  {
    name: "린가드",
    sentences: "당신은 ~~~",
  },
];
