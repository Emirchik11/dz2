

import About from '../../components/about/About';
import Title from '../../components/title/Title';

const MainPage = () => {
    return (
        <div>
            <Title text="Hello world" />
            <About info={{ title: "Some Title", body: "Some body" }} />
        </div>
    );
};

export default MainPage;