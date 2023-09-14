import { AddClientModal } from "../Components/add-client-modal"
import { Projects } from "../Components/projects"
import { Clients } from "../Components/clients"
import { AddProjectModal } from "../Components/add-project-modal"

export const Home = () => {
    return (
        <div>
            <div className="home-row">
                <AddClientModal />
                <AddProjectModal />
            </div>
            <Projects />
            <Clients />
        </div>
    )
}