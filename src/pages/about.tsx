import React from "react";

export default function About(){
    const pageContent = [
        {
            heading: "2025 Committee",
            paragraphs: `President: Irhas Gill
            Vice President: Zach Anderson
            Secretary: Nic Ataiza
            Treasurer: Jackson Bunting
            Industry Liaisons: Xiaoyu Tan, Lachy Schinnick, Ramin Shahu
            Social Media Managers: Roselyn Hoffmann, Mehdi Mahzounieh
            Event Coordinators: Mahir Numayeer Islam, Syeda Ramisa Fariha, Shaun Phillips
            Web Developers: Henry Nguyen, Justin Sun, Maged Gayed, Kevin Lac
            `
        },
        {
            heading: "What is competitive programming anyway?",
            paragraphs: `Competitive programming is a mind sport usually held over the Internet or a local network, involving participants trying to program according to provided specifications (totally not copied from Wikipedia).
            In essence, it is about solving ridiculously difficult problems within unfairly short time limits (because why not).`
        },
        {
            heading: "Why is it even a thing?",
            paragraphs: `Because it's fun! Ask anyone who has done these contests - they are addicting and fun.
            Employment: Most competitions are sponsored by multinational software companies such as Google, Microsoft, IBM etc. Each year, they take students who performed well in the contest and offer them positions.
            Love of problem solving: The problems that you will see are posed as real-world problems, and often will mask the underlying question. You will need to use many ideas that you have learnt in order to solve them.`
        },
        {
            heading: "Tell me about the club already!",
            paragraphs: `Alright alright, calm down, I hear ya.
            The Competitive Programming Club is a not-for-profit, student-run club dedicated to promote and nurture the sport of (you guessed it) 'Competitive Programming' at The University of Adelaide.
            We host practice competitions and training workshops where we solve problems, discuss algorithms, cry over the parts we didn't understand, figure things out, and celebrate with free food.
            If you think you're the next Larry Page, this is not the club for you. If you want to be the next Larry Page, then this club maybe what you are looking for.
            All skill levels are welcome because, let's be honest, everyone is going to struggle.`
        }
    ]

    return (
    <>
        {pageContent.map((section, section_id) => (
            <React.Fragment key={section_id}>
                <h2>{section.heading}</h2>

                {section.paragraphs.split('\n').map((content, id) => 
                    <p key={`${section_id} ${id}`} style={{marginBottom: '1.5em'}}>{content}</p>
                )}
                
                <br/>
            </React.Fragment>
        ))}
    </>
    );
}