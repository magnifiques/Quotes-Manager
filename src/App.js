import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDetails from './pages/QuoteDetails';
import NewQuote from './pages/NewQuote';
import NoMatch from './pages/NoMatch';
import Layout from './components/layout/Layout';



function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate to="quotes" />}/>
        <Route path='/quotes' element={<AllQuotes />}/>
        <Route path='/quotes/:quoteId/*' element={<><QuoteDetails /> <Outlet /></>}/>
        <Route path='/new-quote' element={<NewQuote />}/>
        <Route path="*" element={<NoMatch />} />
        <Route />
    </Routes>
    </Layout>
  );
}

export default App;
