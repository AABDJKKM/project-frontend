import Footer from './components/Footer';
import Opportunities from './pages/opportunities';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>Hello Header</header>
      <main className="flex-1">
        <Opportunities />
      </main>
      <Footer />
    </div>
  );
}

export default App;
