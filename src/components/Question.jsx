
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';

const Question = ({ id, title, info }) => {

    const [isOpen, SetIsOpen] = useState(false);
    return (
        <li className="question">
            <header>
                <h5 className="">{title}</h5>
                <span onClick={() => { SetIsOpen(!isOpen) }}>
                    {isOpen ? <AiOutlineMinus />: <AiOutlinePlus />}                    
                </span>
            </header>            
            {isOpen ? <p>{info}</p> : null}
            
        </li>        
    );
};

export default Question;