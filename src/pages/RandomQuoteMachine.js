import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const quotes = [
    {
        "quote": "Some people reflect light, some deflect it, you by some miracle, seem to collect it.",
        "author": "Mark Z. Danielewski"
    },
    {
        "quote": "Curse of the self-taught: fear that you know only points here and there, islands of \
                    knowledge, and between them are chasms into which you will fall in humiliating failure, \
                    a fear that followed me from the first time I learned how to code.",
        "author": "Ellen Ullman"
    },
    {
        "quote": "Programming isn’t about what you know; it’s about what you can figure out.",
        "author": "Chris Pine"
    },
    {
        "quote": "You might not think that programmers are artists, but programming is an extremely creative profession. It’s logic-based creativity.",
        "author": "John Romero"
    },
    {
        "quote": "In the beginner’s mind, there are many possibilities; in the expert’s mind, there are few.",
        "author": "Shunryu Suzuki"
    },
    {
        "quote": "Coding is today's language of creativity. All our children deserve a chance to become creators instead of consumers of computer science.",
        "author": "Maria Klawe"
    },
    {
        "quote": "The computer was born to solve problems that did not exist before",
        "author": "Bill Gates"
    }
]
class RandomQuoteMachine extends React.Component {
    constructor(props) {
        super(props);

        // Picks a random one to start
        let newIndex = Math.floor(Math.random() * quotes.length);
        this.state = {
            quote: quotes[newIndex]["quote"],
            author: quotes[newIndex]["author"],
            index: newIndex
        };

        this.updateQuote = this.updateQuote.bind(this); 
    }

    updateQuote() {
        // Picks a new quote ensuring no repeats unless there's just one
        let newIndex = Math.floor(Math.random() * quotes.length);
        while (newIndex == this.state.index && quotes.length != 1) {
            newIndex = Math.floor(Math.random() * quotes.length);
        }
        this.setState({
            quote: quotes[newIndex]["quote"],
            author: quotes[newIndex]["author"],
            index: newIndex
        });
    }

    render() {
        return (
        <div className="card" id="quote-box" style={{width:"50%", "min-height":"300px", margin:"200px auto"}}>
            <div className="card-body">
            <blockquote className="blockquote mb-0">
                <p id="text">{this.state.quote}</p>
                <footer id="author" className="blockquote-footer">{this.state.author}</footer>
            </blockquote>
            </div>
            <footer id="buttons" className="row justify-content-around">
                <a href="#" onClick={this.updateQuote} role="button" className="btn btn-dark btn-lg col-4" id="new-quote">New Quote</a>
                <a href={`http://twitter.com/intent/tweet?text="${this.state.quote}" -${this.state.author}`} target="_top" role="button" className="btn btn-secondary btn-lg col-4" id="tweet-quote"><FontAwesomeIcon icon="fa-brands fa-twitter" /> Tweet</a>
            </footer>
        </div>
        );
    }
}

export default RandomQuoteMachine;