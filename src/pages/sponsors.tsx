import React from "react";
import current_sponsors from '../data/current_sponsors.json';
import previous_sponsors from '../data/previous_sponsors.json';

interface SponsorInfo{
    imgLoc: string,
    name: string,
    desc: string
}

function render_sponsors(sponsors_list: Array<SponsorInfo>){
    return (
        <table>
            {sponsors_list.map(sponsor => 
                <tr>
                    <td><img src={sponsor.imgLoc} className="sponsorImage" alt={`${sponsor.name} Logo`}/></td>
                    <td><h3>{sponsor.name}</h3> {sponsor.desc}</td>
                </tr>
            )}
        </table>
    )
}

export default function Sponsors(){
    return (
    <>
        <h2>Our Sponsors</h2>
        {render_sponsors(current_sponsors)}
        <br></br>
        
        <h2>Previous Sponsors</h2>
        {render_sponsors(previous_sponsors)}
    </>
    );
}