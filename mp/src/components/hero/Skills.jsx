import styled from "styled-components";

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
      <h4>Techs</h4>
      <p>
        map img 
        div div linha rosa div quadrado gira div img 
      </p>
    </SkillsContent>
  )
}
