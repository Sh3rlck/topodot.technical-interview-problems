import { ThemeProvider } from './context/ThemeContext';
import { NotificationProvider } from './context/NotificationContext';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { FeaturePanel } from './components/FeaturePanel';
import { NotificationBar } from './components/NotificationBar';
import './ThemedApp.css';

function AppLayout() {
  return (
    <div className="p5-app-layout">
      <Header />
      <div className="p5-app-body">
        <Sidebar />
        <FeaturePanel />
        <NotificationBar />
      </div>
    </div>
  );
}

// TODO: Wrap <AppLayout> with both context providers so every component
//       in the tree can access theme and notification state.
//
//       Provider order: ThemeProvider on the outside, NotificationProvider inside.
//
//       Expected structure:
//         <ThemeProvider>
//           <NotificationProvider>
//             <AppLayout />
//           </NotificationProvider>
//         </ThemeProvider>

export function ThemedApp() {
  return <AppLayout />;
}
