'use client'

import {FC, useState} from "react";

type Props = {
  hits: number
}

const PageVisitedTimes: FC<Props> = ({ hits }) => {
  const [isBlur, setIsBlur] = useState(false);

  const blurClass = isBlur ? 'blur-sm' : '';

  const toggleBlur = () => setIsBlur(!isBlur);

  return <p>This page has been visited <button type="button" className={blurClass} onClick={toggleBlur}>{hits}</button> times.</p>
};

export default PageVisitedTimes;
