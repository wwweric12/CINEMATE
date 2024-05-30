import { DeleteReview } from '../api/reviewFetcher';
import MypageReviewsTemplate from '../components/template/MypageReviewsTemplate';
import { useMyReview } from '../hooks/useMyReivew';

const MypageReviewsPage = () => {
  const { isMyReviewLoading, isMyReviewError, myReviewState } = useMyReview();

  const handleDeleteClick = async (movieId: number) => {
    const res = await DeleteReview(movieId);
    alert(res?.message);
  };

  if (isMyReviewLoading) {
    return <div>Loding...</div>;
  }
  if (!myReviewState) {
    return null;
  }
  return (
    <MypageReviewsTemplate
      myReviewState={myReviewState.data}
      onDeleteClick={handleDeleteClick}
    />
  );
};

export default MypageReviewsPage;
