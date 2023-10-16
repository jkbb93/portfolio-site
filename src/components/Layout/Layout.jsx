import SiteContainer from "./SiteContainer";
import SiteHeader from "./SiteHeader";
import MainContent from "./MainContent";
import SiteFooter from "./SiteFooter";

function Layout({ children }) {
  return (
    // <SiteContainer>
    <>
      <SiteHeader />
      <MainContent>{children}</MainContent>
      <SiteFooter />
    </>
    // </SiteContainer>
  );
}

export default Layout;
