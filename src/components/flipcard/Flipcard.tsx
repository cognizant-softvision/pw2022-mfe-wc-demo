  import { Link } from "react-router-dom";
import "./Flipcard.css";

  interface FrontCard {
    title: string,
    icon: string,
  };

  interface BackCard {
    firstText: string,
    secondText: string,
  }

  const CARDS: {front: FrontCard, back: BackCard}[] = [
    {
      front: { title: 'Ownership', icon: 'assets/bulb.svg' },
      back: {
        firstText: 'Be the creator and the director.',
        secondText: 'Propose new projects and give them the direction and format of your preference.'
      }
    },
    {
      front: { title: 'Flexitime', icon: 'assets/schedule.svg' },
      back: { 
        firstText: 'We won’t ask you to spend certain amount of time on R&D.',
        secondText: 'Whatever your time availability is, it’ll be great.'
      }
    },
    {
      front: { title: 'Networking', icon: 'assets/networking.svg' },
      back: { 
        firstText: 'Be part of an interdisciplinary team.',
        secondText: 'Meet colleagues from other areas and learn from them.'
      }
    },
    {
      front: { title: 'Friendly', icon: 'assets/high-five.svg' },
      back: { 
        firstText: 'Fail. Fail again. Fail better.',
        secondText: 'This is the best place to express, propose and fail with no pressure.'
      }
    },

  ];

  const Flipcard = () => {


    return (
      <div className="wrapper flipcard-page">
        <h1>Flipcard</h1>
        <h3> Create flippable cards with a height of 222px and a width of width: 173px</h3>
        <SectionSamples />
        <SectionForDevs />
        <p style={{ marginTop: "var(--big-gap)" }}>
          <Link className="btn btn-primary" to="/" style={{ width: "106px" }}>
            Back
          </Link>
        </p>
      </div>
    );
  }

  const SectionSamples = () => {
    return (
      <section className="container">
        {CARDS.map(card => {
          return(
            <cwc-flipcard key={card.front.title}>
              <div className="front" slot="front">
                <h1> {card.front.title} </h1>
                <img src={card.front.icon} alt={card.front.title} />
              </div>
              <div className="back" slot="back">
                <h1>{card.back.firstText}</h1>
                <h1>{card.back.secondText}</h1>
              </div>
            </cwc-flipcard>
          )
        })}
    </section>
    )
  };

  const SectionForDevs = () => {
    return (
      <section>
        <h1> For developers </h1>
        <h2>Set front and back of a card</h2>
        <p>
          In order to set the content for the front of the card,
          you need to add <code> slot </code> attribute with a value of "front" in the container of the content
        </p>
        <p>
          and in order to set the content for the back of the card,
          you need to add <code> slot </code> attribute with a value of "front" in the container of the content
        </p>

        <pre>
          {`<cwc-flipcard>
  <div slot="front">
    <h1> Ownership </h1>
    <img src="assets/bulb.svg" alt="Ownership">
  </div>
  <div slot="back">
    <h1>Be part of an interdisciplinary team.</h1>
    <h1> Meet colleagues from other areas and learn from them. </h1>
  </div>
</cwc-flipcard>`}
        </pre>
      </section>
    )
  }


  export default Flipcard;