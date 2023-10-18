import { Section, SectionHeading, CodeExample } from "../shared";

const code = `class Jake {
  constructor() {
    this.name = "Jake"
    this.role = "Developer"
    this.skills = ["Frontend", "Backend"];
  }
}`;

function AboutSection() {
  return (
    <Section id="about">
      <SectionHeading>Full Stack Developer</SectionHeading>
      <CodeExample code={code} withHeader={false} />
    </Section>
  );
}

export default AboutSection;
