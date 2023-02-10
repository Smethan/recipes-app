

const Welcome = (props) => {

    const { user } = props;
    const currentHour = new Date().getHours();
    let greetingTime = "Morning!";
  
    if (currentHour >= 12) {
      greetingTime = "Afternoon!";
    }
  
    if (currentHour >= 18) {
      greetingTime = "Evening!";
    }

    return (
        <h1 className="greeting">
        Good {greetingTime} <br /> {user.firstName} {user.lastName}
        </h1>     
    )
}

export default Welcome;
