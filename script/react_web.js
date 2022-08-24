// 함수형 Component 

const WrapComponent = (props) => {
    return (
        <div id='wrap'>
            <HeaderComponent header={props.header}/>
            <MainComponent />
            <FootComponent />
            <PopComponent />
        </div>
    );
};
WrapComponent.defaultProps={
    header:{
        title:'이것은 react props를 활용한 title 입니다',
        imgSrc:'./images/logo.png',
        nav:[
            {mainMenu:'회사소개',subMenu:['인사말','조직구성도','오시는길']},
            {mainMenu:'사업영역',subMenu:['전원주택','도시재생','인테리어']},
            {mainMenu:'입주정보',subMenu:['입주단지','입주캘린더']},
            {mainMenu:'고객센터',subMenu:['공지사항','건축상담','홍보자료실']}
        ]
    }
}

    const HeaderComponent = (props) => {
        const {title, imgSrc}=props.header;
        
        const navResult = props.header.nav.map((item) => {
            return(
                <li>
                    <a href="#" className="main-btn" title={item.mainMenu}>{item.mainMenu}</a>
                    <div className="sub sub1">
                        <ul>
                            {
                                item.subMenu.map(function(sub){
                                    return(
                                        <li><a href="#" title={sub}>{sub}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </li>
            );
        });
        return(
            <header id="header">
                <div className="left">
                    <a href="index.html" className="logo-btn" title={title}><img src={imgSrc} alt="logo" /></a>
                </div>
                <div className="right">
                    <nav id="nav">
                        <div className="sb-bg"></div>
                        <ul>
                            {navResult}
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
    const MainComponent = () => {
        return(
            <main id='main'>
                <Section1Component />
                <Section2Component />
            </main>
        );
    }
        const Section1Component = () => {
            return(
                <section id="section1">
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul className="slide-wrap">
                                <li className="slide slide3"><img src="./images/slide3.jpg" alt="" /></li>
                                <li className="slide slide1"><img src="./images/slide1.jpg" alt="" /></li>
                                <li className="slide slide2"><img src="./images/slide2.jpg" alt="" /></li>
                                <li className="slide slide3"><img src="./images/slide3.jpg" alt="" /></li>
                                <li className="slide slide1"><img src="./images/slide1.jpg" alt="" /></li>
                            </ul>
                        </div>
                    </div>
                </section>
            );
        }
        const Section2Component = () => {
            return(
                <section id="section2">
                <div className="left">  {/* 공지사항 */}
                    <div className="gap"> {/* 여백(공간) 없음 */}
                        <div className="notice">{/* 너비 100% 높이 200px*/}
                            <div className="notice-wrap"> {/* 포지션 렐러티브 : 공지사항 부모영역 박스 */}
                                <button className="notice-btn">공지사항</button> {/* 포지션 앱솔루트 z-index: 2 */}
                                <ul className="notice-list">{/* 포지션 렐러티브  z-index:1 */}
                                    <li>
                                        <a href="#" title="2021 한국조폐공사 창립 70주년 기념 대국민 영상공모전 수상작 발표">2021 한국조폐공사 창립 70주년 기념 대국민 영상공모전 수상작 발표</a><span>2021-07-09</span>
                                    </li>
                                    <li>
                                        <a href="#" title="상생협력센터 「콤비(KOMBI)」 입주기업 모집">상생협력센터 「콤비(KOMBI)」 입주기업 모집</a><span>2021-07-09</span>
                                    </li>
                                    <li>
                                        <a href="#" title="한국조폐공사 창립 70주년 기념 대국민 영상공모전">한국조폐공사 창립 70주년 기념 대국민 영상공모전</a><span>2021-07-09</span>
                                    </li>
                                    <li>
                                        <a href="#" title="국민참여예산 집중접수 개시 연장 알림">국민참여예산 집중접수 개시 연장 알림</a><span>2021-07-09</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="center"> {/* 갤러리 */}
                    <div className="gap">  {/* 여백(공간)을 좌우 10px */}
                        <div className="gallery">{/* 너비 100% 높이 200px */}
                            <div className="gallery-wrap">
                                <button className="gallery-btn">갤러리</button> {/* 포지션 앱솔루트 z-index: 2 */}
                                <ul className="gallery-list">
                                    <li>
                                        <a href="#" title="gallery image1">
                                            <div>
                                            {/* 이미지 : 백그라이드 이미지 */}
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="gallery image2">
                                            <div>
                                            {/* 이미지 : 백그라이드 이미지 */}
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="gallery image3">
                                            <div>
                                            {/* 이미지 : 백그라이드 이미지 */}
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">  {/* 바로가기 */}
                    <div className="gap"> {/* 여백(공간) 없음 */}
                        <div className="hotlink"> {/* 너비 100%  높이 200px */}
                            <a href="#" title="Hot link">
                                <span>바로가기 배너</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            );
        }

    const FootComponent = () => {
        return(
            <footer id='footer'>
                <div className="left">
                    <div className="top">
                        <span><a href="#">개인정보처리방침</a></span>
                        <span><a href="#">정보통신보호법</a></span>
                        <span><a href="#">이메일무단수집거부</a></span>
                        <span><a href="#">홈페이지이용안내</a></span>
                        <span><a href="#">금융중개지원대출</a></span>
                        <span><a href="#">기업정보조회</a></span>
                    </div>
                    <div className="bottom">
                        <p>&copy;Copyright Thejoeun Academy Computer Institute co.kr</p>
                    </div>
                </div>
                <div className="right">
                    <div className="family-box">
                        <form name="family_form" id="familyForm">
                            <select name="family" id="family">
                                <option value="">패밀리사이트</option>
                                <option value="https://www.bok.or.kr/museum/main/">한국은행화폐박물관</option>
                                <option value="https://www.komsco.com/">조폐공사</option>
                                <option value="http://www.tjoeun.co.kr/">더조은아카데미컴퓨터</option>
                                <option value="http://www.kimyoung.co.kr/">김영편입학원</option>
                                <option value="https://www.megastudy.net/">메가스터디</option>
                            </select>
                        </form>
                    </div>
                </div>
            </footer>
        );
    }
    const PopComponent = () => {
        return(
            <div id="popup">
                <div className="wrap">
                    <h1>공지사항 팝업창</h1>
                    <ul>
                        <li>2021 한국조폐공사 창립 70주년 기념 대국민 영상공모전 수상작 발표</li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <button className="close-btn">× 닫기</button>
                </div>
            </div>    
        );
    }

ReactDOM.render(
    <WrapComponent />,
    document.getElementById('root')
);