import { useState } from "react";
import { Link } from "react-router-dom";
import "./Stepper.css";

const STEPS = ['Personal Information', 'Summary', 'Skills', 'Education', 'Languages', 'Work Experience'];

interface StepperSectionProps {
  current: number;
  onNext: (stepper: StepperSectionOption) => void;
  onPrevious: (stepper: StepperSectionOption) => void;
}

type StepperSectionOption = 'default' | 'resizable';

const Stepper = () => {
  const [current, setCurrent] = useState(1);
  const [currentResizable, setCurrentResizable] = useState(1);

  const onNext = (stepper: StepperSectionOption) => {
    const stepperSections = {
      'default': () => {
        setCurrent((current) => {
          if (current < STEPS.length) {
            return current + 1;
          }
          return current;
        });
      },
      'resizable': () => {
        setCurrentResizable((current) => {
          if (current < STEPS.length) {
            return current + 1;
          }
          return current;
        });
      }
    }

    stepperSections[stepper]();
  }

  const onPrevious = (stepper: StepperSectionOption) => {
    const stepperSections = {
      'default': () => {
        setCurrent((current) => {
          if (current > 1) {
            return current - 1;
          }
          return current;
        });
      },
      'resizable': () => {
        setCurrentResizable((current) => {
          if (current > 1) {
            return current - 1;
          }
          return current;
        });
      }
    }

    stepperSections[stepper]();
  }

  return (
    <div className="wrapper stepper-page">
      <h1> Stepper </h1>
      <SectionStepper current={current} onNext={onNext} onPrevious={onPrevious}></SectionStepper>
      <SectionResizable current={currentResizable} onNext={onNext} onPrevious={onPrevious}></SectionResizable>
      <SectionForDevs></SectionForDevs>
      <p style={{ marginTop: "var(--big-gap)" }}>
        <Link className="btn btn-primary" to="/" style={{ width: "106px" }}>
          Back
        </Link>
      </p>
    </div>
  )
};

const SectionStepper: React.FC<StepperSectionProps> = (props) => {
  const { onNext, onPrevious, current } = props;
  return (
    <section>
      <div className="stepper-samples">
        <cwc-stepper current={current}>
          {STEPS.map(step => <cwc-stepper-item key={step}> {step} </cwc-stepper-item>)}
        </cwc-stepper>
      </div>
      <div className="stepper-actions">
        <button className="btn btn-primary" onClick={() => onPrevious('default')}> Previous </button>
        <button className="btn btn-primary" onClick={() => onNext('default')}> Next </button>
      </div>
    </section>
  )
};

const SectionResizable: React.FC<StepperSectionProps> = (props) => {
  const { onNext, onPrevious, current } = props;
  return (
    <section>
      <h2> Stepper resizable </h2>
      <div className="stepper-samples stepper-resizable">
        <cwc-stepper current={current}>
          {STEPS.map(step => <cwc-stepper-item key={step}> {step}</cwc-stepper-item>)}
        </cwc-stepper>
      </div>
      <div className="stepper-actions">
        <button className="btn btn-primary" onClick={() => onPrevious('resizable')}> Previous </button>
        <button className="btn btn-primary" onClick={() => onNext('resizable')}> Next </button>
      </div>
    </section>
  )
};

const SectionForDevs = () => {
  return (
    <section>
      <h1> For developers </h1>
      <p>
        Steps can be set using childrens with <code> cwc-stepper </code> tag or using a string with <code> cwc-stepper-json </code>
      </p>
      <h2> Using cwc-stepper (React) </h2>
      <pre>
        {
          `<cwc-stepper current={1}>
  <cwc-stepper-item> Personal Information </cwc-stepper-item>
  <cwc-stepper-item> Summary </cwc-stepper-item>
  <cwc-stepper-item> Skills </cwc-stepper-item>
  <cwc-stepper-item> Education </cwc-stepper-item>
  <cwc-stepper-item> Languages </cwc-stepper-item>
  <cwc-stepper-item> Work Experience </cwc-stepper-item>
</cwc-stepper>
`
        }
      </pre>
      <p> If you want to change the active step, you have to change the <code> current </code> attribute </p>
      <h2> Using cwc-stepper-json (React) </h2>
      <pre>
        {
          `const STEPS = [
  {
    description: 'Personal Information'
  },
  {
    description: 'Summary'
  },
  {
    description: 'Skills'
  },
  {
    description: 'Education'
  },
  {
    description: 'Languages'
  },
  {
    description: 'Work Experience'
  }
]
<cwc-stepper-json current={1} steps={JSON.stringify(STEPS)}
</cwc-stepper-json>
`
        }
      </pre>
      <p> As you can see, if you want to use this tag, you have to pass a JSON string of an array of objects with the property 'description'</p>
      <p> The <code>current</code> attribute works the same as the previous example</p>
      <h2> Using cwc-stepper (Vanilla JS) </h2>
      <pre>
        {
          `<cwc-stepper current="1">
  <cwc-stepper-item> Personal Information </cwc-stepper-item>
  <cwc-stepper-item> Summary </cwc-stepper-item>
  <cwc-stepper-item> Skills </cwc-stepper-item>
  <cwc-stepper-item> Education </cwc-stepper-item>
  <cwc-stepper-item> Languages </cwc-stepper-item>
  <cwc-stepper-item> Work Experience </cwc-stepper-item>
</cwc-stepper>
`
        }
      </pre>
      <h2> Using cwc-stepper-json (Vanilla JS)</h2>
      <pre>
        {
          `const STEPS = [
  {
    description: 'Personal Information'
  },
  {
    description: 'Summary'
  },
  {
    description: 'Skills'
  },
  {
    description: 'Education'
  },
  {
    description: 'Languages'
  },
  {
    description: 'Work Experience'
  }
]
<cwc-stepper-json current={1} steps={JSON.stringify(STEPS)}
</cwc-stepper-json>
`
        }
      </pre>
    </section>
  )
}

export default Stepper;