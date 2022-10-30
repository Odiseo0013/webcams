import { useFetchCams } from "../../hooks/useFetchCams";
import { WebcamItem } from "./WebcamItem";

export const WebcamGrid = ({category }) => {
    
    const { cams, isLoading, paises } = useFetchCams (category);
    
    let mostrar = '';

    function vaciar()
    {
        mostrar = cams.length === 0 ? mostrar = 'None' : mostrar = 'block';
        return (mostrar);
     }


  return (
    <>
        {
            isLoading && ( <h2>Cargando...</h2> ) 
        }
        {
            cams.length === 0 
            ? <div className={`error mostrar${vaciar()}`}>Lo sentimos, no hay camaras web para mostrar en ese pais.</div> 
            : <h3 className={`titular mostrar${vaciar()}`}>Las mejores Webcams en : {paises} </h3>
        }

        <div className={`cam-grid mostrar${vaciar()}`}>
            {
                cams.map( ( cams ) => (
                    <WebcamItem key={cams.id} {...cams}  />
                ))
            }
        </div>
    </>
  )
}
