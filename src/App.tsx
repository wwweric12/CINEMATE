import MypageButton from './components/Button/MypageButton';

function App() {
  return (
    <>
      <MypageButton
        count={1}
        onClick={() => console.log(1)}
        content="asd"
      ></MypageButton>
    </>
  );
}

export default App;
