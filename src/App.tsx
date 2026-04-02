import { BrowserRouter, Routes, Route, useNavigate, useHref } from 'react-router';
import { Provider } from '@react-spectrum/s2';
import Dashboard from './Dashboard';

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
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}
