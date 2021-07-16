import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

const icon = <FontAwesomeIcon className="icon" icon={faCaretRight} />

function RenderText({ txt }) {
  return (
      <span>{icon} {txt}</span>
  );
}

export default RenderText;
