import React, { useState } from 'react';
import Header from './Header';
import Faq from './Faq';

function App() {

    const [faqs, setfaqs] = useState([
      {
        question: 'What are some of activities that can cause the spread of COVID-19?',
        answer: 'Any activity that exposes yourself with other people can increase the chance of catching the virus.',
        open: false
      },
      {
        question: 'What are some of activities that can cause the spread of COVID-19?',
        answer: 'Any activity that exposes yourself with other people can increase the chance of catching the virus.',
        open: false
      },
      {
        question: 'What are some of activities that can cause the spread of COVID-19?',
        answer: 'Any activity that exposes yourself with other people can increase the chance of catching the virus.',
        open: false
      }
    ]);

    const toggleFaq = index => {
      setfaqs(faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open
        } else {
          faq.open = false;
        }
        return faq;
      }))
    }


  return (
    <div className="App">
      <Header/>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <Faq faq={faq} index={i} toggleFaq= {toggleFaq} />
        ))}
      </div>
    </div>
  );
}

export default App
