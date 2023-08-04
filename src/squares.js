function Squares(props){
    return(<><button className="square" onClick={props.handleclick}>{props.squarevalue}</button></>)
}
export default Squares;