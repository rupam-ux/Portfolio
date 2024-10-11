"use client"
import React from 'react'
import Typed from 'typed.js';
import { color, motion, wrap } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase-config/firebase-config';
import { addDoc } from 'firebase/firestore';
export default function Main() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            console.log(window.innerWidth);
        }
    }, []);
    const el = React.useRef(null);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Full stack web developer', 'Python developer', 'Blog writer', 'Chess player'],
            typeSpeed: 200,
        });

        return () => {
            typed.destroy();
        };
    }, []);
    const list = [
        {
            title: 'A basic music app.',
            s1: 'Javascript',
            s2: 'Html',
            s3: 'CSS',
            img: '/image/music.png',
            url: 'https://codewithrupam.github.io/musicPlayer/'
        },
        {
            title: 'Environmental awareness website.',
            s1: 'React js',
            s2: 'Bootstarp',
            s3: 'Firebase',
            img: '/image/sdg.png',
            url: 'https://admin2-d8798.web.app'
        },
        {
            title: 'Modern portfolio website.',
            s1: 'Next js',
            s2: 'Framer',
            s3: 'Firebase',
            img: '/image/portfolio.png'
        }
    ]
    const [article, setArticles] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const querySnapshot = await getDocs(collection(db, "articles"));
            const usersList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setArticles(usersList);
        };

        fetchUsers();
    }, []);
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [message, setMessage] = useState("");
    let nameChange = (event) => {
        setName(event.target.value)
    }
    let emailChange = (event) => {
        setEmail(event.target.value)
    }
    let messageChange = (event) => {
        setMessage(event.target.value)
    }
    const send = async () => {
        if (name.length < 0 || name.length < 4 && email.length < 0 || email.length < 4 && message.length < 0 || message.length < 4) {
            alert("please re-check the form")
        }
        else {
            const docRef = await addDoc(collection(db, "users"), {
                name: name,
                email: email,
                message: message
            });
            alert("Your message was successfully sent")
            setName("")
            setEmail("")
            setMessage("")
        }
    }
    return (
        <div className="all" style={{ cursor: 'pointer' }}>
            <br />
            <motion.nav initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}>
                <ul>
                    <a href="#home"><li>Home</li></a>
                    <a href="#skill"><li>Skills</li></a>
                    <a href="#project"><li>Projects</li></a>
                    <a href="#contact"><li>Contact</li></a>
                </ul>
            </motion.nav>
            <br /><br />
            <motion.div id="home" initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: 'easeOut' }} className="main_content">
                <div className="main2" style={{ height: '280px' }}>
                    <div className="image">
                        <img src="https://img.freepik.com/premium-photo/program-designer-developer-ai-generative_199064-2134.jpg" alt="" />
                    </div>
                </div>
                <div className="writing">
                    <h1>Hello It is Rupam</h1>
                    <h1>And I am a 14 year old: <span ref={el} style={{ color: 'rgb(0, 255, 191)' }} /></h1>
                    <br /><br />
                    <div className="button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <a href="#project">
                            <motion.button whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }} style={{ backgroundColor: 'rgb(0, 255, 191)', height: '48px', width: '140px', borderRadius: '50px', color: 'transparent' }}>Project</motion.button>
                        </a>
                        <a href="#article">
                            <motion.button whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }} style={{ backgroundColor: 'white', height: '50px', width: '140px', borderRadius: '50px', color: 'transparent', border: '2px solid black', margin: '0px 20px' }}>Article</motion.button>
                        </a>
                    </div>
                </div>
                <br /><br /><br /><br />
            </motion.div>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: '40px 0px' }}>
                <motion.div className="about" ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 2, ease: 'easeOut' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="about_heading" style={{ display: 'flex' }}><h1 style={{ color: 'white' }}>About </h1><h1 style={{ color: 'rgb(0, 255, 191)', margin: '0px 5px' }}>Me</h1></div>
                    </div>
                    <br /><br />
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="about_writing">Hey there! I am a 14-year-old passionate programmer with a knack for web development and UI/UX design. I love building intuitive and visually appealing websites that deliver great user experiences. My journey with programming started early, and over time, I’ve developed a strong expertise in creating functional and responsive web solutions.
                            When I am not coding, you will likely find me playing chess, a game I enjoy for its strategic depth and mental challenges. I also love to write articles on tech, design, and other topics that spark my interest—it is my creative outlet and a hobby that keeps me learning new things.
                            If you are looking for someone who brings energy, creativity, and technical skills to projects, feel free to explore my portfolio or get in touch!</div>
                    </div>
                </motion.div>
                <br /><br /><br />
                <motion.div className="skills" id="skill">
                    <h1>Skills</h1>
                    <br /><br />
                    <div className="main_skills">
                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                            <img src="/image/html.png" alt="" />
                            <img src="/image/css.png" alt="" />
                            <img src="/image/javascript.png" alt="" />
                            <img src="/image/react.png" alt="" />
                            <img src="/image/next.png" alt="" />
                            <img src="/image/firebase.png" alt="" />
                            <img src="/image/app_write.png" alt="" />
                            <img src="/image/python.png" alt="" />
                            <img src="/image/node.png" alt="" />
                            <img src="/image/express.png" alt="" />
                            <img src="/image/tailwind.png" alt="" />
                            <img src="/image/framer.png" alt="" />
                            <img src="/image/mongo.png" alt="" />
                        </div>
                    </div>
                </motion.div>
            </div>
            <br /><br /><br />
            <section id="project">
                <div className="project" id="project">
                    <h1>My Projects</h1>
                    <br /><br />
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="main_project" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                            {list.map((event) => (
                                <>
                                    <motion.div whileHover={{ scale: 1.1 }} className="project_card">
                                        <img src={event.img} alt="" />
                                        <h2 style={{ height: '30px' }}>{event.title}</h2>
                                        <br />
                                        <br /><br />
                                        <div className="elements">
                                            <p className="l">{event.s1}</p>
                                            <p className="l">{event.s2}</p>
                                            <p className="l">{event.s3}</p>
                                        </div>
                                        <br />
                                        <form action={event.url} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="projectButton">
                                                Check out
                                            </motion.button>
                                        </form>
                                    </motion.div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <br /><br /><br /><br /><br />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="article" id="article">
                    <h1>My Articles</h1>
                    <br /><br /><br />
                    <div className="articles">
                        {article.map(event => (
                            <>
                                <div className="article_box">
                                    <h2 style={{ height: '20%' }}>{event.title}</h2>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <hr style={{ width: '90%', height: '2px', backgroundColor: 'white' }} />
                                    </div>
                                    <p style={{ height: '30%' }}>{event.description}</p>
                                    <form action={event.url}>
                                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="article_button">Check out</motion.button>
                                    </form>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="contact" id="contact">
                <div className="form">
                    <section class="text-gray-400 bg-gray-900 body-font relative">
                        <div class="container px-5 py-24 mx-auto">
                            <div class="flex flex-col text-center w-full mb-12">
                                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Us</h1>
                                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Write your message here</p>
                            </div>
                            <div class="lg:w-1/2 md:w-2/3 mx-auto">
                                <div class="flex flex-wrap -m-2">
                                    <div class="p-2 w-1/2">
                                        <div class="relative">
                                            <label for="name" class="leading-7 text-sm text-gray-400">Name</label>
                                            <input type="text" id="name" name="name" value={name} onChange={nameChange} class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div class="p-2 w-1/2">
                                        <div class="relative">
                                            <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
                                            <input type="email" id="email" name="email" value={email} onChange={emailChange} class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div class="p-2 w-full">
                                        <div class="relative">
                                            <label for="message" class="leading-7 text-sm text-gray-400">Message</label>
                                            <textarea id="message" name="message" value={message} onChange={messageChange} class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                        </div>
                                    </div>
                                    <div class="p-2 w-full">
                                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="article_button" onClick={send}>Send📩</motion.button>
                                    </div>
                                    <div class="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">

                                        <a class="text-indigo-400">rupammandal204@gmail.com</a>
                                        <br /><br /><br />
                                        <span class="inline-flex">
                                            <a class="text-gray-500">
                                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a href="https://x.com/rupammandal68" class="ml-4 text-gray-500">
                                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a class="ml-4 text-gray-500">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                                </svg>
                                            </a>
                                            <a class="ml-4 text-gray-500">
                                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div >
        </div >
    )
}
