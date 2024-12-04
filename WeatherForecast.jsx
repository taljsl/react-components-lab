import './WeatherForecast.css'







const Weather = ({day, img, imgAlt, conditions, time}) =>{
    return(
        <div className = 'weather'>
        <h2>{day}</h2>
          <img src={img} alt={imgAlt} />
          <p>
            <span>Conditions: </span>{conditions}
          </p>
          <p>
            <span>Time: </span>{time}
          </p>
          </div>
    )
}
export default Weather








// const FounderListItem = ({ name, title, credential }) => {
//     return (
//       <li>
//         <h3>Hello, I'm {name} the {title}!</h3>
//         <p>{credential}</p>
//       </li>
//     );
//   };
//     export default FounderListItem;