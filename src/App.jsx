import { useState } from 'react';
import Home from './Components/Fashionhome';
import { About } from './Components/Fashionabout';
import { Contact } from './Components/Fashioncontact';

function App() {
  const [page, setPage] = useState(0);
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');


  const handleFullName = (e) => {
    setFullName(e.target.value);
  }

  const handleEmailAddress = (e) => {
    setEmailAddress(e.target.value);
  }

  const handleMessge = (e) => {
    setMessage(e.target.value);
  }

  const handleAlert = () => {
    window.alert(`Your information has been saved, be hearing from us soon!`)
  }

  const homePage = () => setPage(0);
  const aboutPage = () => setPage(1);
  const contactPage = () => setPage(2);
  

  return (
    <>
      {page === 0 && (
        <Home
          onClickHome={homePage}
          onClickContact={contactPage}
          onClickAbout={aboutPage}
        />
      )}
      {page === 1 && (
        <About
          onClickHome={homePage}
          onClickContact={contactPage}
          onClickAbout={aboutPage}
        />
      )}

      {page === 2 && (
        <Contact
          name={fullName}
          email={emailAddress}
          message={message}
          onChangeName={handleFullName}
          onChangeEmail={handleEmailAddress}
          onChangeMessage={handleMessge}
          onClickHome={homePage}
          onClickContact={contactPage}
          onClickAbout={aboutPage}
          onSubmitDetails={handleAlert}
        />
      )}
    </>
  )
}

export default App
