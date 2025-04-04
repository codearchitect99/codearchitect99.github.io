#### 자기소개 (성장과정, 성격 등)

 저는 사람들과 함께 소통하며 시너지를 만들어가는 개발자입니다. 카카오 인턴십 당시, 한 달이라는 짧은 기간 안에 기획부터 개발까지 모두 완료해야 하는 미니프로젝트를 맡았습니다. 저희 팀은 아이디어 구상에만 일주일 이상을 소모했고, 열심히 준비한 기획안이 계속해서 반려되는 상황이 이어졌습니다. 팀원들은 반복되는 부정적 피드백에 지쳐갔고, 특히 소심한 성격의 친구들이 많아 회의 분위기는 더욱 무거워지고, 새로운 아이디어조차 꺼내기 어려운 상황이 이어졌습니다.
 이때 저는 팀원들의 적극성을 되살리고자 제가 먼저 솔선수범하여 적극적인 태도로 회의를 주도했습니다. 스스로 밝은 에너지로 팀 분위기를 끌어올리며 더 많은 의견을 제시했고, 동시에 팀원들의 작은 의견 하나하나에 귀를 기울이며 적극적으로 소통했습니다. 이러한 노력이 반복되자, 소극적이었던 팀원들도 점차 자신감을 되찾아갔습니다. 결국 멘토님께서 "너 덕분에 프로젝트가 진행될 수 있었다"는 말씀을 해주셨고, 저 또한 이 과정에서 큰 보람을 느꼈습니다.
저는 이 경험을 통해 사람들과 의견을 주고받으며 문제를 해결하고 성과를 만들어내는 일이 제 적성에 잘 맞는다는 것을 다시금 깨달았습니다. 앞으로도 저는 적극적인 소통과 긍정적인 자세로 협업의 시너지를 최대치로 끌어올릴 수 있는 개발자로 성장하고 싶습니다. 저의 열정과 리더십으로 팀원들과 적극적으로 소통하며 서로의 의견을 존중하고 함께 문제를 해결하며, 함께 일하는 모든 순간이 즐겁고 의미있는 시간이 되도록 기여하겠습니다.

-----

#### 보유 기술 및 프로젝트 경험

 저는 실제 배포와 유지보수를 경험해야 진정한 개발 역량을 갖출 수 있다고 생각합니다. 이러한 생각을 바탕으로 개인적으로 기획부터 배포, 유지보수까지 진행한 태스크 및 일정 통합 관리 서비스인 'Taskory' 프로젝트를 개발했습니다.이 프로젝트는 Java와 Spring Boot를 기반으로 구현했으며, 데이터베이스로는 MariaDB를 사용해 안정적이고 빠른 데이터 처리를 구현했습니다. 또한, JPA를 통해 객체 지향적인 모델링을 시도했습니다.
 처음에는 태스크와 일정을 단순히 외래키로 연결만 하면 데이터가 잘 맞물릴 것이라 생각했습니다. 하지만 실제 개발 과정에서 태스크가 삭제될 때 연관된 일정 정보가 예기치 않게 남거나 함께 삭제되어야 하는 상황을 마주하며, 데이터 무결성 문제를 인지했습니다. 이에 먼저 태스크와 일정 간의 책임과 소유권을 명확히 재정의하고, 삭제 시 ‘연결만 해제’할지 ‘실제로 함께 삭제’할지 혹은 ‘소프트 삭제’로 마킹할지를 결정했습니다. 이후에는 Spring JPA에서 Cascade 옵션과 orphanRemoval 설정을 적절히 적용하여 삭제 로직을 자동화하고, 필요한 경우에는 서비스 계층에서 수동으로 연관 데이터를 검증·정리하도록 보완했습니다. 이렇게 새로운 정책을 점진적으로 도입하면서 기존 코드를 전면 폐기하지 않고도 데이터 무결성을 확보할 수 있었고, 마지막에는 테스트 단계에서 안정성을 확인할 수 있었습니다.이 과정에서 자연스레 테스트 코드의 중요성도 다시금 느끼게 되었습니다. 이전까지는 테스트 코드 작성은 중복 업무처럼 여겨졌습니다. 그러나 이번 프로젝트에서는 실제 배포 환경을 고려해 JUnit을 활용하여 미리 테스트 코드를 작성했고, 서비스 로직이 변경될 때마다 전체 테스트를 즉시 수행해 문제를 신속히 발견하고 해결할 수 있었습니다.이러한 경험들을 통해 실제 현업에서 마주하게 될 데이터베이스 설계 문제와 서비스 로직 수정 시 테스트 코드의 중요성을 깊이 이해하게 되었고, 앞으로는 더욱 꼼꼼하고 명확한 데이터 모델링과 철저한 테스트를 통해 신뢰성 높은 백엔드 서비스를 구축하는 개발자로 성장하고자 합니다.

-----

