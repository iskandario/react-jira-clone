import { IconContext } from 'react-icons/lib';
import { BiSearch } from 'react-icons/bi';
import { SiJirasoftware } from 'react-icons/si';
import { IoAddOutline } from 'react-icons/io5';
import { BsQuestionCircle } from 'react-icons/bs';

const SideNav = () => {
    return (
        <div className='sideNavBar'>
            <IconContext.Provider value={{ color: 'white',  }}>
            <div className='sideNavTopBar'>
                <SiJirasoftware style={{ fontSize: '25px' }}/>
                <BiSearch style={{ fontSize: '20px', marginTop: '30px' }} />
                <IoAddOutline style={{ fontSize: '25px', marginTop: '10px' }} />
            </div>
            <div>
                <BsQuestionCircle style={{ fontSize: '20px' }} />
            </div>
            </IconContext.Provider>
        </div>
    )
}

export default SideNav
