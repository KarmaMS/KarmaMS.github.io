import { Code, GraduationCap, LucideBriefcase } from "lucide-react"

export const About = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span>About Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <span className="flex justify-center space-x-4">
                    <GraduationCap size={35} className="text-primary" />
                    </span>
                    <h3 className="text-2xl font-semibold flex justify-center mb-0.5">  
                        <span>Lahore University of Management and Sciences</span>   
                    </h3>
                    <p className="text-center italic text-muted-foreground mb-3">
                        Expected Graduation - June 2027
                    </p>

                    <p className="text-muted-foreground siz"> 
                        Computer Science
                    </p>

                    <p className="text-muted foreground">
                        I'm passionate about cybersecurity, cloud security, and systems engineering, with experience in policy automation, audits, and scalable software. This site highlights my projects and thoughts at the intersection of security and software.
                    </p>    

                    <div className="flex flex-col sm:flex-row gap-4 pt4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>
                        <a 
                            href="/Maaz_Shahid_Resume.pdf" 
                            download="Maaz_Shahid_Resume.pdf"
                            className="px-6 py-2 rounded-full border border-primary text-white hover:bg-primary/10 transition-colors duration-300"
                        >
                            Download Resume
                        </a>
                    </div>

                </div>
                
            

                <div className="grid grid-cols-1 gap-6">

                    

                    

                   <span className="flex justify-center space-x-4">
                    <LucideBriefcase size={35} className="text-primary" />
                    </span>
                    <h1>Experience</h1>
                    <div className="gradient-border p-6 card-hover">
                        
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6"/>
                            </div>

                            <div>
                                <h1 className="font-semibold text-left">Cloud Security @ Johri Technologies</h1>
                                <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1 text-left">
                                    <li>Developed 80+ AWS RQL policies to enforce security best practices (MFA, least-privilege, encryption).</li>
                                    <li>Built sandbox environments to validate policies with more than 90% detection accuracy.</li>
                                    <li>Automated JSON workflows, reducing policy development time by 40%.</li>
                                    <li>Reverse-engineered Azure APIs to enable Prisma Cloud CSPM with 30+ custom policies.</li>
                                    <li>Presented CSA CCM-Azure mapping to Morgan Stanley's cloud security team.</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6"/>
                            </div>

                            <div>
                                <h1 className="font-semibold text-left">SaaS Security Auditor @ Johri Technologies</h1>
                                <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1 text-left">
                                    <li>Led security audits for 5 SaaS vendors, covering identity, encryption, IR, and compliance.</li>
                                    <li>Identified 40+ control gaps and built client-facing dashboards with risk classifications.</li>
                                    <li>Delivered audit reports with remediation plans, improving closure rate by 30%.</li>
                                    <li>Streamlined QA processes and client communications, cutting overhead by 50%.</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    
    )
}