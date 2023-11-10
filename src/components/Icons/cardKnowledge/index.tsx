import { Button, CardActions } from "@mui/material";
import { StackIcon } from "./stack";
import { DivIcons, DivIconsColor } from "./devincon";
import { Card, CardFooter, CardTitle, Paragraph, StackName, Stacks, Title, CardImg } from "../../styleds/styleds";


interface CardProjectProps{
    Title:string,
    Stacks: any[],
    Image:string,
    className?:any,
    Id?:any
    Link:string,
}

export default function CardProject(props:CardProjectProps) {

  console.log(props.Stacks);
  function StackElement({ name }: { name: string }) {
    const Icon = DivIcons[name] || <a/>;

    return <Icon />;
  }


  return (
    <Card className={props.className} id={props.Id}>
        <CardTitle className="cpTitle">
            <Title>{props.Title}</Title>
        </CardTitle>
        <Stacks className="cpName">
        {props.Stacks.map((stack, index) => {
          if (DivIcons[stack]) {
            return (
              <div className="IndividualStack" key={index} style={{ backgroundColor: DivIconsColor[stack] || DivIconsColor.default }}>
                <StackElement name={stack} />
                <StackName>{stack}</StackName>
              </div>
            );
          } else {
            return null;
          }
        })}
      </Stacks>
        <CardImg className="cpImage">
            <img src={props.Image} alt={props.Title + ' Logo'}/>
        </CardImg>
        
        <CardFooter className="cpFooter">
          <a href={props.Link}><Paragraph> read more...</Paragraph> </a>
        </CardFooter>
    </Card>
  );
}