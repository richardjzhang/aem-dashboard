import AppShell from './components/AppShell';
import WelcomeSection from './components/WelcomeSection';
import RecentsTable from './components/RecentsTable';
import ProductAnnouncements from './components/ProductAnnouncements';
import PenTestBanner from './components/PenTestBanner';
import AuthoringEnvironments from './components/AuthoringEnvironments';

export default function Dashboard() {
  return (
    <AppShell>
      <WelcomeSection />
      <div className="dashboard-two-column">
        <RecentsTable />
        <ProductAnnouncements />
      </div>
      <PenTestBanner />
      <AuthoringEnvironments />
    </AppShell>
  );
}
