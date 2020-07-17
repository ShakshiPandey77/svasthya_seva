import React from 'react';
// import section header

import GenericSection from './GenericSection';

import Accordion from '../elements/Accordion';
import AccordionItem from '../elements/AccordionItem';

class Secondary extends React.Component {

  state = {
    demoModalActive: false
  }

  openModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: true });
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: false });
  }

  render() {

    const genericSection01Header = {
      title: 'Buttons - Lorem ipsum is placeholder text commonly used.'
    }



    return (
      <React.Fragment>

          <div className="container">
            <Accordion >
              <AccordionItem title="How does COVID-19 spread?">
                People can catch COVID-19 from others who have the virus. The disease spreads primarily from person to person through small droplets from the nose or mouth, which are expelled when a person with COVID-19 coughs, sneezes, or speaks. These droplets are relatively heavy, do not travel far and quickly sink to the ground.<br/> People can catch COVID-19 if they breathe in these droplets from a person infected with the virus.  This is why it is important to stay at least 1 meter away from others. These droplets can land on objects and surfaces around the person such as tables, doorknobs and handrails. <br/> People can become infected by touching these objects or surfaces, then touching their eyes, nose or mouth.  This is why it is important to wash your hands regularly with soap and water or clean with alcohol-based hand rub.
              </AccordionItem>
              <AccordionItem title="Can COVID-19 be caught from a person who has no symptoms?">
              COVID-19 is mainly spread through respiratory droplets expelled by someone who is coughing or has other symptoms such as fever or tiredness. Many people with COVID-19 experience only mild symptoms. This is particularly true in the early stages of the disease. It is possible to catch COVID-19 from someone who has just a mild cough and does not feel ill.<br/>
              Some reports have indicated that people with no symptoms can transmit the virus. It is not yet known how often it happens.
              </AccordionItem>
              <AccordionItem title="What should I do if I have come in close contact with someone who has COVID-19?">
              If you have been in close contact with someone with COVID-19, you may be infected.
              <br/>
              Close contact means that you live with or have been in settings of less than 1 metre from those who have the disease. In these cases, it is best to stay at home.
              <br/>
              However, if you live in an area with malaria or dengue fever it is important that you do not ignore symptoms of fever. Seek medical help. When you attend the health facility wear a mask if possible, keep at least 1 metre distant from other people and do not touch surfaces with your hands. If it is a child who is sick help the child stick to this advice.
              <br/>
              If you do not live in an area with malaria or dengue fever please do the following:

              If you become ill, even with very mild symptoms you must self-isolate
              Even if you don’t think you have been exposed to COVID-19 but develop symptoms, then self-isolate and monitor yourself
              You are more likely to infect others in the early stages of the disease when you just have mild symptoms, therefore early self-isolation is very important.
              If you do not have symptoms, but have been exposed to an infected person, self-quarantine for 14 days.
              If you have definitely had COVID-19 (confirmed by a test) self-isolate for 14 days even after symptoms have disappeared as a precautionary measure – it is not yet known exactly how long people remain infectious after they have recovered. Follow national advice on self-isolation.
              </AccordionItem>
              <AccordionItem title="What does it mean to self-isolate?">
              Self-isolation is an important measure taken by those who have COVID-19 symptoms to avoid infecting others in the community, including family members.

              Self-isolation is when a person who is experiencing fever, cough or other COVID-19 symptoms stays at home and does not go to work, school or public places. This can be voluntarily or based on his/her health care provider’s recommendation. However, if you live in an area with malaria or dengue fever it is important that you do not ignore symptoms of fever. Seek medical help. When you attend the health facility wear a mask if possible, keep at least 1 metre distant from other people and do not touch surfaces with your hands. If it is a child who is sick help the child stick to this advice.
              <br/>
              If you do not live in an area with malaria or dengue fever please do the following:
              <br/>
              -  If a person is in self-isolation, it is because he/she is ill but not severely ill (requiring medical attention)
              <br/>
              1.have a large, well-ventilated with hand-hygiene and toilet facilities
            <br/>  2.If this is not possible, place beds at least 1 metre apart
            <br/>  3.Keep at least 1 metre from others, even from your family members
            <br/>  4.Monitor your symptoms daily
              <br/>5.Isolate for 14 days, even if you feel healthy
              <br/>6.If you develop difficulty breathing, contact your healthcare provider immediately – call them first if possible
              <br/>7.Stay positive and energized by keeping in touch with loved ones by phone or online, and by exercising yourself at home.
                </AccordionItem>

                <AccordionItem title="Are antibiotics effective in preventing or treating COVID-19?">
                  No. Antibiotics do not work against viruses; they only work on bacterial infections. COVID-19 is caused by a virus, so antibiotics do not work. Antibiotics should not be used as a means of prevention or treatment of COVID-19.<br/> In hospitals physicians will sometimes use antibiotics to prevent or treat secondary bacterial infections which can be a complication of COVID-19 in severely ill patients. They should only be used as directed by a physician to treat a bacterial infection.</AccordionItem>
                <AccordionItem title="How long does the virus survive on surfaces?">
                The most important thing to know about coronavirus on surfaces is that they can easily be cleaned with common household disinfectants that will kill the virus. Studies have shown that the COVID-19 virus can survive for up to 72 hours on plastic and stainless steel, less than 4 hours on copper and less than 24 hours on cardboard.
                <br/>
                As, always clean your hands with an alcohol-based hand rub or wash them with soap and water. Avoid touching your eyes, mouth, or nose.
                </AccordionItem>
                <AccordionItem title="Can I catch COVID-19 from my pet or other animals?">
                Several dogs and cats (domestic cats and tigers) in contact with infected humans have tested positive for COVID-19. In addition, ferrets appear to be susceptible to the infection. In experimental conditions, both cats and ferrets were able to transmit infection to other animals of the same species. However, there is no evidence that these animals can transmit the disease to humans and spread COVID-19. COVID-19 is mainly spread through droplets produced when an infected person coughs, sneezes, or speaks.
                <br/>
                Minks raised in farms have also been detected with the virus. Most likely, they have been infected by farm workers. In a few instances, the minks that were infected by humans have transmitted the virus to other people. These are the first reported cases of animal-to-human transmission.
                <br/>
                It is still recommended that people who are sick with COVID-19 and people who are at risk limit contact with companion and other animals. When handling and caring for animals, basic hygiene measures should always be implemented. This includes hand washing after handling animals, their food or supplies, as well as avoiding kissing, licking or sharing food.
                </AccordionItem>
                <AccordionItem title="How long does it take after exposure to COVID-19 to develop symptoms?">
                The time between exposure to COVID-19 and the moment when symptoms start is commonly around five to six days but can range from 1 – 14 days.
                </AccordionItem>

            </Accordion>
          </div>

      </React.Fragment>
    );
  }
}

// inline style
const formStyle = {
  maxWidth: '420px',
  margin: '0 auto'
}

export default Secondary;
