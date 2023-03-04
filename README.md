![waving](https://capsule-render.vercel.app/api?type=waving&height=200&fontAlignY=40&text=Trevari-archive-service&color=gradient)

<h1> 트레바리 클럽장 구독 클럽 서비스 구축 </h1>

## 서비스의 가치

- 트레바리 서비스가 외부의 의존 없이 통합된 클럽장 구독 클럽 서비스를 제공한다.

### Why?

- 외부 서비스를 통한 유저 경험이 좋지 않다.
- 구독 금액 대비 서비스 퀄리티가 떨어짐.
- 구독자들 간의 소통 창구 부재.
- 한 세션이 1회성 느낌이 강함.
- 서비스 자체가 허술해 보인다.

### Action

- **구독자**들이 이용할 수 있는 **아카이브**를 제공한다.
  - **구독 클럽**의 **다시 보기 영상**을 제공한다.
  - **구독 클럽**의 **읽을거리**를 제공한다.
- **구독자**들이 **의견**을 **공유**할 수 있는 **플랫폼**을 제공한다.
  - **댓글** 형태의 **커뮤니티**
- **라이브 세션** 및 **아카이브**에 대한 **진입점**을 제공한다.

</br>

# 개발 기간

- 23.01.09 ~ 22.02.03 (4주)
  - 1주차: 도메인 설계 완료
  - 2주차: API 스펙 정의
  - 3주차 ~ 4주차: 서비스 구현

</br>

# 개발 인원 및 파트

| 개발자 | 개발 파트 | 비고 |
| ------ | -------------------------------------------- | ---- |
| 배효빈 | 플랫폼 메인, 다시보기, 읽을거리, 뷰어 | F.E. |
| 윤형준 | API : 플랫폼 메인, 다시보기, 읽을거리, 뷰어 | B.E. |

</br>

# STACK

### F.E.

| TypeScript | React | styled-components | Redux |
| :--------: | :---: | :---------------: | :---: |
| <img src="https://techstack-generator.vercel.app/ts-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" alt="icon" width="65" height="65" /></div> | <img src="https://techstack-generator.vercel.app/redux-icon.svg" alt="icon" width="65" height="65" /> |

### B.E.

| JavaScript |  Nodejs | MySql | AWS |
| :--------: | :-----: | :---: | :-: |
| <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/nginx-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/aws-icon.svg" alt="icon" width="65" height="65" /> |

</br>

# TOOLS

<div>
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat&logo=Slack&logoColor=white"/>
<img src="https://img.shields.io/badge/IntelliJ-000000?style=flat&logo=IntelliJ%20IDEA&logoColor=white""/>
</div>

</br>

# LINK TO 👉🏻

<div>
<a href='https://almondine-bread-a7d.notion.site/Trevari-0ed0bee467a449b19c4d90b81f3f902b'><img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white"/></a>
</div>

</br>
</br>

## 플랫폼 메인

- 타이틀~커뮤니티/다시보기/읽을거리 인덱스까지 & 인풋창 스크롤 fix
- setInterval로 라이브 data fetch
  1. **라이브 X**
  - 제목 및 소제목: 라이브 끝난 후 00시 기점으로 다음 주제 공개
  - 이미지/날짜: 00시 기점 변경
  - 닫기 클릭: 마이페이지로 이동
  2. **라이브 O**
  - 라이브 한 시간 전부터 00시 전까지 `Live 시작하기` 버튼 활성화
- 라이브 5분 전 Live 보러가기 모달  클릭시 유튜브 라이브 이동

## 다시보기

- 다시보기 목록 데이터 fetch
- vod 클릭시 플랫폼 헤더의 소제목이 해당 vod의 소제목으로 변경
- contents 영역이 video player로 변경
- video.js 라이브러리 활용

## 읽을거리

- 읽을거리 목록 데이터 fetch
- 데이터 타입(pdf, book)에 따라 다른 아이콘 적용
- pdf 클릭 시 뷰어페이지 이동
- book 클릭 시 인터넷 서점 책 소개 페이지 이동

## 뷰어
- react-pdf 라이브러리 활용
- pdf 다운로드
- 페이지 이동
- 전체 페이지 및 현재 페이지 표시

## 데모영상 
[링크](https://youtu.be/CccD3q0OHPM)

</br>

# 구현 기능 

| 구현 기능 | 시연 |
| :--: | :--: |
| 탭 이동 | <img width="50%" src="https://im.ezgif.com/tmp/ezgif-1-3addfe082a.gif"/> |
| 다시보기 | <img width="50%" src="https://im.ezgif.com/tmp/ezgif-1-800a577a07.gif"/> |
| 읽을거리 | <img width="50%" src="https://im.ezgif.com/tmp/ezgif-1-f558660864.gif"/> |
| 뷰어 | <img width="50%" src="https://im.ezgif.com/tmp/ezgif-1-5e8ee1b284.gif"/> |
| live 버튼 | <img width="50%" src="https://im.ezgif.com/tmp/ezgif-1-637082f761.gif"/> |
| live 모달 | <img width="50%" src="https://im.ezgif.com/tmp/ezgif-1-5575b1e9a8.gif"/> |

## References 
* 이 프로젝트는 트레바리에서 구독장 구독 클럽의 구독자를 위한 서비스 제공 목적으로 만들었습니다.
* 이 소스 코드는 트레바리의 자산이며 실제 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제가 될 수 있습니다.  
