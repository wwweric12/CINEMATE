import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { PostReview, PutReview } from '../api/reviewFetcher';
import CreateReviewTemplate from '../components/template/CreateReviewTemplate';

const CreateReviewPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState('');
  const movieId = params.id || '';
  const { state } = useLocation();

  const handleReviewSubmit = async () => {
    if (state === 'update') {
      await PutReview({ movieId, content: review });
      navigate(-1);
    } else {
      const res = await PostReview({ movieId, content: review });
      navigate(`/movies/${movieId}`);
    }
  };

  return (
    <CreateReviewTemplate
      state={state}
      review={review}
      setReview={setReview}
      onReviewSubmit={handleReviewSubmit}
    />
  );
};

export default CreateReviewPage;
