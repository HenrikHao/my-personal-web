import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        try {
            // Replace this with your actual form submission logic
            await new Promise(resolve => setTimeout(resolve, 1500));

            setSubmitStatus({
                success: true,
                message: "Thanks for reaching out! I'll get back to you soon."
            });

            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            setSubmitStatus({
                success: false,
                message: "Something went wrong. Please try again later."
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const socialLinks = [
        {
            name: "GitHub",
            icon: <FaGithub size={24} />,
            url: "https://github.com/HenrikHao",
            color: "hover:text-gray-400"
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin size={24} />,
            url: "https://www.linkedin.com/in/henrik-hao/",
            color: "hover:text-blue-500"
        },
        {
            name: "Email",
            icon: <FaEnvelope size={24} />,
            url: "mailto:henrikhao@outlook.com",
            color: "hover:text-red-400"
        }
    ];

    return (
        <section id="contact" className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-32 2xl:px-48">
                <div className="flex items-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-lightfont font-space-mono">
                        <span className="text-lightgreen">04.</span> Contact
                    </h2>
                    <div className="h-px bg-gray-600 flex-grow ml-4"></div>
                </div>

                <div className="max-w-4xl mx-auto mt-12">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-lightfont mb-4">Get In Touch</h3>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            I'm currently open to new opportunities and collaborations. Whether you have a question,
                            a project idea, or just want to say hello, feel free to reach out!
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Contact Form */}
                        <div className="lg:w-2/3">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-lightfont mb-2 font-space-mono">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-darkbg border border-gray-600 rounded-md py-2 px-4 text-lightfont focus:outline-none focus:border-lightgreen transition-colors duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-lightfont mb-2 font-space-mono">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-darkbg border border-gray-600 rounded-md py-2 px-4 text-lightfont focus:outline-none focus:border-lightgreen transition-colors duration-300"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-lightfont mb-2 font-space-mono">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-darkbg border border-gray-600 rounded-md py-2 px-4 text-lightfont focus:outline-none focus:border-lightgreen transition-colors duration-300"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-lightfont mb-2 font-space-mono">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        className="w-full bg-darkbg border border-gray-600 rounded-md py-2 px-4 text-lightfont focus:outline-none focus:border-lightgreen transition-colors duration-300"
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="text-lightgreen border border-lightgreen rounded px-6 py-3 font-space-mono hover:bg-lightgreen/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>

                                {submitStatus && (
                                    <div className={`mt-4 p-3 rounded-md ${submitStatus.success ? 'bg-green-900/20 text-green-400' : 'bg-red-900/20 text-red-400'}`}>
                                        {submitStatus.message}
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Social Links */}
                        <div className="lg:w-1/3">
                            <div className="bg-lightgreen/5 rounded-md border border-lightgreen/20 p-6 hover:border-lightgreen/50 transition-all duration-300">
                                <h4 className="text-lightgreen font-space-mono text-lg mb-6 text-center">
                                    Connect With Me
                                </h4>
                                <div className="space-y-6">
                                    {socialLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 text-gray-300 hover:text-lightgreen transition-colors duration-300"
                                        >
                                            <div className={`text-lightgreen ${link.color}`}>
                                                {link.icon}
                                            </div>
                                            <span>{link.name}</span>
                                        </a>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-700">
                                    <p className="text-gray-300 text-center">
                                        Based in Melbourne, Australia
                                    </p>
                                    <p className="text-gray-400 text-sm text-center mt-2">
                                        Available for remote opportunities worldwide
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 