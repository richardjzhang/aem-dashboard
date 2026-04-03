import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useHref,
  useNavigate,
} from 'react-router';
import { Provider } from '@react-spectrum/s2';
import Dashboard from './Dashboard';
import DemoRoutePage from './components/DemoRoutePage';

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
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/programs/:slug"
            element={
              <DemoRoutePage
                sectionLabel="Program"
                description="This is a lightweight detail route used to make the interview demo navigation feel intentional."
              />
            }
          />
          <Route
            path="/pipelines/:slug"
            element={
              <DemoRoutePage
                sectionLabel="Pipeline execution"
                description="This stub page stands in for a pipeline detail experience without adding extra implementation noise to the demo."
              />
            }
          />
          <Route
            path="/announcements/:slug"
            element={
              <DemoRoutePage
                sectionLabel="Announcement"
                description="This route gives the product announcement CTA a deliberate destination while keeping the repo focused on the dashboard demo."
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}
