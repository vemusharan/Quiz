class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state ={list:props.list,toggle:false, score:[0,0]}
        window.$inst = this.state.list.instruction;
        window.$title = "Instructions";
        window.$check = true;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleEnd = this.handleEnd.bind(this);
        this.scoreCalulator = this.scoreCalulator.bind(this);
        window.$listitems = this.state.list.instruction.map((t) => <li>   {t}  </li> );
        window.$button = <input type='submit' value='Start Quiz' onSubmit= {this.handleSubmit} />;
        window.$button2 = <input type='submit' value='Start Quiz' onSubmit= {this.handleSubmit} />;
        window.$onsubmit = this.handleSubmit ;        
    }
    handleSubmit(event) {
        event.preventDefault();
        window.$title = this.state.list.question[0].question1;
        window.$listitems = this.state.list.question[0].Options.map((t) => <li> <input name="isGoing" type="radio" onClick={() => this.scoreCalulator(t,0)} />   {t}  </li> );
        window.$button = <input type='submit' value='Next Question' onSubmit= {this.handleNext} />;
        window.$onsubmit = this.handleNext;
        this.setState({list:this.state.list});

        //const listitems = this.state.list.instruction.map((t) => <li> <input name="isGoing" type="checkbox"/>   {t}  </li> );
    }
    handleNext(event) {
        event.preventDefault();
        window.$title = this.state.list.question[1].question2;
        window.$listitems = this.state.list.question[1].Options.map((t) => <li> <input name="isGoing" type="radio" onClick={() => this.scoreCalulator(t,1)} />   {t}  </li> );
        window.$button = <input type='submit' value='End Question' onSubmit= {this.handleEnd} />;
        window.$button2 = <input type='submit' value='Previous Question' onSubmit= {this.handleEnd} />;
        this.state.toggle = true;
        
        if (this.state.toggle) {
            window.$onsubmit = this.handleEnd;
        }
        this.setState({list:this.state.list,toggle:this.state.toggle});
    }
    handleEnd(event) {
        event.preventDefault();
        window.$onsubmit = this.handleEnd;
        window.$title = "End OF Quiz";
        window.$listitems = <h2> Your Final Score is {this.state.score[0]+ this.state.score[1]} </h2>;
        window.$button = "";
        window.$button2 = "";
        this.setState({list:this.state.list,toggle:false});

    }
    scoreCalulator(value,index) {
        if (this.state.list.question[index].Correct_ans === value) {
           this.state.score[index] = 5;
           this.setState({score:this.state.score});
        }
       else {
            this.state.score[index] = 0;
            this.setState({score:this.state.score});
        }
        console.log(this.state.score[0],this.state.score[1]);     
    }
    render() {
        return (
            <div>
            <h1>  {this.props.list.title} </h1>
            <h3> {window.$title}  </h3>
          {/* <ol>  {window.$listitems}  </ol> */ }
          <ol>  {window.$listitems}  </ol>
           <form onSubmit={window.$onsubmit}>
           {this.state.toggle ?(  <ol> {window.$button2 } , {window.$button}   </ol>  ) : (<ol> {window.$button}  </ol> ) }
           </form>
            &nbsp; &nbsp;
          <h4> <b>  <i> Good luck ! Bigbosss :) </i> </b> </h4> 
            </div>
        );
    }

}


const question1 = {question1:"Question 1 :  How many times did Abhijit was Nominated?",Options:["11","12","10"],Correct_ans:"11"}
const question2 = {question2:"Question 2 :  Which of the following was in top 7 ?",Options:["Mehboob","Lasya","Avinash"],Correct_ans:"Avinash"}
const ins = ["The Quiz consists of 5 Question each Question carry 4 marks", " Each Question has Equal points ", "There is no time limit but dont waste your time","U already wasted so much time watching bigboss if u cannot even remember thes then its an insult to bigboss and u"," Jai Sohel! Katha vere undali mari :) "]
const quiz = {title:"Bigboss Season 4 Quiz",instruction:ins,question:[question1,question2]}

ReactDOM.render(
    <Quiz list={quiz} /> ,
    document.getElementById('root')
);



