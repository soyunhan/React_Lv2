// src/App.js
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "redux/modules/todos";
import { changeTodo } from "redux/modules/todos";
import { Link } from "react-router-dom";


const List = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);
    console.log(todos);
    const [openToggle, setOpenToggle] = useState(false);
  
    useEffect(() => {
        setOpenToggle(false);
    }, []);
  
    const onDeleteHandler = (id) => {
      dispatch(deleteTodo(id));
    };
  
    const onChangeHandler = (id) => {
      dispatch(changeTodo(Number(id)));
    };
  
  
    return (
      <StListContainer>
        <h2>Working.. 🔥</h2>
        <StListWrapper>
          {todos.map((item) => {
            if (item.isDone === false) {
              return (
                <StTodoContainer key={item.id}>
                    <StLink>
                      <Link
                        to={`/${item.id}`}
                        key={item.id}
                      >
                        {" "}
                        상세보기{" "}
                      </Link>
                      <h2>{item.title}</h2>
                      <div>{item.content}</div>
                    </StLink>
                    <StDialogFooter>
                      <StButton onClick={() => onDeleteHandler(item.id)}>
                        삭제
                      </StButton>
                      <StButton onClick={() => onChangeHandler(item.id)}>
                        완료
                      </StButton>
                    </StDialogFooter>
                </StTodoContainer>
              );
            }
          })}
        </StListWrapper>
         <h2 className="list-title">Done..! 🎉</h2>
        <StListWrapper>
          {todos.map((item) => {
            if (item.isDone === true) {
              return (
                <StTodoContainer key={item.id}>
                  <div>
                    <StLink>
                      <Link
                        to={`/${item.id}`}
                        key={item.id}
                      >
                        {" "}
                        상세보기{" "}
                      </Link>
                      <h2>{item.title}</h2>
                      <div>{item.content}</div>
                    </StLink>
                    <StDialogFooter>
                      <StButton onClick={() => onDeleteHandler(item.id)}>
                        삭제
                      </StButton>
                      <StButton onClick={() => onChangeHandler(item.id)}>
                        취소
                      </StButton>
                    </StDialogFooter>
                  </div>
                </StTodoContainer>
              );
            }
          })}
        </StListWrapper>
      </StListContainer>
    );
};
  

export default List;




const StListContainer = styled.div`
  padding: 0 24px;
`;

const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const StTodoContainer = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;

const StLink = styled(Link)`
  text-decoration: none;
`;

const StDialogFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;