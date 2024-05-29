import MypageTemplate from '../components/template/MypageTemplate';
import { useMypage } from '../hooks/useMypage';

const Mypage = () => {
  const { isMyPageLoading, isMyPageError, myPageState } = useMypage();

  if (isMyPageLoading) {
    return <div>Loding...</div>;
  }
  if (!myPageState) {
    return null;
  }
  return <MypageTemplate myPageData={myPageState.data} />;
};

export default Mypage;
