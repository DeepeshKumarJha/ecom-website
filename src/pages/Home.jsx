import Header from "../components/Header/header";
import SectionFive from "../components/Homepage/sectionFive";
import SectionFour from "../components/Homepage/sectionFour";
import SectionOne from "../components/Homepage/sectionOne";
import SectionThree from "../components/Homepage/sectionThree";
import SectionTwo from "../components/Homepage/sectionTwo";

export default function Home() {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </>
  );
}
