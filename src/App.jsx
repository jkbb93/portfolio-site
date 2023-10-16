import { DarkModeProvider } from "./features/darkMode";
import Layout from "./components/Layout";
import ArticlePage from "./pages";
import "./styles.css";
import { ScrollToLink } from "./components/shared";

function App() {
  return (
    <DarkModeProvider>
      <Layout>
        <ArticlePage />
        <div
          style={{
            height: "2000px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <ScrollToLink to="header">
          <h1 id="hehe">Hehe</h1>
          </ScrollToLink>
        </div>
      </Layout>
    </DarkModeProvider>
  );
}

export default App;
