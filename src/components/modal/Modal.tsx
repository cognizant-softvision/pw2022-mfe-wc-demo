import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CwcModalElement } from "../../cwc-elements-interfaces";
import "./Modal.css";

const Modal = () => {
  return (
    <div className="wrapper modal-page">
      <h1> Modal </h1>
      <SectionModalTitle/>
      <SectionModalNoTitle/>
      <SectionForDevs />
      <p style={{ marginTop: "var(--big-gap)" }}>
        <Link className="btn btn-primary" to="/" style={{ width: "106px" }}>
          Back
        </Link>
      </p>
    </div>
  );
}

const SectionModalTitle = () => {
  const modalRef = useRef<CwcModalElement>(null);

  useEffect(() => {
    const modalRefCurrent = modalRef.current;
    if (modalRefCurrent) {
      modalRefCurrent.addEventListener('onClose', modalRefCurrent.hideModal);
    }
    return () => {
      if (modalRefCurrent) {
        modalRefCurrent.removeEventListener('onClose', modalRefCurrent.hideModal);
      }
    }
  }, []);

  return (
    <section>
      <h2> Modal with title </h2>
      <p> In order to add a title to the modal, you need to add <code>title</code> attribute to the modal</p>
      <pre>
        {`<cwc-modal id="modal" title="Lorem ipsum">
    <div id="modal-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
    </div>
    <button class="btn btn-primary" id="close-modal"> Close modal </button>
</cwc-modal>"`}
      </pre>
      <cwc-modal title="Lorem ipsum" ref={modalRef}>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <button className="btn btn-primary" onClick={() => modalRef.current?.hideModal() }> Close modal</button>
      </cwc-modal>
      <button className="btn btn-primary" onClick={() => modalRef.current?.showModal()}> Open modal with title</button>
    </section>
  );
};

const SectionModalNoTitle = () => {
  const modalRef = useRef<CwcModalElement>(null);

  useEffect(() => {
    const modalRefCurrent = modalRef.current;
    if (modalRefCurrent) {
      modalRefCurrent.addEventListener('onClose', modalRefCurrent.hideModal);
    }
    return () => {
      if (modalRefCurrent) {
        modalRefCurrent.removeEventListener('onClose', modalRefCurrent.hideModal);
      }
    }
  }, []);

  return (
    <section>
      <h2> Modal without a title</h2>
      <p>If you don't want to add a title, you don't add the <code>title</code> attribute to the modal </p>
      <pre>
        {`<cwc-modal id="modal" title="Test modal">
    <div id="modal-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
    </div>
    <button class="btn btn-primary" id="close-modal"> Close modal </button>
</cwc-modal>"`}
      </pre>
      <cwc-modal ref={modalRef}>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <button className="btn btn-primary" onClick={() => modalRef.current?.hideModal()}> Close modal</button>
      </cwc-modal>
      <button className="btn btn-primary" onClick={() => modalRef.current?.showModal()}> Open modal without title</button>
    </section>
  );
};

const SectionForDevs = () => {
  return (
    <section>
      <h1> For developers </h1>
      <h3> Handling the modal through methods</h3>
      <p>You have to set the html</p>
      <pre>
        {`const Modal = () => {
  const modalRef = useRef<CwcModalElement>();
  
  useEffect(() => {
    const modalRefCurrent = modalRef.current;
    if (modalRefCurrent) {
      modalRefCurrent.addEventListener('onClose', modalRefCurrent.hideModal);
    }
    return () => {
      if (modalRefCurrent) {
        modalRefCurrent.removeEventListener('onClose', modalRefCurrent.hideModal);
      }
    }
  });

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.hideModal();
    }
  }

  return (
    <>
      <cwc-modal ref={modalRef}>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
        <button class="btn btn-primary" onClick={closeModal}> Close modal </button>
      </cwc-modal>
      <button class="btn btn-primary" onClick={openModal} > Open modal </button>
    </>   
  )
}`}
      </pre>
      <p>And then, using javascript, you get the element through <code>ref</code> and call <code> showModal()</code></p>
      <pre>
        {`const openModal = () => {
  if (modalRef.current) {
    modalRef.current.showModal();
  }
}
`}
      </pre>
      <p>Finally, If you want to close the modal, you have to call <code> closeModal() </code></p>
      <pre>
        {`const closeModal = () => {
  if (modalRef.current) {
    modalRef.current.hideModal();
  }
}
`}
      </pre>
      <p>The modal is going to emit an "onClose" event if you click the backdrop, the x button or press escape key.</p>
      <p>In order to handle those events, you have to add an event listener.</p>
      <pre>
        {`useEffect(() => {
  const modalRefCurrent = modalRef.current;
  if (modalRefCurrent) {
    modalRefCurrent.addEventListener('onClose', modalRefCurrent.hideModal);
  }
  return () => {
    if (modalRefCurrent) {
      modalRefCurrent.removeEventListener('onClose', modalRefCurrent.hideModal);
    }
  }
}, []);
`}
      </pre>
    </section>
  );
}


export default Modal;