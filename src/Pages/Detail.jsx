import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { goDetail } from "redux/modules/todos";



const Detail = () => {
    const selTodo = useSelector((state) => state.todos.todo);
    console.log(selTodo);
    const { id } = useParams();
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(goDetail(Number(id)));
    }, [dispatch, id]);
  
    return (
      <StContainer>
        <StDialog>
          <div>
            <StDialogHeader>
              <div>ID : {selTodo.id}</div>
              <Link to='/'>
                <p>이전으로</p>
              </Link>
            </StDialogHeader>
            <StTitle>{selTodo.title}</StTitle>
            <StBody>{selTodo.content}</StBody>
          </div>
        </StDialog>
      </StContainer>
    );
  };
  
export default Detail;



const StContainer = styled.div`
border: 2px solid #eee;
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;

const StDialog = styled.div`
width: 600px;
height: 400px;
border: 1px solid #eee;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const StDialogHeader = styled.div`
display: flex;
height: 80px;
justify-content: space-between;
padding: 0 24px;
align-items: center;
`;

const StTitle = styled.h1`
padding: 0 24px;
`;

const StBody = styled.main`
padding: 0 24px;
`;


const StButton = styled.button`
border: 1px solid ${({ borderColor }) => borderColor};
height: 40px;
width: 120px;
background-color: #fff;
border-radius: 12px;
cursor: pointer;
`;
