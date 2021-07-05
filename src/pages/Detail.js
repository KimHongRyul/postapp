import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { postDelete } from '../store';

const Detail = (props) => {
  console.log(props.match);
  const id = props.match.params.id;
  const dispatcher = useDispatch();
  const { posts } = useSelector((store) => store);
  const post = posts.filter((post) => post.id == id);
  const delPost = posts.filter((post) => post.id != id);
  console.log(post);
  console.log('del :', delPost);

  const del = (e) => {
    console.log('e:', e);
    e.preventDefault();
    dispatcher(postDelete(post[0].id));

    console.log(post[0].id);
    props.history.push('/');
  };

  return (
    <div>
      글 상세보기
      <hr />
      <div>{post[0].id}</div>
      <div>{post[0].title}</div>
      <div>{post[0].content}</div>
      <Link to={`/post/${id}/update`}>글 수정</Link>
      <button onClick={del}>글삭제</button>
    </div>
  );
};

export default Detail;
