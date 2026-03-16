import { useTheme } from '../context/ThemeContext';

const NAV_ITEMS = ['Overview', 'Reports', 'Settings', 'Help'];

export function Sidebar() {
  // TODO: Call useTheme() and destructure `theme`.

  return (
    // TODO: Apply a theme-aware className to the <aside> element.
    //       Use "p5-sidebar p5-sidebar--light" when theme is 'light',
    //       and  "p5-sidebar p5-sidebar--dark"  when theme is 'dark'.
    <aside className="p5-sidebar">
      <ul className="p5-sidebar-nav">
        {NAV_ITEMS.map((item) => (
          <li key={item} className="p5-sidebar-nav-item">
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
