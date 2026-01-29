import { Route, Routes } from 'react-router';
import Dashboard from './components/Dashboard/Dashboard';
import { Layout } from './components/Layout/Layout';
import { Board } from './components/Board/Board';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/kanban" element={<Board />} />
      </Routes>
    </Layout>
  );
}
