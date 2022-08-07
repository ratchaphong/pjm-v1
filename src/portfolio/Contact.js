import {
  faFacebookMessenger,
  faLine,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.section`
  font-family: "Kanit", sans-serif;
  /* width: 100%; */
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f1f1f1;
  > h2 {
    font-size: 32px;
    margin-bottom: 16px;
    letter-spacing: 1px;
  }
  .content {
    margin-bottom: 32px;
    font-size: 24px;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  .iframe {
    display: flex;
    width: 80%;
    column-gap: 24px;
    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
    }
  }
  .iframe > div:first-of-type {
    width: 60%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .iframe .form {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .iframe .form .location {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
    flex-flow: wrap;
  }
  .iframe .form .location .map,
  .iframe .form .location .phone,
  .iframe .form .location .email {
    display: flex;
    align-items: center;
    column-gap: 8px;
    .icon {
      font-size: 32px;
    }
    /* label {
      margin-left: 8px;
    } */
    a {
      color: #f1f1f1;
      text-decoration: none;
    }
  }
  .iframe .form .contact-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    input {
      margin-bottom: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 0 16px;
      height: 48px;
      outline: none;
    }
    input:last-of-type {
      margin-bottom: 32px;
    }
    input::placeholder {
      color: #ccc;
      letter-spacing: 3px;
    }
    input:disabled {
      cursor: not-allowed;
    }
    button {
      font-weight: bold;
      border: none;
      background-color: #f6c90e;
      margin: 0 0 32px;
      height: 48px;
      transition: background-color 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        font-size: 24px;
      }
      label {
        text-transform: uppercase;
        margin-left: 12px;
      }
    }
    button:hover {
      cursor: pointer;
      color: #000;
      background-color: #ccc;
    }
    button:disabled {
      cursor: not-allowed;
      background-color: #f6c90e;
      color: #00000050;
    }
    button:disabled:hover {
      background-color: #f6c90e;
      color: #00000050;
    }
  }
`;

const Banner = () => {
  return (
    <Container id="contact">
      <h2 className="title">ติดต่อสอบถาม</h2>
      <p className="content">ขอขอบคุณที่ท่านให้ความสนใจในบริการของทางทีมงาน</p>
      <div className="iframe">
        <div className="">
          <iframe
            title="google"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.3350065659392!2d100.0438860148312!3d13.81891129030405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2e5c8b9505f49%3A0x852577f3ce09784f!2sSanam%20Chandra%20Palace!5e0!3m2!1sen!2sth!4v1656933988214!5m2!1sen!2sth"
            width="100%"
            height="450"
            style={{ border: 0, marginBottom: 32 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="form">
          <div className="location">
            <div className="map">
              <div className="icon">
                <FontAwesomeIcon icon={faLine} />
              </div>
              <a href="https://lin.ee/TI17geV" target="_blank" rel="noreferrer">
                projectman-dev.official
                {/* @604rnpk */}
              </a>
            </div>
            <div className="phone">
              <div className="icon">
                <FontAwesomeIcon icon={faFacebookMessenger} />
              </div>
              <a
                href="https://www.facebook.com/projectman.official"
                target="_blank"
                rel="noreferrer"
              >
                projectman.official
              </a>
            </div>
            <div className="email">
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <a href="mailto:user_01@projectman-dev.com">
                user_01@projectman-dev.com
              </a>
            </div>
          </div>
          <div className="contact-form">
            <input placeholder="Name" disabled />
            <input placeholder="Email" disabled />
            <input placeholder="Message" disabled />
            <button type="button" disabled>
              <FontAwesomeIcon icon={faPaperPlane} />
              <label>Send Message</label>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
