import { styled } from 'styled-components';
// import { ReactNode } from 'react';
// TODO: type:  list, detail

export default function IssueInfo(props: any) {
  const { type = 'list', children, ...rest } = props;
  const formatDate = () => {
    const dateObj = new Date(props.date);
    return `${dateObj.getFullYear()}월 ${dateObj.getMonth()}월 ${dateObj.getDate()}일`;
  };
  return (
    <Wrapper type={type}>
      <div>
        <Title>
          #{props.issueNumber} {props.title}
        </Title>
        <SubTitle>
          작성자: {props.author}, 작성일: {formatDate()}
        </SubTitle>
      </div>
      <Comment>코멘트: {props.comments}</Comment>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ type: string }>`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: ${({ type }) => (type === 'list' ? '1px solid #c3c3c3' : '0')};

  &:hover {
    box-shadow: ${({ type }) =>
      type === 'list' ? '0 0 10px rgba(0, 0, 0, 0.3)' : 'none'};
    cursor: ${({ type }) => (type === 'list' ? 'pointer' : 'unset')};
  }

  & > img {
    margin: 0 auto;
  }

  & > div {
    width: 75%;
  }
`;

const Comment = styled.p`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 0.85rem;
  width: 25%;
`;

const Title = styled.p`
  padding: 5px 10px;
  line-height: 20px;
`;

const SubTitle = styled.p`
  padding: 5px 10px;
  font-size: 0.9rem;
`;