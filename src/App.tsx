import { Route, Routes } from 'react-router';
import Dashboard from './components/Dashboard/Dashboard';
import { Layout } from './components/Layout/Layout';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
}
