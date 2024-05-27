import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { PostReview } from '../api/reviewFetcher';
import CreateReviewTemplate from '../components/template/CreateReviewTemplate';

const CreateReviewPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState('');
  const movieId = params.id || '';

  const handleReviewSubmit = async () => {
    const res = await PostReview({ movieId, content: review });
    navigate(`/movies/${movieId}`);
  };

  return (
    <CreateReviewTemplate
      review={review}
      setReview={setReview}
      onReviewSubmit={handleReviewSubmit}
    />
  );
};

export default CreateReviewPage;
