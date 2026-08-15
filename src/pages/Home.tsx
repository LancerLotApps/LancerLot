import Hero from './Hero';
import AppsPage from './AppsPage';

function Home() {
  return (
    <>
      <Hero/>
      <div id='games' style={{paddingTop: 32, scrollMarginTop: 24, backgroundColor: '#ffffff'}}>
        <AppsPage/>
      </div>
    </>
  );
}

export default Home;
