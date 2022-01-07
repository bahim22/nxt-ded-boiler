import react, {useState} from "react";

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
    const [skills, setSkills] = useState([
        {title:"Languages", content:["JavaScript", "React", "Next.js"], id:"1"},
        {title: "Programs", content: ["GitHub","Azure", "VS Code"], id:"2"}
        ])
        return(
            <div>
                (skills.map((skill) => ( (
                <section className="main" key={skills.id}>
                <div className="btn">
                    <h1 className="title"> {skills.title}</h1>
                </div>
                <div className="btn">
                    <p className="description">{skills.content}</p>
                </div>
                </section>
                ) )))
            </div>
        )}


export const getProjects = ({ skills, title, content, ...props}) => {
const skillset = props.skillset
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

const [prolist, setprolist] = useState({projects})
/**const proj = new ProjectList ({ name :})
 * const projects: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    link: string;
}[]

const skills: string[]
 */
export const skillset = [
"JavaScript",
"React",
"Next.js",
"Node",
"Bash",
"GitHub",
"HTML",
"CSS",
];