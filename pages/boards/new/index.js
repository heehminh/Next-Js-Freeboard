import React from "react";
import * as S from "./index.style.js";
import { useForm } from "react-hook-form";

const New = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    alert("게시글이 등록되었습니다.");
  };

  return (
    <S.Wrapper>
      <S.MainTitle>게시물 등록</S.MainTitle>
      <S.InputBox>
        <S.Box>
          <S.Label>작성자</S.Label>
          <S.Input
            type="text"
            placeholder="이름을 적어주세요."
            {...register("writer", { required: true })}
          />
          {errors && errors.writer && (
            <S.ErrorMsg>이름을 입력해주세요.</S.ErrorMsg>
          )}
        </S.Box>
        <S.Box>
          <S.Label>비밀번호</S.Label>
          <S.Input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...register("password", { required: true })}
          />
          {errors && errors.password && (
            <S.ErrorMsg>비밀번호를 입력해주세요.</S.ErrorMsg>
          )}
        </S.Box>
      </S.InputBox>
      <S.Box>
        <S.Label>제목</S.Label>
        <S.Input
          type="text"
          placeholder="제목을 작성해주세요."
          {...register("title", { required: true })}
        />
        {errors && errors.title && (
          <S.ErrorMsg>제목을 입력해주세요.</S.ErrorMsg>
        )}
      </S.Box>
      <S.Box>
        <S.Label>내용</S.Label>
        <S.TextArea
          placeholder="내용을 작성해주세요."
          {...register("content", { required: true })}
        />
        {errors && errors.content && (
          <S.ErrorMsg>내용을 작성해주세요.</S.ErrorMsg>
        )}
      </S.Box>
      <S.Box>
        <S.Label>주소</S.Label>
        <div>
          <S.PostInput type="text" placeholder="07250" />
          <S.PostButton>우편번호 검색</S.PostButton>
        </div>
        <S.AddressInput type="text" />
        <S.AddressInput type="text" />
      </S.Box>
      <S.Box>
        <S.Label>유튜브</S.Label>
        <S.Input type="text" placeholder="링크를 복사해주세요." />
      </S.Box>
      <S.Box>
        <S.Label>사진 첨부</S.Label>
        <S.PicBox>
          <S.PicButton>
            <S.PicButtonPlus>+</S.PicButtonPlus>
            <S.PicButtonText>Upload</S.PicButtonText>
          </S.PicButton>
          <S.PicButton>
            <S.PicButtonPlus>+</S.PicButtonPlus>
            <S.PicButtonText>Upload</S.PicButtonText>
          </S.PicButton>
          <S.PicButton>
            <S.PicButtonPlus>+</S.PicButtonPlus>
            <S.PicButtonText>Upload</S.PicButtonText>
          </S.PicButton>
        </S.PicBox>
      </S.Box>
      <S.Box>
        <S.Label>메인 설정</S.Label>
        <S.RadioInput
          type="radio"
          id="youtube"
          name="main"
          value="유튜브"
          checked
        />
        <S.RadioLabel for="youtube">유튜브</S.RadioLabel>
        <S.RadioInput type="radio" id="pic" name="main" value="사진" />
        <S.RadioLabel for="pic">사진</S.RadioLabel>
      </S.Box>
      <S.SubmitButton onClick={handleSubmit(onSubmit)}>등록하기</S.SubmitButton>
    </S.Wrapper>
  );
};

export default New;
