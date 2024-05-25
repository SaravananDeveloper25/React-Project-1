import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import java from '../../images/java-logo.png';
import python from '../../images/python.png';
import c from '../../images/sharp-logo.png';
import jfs from '../../images/java fullstack.jpg';
import pfs from '../../images/python fullstack.jpg';
import da from '../../images/icons8-data-analytics-64.png';
import pb from '../../images/power-bi.png';
import ta from '../../images/icons8-tableau-software-48.png';
import ad from '../../images/icons8-devops-50.png';
import aws from '../../images/icons8-amazon-web-services-48.png';
import af from '../../images/icons8-azure-48.png';
import k from '../../images/icons8-kubernetes-48.png';
import gc from '../../images/icons8-google-cloud-48.png';
import dev from '../../images/icons8-devops-60.png';
import os from '../../images/icons8-openstack-48.png';
import sfa from '../../images/icons8-salesforce-48.png';
import sfd from '../../images/icons8-salesforce-64.png';
import cs from '../../images/icons8-cyber-security-48.png';
import dsc from  '../../images/icons8-devops-60 (1).png';
import html from '../../images/icons8-html-logo-48.png';
import css from '../../images/icons8-css-logo-48.png';
import js from '../../images/icons8-javascript-48.png';
import wp from '../../images/icons8-wordpress-2-32.png';
import re from '../../images/icons8-react-30.png';
import aj from '../../images/icons8-angularjs-48.png';
import fi from '../../images/icons8-figma-48.png';
import ax from '../../images/icons8-adobe-xd-48.png';
import ps from '../../images/icons8-adobe-photoshop-48.png';
import md from '../../images/icons8-mongodb-48.png';
import ms from '../../images/icons8-mysql-logo-48.png';
import od from '../../images/icons8-oracle-logo-48.png';
import fl from '../../images/icons8-flutter-48.png';
import ic from '../../images/icons8-ionic-48.png';
import ios from '../../images/icons8-ios-48.png';
import and from '../../images/icons8-android-logo-48.png';
import xa from '../../images/xamarin.jpg';
import rn from '../../images/icons8-react-native-50.png';
import sel from '../../images/icons8-selenium-logo-48.png';
import mt from '../../images/11668340_20945203.jpg';
import lr from '../../images/32044575_7903569.jpg';
import cy from '../../images/9793159_4212150.jpg';
import uip from '../../images/12291062_Wavy_Tech-20_Single-08.jpg';
import bp from '../../images/144645513_10165951.jpg';
import aa from '../../images/16717151_2002.i039.010_chatbot_messenger_ai_isometric_set-09.jpg';
import wf from '../../images/22379570_6610138.jpg';
import op from '../../images/22896753_6670985.jpg';
import MATLAB from '../../images/icons8-matlab-48.png';
import IoT from '../../images/iot.jpg';
import es from '../../images/es.jpg';

