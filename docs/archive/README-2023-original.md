![뽀득뽀득](https://user-images.githubusercontent.com/104883910/273441051-28dc9814-84e5-4828-abcb-c5e67d3deee4.png)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FStep3-kakao-tech-campus%2FTeam10_FE_USER&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

## 뽀득뽀득

뽀득뽀득은 편리하고 스트레스 없는 세차 경험을 제공하기 위한 셀프세차장 예약 플랫폼입니다. 사용자가 미리 세차 시간을 예약할 수 있도록 하여, 세차장에서의 기다림을 없애고 보다 여유로운 세차 시간을 보장합니다. 뒤에 오는 사람을 신경 쓰지 않고 예약 기능을 사용하여 이젠 세차장을 보다 편하게 이용할 수 있습니다.

또한, 뽀득뽀득은 이용자 중심의 예약 시스템과 가맹주 중심의 서비스 관리를 분리하여, 모든 유저가 자신에게 최적화된 기능을 사용할 수 있게 설계되었습니다.

현재 이 레포지토리는 이용자가 사용하는 프론트엔드 부분으로, React, TailwindCSS, JavaScript를 사용하여 구현되었습니다. 사용자의 편의를 최우선으로 생각하며, 세차장 예약부터 세차 완료까지의 전 과정을 간소한 뽀득뽀득 서비스를 이용해 보시면서 최상의 사용자 경험을 체험해 보세요!

## 주요 서비스 특징

### 예약 시스템

예약 생성, 조회, 수정, 삭제 기능 구현하였음.
등록을 하면 자동으로 관리할 수 있는 방법을 예약시스템의 도입으로 해소.
세차장을 영업시간과 가격을 등록하고 세차장에서 가용가능한 베이를 지정한 하면 세차장 예약관리의 자동화가 가능.

### 세차장 검색 시스템

위치기반 검색, 키워드 기반 검색 기능 구현하였음.
세차장을 찾을때 한눈에 들어오지 않던 키포인트들 -> 키워드 검색을 통해 각 세차장마다 어떤 키포인트들이 있고, 이를 검색할 수 있음
위치기반한 세차장 찾기 시스템 도입으로, 세차장과 나와의 거리를 파악할 수 있도록 작성.

### 리뷰 시스템

각 세차 예약 건수마다 리뷰를 작성할 수 있다. 해당 리뷰에 대한 키워드로 해당 세차장에 대한 사용자 입장의 평가가 어떠한지 한눈에 파악 가능
별점 시스템을 통해 해당 세차장의 평균 평점이 어떤지 확인할 수 있다.

## 주요 기능

<p align="center">
  <img src="https://github.com/Step3-kakao-tech-campus/Team10_FE_USER/assets/50255093/4c0e5cf4-4370-4fcf-842d-a77a2eba2bb9.png" align="center" width="24%">
  <img src="https://github.com/Step3-kakao-tech-campus/Team10_FE_USER/assets/50255093/b909c41f-67d0-411d-ab0e-49cafe49a3f1.png" align="center" width="24%">
  <img src="https://github.com/Step3-kakao-tech-campus/Team10_FE_USER/assets/50255093/a7c3866e-8d38-4bd9-86f6-fc711cecef6d.png" align="center" width="24%">
  <img src="https://github.com/Step3-kakao-tech-campus/Team10_FE_USER/assets/50255093/9bffc4db-74a6-43f6-af53-86706c22b164.png" align="center" width="24%">
</p>

### 위치 & 키포인트 기반 검색

- 지도에서 현위치를 기반으로 10km 이내의 서비스 세차장을 보여줍니다.
- 세차장을 직접 검색하여 찾을 수 있습니다.
- 원하는 키포인트를 선택하여 해당 세차장만 보여줍니다.

### 예약 내역

- 예정된, 진행 중인, 완료된 세차를 확인합니다.
- 리뷰 작성 또는 예약 취소를 제공합니다.

### 세차장 상세 정보

- 영업시간, 전화번호, 주소, 키포인트, 설명, 리뷰, 평점 등의 정보를 제공합니다.

### 세차장 예약

- 실시간으로 현재 예약 현황 및 이용 가능한 시간을 보여줍니다.
- 원하는 세차장의 베이 번호, 날짜, 시작 시간, 사용 시간을 선택하여 예약을 진행합니다.

### 카카오페이 테스트 결제

- 카카오페이 테스트 결제 기능을 사용하여 예약 절차를 완료합니다.

### 사용자 예약 시나리오

1. **세차장 찾기**: 지도를 통해 주변 세차장을 확인하거나 검색, 키포인트 기반 조회 기능을 사용하여 원하는 세차장을 찾습니다.
2. **예약 내역 확인**: 지난 예약 및 예정된 예약을 확인하고 리뷰를 작성합니다.
3. **세부 정보 확인**: 각 세차장의 상세 페이지에서 정보를 확인합니다.
4. **예약 진행**: 베이를 선택하고 사용시간을 선택하여 예약시간을 결정합니다.
5. **결제 완료**: 카카오페이 테스트 결제 기능을 사용하여 예약을 확정합니다.

## 주안점

### 예외 처리

- 백엔드에서의 세부적인 상태코드를 이용하여 각 API 요청 및 응답에 맞는 적절한 에러 처리
- error-boundary를 활용한 전역 예외 처리

### 사용자 경험

- 로그인을 하지 않더라도 지도와 세차장 검색, 키포인트 기반 조회 및 세차장 상세정보 조회 제공

### 전역 상태

- redux를 활용하여 사용자의 로그인 상태를 관리하고 예약에 필요한 정보를 전역으로 관리하여 적절한 상태 관리 제공

## 개발 문서

[주차별 개발 일지](https://www.notion.so/6cedabdbf1e343ab9bd64354ee45515f?pvs=4)<br>
[ERD 설계서](https://www.notion.so/ERD-984ec51ccd7e435f8331857a325d1516?pvs=4)<br>
[API 명세서](https://www.notion.so/API-67efa4eea535426b89649a8c311b80a0?pvs=4)<br>
[와이어프레임](https://www.figma.com/file/raidVFqnBM3KgJY4KFCoB1/%EB%BD%80%EB%93%9D%EB%BD%80%EB%93%9D-%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?type=design&node-id=1832%3A6899&mode=design&t=X4E2jm08WA3gzqba-1)

## 기술 스택

사용된 기술 스택은 아래 표와 같습니다.
| Category | Technologies | Version |
|------------------------------|----------------------------------|-------------|
| Package Management | `npm` | - |
| Development Library | `React` | v18.2.0 |
| | `Redux & @reduxjs/toolkit` | v4.2.1 & v1.9.7 |
| | `@tanstack/react-query` | v5.0.0 |
| | `React Router DOM` | v6.16.0 |
| CSS Framework | `TailwindCSS` | v3.3.3 |
| Other Development Tools | `Axios` | v1.5.1 |
| | `Day.js & dayjs-plugin-utc` | v1.11.10 & v0.1.2 |
| | `React Hook Form` | v7.47.0 |
| | `UUID` | v9.0.1 |
| | `MSW` | v1.3.2 |
| Build Tool | `Vite` | v4.4.5 |

- **Redux**: Redux를 사용하여, 사용자의 로그인 상태를 관리하고, 예약 시 필요한 정보들을 전역으로 관리.
- **React Query**: Dependency를 활용하여 값이 업데이트될 때마다 새로운 값을 가져올 수 있음.
- **TailwindCSS** : 디자인 프로토타입을 직관적으로 볼 수 있고, 공통된 속성 사용을 통해 CSS를 일관화 시킬 수 있음.

- **MSW를 이용한 MOCKDATA 생성과 API 연동** : API를 백엔드와 연동시키기 전에도, MSW를 사용하여, API 연동을 테스트 해보고, 그에 맞춰 코드를 작성할 수 있음. 따라서, 추후 백엔드와의 연동 시간 단축.

이러한 기술 스택들을 통해 개발자에게 강력하면서도 유연한 개발 환경을, 사용자에게는 빠르고 반응이 좋은 애플리케이션 경험을 제공하고자 하였습니다.

## 개발자 시작 가이드

0. **필요한 프로그램 설치하기**

- nodejs 18.17.0
- npm 10.0.0

1. **소스 코드 복제하기**: `git clone` 명령어를 사용하여 로컬 머신에 프로젝트의 복사본을 만듭니다.

```bash
git clone https://github.com/Step3-kakao-tech-campus/Team10_FE_USER.git
```

2. **프로젝트 폴더로 이동하기:**:

```bash
cd Team10_FE_USER
```

3. **필요한 의존성 설치하기**: npm install 명령어로 필요한 모든 패키지를 설치합니다.

```bash
npm install
```

4. **개발 서버 실행하기**: npm run dev 명령어로 개발 서버를 시작하고 바로 작업을 시작하세요.

```bash
npm run dev
```

5. **환경변수** : 지도를 화면에 불러오기 위해 [카카오 map api](https://apis.map.kakao.com/)를 사용하고, 해당 키를 .env 파일을 생성 뒤 환경변수에 넣어야 합니다.

```
VITE_KAKAOMAP_API_KEY = "카카오javascriptmap api키를 입력하시면 됩니다"
```

## 사용자 시작 가이드

우리 웹 앱은 PWA(Progressive Web App)로서, 설치 없이 여기에서 바로 사용할 수 있습니다. 모바일 환경에 맞춰져 있기 때문에, 모바일 환경에서 접속하는 것을 추천드립니다.
웹앱으로 접속하면 끊김 없는 전체 기능을 갖춘 세차 예약 서비스를 즐길 수 있습니다.

PWA는 웹사이트와 모바일 앱의 장점을 결합하여, 빠른 성능과 오프라인 사용 가능성, 장치의 홈 화면에 추가할 수 있는 기능을 제공합니다. 사용하기 위해서는 단순히 이 [링크](https://k923062c3c512a.user-app.krampoline.com/)로 접속하면 됩니다.

## 화면 구성

| 메인 화면 (로그인 전)                                                                                                        | 메인 화면 (로그인 후)                                                                                                        | 회원가입                                                                                                                    | 지도 예약 화면                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ![로그인 전](https://github.com/Step3-kakao-tech-campus/Team10_FE_USER/assets/50255093/50963362-2ee5-4f3d-b451-4690a61b0061) | ![로그인 후](https://github.com/Step3-kakao-tech-campus/Team10_FE_USER/assets/50255093/1a002410-b9d3-4ef7-a4e3-bd2da61049c6) | ![회원가입](https://github.com/Step3-kakao-tech-campus/Team10_FE_USER/assets/50255093/cd415194-09aa-4154-9b01-dc85492827c0) | ![지도 예약 화면](https://github.com/Step3-kakao-tech-campus/Team10_FE_USER/assets/50255093/7d174559-aa2e-4ea8-870f-8684b6605f7c) |

| 예약 내역 화면                                                                                                                    | 세차장 상세정보                                                                                                                    | 세차장 리뷰                                                                                                                    | 베이 선택 페이지                                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| ![예약 내역 화면](https://github.com/Step3-kakao-tech-campus/Team10_FE_USER/assets/50255093/b3c84811-1a63-41a6-aafc-467d6a0b91b9) | ![세차장 상세정보](https://github.com/Step3-kakao-tech-campus/Team10_FE_USER/assets/50255093/47951e82-0e85-4ead-a0e8-86bfc132f6eb) | ![세차장 리뷰](https://github.com/Step3-kakao-tech-campus/Team10_FE_USER/assets/50255093/840e071a-2188-49d0-b460-59bc1e4f699d) | ![베이 선택 페이지](https://github.com/Step3-kakao-tech-campus/Team10_FE_USER/assets/50255093/7fcf4de8-3e95-4bb5-8023-f632d7ad3bfe) |

| 예약일정 만들기                                                                                                                    | 결제하기 페이지                                                                                                                    | 결제완료 페이지                                                                                                                    | 리뷰 등록 페이지                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| ![예약일정 만들기](https://github.com/Step3-kakao-tech-campus/Team10_FE_USER/assets/50255093/4642ac90-cd22-474c-86ce-0365632068a2) | ![결제하기 페이지](https://github.com/Step3-kakao-tech-campus/Team10_FE_USER/assets/50255093/6abc5d27-36c8-4e70-9a96-6246eee66ae3) | ![결제완료 페이지](https://github.com/Step3-kakao-tech-campus/Team10_FE_USER/assets/50255093/980d0d91-42bb-4179-af15-518ebe7cae1d) | ![리뷰 등록 페이지](https://github.com/Step3-kakao-tech-campus/Team10_FE_USER/assets/50255093/b78707c8-3a30-4ccb-9896-4efc87e08a76) |

## 디렉터리 구조

```
📂 src
  ┣ 📂 apis
  ┣ 📂 components
     ┗ 📂 atoms
     ┗ 📂 molecules
     ┗ 📂 organisms
     ┗ 📂 templates
 ┣ 📂 hooks
 ┣ 📂 layouts
 ┣ 📂 mocks
 ┣ 📂 pages
 ┣ 📂 store
 ┣ 📄 App.jsx
 ┗ 📄 main.jsx

```

## 함께한 사람들

|                                                           FE                                                           |                                                         FE                                                          |                                                         FE                                                         |
| :--------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------: |
|                                     [노주영(조장)](https://github.com/juyeongnoh)                                      |                                 [김좌훈(FE 테크리더)](https://github.com/catnofat)                                  |                                   [고민주(리마인더)](https://github.com/minjuko)                                   |
| ![juyeongnoh](https://user-images.githubusercontent.com/104883910/273441208-04b916c7-3d13-437e-b269-6837e6977453.jpeg) | ![catnofat](https://user-images.githubusercontent.com/104883910/273441205-78f72cd1-1c75-495c-9d9a-9fd68ee7f755.png) | ![minjuko](https://user-images.githubusercontent.com/104883910/273441202-5cd106a5-b15c-4b1e-a609-59c1ce2d05ae.png) |

|                                                           BE                                                            |                                                         BE                                                         |                                                        BE                                                         |
| :---------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------: |
|                                 [김명지(BE 테크리더)](https://github.com/Starlight258)                                  |                                   [김철호(기획리더)](https://github.com/Cheoroo)                                   |                                   [이유진(타임키퍼)](https://github.com/2Using)                                   |
| ![Starlight258](https://user-images.githubusercontent.com/104883910/273441204-57ff5077-61b7-46fb-9252-4d07d751c2f7.png) | ![Cheoroo](https://user-images.githubusercontent.com/104883910/273441206-53e3289b-4d54-416c-a4bb-8378b6bdeee5.png) | ![2Using](https://user-images.githubusercontent.com/104883910/273441211-80d28f43-ef45-40cc-893a-f3787823f725.png) |

> **카카오 테크 캠퍼스 1기 3단계 프로젝트**  
> **개발 기간 : 2023.09.25 ~ 2023.11.11**

## 라이센스

MIT License

Copyright (c) 2023 [1기] 카카오 테크 캠퍼스 (3단계) 프로젝트 10조

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
