import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from './CommentForm';
import { key } from '../data/fetch';
/* eslint-disable react/prop-types */


function Video() {
  return (
    <div>
      <CommentForm />
    </div>
  )
}

export default Video
