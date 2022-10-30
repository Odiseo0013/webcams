
export const WebcamItem = ({ title, region, url, player }) => {
  return (
    <div className={`polaroidContenedor`}>
        <embed src={player} />
        <a href={url}> <span className="textoPolaroid">{title}</span></a> <span className="textoRegion">{region}</span>  
    </div>
  )
}
