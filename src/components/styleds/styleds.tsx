import styled from "styled-components"

export const Stacks = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom:15px;
  .IndividualStack{
    border-radius: 100px;
    padding: 3px 8px;
    color: white;

    display: flex;
    align-items: center;
    gap: 5px;

    svg{
      width: 20px;
    }
  }
`

export const Title = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin: 0;
  color: #8f8f8f;
`

export const StackName = styled.p`
  font-size: 13px;
  margin: 0;
  font-weight: 400;
`

export const Paragraph = styled.span`
  font-size: 17px;
  color: #2672e4;
  display: block;
`
export const Card = styled.div`
  border: 1px solid #707072;
  padding: 15px 30px;
  border-radius: 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  width: min-content;

`
export const CardTitle = styled.div`
 display: flex;
`
export const CardImg = styled.div`
  img{
    max-width: 300px;
    min-width: 300px;
  }
`
export const CardFooter = styled.div`
 display: flex;
 
  &:hover{
    cursor: pointer;
  }
`
export const NextPrevBtn = styled.div`
 background-color: #707072;
 height: 40px;
 width: 40px;
 padding: 20px;
 border-radius: 100px;
 align-items: center;
 justify-content: center;
 display: flex;
`

export const CardRosel = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;


`

export const Carousel = styled.div`
  display: flex;
  perspective: 1000px;
`