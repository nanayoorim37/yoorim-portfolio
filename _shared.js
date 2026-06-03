// ── 공통 프로젝트 데이터 + 렌더러 ──
window.PROJECTS = [
  {
    id:'bhs',category:'tuning',categoryLabel:'라이브 튜닝',
    title:'박효신 단독 콘서트',subtitle:'문학경기장 · 2026.03–04',
    role:'튜닝 보조 + J-Stack 직접 튜닝 + Lake 오퍼레이팅',
    tags:['d&b GSL','Lake Controller LM44','Smaart v9','RME UFX3'],
    system:[['Main L/R','d&b GSL8 14ea + GSL12 2ea each'],['Sub','F-SUB, G-SUB'],['Fill','LL/RR · Front Fill · 270° · J-Stack'],['Delay','Delay 1 · Delay 2'],['DSP','Lake Controller LM44, d&b R1'],['Analyzer','Smaart v9 + RME Fireface UFX3 + Isemcon mic ×7']],
    tasks:['멀티존 Time Alignment: Main / LL·RR / Delay 1·2 / 270 / FF / J-Stack / SUB','어레이 균일도 조정: Top·Middle·Bottom 존 간 레벨·주파수 편차 최소화','공간 균일성 확보: 야외 스타디움 특성상 구역별 음압·음색 편차가 크게 발생. 존별 EQ와 레벨 조정으로 최전방 피트부터 Delay 타워까지 일관된 사운드 도출','실시간 피드백 반영: 리허설 및 공연 중 모니터링, 즉각 조정'],
    troubleshootings:[{title:'Delay 타워 딜레이 값 절충',body:'측정 위치에 따라 Main과 Delay 타워 간 거리비가 달라지는 문제로 절충안을 찾는 데 시간이 오래 소요됐다. 스타디움 특성상 수직 거리 차이가 크기 때문에 단일 측정 포인트로 전 구역을 커버할 수 없는 구조적 문제였다.<br><br>대응: 1층과 4층 각각에서 측정 후 절충점을 찾아 설정. 수치 결정 후 직접 걸어다니며 청음으로 최종 확인.',delayTable:[['3/30','183.45ms','326.00ms'],['3/31','173.20ms','281.02ms'],['4/2','197.57ms','318.25ms'],['4/3','156.00ms','259.20ms']]}],
    lessons:['EQ 조정 시 목적을 명확히 하고 건드려야 한다. 피드백 대응 시 전체 그룹에서 조절했다가 딜레이 존 하이가 과도하게 깎이는 상황이 발생했다.','물리적 한계는 EQ로 해결되지 않는다. 결국 스피커 높이와 각도를 물리적으로 조정해 해결했다.','멈출 때를 알아야 한다. 공연 중 과도한 조작은 오히려 독이 된다.']
  },
  {
    id:'illit',category:'tuning',categoryLabel:'라이브 튜닝',
    title:'아일릿 단독 콘서트',subtitle:'올림픽홀 · 2025.11',
    role:'튜닝 보조',
    tags:['d&b J·V 시스템','d&b R1','Smaart v8','MOTU M4'],
    system:[['Main L/R','d&b J8 12ea + J12 2ea each'],['Out Fill','d&b V8 6ea (Stacked)'],['Front Fill','d&b V8 1ea each'],['SUB','3 Points Stacked each'],['Side Fill','Q 2ea'],['DSP','d&b R1'],['Analyzer','Smaart v8 + MOTU M4 + dbx RTA-M']],
    tasks:['멀티존 Time Alignment: Main / Sub / Front Fill / Out Fill','L·R 센터 정렬: L·R 리깅 위치 차이로 인한 콤필터링 제거, 정위감 센터 기준으로 보정','공간 균일성 확보: Main 커버리지부터 Out Fill·VIP 구역까지 일관된 사운드 도출','실시간 피드백 반영: Pro Tools 사운드 체크 및 테크 리허설 중 위치별 순회 청음, 즉각 조정'],
    troubleshootings:[{title:'FF Time Alignment 위상 절충',body:'Main(d&b J)과 Front Fill(d&b V) 간 Time Alignment 과정에서 하이와 로우를 동시에 맞출 수 없는 상황이 발생했다. J와 V의 방사 특성 차이에서 기인한 것으로, 단순 딜레이 값 조정만으로는 해결되지 않았다.<br><br>대응: FF에 로우컷을 적용해 위상 충돌 구간을 제거하고, 딜레이 값을 미세 조정해 하이 대역 기울기를 맞추는 방식으로 절충.'},{title:'Out Fill 위상 캔슬',body:'Main과 Out Fill이 겹치는 2층 앞 구역에서 하이가 적게 들리는 문제가 발생했다. J와 V의 방사 특성 차이로 인해 원천적으로 위상 캔슬이 일어나는 구조였다. 측정으로 최대한 맞췄으나 완전한 해결은 불가능했고, 귀로 들었을 때 더 나은 방향으로 최종 조정했다.'}],
    lessons:['서로 다른 드라이버 구성의 스피커를 인접 존에 혼용할 경우 위상 절충이 불가피하다. 어느 대역을 우선할지 판단 기준을 미리 세우고 접근해야 한다.','측정은 방향을 잡아주지만 최종 판단은 귀로 한다.','같은 베뉴 이전 기록이 있었다면 시간을 크게 단축할 수 있었을 것이다. 현장 기록의 축적이 다음 현장의 자산이 된다.']
  },
  {
    id:'plave',category:'tuning',categoryLabel:'라이브 튜닝',
    title:'플레이브 단독 콘서트',subtitle:'고척스카이돔 · 2025.11',
    role:'튜닝 보조 + FF 직접 튜닝 + Lake 오퍼레이팅',
    tags:['d&b GSL + JBL','Lake LM48','Smaart v8'],
    system:[['Main L/R','d&b GSL 24ea each'],['Out Fill LL/RR','d&b GSL'],['Delay','6 Points, V8 16ea each'],['SUB','8 Points, GSL-SUB 3ea each'],['DSP','Lake LM48, d&b R1'],['Analyzer','Smaart v8 + OCTA CAPTURE']],
    tasks:['멀티존 Time Alignment: Main / Out Fill / Delay / SUB / Front Fill','공간 균일성 확보: 돔 구조 특성상 딜레이 존이 6포인트로 분산. 존별 레벨·EQ 조정으로 전 구역 균일한 사운드 도출','4층 순회 청음: 측정 후 직접 4층 전 구역을 걸어다니며 귀로 최종 확인 및 조정','Front Fill 직접 튜닝: 마이크 측정 + 현장 청음으로 FF 딜레이·EQ 조정 직접 진행'],
    troubleshootings:[{title:'리허설 중 FF Time Alignment',body:'시간 부족으로 FF 튜닝 전체를 리허설 이후로 넘겨야 했고, 메인이 재생되는 상황에서 작업을 진행했다. 메인 신호가 흐르는 상태에서 FF 스피커를 하나씩 재생하며 Smaart 임펄스 응답으로 딜레이 값을 확인하고 맞췄다.'},{title:'FF 마이크 위치 오류',body:'Front Fill 튜닝 시 마이크를 FF 스피커들 사이에 배치했으나 얼라인먼트가 맞지 않았다. 원인은 FF 스피커들이 일직선상에 있지 않고 한 포인트가 유독 앞으로 나와있어 마이크가 Off-Axis 위치에 놓인 것이었다. 마이크를 뒤로 이동해 On-Axis가 되도록 조정한 후 재측정해 해결했다.'}],
    lessons:['마이크 위치는 스피커 커버리지 기준으로 잡아야 한다.','측정값과 청감을 반복적으로 대조해야 한다.','딜레이 포인트 설계 단계에서 SPL뿐 아니라 객석 각 위치까지의 거리 편차를 함께 고려해야 한다.']
  },
  {
    id:'other-tuning',category:'tuning',categoryLabel:'라이브 튜닝',
    title:'기타 라이브 튜닝 경험',subtitle:'다수 현장 · 2023–2026',
    tags:['d&b GSL','JBL A8·A12','야외 스타디움','실내 돔'],
    isOther:true,
    otherItems:[{name:'GD',detail:'고양종합운동장 / d&b GSL + JBL VTX A / 야외 스타디움'},{name:'GD',detail:'고척스카이돔 / d&b GSL + JBL VTX A / 실내 돔'},{name:'스트레이키즈',detail:'KSPO돔 (2025.02) / d&b GSL / 실내 돔'},{name:'스트레이키즈',detail:'KSPO돔 (2024.03) / d&b GSL / 실내 돔'},{name:'태민',detail:'KSPO돔 / d&b GSL / 실내 돔'},{name:'아이브',detail:'인스파이어 360 / JBL VTX A / 실내 돔 360'},{name:'트와이스',detail:'인스파이어 360 / JBL VTX A / 실내 돔 360'},{name:'스트레이키즈',detail:'인스파이어 / d&b GSL / 실내 돔'},{name:'태민',detail:'인스파이어 / d&b GSL / 실내 돔'},{name:'박효신',detail:'88잔디마당 / d&b GSL / 야외 마당'},{name:'포레스텔라',detail:'경희대 평화의전당 / d&b GSL + V / 실내 콘서트홀'},{name:'킹누 내한',detail:'올림픽홀 / d&b J + V / 실내 콘서트홀'},{name:'헤드윅 뮤지컬',detail:'샤롯데씨어터 / d&b J / 실내 콘서트홀'},{name:'박서진',detail:'킨텍스 1홀 / d&b J + V / 실내 전시관'},{name:'백예린',detail:'에스팩토리 / JBL VTX A / 실내 공장'}]
  },
  {
    id:'chuncheon',category:'installation',categoryLabel:'설치',
    title:'춘천한마음교회 본당 음향 시스템 교체',subtitle:'춘천 · 2024.07',
    role:'설계 · 블록도 작성 · 설치 · 튜닝',
    tags:['d&b Vi 시리즈','풀사이클 설치','AutoCAD','제안서'],
    system:[['Main L/R','d&b Vi8 4ea + Vi12 2ea + Vi-SUB 1ea per side'],['Front Fill L/R','d&b Yi7P 2ea + Vi-GSUB 2ea per side'],['Under Balcony','d&b 8S 6ea'],['Stage Monitors','d&b MAX2 4ea + 5S 2ea + 8S 1ea'],['중고등부실','JBL VRX912 2ea + VRX918 2ea each side']],
    tasks:['기존 시스템 문제 진단: 메인 스피커 안쪽 배치로 인한 마이크-스피커 물리적 간섭 파악, 피드백 원인 규명','스피커 위치 재설계: 외측으로 이동해 마이크-스피커 간섭 물리적 해소','커버리지 보강 설계: 발코니 언더존 스피커 추가로 후방 데드존 해소','AutoCAD 블록도 작성: 본당 Main L/R, Fills·MON, Under Balcony, 중고등부실, 유치부실 총 6개 작성','제안서 작성: 문제 진단·개선 방향·스피커 선정 근거 포함'],
    troubleshootings:[{title:'설교 시 구석 커버리지 부족',body:'클라이언트(음향 간사)의 요구는 명확했다. 큰 음압, 풍성한 사운드. 이에 맞춰 고출력 메인 어레이와 넉넉한 서브를 중심으로 설계했고, 음압이 충분하면 메인 어레이만으로도 구석까지 커버가 가능할 것으로 판단해 딜레이 포인트는 기존 수량을 유지했다.<br><br>그러나 실제 예배가 시작되자 문제가 드러났다. 목사님 말씀 시간에 구석 좌석까지 소리가 충분히 전달되지 않는다는 피드백이 들어온 것이다. 음악 재생 시에는 문제가 없었다.<br><br>원인은 용도의 차이였다. 음악은 음압과 에너지가 커버리지를 보완하지만, 스피치는 음압보다 명료도와 균일한 커버리지가 훨씬 중요하다. 같은 공간이라도 음악과 스피치는 요구하는 음향 특성이 다른데, 클라이언트가 요구한 "큰 음압"에만 집중하다가 실제 사용 목적인 예배 스피치 환경을 설계 단계에서 충분히 고려하지 못한 것이었다. 결국 딜레이 포인트를 추가하는 방향으로 보완했다.'}],
    lessons:['클라이언트의 요구 너머를 봐야 한다. "큰 음압"이라는 요구 하나만 반영했다가 실제 사용 상황인 스피치 커버리지를 놓쳤다. 클라이언트는 본인이 원하는 것을 말하지만, 본인이 필요한 것을 항상 명확히 아는 건 아니다. 요구사항을 들으면서도 전체 사용 맥락을 스스로 파악하고 역제안할 줄 알아야 한다.','튜닝 방향성은 기술적 기준을 지키면서도 클라이언트의 청취 성향에 맞춰야 한다. 측정값과 청감이 일치해도 클라이언트가 원하는 방향이 다를 수 있기 때문에, 튜닝을 시작하기 전에 클라이언트가 어떤 소리를 원하는지 먼저 파악하고 그 방향 안에서 기술적으로 완성도를 높이는 접근이 필요하다.','현장에서 모르는 사람이 봐도 이해할 수 있는 설계도를 그려야 한다. 라인 패칭이 복잡한 부분에서 설계도만으로는 설명이 되지 않아 직접 옆에서 설명해야 했다. 설계도는 작성자가 없어도 현장이 돌아갈 수 있을 만큼 단순하고 명확해야 한다.']
  },
  {
    id:'suncheon',category:'installation',categoryLabel:'설치',
    title:'순천교회 본당 음향 시스템 교체',subtitle:'순천 · 2025.06',
    role:'설계 · 설치 · 튜닝 · 콘솔 교육 풀사이클',
    tags:['JAY AUDIO','Behringer Wing','준공 도서'],
    system:[['Main L/R','기존 라인어레이 Full-Range 4ea + SUB 1ea per side'],['Front Fill','JAY AUDIO S2.5 3ea'],['Delay','JAY AUDIO S2.5 3ea'],['콘솔','Behringer Wing']],
    tasks:['기존 시스템 점검: Main 어레이 분리 후 1통씩 측정, 컨디션 체크 및 불량 유닛 파악','Front Fill·Delay 추가 설치: JAY AUDIO S2.5 신규 설치, 타임 얼라인먼트 및 EQ 튜닝','콘솔 교체: Behringer Wing 설치, 채널 프로세싱 및 씬 구성','콘솔 교육: 담당자 대상 Wing 운용 교육 직접 진행','준공 도서 작성: 배치도·배관배선도·블록도·채널시트 작성'],
    troubleshootings:[
      {title:'메인 스피커 컨디션 불량',body:'메인 스피커를 전부 내려 한 통씩 측정해보니 유독 주파수 특성이 고르지 않은 통들이 나왔다. 단순 튜닝 문제로 보기 어려워 직접 분해해봤다. 이전 작업 중 충격이 가해졌는지 웨이브 가이드를 구성하는 두 파츠 사이가 벌어져 분리된 상태였다.<br><br>스피커 교체는 예산상 불가능한 상황이었다. 손상된 통들은 객석에 대한 영향을 최소화하기 위해 어레이 최상단에 배치했다. 또한 스피커 통 자체의 주파수 특성이 플랫하지 않아 넓은 대역에 걸쳐 EQ를 손봐야 했고, 보정 과정에서 1kHz~3kHz 구간에 많은 처리가 집중되면서 해당 대역의 왜곡이 약간 체감되는 수준으로 남았다. 스피커 자체의 물리적 손상이 있는 상태에서 EQ만으로 커버할 수 있는 범위에는 한계가 있었다.'},
      {title:'본 예배 중 음압 부족',body:'리허설과 세팅 시 주 발화자인 목사님 목소리가 충분히 컸기 때문에 해당 기준으로 믹싱을 완성하고 피드백 마진을 잡았다. 콘솔 채널 프로세싱과 씬까지 구성한 상태였고, 리허설에서는 문제가 없었다.<br><br>그러나 본 예배에서 평소보다 목소리가 작은 목사님이 설교를 맡으면서 음압을 더 키워달라는 요청이 지속적으로 들어왔다. 레벨을 올리면 하울링이 발생하는 상황이었다. 큰 목소리에 맞춰 피드백 마진을 최소화한 상태로 세팅해놨기 때문에 작은 목소리에 대응할 여유가 없었던 것이다. 결국 본 예배 종료 후 추가 작업을 진행했다.<br><br>발화자가 한 명이 아닌 환경에서는 가장 작은 목소리를 기준으로 마진을 잡아야 한다. 사전에 발화자 전원의 목소리 특성을 파악하고 그 기준으로 세팅하는 것이 맞았다.'}
    ],
    lessons:['스피커 컨디션 체크는 설치 전 필수다. 기존 스피커를 유지하는 프로젝트라면 전 통을 내려 측정해보는 것이 기준이 되어야 한다. 불량 유닛을 사전에 파악해야 배치 계획과 튜닝 전략을 그에 맞게 조정할 수 있다. 측정값이 이상하다면 분해해서 물리적 상태까지 확인해야 한다.','발화자 기준은 가장 작은 목소리로 잡아야 한다. 리허설에서 큰 목소리를 기준으로 세팅했다가 본 예배에서 문제가 생겼다. 사전에 발화자 전원의 목소리 특성을 파악하고, 가장 어려운 조건을 기준으로 마진을 확보해야 한다.','물리적 제약은 설계 단계에서 인지해야 한다. 이번에는 Front Fill을 단상 위에 올려놓다 보니 착석한 청중 기준으로 배를 향하게 되어 하이가 뒤쪽까지 전달되지 않았다. 단상 구조가 확정된 이후에는 음향적으로 대응할 수 있는 범위가 제한된다. 설치 환경의 물리적 조건을 설계 단계에서 미리 파악하고 반영해야 한다.']
  },
  {
    id:'cheongju',category:'installation',categoryLabel:'설치',
    title:'청주교회 교육관 음향 시스템 리모델링',subtitle:'청주 · 2025.04',
    role:'설계 · 제안 · 설치 · 튜닝 전체',
    tags:['JAY AUDIO (Artmix)','AutoCAD','격자 배치 설계'],
    system:[['교육관 3층','JAY AUDIO S8 8ea + S2.5 8ea / 격자 배치'],['교육관 2층','JAY AUDIO S2.5 16ea / 격자 배치'],['1층 1-1','JAY AUDIO S2.5 6ea'],['1층 1-2','JAY AUDIO S2.5 4ea'],['1층 1-3','JAY AUDIO S2.5 2ea']],
    tasks:['현장 답사: 리모델링 공사 중 시멘트 골조만 남은 상태에서 현장 방문. 스피커 위치·방송실 위치·라인 배선 경로를 사전에 파악해 설계에 반영','공간별 스피커 설계: 대형 강당은 격자 배치로 균일한 음압 분포, 소규모 강당은 공간 종심에 따라 포인트 수 차등 설계','AutoCAD 도면 작성: 각 층별 스피커 배치도·배선도·블록도 작성','제안서 작성: 공간별 문제 진단, 스피커 선정 근거, 제품 스펙 포함 클라이언트 제출용 문서 작성'],
    troubleshootings:[
      {title:'3층 강당 잔향 문제',body:'3층 강당은 직사각형 구조에 천장 중앙을 가로지르는 면조명이 설치된 공간이었다. 면조명 표면의 반사율이 높아 소리가 천장에서 강하게 반사됐고, 직사각형 구조 특성상 평행한 벽면 사이에서 플러터 에코가 발생했다. 두 요소가 맞물리면서 잔향이 과도하게 길어졌고, 스피치 명료도에 직접적인 영향을 미쳤다.<br><br>문제는 튜닝으로 해결할 수 있는 범위를 넘어섰다. EQ로 특정 대역을 조정해도 반사 자체가 줄어드는 것이 아니기 때문에 근본적인 개선이 어려웠다. 스피커 지향각을 조정해 천장 직접 반사를 줄이는 방향으로 대응했으나 완전한 해결은 불가능했고, 공간 자체의 음향 특성이 한계로 작용했다.<br><br>면조명의 반사가 이 정도로 심할 것이라는 예측을 사전에 하지 못했다. 리모델링 초기 단계에서 인테리어 설계팀과 음향 특성을 함께 검토했다면 마감재 선택이나 흡음재 추가 등으로 대응할 수 있었던 문제였다. 시공이 완료된 이후에는 음향 엔지니어가 개입할 수 있는 범위가 크게 줄어든다.'},
      {title:'설치 위치 제약',body:'설치 과정에서 스피커 위치를 두 가지 이유로 원하는 대로 잡지 못하는 상황이 발생했다.<br><br>첫 번째는 스프링클러 이격 거리 규정이었다. 설치 진행 중 스프링클러 반경 내 구조물 설치 불가 규정을 현장에서 처음 파악했다. 이미 설계된 스피커 배치 포인트 일부가 규정에 저촉되어 현장에서 위치를 수정하며 설치를 진행해야 했다.<br><br>두 번째는 클라이언트의 미관 요구였다. 교회 측에서 조명과 스피커의 줄을 맞춰달라는 요청이 있었다. 음향적으로 최적인 위치와 조명 배치가 일치하지 않아 절충이 필요했고, 결국 음향 설계상 이상적인 포인트에서 벗어난 위치에 설치해야 했다.<br><br>두 경우 모두 현장에서 이미 시공이 완료된 상태에서 맞춰야 했기 때문에 시간이 추가로 소요됐고, 음향적으로 완벽한 시공을 할 수 없어 아쉬움이 남았다. 설계 전 단계에서 소방 설비팀·조명팀과 사전 협의가 이루어졌다면 도면에 반영할 수 있었고, 현장에서의 시행착오도 줄일 수 있었을 것이다.'}
    ],
    lessons:['마감재가 음향에 미치는 영향을 설계 단계에서 고려해야 한다. 면조명처럼 반사율이 높은 마감재가 음향 환경을 크게 바꿀 수 있다. 음향 설계는 스피커 배치만이 아니라 공간의 물리적 특성 전체를 함께 검토하는 작업이다.','타 공종과의 사전 협의가 설계 완성도를 결정한다. 소방 설비 규정, 조명 배치, 인테리어 마감 — 이 세 가지 모두 음향 시스템 설치 위치에 직접 영향을 미쳤다. 현장에서 이미 시공이 완료된 상태에서 맞춰야 하다 보니 시간이 추가로 소요됐고, 음향적으로 최적인 위치에 설치하지 못하는 상황이 생겼다.','설계 전 현장 답사가 설계 품질을 결정한다. 도면으로만 보던 공간을 직접 확인하니 천장 구조와 스피커 지향 포인트에 대한 판단이 가능해졌다. 도면과 실제 현장은 다를 수 있다.']
  },
  {
    id:'other-install',category:'installation',categoryLabel:'설치',
    title:'기타 설치·튜닝 경험',subtitle:'다수 현장',
    tags:['교회 설치','공연장 점검','호텔 설치'],
    isOther:true,
    otherItems:[{name:'피네이션 연습실',detail:'LR 포인트소스 세팅·EQ 튜닝'},{name:'양천문화회관',detail:'클리닝·리깅·튜닝'},{name:'안성맞춤아트홀',detail:'시스템 점검·튜닝'},{name:'부평아트센터',detail:'점검·튜닝'},{name:'반석아트홀',detail:'리깅 포인트 보강·재설치·튜닝'},{name:'솔가람아트홀',detail:'스피커 재배치·튜닝'},{name:'조선호텔 그랜드볼룸',detail:'딜레이 스피커 설치·튜닝'},{name:'조선호텔 연회장',detail:'튜닝'},{name:'대구교회',detail:'앰프·콘솔 교체·튜닝'},{name:'세광교회',detail:'메인 스피커·콘솔 교체·튜닝'},{name:'구파발교회',detail:'메인 스피커 체인블록 교체·튜닝'},{name:'풍동성당',detail:'메인 및 딜레이 스피커 설치·튜닝'},{name:'일산신광교회',detail:'콘솔·딜레이 스피커 설치·튜닝'},{name:'승동교회',detail:'콘솔 이전 설치·튜닝'},{name:'임마누엘서울교회',detail:'튜닝 정기검진'},{name:'김포교회',detail:'튜닝'},{name:'광주시온교회',detail:'콘솔 교체·튜닝'}]
  },
  {
    id:'graduation',category:'immersive',categoryLabel:'이머시브',
    title:'졸업작품 — 이머시브 라이브 뮤지컬',subtitle:'대학교 대극장 · 2024',
    role:'메인 믹스 엔지니어 + 시스템 엔지니어',
    tags:['SPAT Revolution','YAMAHA PM10','Dante','28 포인트'],
    system:[['스피커','Front 6pt + Side 14pt + Rear 8pt (총 28포인트)'],['기종','JBL VRX 라인어레이, EON 515'],['이머시브 엔진','SPAT Revolution'],['FOH 콘솔','YAMAHA PM10'],['송출 콘솔','YAMAHA PM3'],['네트워크','Dante']],
    tasks:['이머시브 시스템 구성: SPAT Revolution — Dante — 콘솔 다이렉트 아웃풋 연결, 28포인트 이머시브 환경 구축','스피커 튜닝: Smaart v8으로 28포인트 측정·튜닝, Time Alignment 및 레벨·주파수 특성 균일화','메인 믹스: YAMAHA PM10 운용. 객석 센터 멀티트랙 믹스 후 본공연 적용','트러블 대응: 공연 중 Dante 에러로 전체 음소거 발생, 재점검 후 재개'],
    troubleshootings:[{title:'후방 객석 사운드 균일성 문제',body:'300Hz 이하 저음 대역이 구역별로 고르지 않았고, 특히 Rear 포인트 스피커에서 두드러졌다. 소리가 한 포인트에서 다른 포인트로 이동할 때 구역 간 음색이 다르면 이동이 그대로 들통난다.<br><br>해결책: 후방 포인트에 사용하던 기종을 사이드와 동일한 기종으로 교체해 음색 편차를 줄였다.'},{title:'DANTE 네트워크 에러',body:'콘솔 인풋(100ch+) → SPAT Revolution → 콘솔 재수신 → EQ 처리 → DSP → 스피커로 이어지는 구조로 Dante 네트워크를 hop이 여러 번 타게 되어 있었고, 스위칭허브를 제조사와 사양이 다른 것들로 혼용하여 클락 마스터 선출이 불안정한 상태였다.<br><br>대응: SPAT 아웃풋을 DSP로 다이렉트 패치하여 신호 경로를 단축, 공연을 재개했다.'}],
    lessons:['이머시브 환경에서는 스피커 모델 통일성과 가청 대역 전체의 주파수 균일성이 공간감을 결정한다.','시스템 구성 전에 사용하는 네트워크와 프로토콜을 충분히 이해해야 한다.','Dante 네트워크 구성은 스위치 성능을 기준으로 검증한다.','본공연 전 풀 채널 스트레스 테스트가 필수다.']
  },
  {
    id:'atmos',category:'immersive',categoryLabel:'이머시브',
    title:'3D 애니메이션 이머시브 믹싱',subtitle:'Dolby Atmos · 2023.12',
    role:'사운드 디자인 · Dolby Atmos 믹스',
    tags:['Dolby Atmos 7.1.4','Pro Tools','바이노럴 렌더링'],
    system:[['포맷','Dolby Atmos 7.1.4'],['작업 환경','Pro Tools, Dolby Atmos 7.1.4 이머시브 스튜디오'],['세션 구성','전 소스 베드 기반 (수업 방침)'],['최종 렌더링','2트랙 바이노럴 다운믹스'],['모니터링','Dolby Atmos 7.1.4 이머시브 스튜디오, 이어폰·헤드폰 교차 청취'],['최종 발표','Dolby Atmos 7.1.4 이머시브 스튜디오']],
    tasks:['사운드 디자인: 성우 섭외·연출·녹음, 효과음·BGM 선곡까지 전 소스 직접 제작','공간 설계: 연출 의도 기반 소스별 3D 포지셔닝. 음장 전환이 극적으로 느껴지는 장면을 위해 후방 공간 활용 방식을 디자인 단계부터 고려','믹스: 다이얼로그·효과음·BGM 간 레벨 밸런싱, 장면 전환에 맞춰 공간감과 음압 흐름 조정','바이노럴 렌더링 및 검증: 7.1.4 믹스를 2트랙으로 다운믹스, 이머시브 스튜디오·이어폰·헤드폰 교차 청취로 기기별 정위 차이 확인'],
    troubleshootings:[{title:'스윗스팟 의존 믹싱',body:'한 캐릭터의 독백 장면에서 내면의 목소리처럼 들리도록 음상을 정중앙에 고정했다. 이머시브 스튜디오 정중앙에서 모니터링할 때는 의도한 대로 들렸다. 그러나 발표날 청중이 흩어져 앉자, 중앙 앞쪽에 앉은 사람에게는 그 목소리가 뒤에서 들렸다. 한 자리만 기준으로 음상을 고정한 탓이다. 가운데에 세게 고정한 소리일수록 그 자리를 벗어나면 더 크게 무너진다. 한 지점이 아니라 듣는 영역 전체를 기준으로 믹싱해야 했고, 중요한 대사는 정위를 너무 좁게 잡지 말았어야 했다.'},{title:'정위와 화면의 합의점',body:'정위 변화를 분명히 들려주려고 패닝을 과하게 줬더니 화면과 어긋나 이질감이 생겼다. 정위는 뚜렷하면서도 화면과 자연스럽게 맞아야 했다. 두 가지가 부딪히는 구간에서는 화면과 맞는 것을 우선으로 두고 정위 폭을 조정했다. 결국 소리 자체의 공간감보다 화면과 맞아떨어지는 것이 몰입을 좌우한다고 판단했다.'}],
    lessons:['정위는 듣는 자리에 따라 달라진다. 스윗스팟에서 완성한 음상은 그 밖에서 무너진다. 한 자리가 아니라 듣는 영역 전체를 기준으로 믹싱해야 하고, 가능하면 여러 자리에서 번갈아 들어봐야 한다.','바이노럴은 앞뒤·위아래 정위가 살아나야 한다. 2트랙 바이노럴로 렌더링하니 천장과 뒤로 보낸 정위가 거의 느껴지지 않았다. 헤드폰과 이어폰은 원래 소리가 머리 안쪽에 맺힌다. 바이노럴은 이 소리를 머리 밖으로 빼내려는 처리이고, 앞뒤·위아래가 제대로 빠져나올 때 제 효과가 난다.','기기에 따라 정위가 다르게 들린다. 같은 바이노럴 소스인데 이어폰이 헤드폰보다 정위가 조금 더 잘 느껴졌다. 귓바퀴가 소리 경로에 끼어드는 정도가 달라서로 보이고, 범용 HRTF와 내 귀가 안 맞는 것도 원인일 수 있다. 바이노럴은 어떤 기기로 듣는지를 전제로 점검해야 한다.','음상 위치가 바뀌면 음색도 바뀐다. 목소리를 센터 채널에 넣었을 때와 좌우 가운데에 맞췄을 때, 위치가 바뀌는 지점에서 음색이 달라지는 게 들렸다. 정위를 설계할 때는 위치뿐 아니라 음색이 일관되게 유지되는지도 같이 봐야 한다.']
  }
];

