import "./styles/App.css";
import "./styles/Header.css";
import "./styles/LeftMenu.css";
import "./styles/EmailToolbar.css";
import "./styles/Title.css";
import "./styles/EmailContent.css";
import "./styles/EmailInfo.css";
import "./styles/EmailAction.css";
import "./styles/WriteEmail.css";

import flaticonWelcomeImage from "./assets/images/flaticon-welcome-image.png";
import backArrow from "./assets/icons/back-arrow.png";
import downloadButton from "./assets/icons/download-button.png";
import rateStarButton from "./assets/icons/rate-star-button.png";
import rubbishButton from "./assets/icons/rubbish-bin-delete-button.png";

import Header from "./Header";
import Nav from "./Nav";
import EmailPage from "./EmailPage";
import EmailTitle from "./EmailTitle";
import EmailInfo from "./EmailInfo";
import DateInfo from "./DateInfo";
import EmailActions from "./EmailActions";
import WriteEmail from "./WriteEmail";

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <main className="email-view">
        <nav className="email-toolbar">
          <ul>
            <li>
              <img className="icon" src={backArrow} alt="reply button" />
            </li>
            <li>
              <img className="icon" src={downloadButton} alt="archive button" />
            </li>
            <li>
              <img className="icon" src={rubbishButton} alt="delete button" />
            </li>
          </ul>
          <div className="space"></div>
          <EmailPage />
        </nav>
        <article className="email-content">
          <EmailTitle/>
          <header className="email-content--header">
            <div className="avatar"></div>
            <EmailInfo />
            <DateInfo />
            <div className="email-action-icons">
              <ul>
                <li>
                  <img className="icon" src={backArrow} alt="reply button" />
                </li>
                <li>
                  <img
                    className="icon"
                    src={rateStarButton}
                    alt="star button"
                  />
                </li>
                <li>
                  <img
                    className="icon"
                    src={rubbishButton}
                    alt="delete button"
                  />
                </li>
              </ul>
            </div>
          </header>
          <section className="email-body">
            <div className="content">
              <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
            </div>
          </section>
          <EmailActions />
          <WriteEmail/>
        </article>
      </main>
    </div>
  );
}

export default App;
