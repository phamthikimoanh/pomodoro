import { connect } from "react-redux";
import History from "../../components/History"
const mapStateToProps = state => {
    console.log("isToday", state.timer.isToday);
  
    return {
      histories: state.histories.histories,
      isToday: state.timer.isToday
    };
  };
  export default connect(mapStateToProps)(History);