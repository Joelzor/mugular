import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper style={{ height: "600px" }}>
      <div className="loading"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Loading;
