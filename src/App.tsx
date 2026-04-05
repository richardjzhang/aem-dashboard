import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useHref,
  useNavigate,
} from 'react-router';
import { Provider } from '@react-spectrum/s2';
import AssetsPage from './components/AssetsPage';

function AppProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <Provider
      locale="en-US"
      colorScheme="light"
      background="base"
      router={{ navigate, useHref }}
    >
      {children}
    </Provider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<AssetsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}
