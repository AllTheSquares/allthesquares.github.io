import {useState, useEffect} from 'react'

import './App.css'

function App() {
    const [outputText, randomText] = useState("")

    useEffect(() => {
        let text_choices = Array(
            "WOOOOOOOO!",
            "The Website of the Square, but better.",
            "A work in progress!",
            "Why AllTheSquares? Who knows?",
            "You refresh too much.",
            "Leading JMSA's Hack Club and robotics coding team.",
            "Torturing himself with too many programs.",
            "An AP Computer Science Principles student.",
            "An idiot since 2007.",
            "Computer addict. Don't ask me.",
            'Is this thing on?',
            "Test, 1, 2, 3.",
            "308 Negra Arroyo Lane, Albuquerque, New Mexico",
            "I love Python :)");
        let select = Math.floor(text_choices.length * Math.random());
        randomText(text_choices[select])
    }, []);

    return (
        <div>
            <div>
                <div className="quote">
                    <h1>{outputText}</h1>
                </div>
            </div>
        </div>
    )
}

export default App;
