class App extends React.Component {
    constructor(props){
        super(props);
        this.refId=React.createRef();
        this.state = {
            번호:1,
            아이디:'',
            비밀번호:'',
            이름:'',
            이메일:'',
            회원:[],
            수정하기:false
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
        let 멤버 ={ /* onClickAdd 안에서만 작동하는 것이라 아래의 멤버와는 상관 없음 */
            번호: this.state.번호,
            아이디: this.state.아이디,
            비밀번호: this.state.비밀번호,
            이름: this.state.이름,
            이메일: this.state.이메일
        }
        localStorage.setItem(멤버.번호, JSON.stringify(멤버))
        this.memberListLoad();

        /* 데이터저장: 객체형식으로 저장(object)
        로컬스토리지에 객체형식으로 저장 불가. 
        그래서 문자열 형식(JSON.stringify())으로 바꿔야함
        자동증가: this. state.번호+1; 다음번호 */

        // 초기화 : 다음 입력값을 위해서 입력상자를 비움
        // 그리고 번호가 1씩 증가
        // this.setState({번호:this.state.번호+1});
        this.setState({
            아이디:'',
            비밀번호:'',
            이름:'',
            이메일:'',
            수정하기:false
        });
       /*  this.setState({아이디:''});
        this.setState({비밀번호:''});
        this.setState({이름:''});
        this.setState({이메일:''});
        this.refId.current.focus(); 
        // 위의 것으로 바꿈*/

        // Ref: 초기화하고 커서가 아이디에서 깜빡깜빡. 포커스(아이디.focus())
        /* 1. DOM 요소를 생성해서 등록한다. root.변수생성 this.redId=React.createRef();
        2. input 선택자 요소에 등록 연결(ref={this.refId})
        2. 초기화 위치에 포커싱(this.refId.current.focus();) */
    }

    memberListLoad = () => { // 시작하자마자 가져오도록
        let 멤버 = []; 
        for(let i=0; i<localStorage.length; i++){
            멤버.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }    
        this.setState({
            회원: 멤버
        });
        // 입력한 값이 table에 계속 증가하여 나타나도록
        let max = 0;
        for(let i=0; i<localStorage.length; i++){
            if(max < Number(localStorage.key(i))){
                max = Number(localStorage.key(i));
            }
        }
        this.setState({번호: max+1});
    }

    // 데이터 가져오기 (컴포넌트 디드마운트(생명주기))
    componentDidMount(){
        this.memberListLoad();

        // 데이터 가져올때
        /* console.log(localStorage.getItem(1));
        console.log(localStorage.getItem(2));
        console.log(localStorage.getItem('num-3'));
        console.log(localStorage.getItem(localStorage.key(0))); */

        // 키값 가져올때
        /* console.log(localStorage.key(0));
        console.log(localStorage.key(1));
        console.log(localStorage.key(3));

        for(let i=0; i<localStorage.length; i++){
            // 객체로 만들기 위해 JSON.parse()를 쓴다.
            console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
        let 멤버 = []; 
        for(let i=0; i<localStorage.length; i++){
            멤버.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
        // console.log('멤버', 멤버);
        this.setState({
            회원: 멤버
        });*/
    }
    
    // 삭제버튼
    onClickDeletefn = (deleteBun) => {
        localStorage.removeItem(deleteBun);
        this.memberListLoad(); // 모든 데이터 변경 업데이트 출력정보 출력
    }
    // 수정버튼
    onClickUpdatefn = (updateBun) => {

        let imsiObj = {}
        imsiObj = JSON.parse(localStorage.getItem(updateBun));

        this.setState({
            번호: updateBun,
            아이디: imsiObj.아이디,
            비밀번호: imsiObj.비밀번호,
            이름: imsiObj.이름,
            이메일: imsiObj.이메일,
            수정하기: true
        });
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
                        <div><button type='submit' style={this.state.수정하기 ? style2 : style1}>{this.state.수정하기? `Update` :`Add`}</button></div>
                    </form>
                </div>
                <ListComponent 회원={this.state.회원} onClickDeletefn={this.onClickDeletefn} onClickUpdatefn={this.onClickUpdatefn}/>
            </div>
        );
    }
}
class ListComponent extends React.Component{
    // 내용삭제하기
    onClickDelete = (e, bun) => {
        e.preventDefault();
        this.props.onClickDeletefn(bun);
    }
    // 내용수정하기
    onClickUpdate = (e, bun) => {
        e.preventDefault();
        this.props.onClickUpdatefn(bun);
    }

    render(){
        return(
            <div className="list-box">
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>아이디</th>
                            <th>비밀번호</th>
                            <th>이름</th>
                            <th>이메일</th>
                            <th>수정</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.회원.map((item) => {
                                return(
                                    <tr key={item.번호}>
                                        <td>{item.번호}</td>
                                        <td>{item.아이디}</td>
                                        <td>{item.비밀번호}</td>
                                        <td>{item.이름}</td>
                                        <td>{item.이메일}</td>
                                        <td><button onClick={(e) => {this.onClickUpdate(e, item.번호)}}>수정</button></td>
                                        <td><button onClick={(e) => {this.onClickDelete(e, item.번호)}}>삭제</button></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div> 
        );
    }
}

const style1={
    color:'#069',
    fontSize:'16px'
}
const style2={
    color:'#944',
    fontSize:'16px'
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);