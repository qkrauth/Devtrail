import React from "react";
import './ResourceScreen.css';

const ResourceScreen = () => {
    return (
        <div className="resource-container">
            <div className="resource-intro">
                <h2>Resources</h2>
                <div className="passage">
                    <p>In the world of content creation, particularly when it comes to breaking into the tech industry, there's an overwhelming amount of fluff. Many resources promise quick success but often lack depth and practicality. To truly stand out, you need access to curated reliable information that goes beyond surface level advice. Here, I've gathered some resources that I believe will genuinely help you build a solid foundation and advance your career in technology.
                    </p>
                </div>
            </div>
            <div className="video-container">
                <h2>Videos</h2>
                <div className="video">
                    <h4>I became a SOFTWARE ENGINEER at 30 - fresh start at Microsoft</h4>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/-1YZChVdKy0" 
                        title="YouTube video player 3" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="video">
                    <h4>How I Would Become a Web Developer in 6 Months | Legit Step By Step Tutorial</h4>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/vB4bSDznwgM" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="video">
                    <h4>I Failed as a Self-Taught Software Engineer and Bootcamp Grad</h4>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/MF1QSEzAeu8" 
                        title="YouTube video player 2" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
            <div className="article-container">
                <h2>Creators & Articles</h2>
                <div className="passage">
                    <p>Here is some valuable information from senior-level engineers. Learning from experienced professionals can provide deep insights into industry best practices and real world problem solving strategies. Such knowledge is crucial for career growth and staying updated with the latest trends and technologies.</p>
                </div>
                <div className="article">
                    <h4>Zach Wilson</h4>
                    <p><a href="https://blog.dataengineer.io/" target="_blank" rel="noopener noreferrer" >https://blog.dataengineer.io/</a></p>
                </div>
                <div className="article">
                    <h4>Ryan Peterman</h4>
                    <p><a href="https://www.developing.dev/" target="_blank" rel="noopener noreferrer" >https://www.developing.dev/</a></p>
                </div>
            </div>
            <div className="creators">
                <h2>More YouTube Creators</h2>
                <ul className="creator-list">
                    <li>NeetCodeIO</li>
                    <li>KJ Hardict</li>
                    <li>Engineering with Utsav</li>
                    <li>Rahul Pandey</li>
                    <li>Josh Madakor</li>
                    <li>Antonella</li>
                    <li>CalculusCoder</li>
                    <li>Kun the Engineer</li>
                    <li>Lily Cameron</li>
                    <li>Chris Sean</li>
                    <li>Bukola</li>
                </ul>
                <h2>More TikTok Creators</h2>
                <ul className="creator-list">
                    <li>Ajay McCandless</li>
                    <li>HigherUpWellness</li>
                    <li>Baxate</li>
                    <li>CodeWithFrank</li>
                </ul>
            </div>
        </div>
    );
};

export default ResourceScreen;
