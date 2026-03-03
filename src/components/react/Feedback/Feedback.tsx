import type { Modal } from "bootstrap-italia";
import { useCallback, useRef, useState } from "react";
import FormNo from "./components/form-no/FormNo";
import Icon, {
  type AlignIconProps,
  type ColorIconProps,
  type SizeIconProps,
} from "./Icon";
import { FeedbackState } from "./state";
import "./style.scss";

const BTN_INTRO = {
  label: "Invia",
  btnStyle: "primary",
  type: "submit",
};

const ICON_CLOSE = {
  icon: "sprites.svg#it-close",
  color: "primary" as ColorIconProps,
  size: "lg" as SizeIconProps,
};

const ICON_RESULT = {
  color: "primary" as ColorIconProps,
  size: "lg" as SizeIconProps,
  align: "middle" as AlignIconProps,
  addonClasses: "me-2",
};

function Feedback() {
  const [isChecked, setIsChecked] = useState(false);
  const [feedbackState, setFeedbackState] = useState(FeedbackState.Start);
  const [choiceVal, setChoiceVal] = useState("");
  const [modal, setModal] = useState<Modal | null>(null);

  const modalNo = useRef(null);

  /* const sendFeedback = useCallback(
    async (result = {}) => {
      setFeedbackState(FeedbackState.Loading);
 
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const mockSuccess = true;

      if (!mockSuccess) {
        setFeedbackState(FeedbackState.Error);
        return false;
      }

      setFeedbackState(FeedbackState.Success);
      return true;
    },
    [choiceVal],
  ); */

  const sendFeedback = useCallback(
    async (result = {}) => {
      setFeedbackState(FeedbackState.Loading);
      const feedback = choiceVal === "1" ? "+" : "-";

      try {
        const r = await fetch(
          "https://feedback.designers.italia.it/api/messages",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              feedback,
              url: window.location.href,
              ...result,
            }),
          },
        );

        if (!r.ok) {
          throw new Error(`HTTP response: ${r.status}`);
        }
      } catch (e) {
        setFeedbackState(FeedbackState.Error);

        console.error(`Feedback request error: ${e}`);

        return false;
      }

      setFeedbackState(FeedbackState.Success);

      return true;
    },
    [choiceVal],
  );

  const onChange = (evt: any) => {
    if (evt.currentTarget.checked) {
      setIsChecked(true);
      setChoiceVal(evt.currentTarget.value);
    }
  };

  const openModal = () => {
    const bootstrap = (window as any).bootstrap;
    if (choiceVal === "0" && modalNo.current && bootstrap) {
      const dialog = new bootstrap.Modal(modalNo.current);
      dialog.show();

      setModal(dialog);
    }
  };

  const onSend = async () => {
    const res = await sendFeedback();

    if (res) {
      openModal();
    }
  };

  const onModalResult = useCallback(
    async (result: Record<string, unknown>) => {
      await sendFeedback(result);

      if (modal) {
        modal.hide();
      }
    },
    [modal, sendFeedback],
  );

  const renderState = (state: FeedbackState) => {
    switch (state) {
      case FeedbackState.Loading:
      case FeedbackState.Start:
        return (
          <>
            <h2 className="mb-0 h5 fw-semibold" id="feedbackSectionTitle">
              <span className="feedback-title">
                Ciao, questa pagina è stata utile?
              </span>
            </h2>
            <form className="mt-3 mt-md-3">
              <fieldset>
                <legend>
                  <span className="visually-hidden">Scegli la risposta:</span>
                </legend>
                <div className="form-check form-check-inline">
                  <input
                    name="feedbackValue"
                    type="radio"
                    id="feedbackValueYes"
                    value="1"
                    onChange={onChange}
                  />
                  <label className="mb-0" htmlFor="feedbackValueYes">
                    Sì
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    name="feedbackValue"
                    type="radio"
                    id="feedbackValueNo"
                    value="0"
                    onChange={onChange}
                  />
                  <label className="mb-0" htmlFor="feedbackValueNo">
                    No
                  </label>
                </div>
              </fieldset>

              <button
                type="submit"
                className="btn btn-primary mt-4"
                disabled={!isChecked || feedbackState === FeedbackState.Loading}
                onClick={onSend}
              >
                {feedbackState === FeedbackState.Loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Invio in corso...</span>
                  </>
                ) : (
                  BTN_INTRO.label
                )}
              </button>
            </form>
          </>
        );
      case FeedbackState.Success:
        return (
          <span className="feedback-confirm d-flex align-items-center">
            <Icon icon="sprites.svg#it-check-circle" {...ICON_RESULT} />
            Feedback inviato. Grazie.
          </span>
        );
      case FeedbackState.Error:
        return (
          <span className="feedback-confirm d-flex align-items-center">
            <Icon
              {...ICON_RESULT}
              icon="sprites.svg#it-error"
              addonClasses="icon-danger me-2"
            />
            C’è stato un problema nell’invio 😞
            <br /> Ti va di riprovare più tardi? 🙏
          </span>
        );
      default:
        return null; // should not happen
    }
  };

  return (
    <section
      className="feedback it-section-bg-medium py-5 px-3 px-lg-0"
      aria-labelledby="feedbackSectionTitle"
      id="feedbackSection"
    >
      <div className="container-xxl">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <div className="card shadow card-wrapper rounded">
              <div>
                <div className="card-body p-4 p-md-5">
                  <div className="step" id="feedbackIntro">
                    {renderState(feedbackState)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={modalNo}
        className="modal fade"
        role="dialog"
        id="feedbackNo"
        aria-labelledby="feedbackNoTitle"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered "
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header align-items-start">
              <button
                className="btn-close flex-shrink-0"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Chiudi finestra modale"
              >
                <Icon {...ICON_CLOSE} />
              </button>
            </div>
            <div className="modal-body pt-0 pb-4 pb-md-5 px-md-4">
              <FormNo onResult={onModalResult} state={feedbackState} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
