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
  background-color: white;
  transform-origin: 50% 50%;
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

export const CardRosel = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;

 .btnPrevNext{
  cursor: pointer;

  color: #07d607;
  
  height: 40px;
  width: 40px;
 
  align-items: center;
  justify-content: center;
  display: flex;
  z-index: 10;
  margin: 0 200px;
  transition: ease-in-out 0.5s;
  &:hover{
    color: #008800;
    transform: scale(1.3);
  }
}

`

export const Carousel = styled.div`
z-index: 5;
  display: flex;
  position: relative;
  perspective: 1000px;
  align-items: center;
  justify-content: center;


    .Cproject{
      position: absolute;
      left: none;
      right: none;

      transition: all 0.5s ease-in;
      transform-style: preserve-3d;
      transform-origin: center;
    }

    .middle{
      position: absolute;
      z-index: 4;
      
      &:hover{
        transform: scale(1.02);
        box-shadow: 1px 1px 10px #82f19a;
      }
    }

    .right{
      position: absolute;
      left: none;
      transform: translate(250px) scale(0.87) rotateY(-30deg);
      z-index: 3;
      opacity: 50%;

      &:hover{
        transform: translate(250px) scale(0.9) rotateY(-30deg);
        box-shadow: 1px 1px 10px #82f19a;
      }
    }

    .left{
      position: absolute;

      left: none; 
      transform: translate(-250px) scale(0.87) rotateY(30deg);
      z-index: 3;
      opacity: 50%;

      &:hover{
        transform: translate(-250px) scale(0.90) rotateY(30deg);
        box-shadow: 1px 1px 10px #82f19a;
      }
    }
    
    .rest{
      opacity: 0;
      position: absolute;
      left: none;
      right: none;
      z-index: 2;
    }




`