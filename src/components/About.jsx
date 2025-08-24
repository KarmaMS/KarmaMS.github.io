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
                        <a href="" className="px-6 py-2 rounded-full border border-primary text-white hover:bg-primary/10 transition-colors duration-300">
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
                                    <li>Developed 80+ custom AWS RQL policies (IAM, S3, EC2, KMS, etc.) to enforce MFA, least-privilege, and encryption standards.</li>
                                    <li>Built and tested sandbox environments with misconfigurations to validate policies (&gt;90% detection accuracy); automated JSON analysis to reduce policy development time by 40%.</li>
                                    <li>Led weekly AWS &amp; RQL training sessions; created internal “RQL Cheatsheet” that halved onboarding time.</li>
                                    <li>Reverse-engineered Azure APIs to enable Prisma Cloud CSPM; documented runbooks and built 33 custom policies with remediation guidance.</li>
                                    <li>Mapped CSA CCM controls to Azure services over six agile sprints; presented findings to Morgan Stanley’s cloud security team.</li>
                                    <li>Coordinated with Palo Alto Networks to resolve Azure API ingestion issues, achieving full policy coverage.</li>
                                    <li>Authored 50+ pages of technical documentation; translated RQL logic into actionable insights, reducing support queries by 40%.</li>
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
                                <h1 className="font-semibold text-left">Cloud Security @ Johri Technologies</h1>
                                <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1 text-left">
                                    <li>Led security audits for 5 SaaS vendors; tailored assessment templates covering identity, encryption, IR, and compliance.</li>
                                    <li>Developed interview frameworks and analyzed stakeholder responses; documented 40+ control gaps with risk classification, and built client-facing dashboards.</li>
                                    <li>Delivered detailed audit reports with remediation plans; improved audit closure rate by 30% through structured follow-ups.</li>
                                    <li>Standardized QA processes and streamlined client communications, cutting coordination overhead by 50%.</li>
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