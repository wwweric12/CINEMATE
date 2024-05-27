import styled from 'styled-components';
import { ChangeEventHandler, useState } from 'react';
import DivideVector from '../atoms/DivideVector';
import ReviewInput from '../molecules/ReviewInput';
import PrimaryButton from '../atoms/PrimaryButton';
import PrimaryModal from '../molecules/PrimaryModal';

interface CreateReviewTemplate {
  review: string;
  setReview: React.Dispatch<React.SetStateAction<string>>;
  onReviewSubmit: () => void;
}

const CreateReviewTemplate = ({
  review,
  setReview,
  onReviewSubmit,
}: CreateReviewTemplate) => {
  const [modalState, setModalState] = useState(false);
  const handleInputChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setReview(e.target.value);
  };

  return (
    <>
      {modalState && (
        <Background>
          <PrimaryModal
            state="check"
            fieldText="리뷰를 작성하시겠습니까?"
            cancelText="뒤로가기"
            checkText="작성하기"
            onCancelClick={() => setModalState(false)}
            onCheckClick={() => {
              onReviewSubmit();
              setModalState(false);
            }}
          />
        </Background>
      )}
      <Layout>
        <ReviewContainer>
          <Text>리뷰 작성하기</Text>
          <DivideVector />
          <ReviewForm>
            <ReviewInput
              maxLength={300}
              onInputChange={handleInputChange}
              value={review}
              length={review.length}
              placeholder="리뷰를 작성해주세요"
            />
            <PrimaryButton
              size="medium"
              type="button"
              onClick={() => setModalState(true)}
              state={!!review}
              enabled={!!review}
            >
              작성하기
            </PrimaryButton>
          </ReviewForm>
        </ReviewContainer>
      </Layout>
    </>
  );
};

export default CreateReviewTemplate;

const Background = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 94px 30px;
`;

const ReviewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const ReviewForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 14px;
  margin-top: 29px;
`;
