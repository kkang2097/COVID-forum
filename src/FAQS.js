import React, { useState } from 'react';
import Header from './Header';
import Faq from './Faq';

function FAQS() {

    const [faqs, setfaqs] = useState([
      {
        question: 'What are some of activities that can cause the spread of COVID-19?',
        answer: 'Any activity that exposes yourself with other people can increase the chance of catching the virus.',
        open: false
      },
      {
        question: 'Where can I access a federal agency regarding further COVID-19 information?',
        answer: 'Our Home page provides a direct link to the CDC website where it is federally approved.',
        open: false
      },
      {
        question: 'What is the goal behind creating this website?',
        answer: 'Our goal is to create a community around the world that explains real time examples of how COVID-19 is affecting our lives and how to prevent further spread.',
        open: false
      },
      {
        question: 'Why am I not able to post anything on my end?',
        answer: 'In order to post news related to COVID-19 around your area, you will need to create an account first.',
        open: false
      },
      {
        question: 'Where can I find myself an appointment for vaccination for covid in my local area?',
        answer: 'Vaccines.gov is a great way to find locations near you that you can make an appointment for the vaccine',
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

export default FAQS
