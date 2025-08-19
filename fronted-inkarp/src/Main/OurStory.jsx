import { Helmet } from "react-helmet";
import TeamIntro from "../components/pages/OurStory/TeamIntro";
import TrustedClients from "../components/pages/OurStory/TrustedClients";
import Building from '/InkarpBuilding.jpg';
import Team from "../components/pages/OurStory/Team";
import SubTeam from "../components/pages/OurStory/SubTeam";
import TeamNew from "../components/pages/OurStory/TeamNew";
import MissionVision from "../components/pages/OurStory/MissionVision";
import ClientsNew from "../components/pages/OurStory/ClientsNew";
import TeamNewTwo from "../components/pages/OurStory/TeamNewTwo";
import InkarpBio from "../components/pages/OurStory/InkarpBio";
import InkarpAbout from "../components/pages/OurStory/InkarpAbout";

const OurStory = () => {
  return (
    <>
      <Helmet>
        <title>Our Story - Inkarp Instruments Private Ltd</title>
        <meta name="keywords" content='default, keywords' />
        <meta name="description" content="Discover Inkarp Instruments Pvt Ltd. Learn about our mission, values, and commitment to quality. Explore our journey in the industry. About Us!" />
      </Helmet>

      {/* Section without background - Mission and Clients */}
      <div className="relative">
        <MissionVision />
        <InkarpAbout />
        <InkarpBio />
        {/* <ClientsNew /> */}
        <TrustedClients />
      </div>
      {/* Section with background image - Team sections */}
      <div
        className="bg-fixed bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${Building})`,
        }}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 "></div>
        {/* Content with background */}
        <div className="relative z-10">
          <Team />
          <TeamIntro />
          {/* <TeamNew /> */}
          <TeamNewTwo />
          <SubTeam />
        </div>
      </div>
    </>
  );
};

export default OurStory;