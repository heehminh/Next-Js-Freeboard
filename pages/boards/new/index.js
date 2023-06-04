import React, { useState } from "react";
import * as S from "./index.style.js";

const New = () => {
  // 1. 정상적으로 다 입력돼있으면 게시글이 등록되었습니다.
  // 2. 빈칸이면 제목을 입력해주세요. + 다시 입력하면 에러내용 제거

  const [writer, setWriter] = useState(""); // 작성자
  const [password, setPassword] = useState(""); // 비밀번호
  const [title, setTitle] = useState(""); // 제목
  const [content, setContent] = useState(""); // 내용

  const [writerError, setWriterError] = useState(""); // 작성자
  const [passwordError, setPasswordError] = useState(""); // 비밀번호
  const [titleError, setTitleError] = useState(""); // 제목
  const [contentError, setContentError] = useState(""); // 내용

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
    if (e.target.value != "") {
      setWriterError("");
    }
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value != "") {
      setPasswordError("");
    }
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    if (e.target.value != "") {
      setTitleError("");
    }
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
    if (e.target.value != "") {
      setContentError("");
    }
  };

  const handleSubmit = () => {
    if (!writer) {
      setWriterError("이름을 입력해주세요.");
    }

    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }

    if (!title) {
      setTitleError("제목을 입력해주세요.");
    }

    if (!content) {
      setContentError("내용을 입력해주세요.");
    }

    if (writer && password && title && content) {
      alert("게시글이 등록되었습니다.");
    }
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
            onChange={onChangeWriter}
          />
          <S.ErrorMsg>{writerError}</S.ErrorMsg>
        </S.Box>
        <S.Box>
          <S.Label>비밀번호</S.Label>
          <S.Input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={onChangePassword}
          />
          <S.ErrorMsg>{passwordError}</S.ErrorMsg>
        </S.Box>
      </S.InputBox>
      <S.Box>
        <S.Label>제목</S.Label>
        <S.Input
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={onChangeTitle}
        />
        <S.ErrorMsg>{titleError}</S.ErrorMsg>
      </S.Box>
      <S.Box>
        <S.Label>내용</S.Label>
        <S.TextArea
          placeholder="내용을 작성해주세요."
          onChange={onChangeContent}
        />
        <S.ErrorMsg>{contentError}</S.ErrorMsg>
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
      <S.SubmitButton onClick={handleSubmit}>등록하기</S.SubmitButton>
    </S.Wrapper>
  );
};

export default New;
