import React from "react";

export default function Home(){
    const club_activities = [
        {name: "Regular workshops", desc: "This is where we learn new stuff."},
        {name: "Practice competitions", desc: "This is where we apply what we learnt."},
        {name: "Social gatherings", desc: "This is where we cry about stuff we didn't get and treat ourselves with free food because we deserve it."},
        {name: "Mock interviews", desc: "This is where we get experienced people to help us prepare for tech interviews."},
        {name: "Talks", desc: "And this is where we listen to guest lecturers or people from the industry talk about cool stuff."}
    ]

    return (
    <>
        <div className="flavour">
            <h2>Our motivation</h2>
            <p>"As a competitive programmer you will acquire the ability to think critically, attain good debugging skills, learn a vast knowledge of algorithms and ipso facto the skills to crack algorithmic interviews which are all essential to computer science students. This club was founded with the resolve to organise the University of Adelaide's competitive programming endeavours in order to achieve results that an institution of this calibre deserves."</p>
        </div>

        <div className="activity">
            <img src="/images/image3.png" id="firstImage" alt="firstImage"/>
            <div className="activityText">
                <h2>What do we do?</h2>
                {club_activities.map((activity, id) => 
                    <React.Fragment key={id}> 
                        <h3>{activity.name}</h3> 
                        {activity.desc} 
                    </React.Fragment>
                )}
            </div>
        </div>
        
        <div className="guide">
            <img src="/images/image2.png" id="secondImage" alt="secondImage"/>
            <div className="guideText">
                <h2>How to get started?</h2>
                
                <h3>First, sign up <a href="https://forms.gle/KNQsRjctczBmYrg86">here</a></h3>
                <p>This registers you as a member of the club and automatically adds you to the club's mailing list.</p>
                
                <h3>Next, join our <a href="https://www.facebook.com/groups/uoacpc" title="facebook">Facebook Group</a> and <a href="https://discord.gg/9yBJs68Sj4" title="discord">Discord Server</a></h3>
                <p>These are the platforms where we hang out. They are the best place to interact with other club members, keep track of coming events and etcetera.</p>
                
                <h3>And last but not the least, remember to have fun!</h3>
                <br/>
                
                <h2>Contact Us</h2>
                <p>As certified computer geeks we take pride in our social skills and would love to hear from you.</p>
                <p>For all official enquiries please email us at <a href="mailto:acpc@clubs.auu.org.au">acpc@clubs.auu.org.au</a></p>
                <p>If you just want to get in touch, you can do so via our Facebook Group or our Discord Server.</p>
            </div>
        </div>
    </>
    );
}