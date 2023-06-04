import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 60px 100px 100px 100px;
  width: 1200px;
  height: 1847px;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const MainTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  text-align: center;
  color: #000000;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  & > div:not(:last-child) {
    margin-right: 24px;
  }
`;

export const Box = styled.div`
  width: 100%;
`;

export const Label = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 0px 14px 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 480px;
  padding: 14px 0px 14px 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const PostInput = styled.input`
  width: 77px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;
`;

export const PostButton = styled.button`
  width: 124px;
  padding: 14px 16px;
  background: #000000;
  border: 1px solid #000000;
  color: #ffffff;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-left: 16px;
`;

export const AddressInput = styled(Input)`
  margin: 16px 0px;
`;

export const PicBox = styled(Box)`
  display: flex;
  flex-direction: row;
`;

export const PicButton = styled.div`
  width: 78px;
  height: 78px;
  background: #bdbdbd;
  border: none;
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PicButtonPlus = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 18px;
  color: #4f4f4f;
`;

export const PicButtonText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #4f4f4f;
`;

export const RadioInput = styled.input`
  width: 20px;
  height: 20px;
`;

export const RadioLabel = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin: 0px 22px 0px 10px;
`;

export const SubmitButton = styled.button`
  padding: 14px 60px;
  gap: 8px;
  width: 179px;
  height: 52px;
  background: #ffd600;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  border: none;
`;

export const ErrorMsg = styled.div`
  margin: 5px 0px 0px 5px;
  color: red;
`;
