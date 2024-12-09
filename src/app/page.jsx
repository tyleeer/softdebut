import "./page.module.css";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="d-flex flex-column gap-2 py-2">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
