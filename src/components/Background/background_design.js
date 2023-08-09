import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; 


const BackgroundDesign = ( {particalConfig} ) => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div>
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particalConfig}
        />
        </div>
    )
}

export default BackgroundDesign