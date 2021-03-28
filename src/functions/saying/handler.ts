import 'source-map-support/register';

import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import { slackMessageBlock } from './response';

const wise_sayings = [
  {
    title: '좌절감으로 배움을 늦추지 마라.',
    createdAt: '알려지지 않음. 구전 신화',
  },
  {
    title:
      '우리는 모두.. 과거로 돌아가서 새로운 시작을 할 수는 없지만.. 지금부터 시작해서 완전히 새로운 결과를 낼 수 있읍니다 ^^',
    createdAt: '2021-03-01 15:44:12',
  },
  {
    title:
      '지나간 사랑을 그리워하는 것은… 그를 추억하는 게 아닌… 사랑에 미쳐 살앗떤 나를 추억하는 것이다,,',
    createdAt: '2021-03-01 15:49:18',
  },
  {
    title: '우리의 미래는 항상,, 밝은 아침입니다,,',
    createdAt: '2021-03-03 10:12:16',
  },
  {
    title: `최근 들어 좋은 인생이란 뭘까? 생각하게 된다. 
    
      나만 좋으면 끝인가? 
      다른 사람들의 시선은 필요없는가? 
      
      같은 게 뉴 토픽이 되었다. 
      
      지금은 나만 좋으면 끝이긴 한데. 
      지인 몇몇이 굳이 피곤하게 산다며
      (일, 집, 공부, 잠 빼고는 없다고.. 눈에 보이는 성과가 있는 것도 아님) 
      
      안쓰러운 눈빛을 보내거나 한심(?)하게 보는 눈빛을 종종 보낸다. 
      
      자기는 절대 그렇게 안 할 거라며.. 
      
      그럴 때마다 내가 인생 설계를 잘못 하고 있는 건가 생각하지만… 
      
      후회를 가장 두려워하기 때문에 무엇이든 열심히 할 수밖에… 
      
      게다가 재미있으니까, 뭐…
      
      (그대로 복붙해서 블로그에도 적어야겠다. 끝. 다들 오늘 하루도 고생많으셨읍니다.)
            `,
    createdAt: '2021-03-10 22:09:36',
  },
  {
    title: '명언은.. 내가 만드는 게 아니다.. 남이 만들어 주는 것이다..',
    createdAt: '2021-03-12 13:58:03',
  },
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const saying = async () => {
  // service logic
  const length = wise_sayings.length;
  const idx = getRandomInt(length);

  const title = wise_sayings[idx].title;
  const createdAt = wise_sayings[idx].createdAt;

  // build temaplte view

  return formatJSONResponse(slackMessageBlock(title, createdAt, length));
};

export const main = middyfy(saying);
