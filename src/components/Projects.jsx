import { Github, Link } from "lucide-react";
import netSim from "../assets/netSim.jpg";
import webSPA from "../assets/webSPA.png"
import cloudSec from "../assets/cloudSec.jpg"

const projects = [
    {
        id: 1,
        img: netSim,
        descriptor: "Systems",
        title: "Network Simulation",
        description: "Designed and implemented DV/LS routing simulations, a Distributed Hash Table (DHT), and windowed packet transfer for packet-switched networks.",
        tags: ["Python", "Networking Algorithms"],
    },
    {
        id: 2,
        img: webSPA,
        descriptor: "Web Development",
        title: "Cabinets Web SPA",
        description: "A React/TypeScript Single Page Application (20+ routes) with modular UI, responsive grids, lazy-loaded media, and automated asset labeling/ordering.",
        tags: ["React", "TypeScript", "React Router", "Tailwind CSS"],
    },
    {
        id: 3,
        img: cloudSec,
        descriptor: "Cloud Security",
        title: "Cloud Security Policy Automation",
        description: "Automated JSON-based analysis workflows, validated 80+ AWS RQL policies in sandbox environments, and created onboarding resources for cloud security engineers.",
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Feautured Projects
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    From Cloud Security to Systems Simulation, explore the breadth of my projects.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover transition-all duration-300
                            hover:backdrop-blur-md hover:bg-white/5 hover:border hover:border-white/60 hover:ring-1 hover:ring-white/80 hover:shadow-lg">
                            <div className="h-48 overflow-hidden relative">
                                <img src={project.img} alt={project.title}  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                                <span className="absolute bottom-2 right-2 bg-primary/60 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow">
                                    {project.descriptor} </span>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary border text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            

                            <h3 className="text-xl font-semibold mb-3">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                        </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/KarmaMS">
                        GitHub <Github />
                    </a>

                </div>

            </div>

        </section>
    )
}