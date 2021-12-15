import MenuNavItem from './MenuNavItem';


const MenuNav = () => { 
    const firstTitle: string = 'singularity 1.0';
    const secondTitle: string = 'Software Project';

    const topMenuItems = [
        {
            text: 'Kanban Board',
            icon: 'FiCreditCard'
        }, 
        {
            text: 'Project Settings',
            icon: 'FiSettings'
        }
    ]

    const mainMenuItems = [
        {
            text: 'Releases',
            icon: ''
        }, 
        {
            text: 'Issues and filters',
            icon: ''
        }, 
        {
            text: 'Pages',
            icon: ''
        }, 
        {
            text: 'Reports',
            icon: ''
        }, 
        {
            text: 'Components',
            icon: ''
        }, 
    ];        

    return (
        <div className='mainNavMenuBar'>
            <div className='topCompanyTitle'>
                <p style={{ fontWeight: 'bold'}}>{firstTitle}</p>
                <p style={{ fontSize: '12px'}}>{secondTitle}</p>
            </div>
            <div className='topMainMenuNav'>
                {topMenuItems.map((item, idx) => {
                    return <MenuNavItem name={item.text} key={idx}  /> 
                }) }
            </div>
            <hr className='hrBreakPoint'></hr>
            <div className='bottomMainMenuNav'>
                { mainMenuItems.map((item, idx) => {
                    return <MenuNavItem name={item.text} key={idx} />
                }) }
            </div>
        </div>
    )
}

export default MenuNav
