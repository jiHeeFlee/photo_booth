interface SelectTypes {
  step: number;
  title: string;
  description: string;
}

export const SELECT_PHOTO: SelectTypes = {
  step: 1,
  title: "사진 고르기",
  description: `선택할 사진을 눌러주세요.\n중복하여 최대 3장까지 선택할 수 있어요.`,
};

export const SELECT_COLOR: SelectTypes = {
  step: 2,
  title: "필터 고르기",
  description: `사진에 적용할 필터를 선택해주세요.\n
선택한 필터가 모든 컷에 동일하게 적용됩니다.`,
};

export const PREVIEW: SelectTypes = {
  step: 3,
  title: "미리보기",
  description: `선택한 사진과 필터로 구성된 미리보기입니다.\n
마음에 들면 아래 버튼을 눌러 저장을 진행하세요.`,
};