const Courses = ({ setModalIsOpen }) => {
    const [toggle, setToggle] = useState(null);
    const navigate = useNavigate();

    const handleToggle = (course) => {
        setToggle(toggle === course ? null : course);
    };

    const handleLinkClick = (path) => {
        setModalIsOpen(false);
        navigate(path);
    };

    return (
        <div className='courses'>
            <hr />
            <div className='courseList'>
                <p onClick={() => handleToggle('programming')}>Programming</p>
                <p onClick={() => handleToggle('fullstack')}>Fullstack</p>
                <p>Digital Marketing</p>
                <p onClick={() => handleToggle('dataAnalytics')}>Data Analytics</p>
                <p onClick={() => handleToggle('cloud')}>Cloud Computing</p>
                <p onClick={() => handleToggle('ItSecurity')}>IT Security</p>
                <p onClick={() => handleToggle('web')}>Web Development</p>
                <p onClick={() => handleToggle('ui')}>UI/UX Designing</p>
                <p onClick={() => handleToggle('dd')}>Database Development</p>
                <p onClick={() => handleToggle('mobile')}>Mobile App Development</p>
                <p onClick={() => handleToggle('st')}>Software Testing</p>
                <p onClick={() => handleToggle('rpa')}>RPA</p>
                <p onClick={() => handleToggle('Ml')}>Industry Automation</p>
            </div>
            <div className='particularcourse'>
                {toggle === 'programming' && (
                    <div className='coursename'>
                        <div onClick={() => handleLinkClick('/courses/java')}>
                            <img src={java} alt="" />
                            <p> Core Java</p>
                        </div>
                        <div onClick={() => handleLinkClick('/courses/python')}>
                            <img src={python} alt="" />
                            <p>Core Python</p>
                        </div>                        
                        <div>
                            <img src={c} alt="" />
                            <p>C# (C Sharp)</p>
                        </div>                      
                    </div>
                )}
                {toggle === 'fullstack' && (
                    <div className="coursename">
                        <div>
                            <img src={jfs} alt="" height={100} width={100}/>
                            <p>Java Full stack</p>
                        </div>
                        <div>
                            <img src={pfs} alt="" height={100} width={100}/>
                            <p>Python Full stack</p>
                        </div>
                        
                    </div>
                )}
                {toggle === 'dataAnalytics' && (
                    <div className='coursename'>
                        <div>
                            <img src={da} alt="" />
                            <p>Data Analytics</p>
                        </div>
                        <div>
                            <img src={pb} alt="" />
                            <p>PowerBI</p>
                        </div>
                        <div>
                            <img src={ta} alt="" />
                            <p>Tableau</p>
                        </div>
                        
                    </div>
                )
                }
                {toggle === 'cloud' && (
                    <div className="coursename">
                        <div>
                            <img src={ad} alt="" />
                            <p>AWS DevOps</p>
                        </div>
                        <div>
                            <img src={aws} alt="" />
                            <p>AWS</p>
                        </div>
                        <div>
                            <img src={af} alt="" />
                            <p>azure fundamental</p>
                        </div>
                        <div>
                            <img src={af} alt="" />
                            <p>Azure DevOps</p>
                        </div>
                        <div>
                            <img src={k} alt="" />
                            <p>Kubernates</p>
                        </div>
                        <div>
                            <img src={gc} alt="" />
                            <p>Google Cloud</p>
                        </div>
                        <div>
                            <img src={dev} alt="" />
                            <p>DevOps</p>
                        </div>
                        <div>
                            <img src={os} alt="" />
                            <p>OpenStack</p>
                        </div>
                        <div>
                            <img src={sfa} alt="" />
                            <p>Salesforce Admin</p>
                        </div>
                        <div>
                            <img src={sfd} alt="" />
                            <p>Salesforce Development</p>
                        </div>
                        <div>
                            <img src={sfa} alt="" />
                            <p>Salesforce</p>
                        </div>
                    </div>

                   
                )}
                {toggle === 'ItSecurity' && (
                    <div className="coursename">
                        <div>
                            <img src={cs} alt="" />
                            <p>cyber security</p>
                        </div>
                        <div>
                            <img src={dsc} alt="" />
                            <p>DevSecOps</p>
                        </div>
                    </div>
                ) }
                { toggle === 'web' && (
                    <div className="coursename">
                        <div>
                            <img src={html} alt="" />
                            <p>HTML</p>
                        </div>
                        <div>
                            <img src={css} alt="" />
                            <p style={{marginLeft:'1rem'}}>CSS</p>
                        </div>
                        <div>
                            <img src={js} alt="" />
                            <p>Javascript</p>
                        </div>
                        <div>
                            <img src={wp} alt="" />
                            <p>WordPress</p>
                        </div>
                        <div>
                            <img src={re} alt="" />
                            <p>ReactJS</p>
                        </div>
                        <div>
                            <img src={aj} alt="" />
                            <p>Angular JS</p>
                        </div>
                    </div>
                )}
                {toggle === 'ui' && (
                    <div className="coursename">
                        <div>
                            <img src={fi} alt="" />
                            <p>Figma</p>
                        </div>
                        <div>
                            <img src={ax} alt="" />
                            <p>Adobe XD</p>
                        </div>
                        <div>
                            <img src={ps} alt="" />
                            <p>Photoshop</p>
                        </div>
                    </div>
                )}
                {toggle === 'dd' && (
                    <div className="coursename">
                        <div>
                            <img src={od} alt="" />
                            <p>Oracle</p>
                        </div>
                        <div>
                            <img src={md} alt="" />
                            <p>MongoDB</p>
                        </div>
                        <div>
                            <img src={ms} alt="" />
                            <p>MYSQL</p>
                        </div>
                    </div>
                )}
                {toggle === 'mobile' && (
                    <div className="coursename">
                        <div>
                            <img src={fl} alt="" />
                            <p>Flutter</p>
                        </div>
                        <div>
                            <img src={ic} alt="" />
                            <p>Ionic</p>
                        </div>
                        <div>
                            <img src={ios} alt="" />
                            <p>iOS</p>
                        </div>
                        <div>
                            <img src={and} alt="" />
                            <p>Android</p>
                        </div>
                        <div>
                            <img src={xa} alt="" height={48} width={50}/>
                            <p>Xamarin</p>
                        </div>
                        <div>
                            <img src={rn} alt="" />
                            <p>React Native</p>
                        </div>
                    </div>
                )}
                {toggle === 'st' && (
                    <div className="coursename">
                    <div>
                        <img src={sel} alt="" />
                        <p>Selenium</p>
                    </div>
                    <div>
                        <img src={mt} alt="" height={48} width={50}/>
                        <p>Manual Testing</p>
                    </div>
                    <div>
                        <img src={lr} alt="" height={48} width={50}/>
                        <p>LoadRunner</p>
                    </div>
                    <div>
                        <img src={cy} alt="" height={48} width={50}/>
                        <p>Cypress</p>
                    </div>


                </div>
                )}
                {toggle === 'rpa' && (
                    <div className="coursename">
                        <div>
                            <img src={uip} alt="" height={48} width={50} />
                            <p>UiPath</p>
                        </div>
                        <div>
                            <img src={bp} alt="" height={48} width={50}/>
                            <p>BluePrism</p>
                        </div>
                        <div>
                            <img src={aa} alt="" height={48} width={50}/>
                            <p>Automation Anywhere</p>
                        </div>
                        <div>
                            <img src={wf} alt="" height={48} width={50}/>
                            <p>WorkFusion</p>
                        </div>
                        <div>
                            <img src={op} alt="" height={48} width={50}/>
                            <p>OpenSpan</p>
                        </div>
                    </div>
                )}
                {toggle === 'Ml' && (
                    <div className="coursename">
                        <div>
                            <img src={MATLAB} alt="" />
                            <p>MATLAB</p>
                        </div>
                        <div>
                            <img src={IoT} alt="" height={48} width={50}/>
                            <p>IoT + Python</p>
                        </div>
                        <div>
                            <img src={es} alt="" height={48} width={50}/>
                            <p>Embedded Systems</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Courses;
