import { useTheme } from '../context/ThemeContext';
import { useNotifications } from '../context/NotificationContext';
import type {NotificationType} from "../types/app.types.ts";

interface FeatureCardProps {
  title: string;
  description: string;
  notificationMessage: string;
  notificationType: NotificationType;
}

function FeatureCard({ title, description, notificationMessage, notificationType }: FeatureCardProps) {
  // TODO: Implement add notification

  return (
    <div className="p5-feature-card">
      <h4>{title}</h4>
      <p>{description}</p>
      <button className={`p5-btn-feature p5-btn-feature--${notificationType}`}>
        Trigger
      </button>
    </div>
  );
}

export function FeaturePanel() {
     // TODO: Apply a theme-aware className to the <main> element:=
    // Use "p5-feature-panel--light" or "p5-feature-panel--dark".

  return (
    <main className="p5-feature-panel">
      <h3>Features</h3>
      <div className="p5-feature-grid">
        <FeatureCard
          title="Deployment"
          description="Trigger a new production deployment."
          notificationMessage="Deployment started successfully."
          notificationType="success"
        />
        <FeatureCard
          title="Scheduled Maintenance"
          description="Schedule the next maintenance window."
          notificationMessage="Maintenance window scheduled for tonight at 02:00."
          notificationType="warning"
        />
        <FeatureCard
          title="Report Generation"
          description="Generate the latest analytics report."
          notificationMessage="Report generation failed. Please retry."
          notificationType="error"
        />
        <FeatureCard
          title="Sync Data"
          description="Pull the latest records from the data warehouse."
          notificationMessage="Data sync initiated."
          notificationType="info"
        />
      </div>
    </main>
  );
}
