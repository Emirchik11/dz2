

const About = ({ info }) => {
    if (!info) {
        return ;
    }

    return (
        <div>
            <h2>{info.title}</h2>
            <p>{info.body}</p>
        </div>
    );
};

export default About;