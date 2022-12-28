export const MESSAGE = {
  SEARCHING: "검색 중입니다.",

  SUCCESS_COPY_URL: "클립보드 복사가 완료되었습니다.",
  SUCCESS_CREATE_REVIEW: "리뷰를 등록하였습니다.",
  SUCCESS_DELETE_REVIEW: "리뷰 삭제가 완료되었습니다.",

  NOT_EXIST_INFO: "해당 정보가 존재하지 않습니다.",
  NOT_EXIST_REVIEW: "선택된 날짜에 작성한 감상평이 존재하지 않습니다.",
  NOT_SUCCESS_CREATE_REVIEW: "리뷰를 등록하지 못했습니다. 다시 시도해주세요.",
  NOT_SUCCESS_DELETE_REVIEW: "리뷰를 삭제하지 못했습니다. 다시 시도해주세요.",

  CONFIRM_WRITE_CANCEL: "작성 중인 내용을 취소하시겠습니까?",
  CONFIRM_WRITE_CANCEL_SUB: "확인 선택 시, 작성한 내용은 저장되지 않습니다.",
  CONFIRM_DELETE_REVIEW: "감상평을 삭제하시겠습니까?",

  REQUIRE_SIGNIN: "해당 서비스를 위해 로그인이 필요합니다.",
  REQUIRE_VALUE: "필수 값을 입력해주세요.",

  SEARCH_RESULT: (total: number) => `검색 결과가 ${total}개 있습니다.`,
  TEXT_LIMIT: (limit: number) =>
    `최대 ${limit}자로 입력할 수 있는 글자 수가 제한됩니다.`,
};