window.initPortfolio = function(listId) {
  function renderCard(p) {
    if (p.isOther) return renderOther(p);
    return renderDetail(p);
  }
  function renderDetail(p) {
    const sys = p.system.map(([k,v])=>`<tr><td class="sk">${k}</td><td>${v}</td></tr>`).join('');
    const tasks = p.tasks.map(t=>`<li>${t}</li>`).join('');
    const ts = p.troubleshootings.map(ts=>{
      const tbl = ts.delayTable?`<table class="dt"><thead><tr><th>날짜</th><th>Delay 1</th><th>Delay 2</th></tr></thead><tbody>${ts.delayTable.map(([d,d1,d2])=>`<tr><td>${d}</td><td>${d1}</td><td>${d2}</td></tr>`).join('')}</tbody></table>`:'';
      return `<div class="tsi"><div class="tst">${ts.title}</div><div class="tsb">${ts.body}${tbl}</div></div>`;
    }).join('');
    const ls = p.lessons.map(l=>`<li>${l}</li>`).join('');
    const roleBlock = p.role?`<div class="db"><p class="dl">담당 역할</p><p class="role-text">${p.role}</p></div>`:'';
    const tsBlock = ts?`<div class="db"><p class="dl">트러블슈팅</p><div class="tsl">${ts}</div></div>`:'';
    return `<div class="pc" data-id="${p.id}" data-cat="${p.category}">
      <div class="pch">
        <div class="pm">
          <p class="pcat">${p.categoryLabel}</p>
          <h3 class="ptitle">${p.title}</h3>
          <p class="psub">${p.subtitle}</p>
          <div class="ptags">${p.tags.map(t=>`<span class="ptag">${t}</span>`).join('')}</div>
        </div>
        <svg class="xi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </div>
      <div class="pd"><div class="di">
        ${roleBlock}
        <div class="db"><p class="dl">시스템 구성</p><table class="st">${sys}</table></div>
        <div class="db"><p class="dl">주요 작업</p><ul class="tl">${tasks}</ul></div>
        ${tsBlock}
        <div class="db"><p class="dl">배운 점</p><ul class="ll">${ls}</ul></div>
      </div></div>
    </div>`;
  }
  function renderOther(p) {
    const items = p.otherItems.map(i=>`<div class="oi"><span class="on">${i.name}</span><span class="od">${i.detail}</span></div>`).join('');
    return `<div class="pc" data-id="${p.id}" data-cat="${p.category}">
      <div class="pch">
        <div class="pm">
          <p class="pcat">${p.categoryLabel}</p>
          <h3 class="ptitle">${p.title}</h3>
          <p class="psub">${p.subtitle}</p>
          <div class="ptags">${p.tags.map(t=>`<span class="ptag">${t}</span>`).join('')}</div>
        </div>
        <svg class="xi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </div>
      <div class="pd"><div class="di"><div class="ol">${items}</div></div></div>
    </div>`;
  }
  function render(filter) {
    const list = document.getElementById(listId);
    if (!list) return;
    const data = filter==='all' ? PROJECTS : PROJECTS.filter(p=>p.category===filter);
    list.innerHTML = data.map(renderCard).join('');
    list.querySelectorAll('.pch').forEach(h=>{
      h.addEventListener('click',()=>{
        const card = h.closest('.pc');
        const open = card.classList.contains('expanded');
        list.querySelectorAll('.pc.expanded').forEach(c=>c.classList.remove('expanded'));
        if (!open) card.classList.add('expanded');
      });
    });
  }
  document.querySelectorAll('.fb').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.fb').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.dataset.filter);
    });
  });
  render('all');
};
