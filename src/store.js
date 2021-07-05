// 글쓰기, 글수정, 글삭제

const POST_SAVE = 'POST_SAVE';
const POST_UPDATE = 'POST_UPDATE';
const POST_DELETE = 'POST_DELETE';

export const postSave = (post) => {
  return {
    type: POST_SAVE,
    payload: post,
  };
};

export const postUpdate = (post) => {
  return (
    console.log('값', post.id),
    {
      type: POST_UPDATE,
      payload: post,
    }
  );
};

export const postDelete = (id) => {
  return (
    console.log('아이디값', id),
    {
      type: POST_DELETE,
      payload: id,
    }
  );
};

const initstate = {
  posts: [
    {
      id: 1,
      title: 'title1',
      content: 'content1',
    },
    {
      id: 2,
      title: 'title2',
      content: 'content2',
    },
    {
      id: 3,
      title: 'title3',
      content: 'content3',
    },
  ],
};

const reducer = (state = initstate, action) => {
  console.log('payload', action.payload);
  console.log('리듀서', state.posts);
  switch (action.type) {
    case POST_SAVE:
      return {
        posts: [...state.posts, action.payload],
      };
    case POST_UPDATE:
      return (
        console.log('업데이트', state.posts),
        {
          posts: [
            ...state.posts.map((post) =>
              post.id === action.payload.id
                ? { ...action.payload, post }
                : { ...post },
            ),
          ],
        }
      );
    case POST_DELETE:
      return state.posts.filter((post) => post.id != action.payload);
    default:
      return state;
  }
};

export default reducer;
