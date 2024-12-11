import { useState } from 'react';
import Home from './Components/Fashionhome';
import { About } from './Components/Fashionabout';
import { Contact } from './Components/Fashioncontact';

function App() {
  const [page, setPage] = useState(0);

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
          onClickHome={homePage}
          onClickContact={contactPage}
          onClickAbout={aboutPage}
        />
      )}
    </>
  )
}

export default App
