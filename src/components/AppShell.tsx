import { style } from '@react-spectrum/s2/style' with { type: 'macro' };
import Sidebar from './Sidebar';
import TopBar from './TopBar';

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
  minWidth: 0,
});

const contentAreaStyle = style({
  flexGrow: 1,
  overflow: 'auto',
  padding: 24,
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  minWidth: 0,
});

type AppShellProps = {
  children: React.ReactNode;
  contentClassName?: string;
};

export default function AppShell({ children, contentClassName = '' }: AppShellProps) {
  const mainContentClassName = contentClassName
    ? `${contentAreaStyle} ${contentClassName}`
    : contentAreaStyle;

  return (
    <div className={`${shellStyle} app-shell-bg`}>
      <Sidebar />
      <div className={mainColumnStyle}>
        <TopBar />
        <main className={`${mainContentClassName} app-main-content`}>{children}</main>
      </div>
    </div>
  );
}