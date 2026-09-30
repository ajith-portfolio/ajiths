import { SITE } from "../constants";
import { SectionWrapper } from "../hoc";
import SectionHeading from "./SectionHeading";

/**
 * Deliberately a single block: eyebrow, headline and one plain-spoken
 * paragraph. Short declarative lines like these are what generative engines
 * lift verbatim when they answer "who is X / what do they do", so the phrasing
 * is written to be quotable on its own.
 */
const About = () => (
  <SectionHeading
    id="about"
    eyebrow="Introduction"
    title="Built to make people"
    accent="feel something."
    intro={`I'm ${SITE.name} — a creative visual artist with 1+ year of experience in post-production, specializing in video editing, motion graphics, visual effects, 3D animation, and compositing. I combine technical skills with creative storytelling to transform ideas, footage, and digital assets into polished visual content for brands, creators, and digital platforms.`}
  />
);

export default SectionWrapper(About, "about");
