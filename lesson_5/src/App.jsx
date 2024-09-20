import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as React from 'react';

const headerTitle = [{ title: "Context", link: "/" }, { title: "HOC", link: "/hoc" }, { title: "Toggle Theme", link: "/toggle-theme" }];

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [setIsLoading]);

  return (
    <BrowserRouter>
      <Header title={headerTitle} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hoc" element={<Main isLoading={isLoading} />} />
        <Route path="/toggle-theme" element={<ThemeSwitcher />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App