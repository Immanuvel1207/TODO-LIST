import React, { useEffect } from 'react';

function ThemeSwitcher() {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, []);

  const themes = [
    "cupcake", "dark", "light", "bumblebee", "synthwave", "halloween",
    "fantasy", "dracula", "aqua", "luxury", "night"
  ];

  const setTheme = (themeName) => {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('theme', themeName);
  };

  return (
    <div className="theme-switcher">
      <div className="dropdown dropdown-left">
        <label tabIndex="0" className="btn m-1">
          <i className='bx bxs-palette bx-sm'></i>
        </label>
        <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          {themes.map(theme => (
            <li key={theme} className="theme-item" onClick={() => setTheme(theme)}>
              <a>{theme}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ThemeSwitcher;