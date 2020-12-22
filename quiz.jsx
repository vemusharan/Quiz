class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state ={list:props.list}
        window.$inst = this.state.list.instruction;
        window.$title = "Instructions";
        window.$check = true;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNext = this.handleNext.bind(this);
        window.$listitems = this.state.list.instruction.map((t) => <li>   {t}  </li> );

        window.$button = <input type='submit' value='Start Quiz' onSubmit= {this.handleSubmit} />;
        window.$onsubmit = this.handleSubmit ;
        

        console.log(this.state.list.question.question1)
        console.log(this.state.list.question.Options)
        
    }
    handleSubmit(event) {
        event.preventDefault();
        window.$title = this.state.list.question.question1;
        window.$listitems = this.state.list.question.Options.map((t) => <li> <input name="isGoing" type="radio"/>   {t}  </li> );
        window.$button = <input type='submit' value='Next Question' onSubmit= {this.handleNext} />;
        window.$onsubmit = this.handleNext;
        this.setState({list:this.state.list});

        //const listitems = this.state.list.instruction.map((t) => <li> <input name="isGoing" type="checkbox"/>   {t}  </li> );
    }



    handleNext(event) {
        event.preventDefault();
        window.$title = "Question 2";
        window.$listitems = " ";
        this.setState({list:this.state.list});

    }




    render() {
        
    
        return (
            <div>
            <h1>  {this.props.list.title} </h1>

            <h3> {window.$title}  </h3>
 

           <ol>  {window.$listitems}  </ol>


           <form onSubmit={window.$onsubmit}>
           {window.$button}
           </form>




            &nbsp; &nbsp;
          <h4> <b>  <i> Good luck ! Bigbosss :) </i> </b> </h4> 

            </div>
        );
    }

}




  



const question1 = {question1:"Question 1 :  How many times did Abhijit was Nominated?",Options:["11","12","10"]}
const question2 = {}

const ins = ["The Quiz consists of 5 Question each Question carry 4 marks", " Each Question has Equal points ", "There is no time limit but dont waste your time","U already wasted so much time watching bigboss if u cannot even remember thes then its an insult to bigboss and u"," Jai Sohel! Katha vere undali mari :) "]
const quiz = {title:"Bigboss Season 4 Quiz",instruction:ins,question:question1}

ReactDOM.render(
    <Quiz list={quiz} /> ,
    document.getElementById('root')
);



