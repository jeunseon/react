class App extends React.Component {
    constructor(props){
        super(props);
        this.refId=React.createRef();
        this.state = {
            번호:1,
            아이디:'',
            비밀번호:'',
            이름:'',
            이메일:''
        }
    }
    onChangeId= (e) =>{
        // console.log(e.target.value);
        this.setState({
            아이디:e.target.value
        });
    }
    onChangePW = (e) =>{
        this.setState({
            비밀번호:e.target.value
        });
    }
    onChangeName = (e) =>{
        this.setState({
            이름:e.target.value
        });
    }
    onChangeEmail = (e) =>{
        this.setState({
            이메일:e.target.value
        });
    }
    onClickAdd = (e) =>{
        e.preventDefault();
        // crud(creat, read, update, delete)
        // 로컬스토리지에 저장하기
        // localStorage.length; 전체 길이(개수)
        // localStorage.setItem(키(key), 키값(value)); 데이터(문자열) 저장하기
        // localStorage.getItem(키(key)); 데이터 가져오기
        // localStorage.removeItem(키(key)); 데이터 삭제하기
        // localStorage.setItem(`num-${localStorage.length+1}`, `${this.state.아이디}, ${this.state.비밀번호}, ${this.state.이름}, ${this.state.이메일}`)
        
        // 로컬스토리지에 저장될 객체를 임시로 생성
        let 멤버 ={
            번호: this.state.번호,
            아이디: this.state.아이디,
            비밀번호: this.state.비밀번호,
            이름: this.state.이름,
            이메일: this.state.이메일
        }
        localStorage.setItem(멤버.번호, JSON.stringify(멤버))
        /* 데이터저장: 객체형식으로 저장(object)
        로컬스토리지에 객체형식으로 저장 불가. 
        그래서 문자열 형식(JSON.stringify())으로 바꿔야함
        자동증가: this. state.번호+1; 다음번호 */

        // 초기화 : 다음 입력값을 위해서 입력상자를 비움
        // 그리고 번호가 1씩 증가
        this.setState({번호:this.state.번호+1});
        this.setState({아이디:''});
        this.setState({비밀번호:''});
        this.setState({이름:''});
        this.setState({이메일:''});
        this.refId.current.focus();

        // Ref: 초기화하고 커서가 아이디에서 깜빡깜빡. 포커스(아이디.focus())
        /* 1. DOM 요소를 생성해서 등록한다. root.변수생성 this.redId=React.createRef();
        2. input 선택자 요소에 등록 연결(ref={this.refId})
        2. 초기화 위치에 포커싱(this.refId.current.focus();) */
    }

    render() {
        return (
            <div id="app">
                <h1>회원가입</h1>
                <div id="member">
                    <form onSubmit={this.onClickAdd}>
                        <div><input ref={this.refId} onChange={this.onChangeId} type="text" id="id" value={this.state.아이디} placeholder="Id 입력"/></div>
                        <div><input onChange={this.onChangePW} type="password" id="pw" value={this.state.비밀번호} placeholder="Password 입력"/></div>
                        <div><input onChange={this.onChangeName} type="text" id="name" value={this.state.이름} placeholder="Name 입력"/></div>
                        <div><input onChange={this.onChangeEmail} type="email" id="email" value={this.state.이메일} placeholder="Email 입력"/></div>
                        <div><button type='submit'>Add</button></div>
                    </form>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);