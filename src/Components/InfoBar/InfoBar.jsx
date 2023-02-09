import "./InfoBar.scss"
import "../../assets/_variables.scss"

const InfoBar = () => {



    return (
    <div className="info-bar-container">
      <div className="info-bar">
        <div id="desc-title">Want more recipes?</div>
        <div id="desc-body">Subscribe here and we'll send you an email as new recipes are published!</div>
        <form className="form-container">
            Name: <input className="input-box" type="text" placeholder="First name"/>
            <input className="input-box" type="text" placeholder="Last name"/>
            Email: <input className="input-box" placeholder="Email Address" type="email"/>
            <input className="submit-button" type="submit" value="Submit"/>
        </form>
      </div>


    </div>
    )
}

export default InfoBar;