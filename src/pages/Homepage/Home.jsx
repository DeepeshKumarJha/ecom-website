import Header from "./Sections/Header";
import SectionFive from "./Sections/SectionFive";
import SectionFour from "./Sections/SectionFour";
import SectionOne from "./Sections/SectionOne";
import SectionThree from "./Sections/SectionThree";
import SectionTwo from "./Sections/SectionTwo";

export default function Home() {
  return (
    <div>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  );
}
