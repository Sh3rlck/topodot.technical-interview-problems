import { useTheme } from '../context/ThemeContext';

const NAV_ITEMS = ['Overview', 'Reports', 'Settings', 'Help'];

export function Sidebar() {
    // TODO: Apply a theme-aware className to the <aside> element.
    //       Use "p5-sidebar p5-sidebar--light" or "p5-sidebar p5-sidebar--dark"

  return (
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
