import "./styles/App.css";
import "./styles/Header.css";
import "./styles/LeftMenu.css";
import "./styles/EmailToolbar.css";
import "./styles/Title.css";
import "./styles/EmailContent.css";
import "./styles/EmailInfo.css";
import "./styles/EmailAction.css";
import "./styles/WriteEmail.css";

import Header from "./Header";
import Nav from "./Nav";
import EmailContent from "./EmailContent";
import EmailToolbar from "./EmailToolbar";

function App() {
  return (
    <div className="app">
      <Header/>
      <Nav/>
      <main className="email-view">
      <EmailToolbar />
        <EmailContent/>
      </main>
    </div>
  );
}
export default App;
