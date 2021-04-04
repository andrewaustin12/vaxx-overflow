import styled from 'styled-components'

const StyledDropForm = styled.select`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

/* Wrapper */

width: 312px;
height: 36px;
left: 0px;
right: 0px;
top: 28px;

/* surface/default */

background: #FEFEFE;
/* on/light */

border: 2px solid #C6C6C6;
border-radius: 4px;

font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

display: flex;
align-items: center;

/* on/default */

color: #333333;
padding-left: 12px;

`;

const StyledLabel = styled.label `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
/* label */


height: 24px;
left: 0px;
right: 0px;
top: 0px;

/* body/body III */

font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

display: flex;
align-items: center;

/* on/default */

color: #333333;
`;

const StyledTextDiv = styled.div`
   
   width: 312px;
   height: 88px;
   left: 20px;
   top: 20px;
`;

function options(options) {
  return (options.map((x) => <option>{x}</option>))
}

function DropForm(x) {
  let form = <StyledTextDiv> 
  <StyledLabel>{x.label}</StyledLabel>
  <StyledDropForm placeholder={x.placeholder} type="Text" state="default" >
    {options(x.options)}
    </StyledDropForm>
    </StyledTextDiv>

  return form 
}

export default DropForm;