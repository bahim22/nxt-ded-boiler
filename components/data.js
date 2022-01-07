import {useState, initialState} from "react";
import React from "react";

export const projects = [
{
title: "React App",
subtitle: "React Project",
description:
    "A React App made from scratch",
image: "./project-1",
link: "https://github.com/bahim22/react-ded-boiler",
},
{
title: "Created Next App",
subtitle: "Next.js Portfolio",
description:
    "Next.js App built with create-next-app and customized with styling, extended config files, custom components, and deployed to Vercel.",
image: "./project-2",
link: "https://github.com/bahim22/last-next-ded",
},
{
title: "Custom Next App",
subtitle: "Next.js Blog",
description:
    "Next.js App built from scratch with dynamic routing and md/mdx files for blog posts that contain documentation on building React and Next.js Apps.",
image: "./project-2",
link: "https://github.com/bahim22/DioNextApp",
},
{
title: "Html Css App",
subtitle: "Business Website",
description:
    "Business landing page website made with HTML5, CSS3, Bootstrap, JavaScript,and deployed using CD/CI with  Microsoft Azure.",
image: "./project-4",
link: "https://github.com/bahim22/ISM",
},
];

export const ProjectList = () => {
    const swag = props.swag
    const Skills = initialState([
        {title:"Languages", content:["JavaScript"], id:"1"},
        {title:"Programs", content:["GitHub"], id:"2"},
        ]);

                (skills.map((skill) =>
                    <div>{skills}</div>)
                )
                return(
                <section className="main" key={skills.id}>
                    <div className="btn">
                        <h1 className="title"> {skills.title}</h1>
                    </div>
                    <div className="btn">
                        <p className="description">{skills.content}</p>
                    </div>
                </section>
                )
            };

export const GetProjects = ({ skills, title, content, ...props}) => {
const skillset = props.skillsets
return(
    <>
    (skills.map((skill) => (
        (
        <section className="main" key={skills.id}>
            <div className="btn">
                <h1 className="title"> {skills.title}</h1>
            </div>
            <div className="btn">
                <p className="description">{skills.content}</p>
            </div>
        </section>
        )
    )))
    </>
)
}
function NumberList(props) {
 const numbers = props.numbers
 const listItems = numbers.map((number) => <li key={number.id}>{number}</li>)
 return <ul>{listItems}</ul>
}


const skills = props.skills
const SkilliLists = skills.map((Skillset) => <li key={Skillset.id}>{Skillset}</li>)

//const [prolist, setprolist] = useState({projects})
/**
 * const projects: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    link: string;
}[]

const skills: string[]
 */
export const Skillset = [
"JavaScript",
"React",
"Next.js",
"Node",
"Bash",
"GitHub",
"HTML",
"CSS",
];


function FormattedDate(props) {
    return <h2>
        Lheure est {props.date.toLocaleTimeString()}
    </h2>
}; //<Formatted Date date={this.state.date}/>

function Form() {
    function handleSubmit(e) {
        e.preventDefault()
        console.log('Clicked Submit')}
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit Button</button>
        </form>
    )
}
///** */