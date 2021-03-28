export const slackMessageBlock = (
  title: string,
  createdAt: string,
  length: number
) => {
  return {
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*이유정 선생님께서 말씀하신 내용입니다.* \n\n > ${title} \n\n 함성소리 발생일 : ${createdAt}\n\n 총 ${length}개의 명언 중 하나 입니다. \n\n\n https://bit.ly/yujeong-dashboard 얼마나 널리널리 퍼졌나 유정가라사대 대시보드`,
        },
      },
      {
        type: 'context',
        elements: [
          {
            type: 'plain_text',
            text: '🚸 유정명언 등록기능은 준비중 입니다.',
            emoji: true,
          },
        ],
      },
    ],
  };
};