#### 성취 경험 및 문제 해결 사례

 빠르고 안정적인 알림 전송을 위해 단방향 통신이 적합하다고 판단하고 있었지만, 당시 팀 내 누구도 이 기술에 대한 경험이 없었습니다. 특히 NestJS를 선택한 상태였는데, 이 프레임워크가 정식 버전도 출시되지 않은 시기였기에 관련 자료조차 충분하지 않아 많은 어려움이 있었습니다.
 처음에는 FTP 통신 방식을 고려했으나 기술적인 한계로 벽에 부딪히자, 혼자서 해결하는 데 한계를 느끼고 빠르게 팀원들과 함께 협력하기로 결정했습니다. 저희는 함께 구글링을 반복하며 단방향 통신의 원리와 적합한 기술을 찾기 시작했습니다. 해결의 실마리가 보이지 않아 막막한 상태에서, 팀원이 받은 카카오톡 알림 소리에 영감을 얻었습니다. 우리에게 필요한 건 "카톡처럼 빠르고 즉각적인 모바일 알림"이라는 점을 다시 명확히 인지하게 되었습니다.
 이후 '모바일 푸시 서버'라는 개념에 접근하게 되었고, Firebase의 클라우드 메시징(FCM)이 최적의 솔루션이라는 사실을 찾아냈습니다. 바로 Firebase와의 연동을 팀원들과 함께 적극적으로 학습하고 적용하여 최종적으로 목표했던 실시간 푸시 알림 기능을 성공적으로 구현할 수 있었습니다.
 이 경험을 통해 문제 해결 과정에서 개인의 한계를 인정하고 빠르게 팀과 협력하여 집단지성을 발휘하는 것이 얼마나 중요한지를 깨달았습니다. 또한 기존의 고정된 접근법에서 벗어나 사용자 관점에서 문제를 재정의함으로써 효과적으로 해결책을 찾는 방법을 배우게 되었습니다.

-----

#### 담대한 목표를 세우고 노력한 경험

 2023년 SW융합해커톤에서, 기술적 난이도와 사회적 가치를 모두 아우르는 프로젝트에 도전한 경험이 있습니다.
 프로젝트 기획 단계에서 해양운송 분야의 탄소배출 MRV(Monitoring, Reporting, Verification) 시스템을 분석했는데, 국가 간 제도 차이와 이해관계 때문에 데이터 신뢰성 확보가 쉽지 않다는 구조적 문제를 확인했습니다.
 이를 해결할 기술로 블록체인에 주목하여, 분산원장 구조와 데이터 불변성, 스마트 컨트랙트 등 핵심 메커니즘을 집중적으로 학습하며 MRV 시스템에 접목할 가능성을 연구했습니다.
기술 구현 자체보다 블록체인의 구조적 이점이 MRV 프로세스 전반에서 어떻게 작동할지를 구체화하는 데 중점을 두었습니다. 스마트 컨트랙트를 이용한 블록체인 네트워크, 기업 전용 노드 애플리케이션, 데이터 탐색기의 구조도와 사용자 흐름을 설계했습니다. 
 시간 제약상 실제 블록체인 네트워크는 구현하지 못했지만, 기업 전용 노드 애플리케이션과 데이터 탐색기를 통해 탄소배출 데이터의 모니터링, 보고, 검증 과정을 시뮬레이션하는 MVP를 완성했습니다.
2박 3일이라는 짧은 해커톤 기간에도 잦은 피드백과 빠른 시행착오 수정을 반복한 끝에 완성도를 높일 수 있었고, 이 프로젝트로 기술 실현 가능성과 사회적 파급력을 인정받아 특별상을 수상했습니다.
 이 경험을 통해 복잡한 문제일수록 구조적 사고와 끊임없는 개선 노력이 필수임을 배웠으며, 앞으로도 현실성 있는 기술 적용을 고민하고, 공동의 목표를 효율적으로 달성하기 위해 적극적으로 소통하고 협력하겠습니다.

-----

#### 소통하고 협력한 경험

 저는 월드프렌즈 봉사단으로써 베트남 박리에우 대학교로 스마트팜 교육 봉사에 참여했습니다. 아두이노 기반 자동화 시스템을 구축해 꽃을 재배하고 동시에 현지 학생들에게 스마트팜 관련 지식을 전달해야 하는 이중의 목표를 가지고 있었습니다.
 먼저 현지 재배 환경에 맞는 장비 선택부터 어려움이 있었습니다. 지원받은 기자재만으로 온습도 센서, 물 펌프, LED 조명 등을 연결하는 과정이 쉽지 않았고, 현지에서 구한 장비들도 호환 여부가 불확실했습니다. 이때 현지 대학생들과 협력해 문제를 해결했습니다. 예를 들어, 전압 규격이 달라 작동하지 않는 물 펌프에 맞는 어댑터를 찾기 위해 지역 전기 상점을 돌아다니며 임시 변환 장치를 만들었고, 그 과정을 통해 언어와 기술 환경이 달라도 의견을 모으면 해결할 수 있음을 깨달았습니다.
 또한, 베트남어를 사용하는 학생들과 간단한 영어로만 소통이 가능했기에, 아두이노 교육 방식을 고민하던 끝에 ‘백문이 불여일견’이라는 말처럼 시각적으로 구현 과정을 보여주는 방식을 도입했습니다. 그 결과 학생들이 직접 이해하고 운영할 수 있는 교육 프로그램까지 함께 완성할 수 있었습니다.
 비록 제한된 장비와 언어 장벽이 있었지만, 서로의 역량을 존중하고 보완하며 스마트팜 시스템을 완성했고, 교육도 성공적으로 마무리할 수 있었습니다.
 이 경험을 통해 목표 달성을 위해서는 기술 못지않게 사람 간 소통과 협업이 중요하다는 사실을 깨달았고, 특히 예상치 못한 상황에서도 적극적으로 의견을 모으고 해결책을 찾으면, 낯선 환경에서도 의미 있는 결과를 만들어낼 수 있음을 실감했습니다.
