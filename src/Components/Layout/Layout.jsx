import { Outlet } from "react-router-dom";
import  Header  from "../Header/Header";
import { Section, Сontainer } from "./Layout.styled";

export default function Layout() {
 
  return (
    <>
      <Header />
      <Section>
        <Сontainer>
          <Outlet />
        </Сontainer>
      </Section>
    </>
  );
}
