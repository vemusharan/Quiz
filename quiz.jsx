class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state ={list:props.list}
        window.$inst = this.state.list.instruction;
        window.$title = "Instruction";
        this.handleSubmit = this.handleSubmit.bind(this);
        
   
    }


    handleSubmit(event) {
        event.preventDefault();
        console.log("hello");
        this
        this.state.list.instruction= ["Questionn1"];
        window.$title = "Questions Number 1"
        this.setState({list:this.state.list});
        <div> working </div> ;


    }




    render() {
    
        const listitems = this.state.list.instruction.map((t) => <li> {t}  </li> );
        return (
            <div>
            <h1>  {this.props.list.title} </h1>
            <div id="imp">  <h2>  {window.$title}   </h2> <ol>  {listitems} </ol> <h4> &nbsp;  <i> Goodluck !!! Bigboss :) </i> </h4> </div>
           <form onSubmit={this.handleSubmit}>
           <input type='submit' value='Start Quiz' onSubmit= {this.handleSubmit} />
           </form>
            </div>
        );
    }

}







const ins = ["The Quiz consists of 5 Question each Question carry 4 marks", " Each Question has Equal points ", "There is no time limit but dont waste your time","U already wasted so much time watching bigboss if u cannot even remember thes then its an insult to bigboss and u"," Jai Sohel! Katha vere undali mari :) "]
const quiz = {title:"Bigboss Season 4 Quiz",instruction:ins}

ReactDOM.render(
    <Quiz list={quiz} /> ,
    document.getElementById('root')
);