'use client';

import { useEffect } from 'react';
import { useEyeFollow } from './eyefollow';
import './emoji.css';

export default function EmojiFace() {
  useEyeFollow();

  return (
    <div className="emoji-face">
      <div className="eyes">
        <div className="eye"></div>
        <div className="eye"></div>
      </div>
    </div>
  );
}