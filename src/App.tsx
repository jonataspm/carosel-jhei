import { useState } from 'react';
import './App.css';
import CardProject from './components/Icons/cardKnowledge';
import { StackIcon } from './components/Icons/cardKnowledge/stack';
import { CardRosel, Carousel, NextPrevBtn } from './components/styleds/styleds';

function App() {
  const stack1 = new StackIcon('Angular', 'red');
  const stack2 = new StackIcon('Dart', 'blue');
  const stacklist = [stack1, stack2];

  const [actualPosition, setPosition] = useState(0);

  
  const cardData = [
    { Title: 'Vidinha', Stacks: stacklist, Image: 'https://pps.whatsapp.net/v/t61.24694-24/390347512_2296944013835219_8458101779531385939_n.jpg?ccb=11-4&oh=01_AdRvR_PhKFM-xtsc72VhAMxrA7iFWv6amgtGxIO99Jm5Jg&oe=65456BC4&_nc_sid=000000&_nc_cat=101' },
    { Title: 'Joji', Stacks: stacklist, Image: 'https://pps.whatsapp.net/v/t61.24694-24/384714803_996512034953781_8979789831187215676_n.jpg?ccb=11-4&oh=01_AdRjr0fzk7ezSGWFGZmR92ojUpROhBC5s0WUV1q2oKbPoA&oe=65469F2C&_nc_sid=000000&_nc_cat=109' },
    { Title: 'Pablo', Stacks: stacklist, Image: 'https://pps.whatsapp.net/v/t61.24694-24/311620632_145746474893094_5667234342319248668_n.jpg?ccb=11-4&oh=01_AdQE0xojFEbVNudmBBIjZOCyqu0mi9jOsVcXx2GSP-sRuw&oe=6542AD47&_nc_sid=000000&_nc_cat=106' },
    { Title: 'Rebeca', Stacks: stacklist, Image: 'https://pps.whatsapp.net/v/t61.24694-24/390056996_350667130767482_6167795663678806091_n.jpg?ccb=11-4&oh=01_AdRAhXYNA0WmnYEhDs6Pzu-udG1s9SaOyHEmMSw3k1DmNg&oe=653EE35C&_nc_sid=000000&_nc_cat=111' },
    { Title: 'Flavio', Stacks: stacklist, Image: 'https://pps.whatsapp.net/v/t61.24694-24/377169304_234691485962660_1411047820888074148_n.jpg?ccb=11-4&oh=01_AdRvrPrZYonz2_YyW3DSbxkf5hfsQlfohkERFWMlAQXyNA&oe=653EE035&_nc_sid=000000&_nc_cat=105' },
    { Title: 'Gabi', Stacks: stacklist, Image: 'https://pps.whatsapp.net/v/t61.24694-24/371196877_699040988936207_1619765286016685862_n.jpg?ccb=11-4&oh=01_AdQ6hFBurErz3FGmCaQx7SREAOVu9sMScGjWmlozfSYegw&oe=653EC4F2&_nc_sid=000000&_nc_cat=106' },
  ];

  const totalCards = cardData.length;
  
  const getCard = (index:number) => {
    if (totalCards === 0) return null;
    const normalizedIndex = (index % totalCards + totalCards) % totalCards;
    return cardData[normalizedIndex];
  };

  const previousCard = getCard(actualPosition - 1);
  const currentCard = getCard(actualPosition);
  const nextCard = getCard(actualPosition + 1);

  const changeClass = (value:number) => {
    
    const previousId = getCard(actualPosition - 1);
    const currentId = getCard(actualPosition);
    const nextId = getCard(actualPosition + 1);

    const previousCard = document.getElementById(previousId);
    const currentCard =  document.getElementById(currentId);
    const nextCard =  document.getElementById(nextId);
    
    if(value > actualPosition){

      previousCard?.classList.replace("left","middle");
      currentCard?.classList.replace("middle","right");
      nextCard?.classList.replace("right","rest")
      setPosition(value);

      previousId = getCard(actualPosition - 1);
      previousCard = document.getElementById(previousId);
      previousCard?.classList.add("left");
    }
    else{

      previousCard?.classList.replace("left","rest");
      currentCard?.classList.replace("middle","left");
      nextCard?.classList.replace("right","middle")
      setPosition(value);

      nextId = getCard(actualPosition + 1);
      nextCard = document.getElementById(nextId);
      nextCard?.classList.add("right");
    }
    
   
  }

  return (
    <div className="App">
      <CardRosel>
        <NextPrevBtn onClick={() => changeClass(actualPosition - 1)}>{'Prev'}</NextPrevBtn>
        <Carousel>
        {cardData.map((item, index) => (
          <CardProject
            key={index}
            Id={index}
            className={'Cproject'}
            Title={item.Title}
            Stacks={item.Stacks}
            Image={item.Image}
          />
        ))}
        </Carousel>
        
        <NextPrevBtn onClick={() => changeClass(actualPosition + 1)}>{'Next'}</NextPrevBtn>
      </CardRosel>
    </div>
  );
}

export default App;
