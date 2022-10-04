import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

var campvis = null;
function ReportParticipation(){
var res= axios.get("http://localhost:8080/api/participation")
.then((res)=>{
    console.log(res.data);
    campvis = res.data.campusvisit;
    var even24hotel=res.data.EveningHotel24th;
    var even25hotel=res.data.EveningHotel25th;
    var totals=res.data.totalval;
    var breez=res.data.breezeRes;
    var breez2=res.data.TamilnaduHotel;
    var tourdata=res.data.tourdata;

})

return(
    <div className='mainc'>
        <h1>Participation Report</h1>
        <table>
            <tbody>
                <tr>
                    <td>Event Participation</td>
                    <td>Unit</td>
                    <td>Alumini</td>
                    <td>Spouse</td>
                    <td>family</td>
                    <td>Grand Children</td>
                </tr>
                <tr>
                    <td>only campus visit on 25th jan</td>
                    <td>Nos</td>
                    <td>{campvis[0]}</td>
                    <td>{campvis[1]}</td>
                    <td>{campvis[2]}</td>
                    <td>{campvis[3]}</td>
                </tr>
                <tr>
                    <td>24th evening at hotel</td>
                    <td>Nos</td>
                    <td>{even24hotel[0]}</td>
                    <td>{even24hotel[1]}</td>
                    <td>{even24hotel[2]}</td>
                    <td>{even24hotel[3]}</td>
                </tr>
                <tr>
                    <td>25th evening at hotel</td>
                    <td>Nos</td>
                    <td>{even25hotel[0]}</td>
                    <td>{even25hotel[1]}</td>
                    <td>{even25hotel[2]}</td>
                    <td>{even25hotel[3]}</td>
                </tr>
                <tr>
                    <td>total</td>
                    <td>-</td>
                    <td>{campvis[0]+even24hotel[0]+even25hotel[0]}</td>
                    <td>{campvis[1]+even24hotel[1]+even25hotel[1]}</td>
                    <td>{campvis[2]+even24hotel[2]+even25hotel[2]}</td>
                    <td>{campvis[3]+even24hotel[3]+even25hotel[3]}</td>
                </tr>
            </tbody>
        </table>
        <h3>accomodation needs</h3>
        <table>
            <tbody>
                <tr>
                    <td>Breeze Residency</td>
                    <td>Unit</td>
                    <td>Single</td>
                    <td>Double</td>
                    <td>Twinshare</td>
                    <td>total rooms</td>
                </tr>
                <tr>
                    <td>checkin 24th and checkout 25th</td>
                    <td>1 Night</td>
                    <td>{breez[0]}</td>
                    <td>{breez[1]}</td>
                    <td>{breez[2]}</td>
                    <td>{breez[3]}</td>
                </tr>
                <tr>
                    <td>checkin 24th and checkout 26th</td>
                    <td>2 Night</td>
                    <td>{breez[4]}</td>
                    <td>{breez[5]}</td>
                    <td>{breez[6]}</td>
                    <td>{breez[7]}</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>-</td>
                    <td>{breez[0]+breez[4]}</td>
                    <td>{breez[1]+breez[5]}</td>
                    <td>{breez[2]+breez[6]}</td>
                    <td>{breez[3]+breez[7]}</td>
                </tr>
            </tbody>
        </table>
        <table>
            <tbody>
                <tr>
                    <td>Tamilnadu Hotel</td>
                    <td>Unit</td>
                    <td>Single</td>
                    <td>Double</td>
                    <td>Twinshare</td>
                    <td>total rooms</td>
                </tr>
                <tr>
                    <td>checkin 24th and checkout 25th</td>
                    <td>1 Night</td>
                    <td>{breez[0]}</td>
                    <td>{breez[1]}</td>
                    <td>{breez[2]}</td>
                    <td>{breez[3]}</td>
                </tr>
                <tr>
                    <td>checkin 24th and checkout 26th</td>
                    <td>2 Night</td>
                    <td>{breez[4]}</td>
                    <td>{breez[5]}</td>
                    <td>{breez[6]}</td>
                    <td>{breez[7]}</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>-</td>
                    <td>{breez[0]+breez[4]}</td>
                    <td>{breez[1]+breez[5]}</td>
                    <td>{breez[2]+breez[6]}</td>
                    <td>{breez[3]+breez[7]}</td>
                </tr>
            </tbody>
        </table>
        <h3>Post GJ Tour</h3>
        <table>
            <tr>
                <td>Item</td>
                <td>Nos</td>
                <td>Total</td>
            </tr>
            <tr>
                <td>4hrs Trichy tour on 26th jan</td>
                <td>Nos</td>
                <td>{tourdata.trichy}</td>
            </tr>
            <tr>
                <td>Phuket-Krabi</td>
                <td>Nos</td>
                <td>{tourdata.phuketKrabi}</td>
            </tr>
            <tr>
                <td>Mysore-Bandipur</td>
                <td>Nos</td>
                <td>{tourdata.mysoreBandipur}</td>
            </tr>
            <tr>
                <td>Belur-Hampi</td>
                <td>Nos</td>
                <td>{tourdata.belurHampi}</td>
            </tr>
        </table>
        
        
        
    </div>

)
}
export default ReportParticipation;