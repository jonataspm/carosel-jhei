import { useState } from 'react';
import { CardRosel, Carousel } from '../styleds/styleds';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import CardProject from '../Icons/cardKnowledge';
import { StackIcon } from '../Icons/cardKnowledge/stack';
import { GetRepositories } from '../../api/githubApi';

export default function CaroselJhei() {

    const stack1 = new StackIcon('Angular', 'red');
    const stack2 = new StackIcon('Dart', 'blue');
    const stack3 = new StackIcon('Javascript', 'orange');
    const stacklist = [stack1, stack2, stack3];

    const [actualPosition, setPosition] = useState(0);

    const reposData = GetRepositories('jonataspm');

    const totalCards = reposData.length;

    const getId = (index: number) => {
        if (totalCards === 0) return 0;
        else if (index == -1) return totalCards - 1;
        else if (index == totalCards) return 0;

        else
            return index;
    };

    const changeClass = (value: number) => {
        debugger;
        let previousId = getId(actualPosition - 1);
        let currentId = actualPosition;
        let nextId = getId(actualPosition + 1);

        let previousCard = document.getElementById(previousId.toString());
        let currentCard = document.getElementById(currentId.toString());
        let nextCard = document.getElementById(nextId.toString());

        if (value > actualPosition) {

            nextCard?.classList.replace("right", "rest");
            currentCard?.classList.replace("middle", "right");
            previousCard?.classList.replace("left", "middle");
            setPosition(previousId);

            previousId = getId(previousId - 1);
            previousCard = document.getElementById(previousId.toString());
            previousCard?.classList.replace("rest", "left");
        }
        else {

            previousCard?.classList.replace("left", "rest");
            currentCard?.classList.replace("middle", "left");
            nextCard?.classList.replace("right", "middle");
            setPosition(nextId);

            nextId = getId(nextId + 1);
            nextCard = document.getElementById(nextId.toString());
            nextCard?.classList.replace("rest", "right");
        }

    };

    return (
        <CardRosel>
            <FaAngleLeft className='btnPrevNext left' onClick={() => changeClass(actualPosition - 1)}>{'Prev'}</FaAngleLeft>
            <Carousel>
                {reposData.map((item, index) => (
                    
                    <CardProject
                        key={index}
                        Id={index}
                        className={index === 0 ? 'Cproject middle' : index === 1 ? 'Cproject right' : index === totalCards - 1 ? 'Cproject left' : 'Cproject rest'}
                        Title={item.name}
                        Stacks={item.languages.stacks}
                        Image={item.image.logo} 
                        Link= {item.url}
                        />
                        
                ))}
            </Carousel>
            <FaAngleRight className='btnPrevNext right' onClick={() => changeClass(actualPosition + 1)}>{'Next'}</FaAngleRight>
        </CardRosel>
    );
}