import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

export default function IssueContent({ content }: { content: string }) {
  return (
    <MarkdownRenderer>
      <ReactMarkdown>{content}</ReactMarkdown>
    </MarkdownRenderer>
  );
}

const MarkdownRenderer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  padding: 50px 0;
  word-break: break-all;
  color: #222;

  line-height: 1.8;
  font-size: 1rem;
  font-weight: 400;

  p {
    padding: 3px 0;
  }

  h1,
  h2,
  h3 {
    margin-bottom: 5x;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 25px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid #000000;
    font-weight: 800;
  }

  ol,
  ul {
    margin-left: 20px;
    padding: 10px 0;
  }

  hr {
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    border-bottom: 0;
    margin: 50px 0;
  }

  a {
    background-color: rgba(0, 0, 0, 0.07);
    color: #222;
    font-weight: 100;
    padding: 0.25rem;
    border-radius: 0.25rem;

    &:hover {
      text-decoration: underline;
    }
  }

  pre[class*='language-'] {
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }

  p code[class='language-text'],
  h1 code[class='language-text'],
  h2 code[class='language-text'],
  li code[class='language-text'],
  h3 code[class='language-text'] {
    // highlight
    border-radius: 0px;
    background-color: #ffffff;
    color: #231900;
    background-image: linear-gradient(transparent 60%, #f8cd07 40%);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    animation: 0.5s linear highlight-animation;
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }

  table {
    border: 1px solid #abb8c3;
    margin: 25px 0;
  }

  th {
    border: 1px solid #abb8c3;
  }

  td {
    border: 1px solid #abb8c3;
    padding-left: 1rem;
  }

  p > .gatsby-resp-image-wrapper {
    margin: 20px 0;
  }

  img {
    margin: 20px 0;
    width: 100%;
  }

  // !: Markdown Responsive Design
  @media (max-width: 768px) {
    width: calc(100% - 40px);
    padding: 50px 20px;
    line-height: 1.6;
    font-size: 1.1em;

    h1 {
      font-size: 28px;
    }

    h2 {
      font-size: 23px;
    }

    h3 {
      font-size: 20px;
    }

    hr {
      margin: 50px 0;
      border-top: 1px solid rgba(0, 0, 0, 0.3);
    }

    table {
      font-size: 1.1rem;
    }

    td {
      padding-left: 0.4rem;
    }

    a {
      padding: 0.15rem;
    }
  }
`;
