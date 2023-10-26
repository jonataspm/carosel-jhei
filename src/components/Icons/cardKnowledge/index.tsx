import { Button, CardActions } from "@mui/material";
import { StackIcon } from "./stack";
import { DivIcons } from "./devincon";
import { Card, CardFooter, CardTitle, Paragraph, StackName, Stacks, Title, CardImg } from "../../styleds/styleds";


interface CardProjectProps{
    Title:string,
    Stacks: StackIcon[],
    Image:string,
    Description?:string
    className?:any
}

export default function CardProject(props:CardProjectProps) {

  function StackElement({ name }: { name: string }) {
    const Icon = DivIcons[name] || DivIcons.default;
    return <Icon />;
  }

  return (
    <Card className={props.className}>
        <CardTitle className="cpTitle">
            <Title>{props.Title}</Title>
        </CardTitle>
        <Stacks className="cpName">
          {props.Stacks.map((stack, index) => (
            <div className="IndividualStack" key={index} style={{backgroundColor: stack.Color,}}>
              <StackElement name={stack.Name} />
              <StackName>{stack.Name}</StackName>
            </div>
          ))}
        </Stacks>
        <CardImg className="cpImage">
            <img src={props.Image} alt={props.Title + ' Logo'}/>
        </CardImg>
        
        <CardFooter className="cpFooter">
          <Paragraph> read more...</Paragraph> 
        </CardFooter>
    </Card>
  );
}
