import { AiFillGithub } from 'react-icons/ai';

interface MainTitleAreaType {
    title: string,
    buttonText: string,
}

const MainTitleArea = ({ title, buttonText }: MainTitleAreaType) => {
    return (
        <div className='mainTitleArea'>
            <h2 style={{ fontWeight: 'bold'}}>{title}</h2>
            <button className='btn btn-icon'>
                <AiFillGithub />
                <p style={{ marginLeft: '10px'}}>{buttonText}</p>
            </button>
        </div>
    )
}

export default MainTitleArea
