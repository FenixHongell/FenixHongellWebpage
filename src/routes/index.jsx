import { Title } from "solid-start";
import "../styles/index.css";
export default function Home() {
  return (
    <main>
      <Title>Fenix Hongell</Title>
      <div className="Container" >
          <div className="HeaderContainer" >
              <p>Hello, my name is <span className="Highlight" >Fenix</span> </p>
          </div>
          <div className="HeaderSideContainer" >

          </div>
      </div>
    </main>
  );
}
