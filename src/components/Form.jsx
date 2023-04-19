// src/App.js
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "redux/modules/todos";

const Form = () => {
    const [todo, setTodo] = useState("");
    
    const dispatch = useDispatch();
  
    const onChangeHandler = (e) => {
      const { name, value } = e.target;
      setTodo({
        ...todo,
        id: Date.now(),
        isDone: false,
        [name]: value,
      });
    };
  
    const onSubmitHandler = (event) => {
      event.preventDefault();
  
      // 양식 미작성 시, alert 표시
      if (!todo.title || !todo.content) {
        alert("양식을 작성하여 제출하십시오.");
        return;
      }
  
      // 할 일 추가
      dispatch(addTodo(todo));
  
      // submit 후 빈칸 유지를 위해 공객체 생성
      setTodo({
        id: "",
        title: "",
        content: "",
        isDone: false,
      });
    };
  
    return (
      <StAddForm>
      <StInputGroup>
        <StFormLabel>제목</StFormLabel>
        <StAddInput
          key="title" // key prop 추가
          type="text"
          name="title"
          value={todo.title || ""}
          onChange={onChangeHandler}
        />
        <StAddInput
          key= "content" // key prop 추가
          value={todo.content || ""}
          type="text"
          name="content"
          onChange={onChangeHandler}
        />
      </StInputGroup>
        <StAddButton onClick={onSubmitHandler}>추가</StAddButton>
        </StAddForm>
    );
  };



export default Form;



const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;
