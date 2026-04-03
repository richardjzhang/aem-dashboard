import { style } from '@react-spectrum/s2/style' with { type: 'macro' };
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import WelcomeSection from './components/WelcomeSection';
import RecentsTable from './components/RecentsTable';
import ProductAnnouncements from './components/ProductAnnouncements';
import PenTestBanner from './components/PenTestBanner';
import AuthoringEnvironments from './components/AuthoringEnvironments';

const shellStyle = style({
  display: 'flex',
  height: 'screen',
  width: 'full',
  overflow: 'hidden',
});

const mainColumnStyle = style({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  overflow: 'hidden',
});

/** Main column gutter; keep in sync with TopBar `paddingX`. */
const contentAreaStyle = style({
  flexGrow: 1,
  overflow: 'auto',
  padding: 32,
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
});

const twoColumnStyle = style({
  display: 'grid',
  gap: 32,
});

export default function Dashboard() {
  return (
    <div className={shellStyle} style={{ backgroundColor: '#f5f5f5' }}>
      <Sidebar />
      <div className={mainColumnStyle}>
        <TopBar />
        <main className={contentAreaStyle}>
          <WelcomeSection />
          <div
            className={twoColumnStyle}
            style={{ gridTemplateColumns: '1fr 1fr' }}
          >
            <RecentsTable />
            <ProductAnnouncements />
          </div>
          <PenTestBanner />
          <AuthoringEnvironments />
        </main>
      </div>
    </div>
  );
}
