import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 5.25rem;
  width: 68.75rem;
  height: 40rem;
  top: 0;
  left: 0;
`;

export const Tittle = styled.span`
  display: flex;
  width: 65.3125rem;
  margin-left: .5625rem;
  padding: 0.925rem 1rem;
  justify-content: space-between;
`;

export const UlContainer = styled.section`
  /* display: flex; */
  width: 68.75rem;
  height: 31rem;
  overflow-y: auto;
  background-color: #f5f4f1;
  border-radius: .375rem;
  box-shadow: .125rem .125rem .20rem .20rem gray;
  `;

export const Ul = styled.ul`
  list-style-type: none;
  /* background-color: #f5f4f1; */
  
`;

export const Li = styled.li`
  display: flex;
  margin: 0.5rem 0;
  padding: 0.925rem 1rem;
  justify-content: space-between;
  border: .0625rem solid gray;
  border-radius: .375rem
  
`;

export const Description = styled.span`
  display: flex;
  width: 15rem;
  text-transform: capitalize;
`;

export const Value = styled.span`
  display: flex;
  width: 10rem;
`;

export const Categories = styled.span`
  display: flex;
  width: 10rem;
  margin-right: 3rem;
`;
