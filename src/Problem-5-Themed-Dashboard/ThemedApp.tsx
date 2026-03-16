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

//Todo: Implement ThemeProvider and NotificationProvider

export function ThemedApp() {
  return (
      <AppLayout />
  )
}
