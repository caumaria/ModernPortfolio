import styled from "styled-components";
import VisuallyHidden from "../VisuallyHidden";

const SkillsContent = styled.div`
  max-width: 360px;
  width: 100%;
  height: 360px;
  border: 1px solid yellow;
  padding: 2rem;

  h4 {
    color: var(--pink);
  }
`;

export default function Skills() {
  return (
    <SkillsContent>
      <VisuallyHidden>
        <p></p>
      </VisuallyHidden>
      <h4>Techs</h4>
      <p>
        map img div div linha rosa div quadrado gira div img
        <div>square
          <img src="" alt="rounded" />
          <div>position</div>
        </div>
      </p>
    </SkillsContent>
  );
}
