import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postUpdate } from '../store';

const Update = (props) => {
  const dispatcher = useDispatch();
  const { posts } = useSelector((store) => store);
  console.log('아이디', props.match.params.id);
  console.log('스토어값', posts);

  const [postDto, setPostDto] = useState({
    id: Number(props.match.params.id),
    title: '',
    content: '',
  });

  console.log('postDto', postDto);

  const changeValue = (e) => {
    setPostDto({
      ...postDto,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    console.log('data : ', postDto);
    e.preventDefault();
    dispatcher(postUpdate(postDto));
    props.history.push('/');
  };

  return (
    <div>
      글수정
      <form>
        <input type="text" name="title" onChange={changeValue} />
        <br />
        <input type="text" name="content" onChange={changeValue} />
        <br />
        <button onClick={submit}>글수정완료</button>
      </form>
    </div>
  );
};

export default Update;
