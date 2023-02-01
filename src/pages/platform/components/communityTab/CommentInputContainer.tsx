import React, { useState } from 'react';
import styled from '@emotion/styled';
import SubmitButton from '../../../../components/svgs/SubmitButton';
import {body4} from '@trevari/typo';
import {contents2} from '@trevari/typo';



const CommentInputContainer = () => {
  const [isActivatedTextArea, setIsActivatedTextArea] = useState(false);
  const [changeInputHeight,setChangeInputHeight] = useState({height: '72px'})
  const [newContent, setNewContent] = useState('')

  const clickEventHandler:() => void = () => {
    setIsActivatedTextArea(true)
    setChangeInputHeight({height: '150px'})
  }

  const getNewContent:(e:React.FormEvent<HTMLTextAreaElement>) => void = (e) => {
    setNewContent(e.currentTarget.value)
  }
  const submitContentHandler:() => void = () => {
      // fetch('/data/platformTitle.json', {
      //   method: 'POST',
      //   headers: {
      //     authorization: localStorage.getItem('token'),
      //     'VodContent-Type': 'application/json',
      //   },
      // })
      //   .then(res => res.json())
      //   .then(data => {
      //     // setContents(data);
      //   });
    console.log(newContent)
  }



  return (
      <InputBox style={changeInputHeight}>
        <InputText placeholder='자유롭게 생각을 공유해 보세요.' required={true} rows={4} onFocus={clickEventHandler} onChange={getNewContent}/>
        <ButtonBox onClick={submitContentHandler}>
          {!isActivatedTextArea? (
              <SubmitButton/>
            ):
            (
              <SubmitButton circleColor='#FF7900' arrowColor='#FFFFFF'/>
            )
          }
        </ButtonBox>
      </InputBox>
  )
}

export default CommentInputContainer

const InputBox = styled.div`
  width: 100%;
  height: 72px;
  
  display: flex;
  justify-content: space-between;
  
  padding: 20px;
  background: #222222;
`

const InputText = styled.textarea`

  justify-content: flex-start;

  width: 100%;
  height: 100%;

  background: #222222;
  
  ::placeholder {
    width: 78%;
    ${body4};
    
    background: #222222;
    color: #6E6E6C;
  }

  :focus{
    outline: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

{
  -ms-overflow-style: none;
  scrollbar-width: none;
}

  display: inline-block;

  vertical-align: top;

  border: none;
  resize: none;

  ${contents2};
  color: #FFFFFF;
`

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`
