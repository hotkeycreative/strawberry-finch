import Menu from './Menu';
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';

const Main = () => {
    return (
        <div className='main'>
            <ContentLeft />
            <Menu />
            <ContentRight />
        </div>
    );
};

export default Main;