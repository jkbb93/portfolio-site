import SiteHeader from "./SiteHeader";
import MainContent from "./MainContent";
import SiteFooter from "./SiteFooter";

function Layout({ children }) {
  return (
    <>
      <SiteHeader />
      <MainContent>{children}</MainContent>
      <SiteFooter />
    </>
  );
}

export default Layout;
