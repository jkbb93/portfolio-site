import { CodeExample } from "../shared";
import dummyCode from "./dummyCode";

function Article() {
  return (
    <article>
      <CodeExample language="javascript" fileName={dummyCode.fileName}>
        {dummyCode.code}
      </CodeExample>
    </article>
  );
}

export default Article;
